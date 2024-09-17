"use client"
import { useEffect, useRef, useState } from 'react';
import { createChart, IChartApi, UTCTimestamp, Time } from 'lightweight-charts';
import Image from "next/image"
import Select from '@/components/ui/select';

interface Option {
    value: string;
    label: string;
}

interface ChartData {
    time: Time;
    value: number;
}
const tradingPairOptions = [
    { value: "SLAV/ECP", title: "SLAV/ECP" },
    { value: "SLAV/ETH", title: "SLAV/ETH" },
    { value: "SLAV/BSC", title: "SLAV/BSC" },
];
const timeScaleOptions = ['1h', '1d', '1w', 'All'];

const chartOptions = {
    layout: {
        textColor: 'white',
        background: { color: '#070b12' }
    },
    watermark: {
        visible: false,
    },
    grid: {
        vertLines: {
            visible: false,
        },
        horzLines: {
            visible: false,
        }
    },
    rightPriceScale: {
        visible: false,
    },
    leftPriceScale: {
        visible: true,
        textColor: '#afb0b3',
        borderVisible: false,
    },
};

const activeClass = 'w-[35px] h-[20px] lg:w-[40px] lg:h-[20px] rounded-[10px] text-center bg-[#EEB31D] text-black font-bold';
const inActiveClass = 'w-[35px] h-[20px] lg:w-[40px] lg:h-[20px] rounded-[10px] text-[#2C4761] border border-[#2C4761]';

const TradingChart = () => {

    const [tradingPrice, setTradingPrice] = useState<number>(237.762);
    const [selectedButton, setSelectedButton] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const [chartData, setChartData] = useState<ChartData[]>([]);

    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const handleOptionClick = (option: Option) => {
        handleClick(0);
        setSelectedOption(option);
    }

    const removeChart = () => {
        if (containerRef.current) {
            containerRef.current.innerHTML = '';
        }
    };

    const insertChart = () => {
        if (containerRef.current) {
            // if (chartRef.current) {
            //     chartRef.current.remove();
            //     chartRef.current = null;
            // }
            const chart = createChart(containerRef.current, chartOptions);
            chartRef.current = chart;
            const areaSeries = chart.addAreaSeries({
                lineColor: tradingPrice > 500 ? "#3BF1A5" : "rgba(241, 59, 59, 1)",
                topColor: tradingPrice > 500 ? "#3BF1A5" : "rgba(241, 59, 59, 1)",
                bottomColor: 'rgba(0, 0, 0, 0)',
                lineWidth: 2,
                pointMarkersVisible: false,
                crosshairMarkerRadius: 6,
                priceScaleId: 'left',

            });
            chart.timeScale().applyOptions({
                visible: false,
            });
            areaSeries.setData(chartData);
            chart.timeScale().fitContent();

            areaSeries.setMarkers([
                {
                    time: Date.now() as UTCTimestamp,
                    position: 'inBar', // 'aboveBar' or 'belowBar'
                    color: '#EEB31D', // Marker color
                    shape: 'circle', // Marker shape: 'circle', 'square', 'arrowUp', 'arrowDown'
                    text: '', // Optional text label inside the marker
                    size: 1, // Optional size of the marker (1 - small, 2 - medium, 3 - large)
                },
            ]);
        }
    };
    const generateHourData = () => {
        let curTime = Math.floor(Date.now() / 1000) - 59 * 60;
        console.log(Math.floor(Date.now() / 1000) as UTCTimestamp)
        return [...Array(60)].map((_, i) => ({
            time: curTime + i * 60,
            value: Math.floor(Math.random() * 100000) / 100,
        }));
    };
    const generateDayData = () => {
        let curTime = Math.floor(Date.now() / 1000) - 23 * 3600;
        return [...Array(24)].map((_, i) => ({
            time: curTime + i * 3600,
            value: Math.floor(Math.random() * 100000) / 100,
        }));
    };
    const generateWeekData = () => {
        let curTime = Math.floor(Date.now() / 1000) - 24 * 3600 * 7;
        return [...Array(24 * 7)].map((_, i) => ({
            time: curTime + i * 3600,
            value: Math.floor(Math.random() * 100000) / 100,
        }));
    };

    const generateData = (id: number) => {
        if (id == 0) {
            let newData = generateHourData();
            return newData;
        }
        else if (id == 1) {
            let newData = generateDayData();
            return newData;
        }
        else if (id == 2) {
            let newData = generateWeekData();
            return newData;
        }
        else if (id == 3) {
            let newData = generateWeekData();
            return newData;
        }
        return null;
    }
    const handleClick = (id: number) => {
        let newData = generateData(id);
        let realData = newData?.map(item => ({ ...item, time: item.time * 1000 as Time }));
        setChartData(realData || []);
        if (realData && realData.length) {
            setTradingPrice(realData[realData.length - 1].value)
        }
        setSelectedButton(id);
    }

    useEffect(() => {
        handleClick(0);
    }, []);

    const resizeChart = () => {
        if (chartRef.current && containerRef.current) {
            removeChart();
            insertChart();
        }
    };

    useEffect(() => {
        removeChart();
        insertChart();
        const resizeObserver = new ResizeObserver(() => {
            resizeChart();
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
            if (chartRef.current) {
                chartRef.current.remove();
            }
        };
    }, [chartData, tradingPrice]);

    return (
        <div className='pb-[6px] pt-[10px] md:pt-[20px] lg:pt-[30px] pr-[10px] md:pr-[20px] lg:pr-[35.19px] border default-border rounded-[10px]'>
            <div className='pl-[20px] md:pl-[30px] lg:pl-[50px]'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row tradingview-logo'>
                        <div className='flex flex-row -space-x-[10px]'>
                            <Image
                                src={"/svgs/coin/slav.svg"}
                                alt="Logo"
                                width={30}
                                height={30}
                                className="w-[20px] lg:w-[30px]"
                            />
                            <Image
                                src={"/svgs/coin/ecp.svg"}
                                alt="Logo"
                                width={30}
                                height={30}
                                className="w-[20px] lg:w-[30px] z-1"
                            />
                        </div>
                        <div className='pl-[14px]'>
                            <Select
                                options={tradingPairOptions}
                                dropDownStyle="px-[10px] py-[13px] border border-primary-medium rounded-[10px] bg-primary-slight"
                                dropDownnItemStyle="text-[16px] py-[10px] px-[4px]"
                            />
                        </div>
                    </div>
                    <div className='flex flex-row space-x-3'>
                        {[...Array(4)].map((_, idx) => (
                            <button key={`button${idx}`} className={selectedButton == idx ? activeClass : inActiveClass} onClick={() => { handleClick(idx) }}>{timeScaleOptions[idx]}</button>
                        ))}
                    </div>
                </div>
                <div className='mt-[12px] flex flex-row items-center'>
                    <label className='font-poppins font-bold md:text-[14px] xl:text-[20px] 2xl:text-[24px] text-white'>
                        {tradingPrice}
                    </label>
                    <div className='flex flex-row items-center pl-[10px]'>
                        <Image
                            src="/svgs/up.svg"
                            alt="up"
                            width={10}
                            height={10}
                            className="w-[10px] h-[10px]"
                        />
                        <label className='lg:text-[14px] pl-1 font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#00FF85] to-[#81FFC2]'>
                            +{Math.floor(tradingPrice) / 100}%
                        </label>
                    </div>
                </div>
            </div>

            <div className="trading-view-container w-fll h-[234px] md:h-[200px] lg:h-[234px]" ref={containerRef} ></div>
        </div>
    );
}

export default TradingChart;