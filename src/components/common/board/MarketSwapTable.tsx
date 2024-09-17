"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface TableData {
    time: string;
    type: string;
    quantity: number;
    value: number;
    price_usd: number;
    price_gtd: number;
    maker: string;
}
interface MarketSwapTableProps {
    data: TableData[];
}
const pageButDisable = "w-[54px] h-[24px] rounded-[4px] bg-[#0d131c] text-[12px] text-white opacity-70";
const pageButEnable = "w-[54px] h-[24px] rounded-[4px] bg-[#181e29] text-[12px]";
const pageSize = 8;

const MarketSwapTable: React.FC<MarketSwapTableProps> = ({ data }) => {
    const [activeRow, setActiveRow] = useState(-1);
    const [selectedRow, setSelectedRow] = useState(-1);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(-1);
    const [startIdx, setStartIdx] = useState(0);
    const [endIdx, setEndIdx] = useState(0);

    const updateStartEndIdx = (current: number) => {
        let total;
        if (totalCount == -1) {
            total = data?.length > 0 ? data.length : 0;
        }
        else {
            total = totalCount;
        }

        if (total) {
            let start = (current - 1) * pageSize;
            let end = (start + pageSize) < total ? start + pageSize : total;
            setStartIdx(start);
            setEndIdx(end);
        }
    }
    const handlePagePrev = () => {
        if (currentPage > 1) {
            updateStartEndIdx(currentPage - 1);
            setCurrentPage(currentPage - 1);
        }
    }
    const handlePageNext = () => {
        if (currentPage * pageSize < totalCount) {
            updateStartEndIdx(currentPage + 1);
            setCurrentPage(currentPage + 1);
        }
    }
    useEffect(() => {
        let count = data?.length > 0 ? data.length : 0;
        setTotalCount(count);
        updateStartEndIdx(1);
    }, []);
    return (
        <div className="relative h-full md:w-[400px] lg:w-full overflow-x-auto">
            <div className="">
                <table className="text-[12px] mt-[10px] w-full">
                    <thead>
                        <tr className="text-[#b2b3b8] bg-[#121721] rounded-[4px] h-[25px]">
                            <th className="pl-[10px] text-left">Time</th>
                            <th className="text-left">Type</th>
                            <th className="text-left">Quantity</th>
                            <th className="text-left">Value(USD)</th>
                            <th className="text-left">Price(USD)</th>
                            <th className="text-left">Price(GTU)</th>
                            <th className="text-left">Maker</th>
                            <th className="text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length > 0 && (
                            <>
                                {data.slice(startIdx, endIdx).map((item, index) => (
                                    <tr key={index} onMouseOver={() => setActiveRow(index)} onMouseLeave={() => { setActiveRow(-1) }} onClick={() => setSelectedRow(index)}
                                        className={`border-b-[1px] border-[#131e38] h-[32px] text-[#3af2a6] ${item.type == 'Sell' ? "text-[#ed7b61]" : "text-[#3af2a6]"} ${(activeRow == index || selectedRow == index) ? "bg-[#121721]" : ""}`}>
                                        <td className="pl-[10px]">{item.time}</td>
                                        <td>{item.type}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.value}</td>
                                        <td>{item.price_usd}</td>
                                        <td>{item.price_gtd}</td>
                                        <td>{item.maker}</td>
                                        <td className="flex flex-row gap-[7.5px] items-center mt-[2px]">
                                            <Link href="/">
                                                <Image src="/svgs/coin/slav.svg" alt="slov" width={24} height={24} />
                                            </Link>
                                            <Link href="/">
                                                <Image src="/svgs/market/fish2right.svg" alt="slov" width={24} height={24} />
                                            </Link>
                                            <Link href="/">
                                                <Image src="/svgs/market/filter.svg" alt="slov" width={24} height={24} />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        )}
                    </tbody>
                </table>
                {!(data?.length > 0) && (
                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <div className="flex flex-col items-center">
                            <div className="w-[74px] h-[74px] rounded-full bg-[#121721]"></div>
                            <div className="text-[#B4B4B4] text-[12px] mt-[10px]">You have not traded<br />this pair in the past</div>
                        </div>
                    </div>
                )}
                {data?.length > 0 && (
                    <div className="w-full my-[20px] justify-center">
                        <div className="flex flex-row gap-[17px] justify-center items-center">
                            <label className="text-[12px]">{startIdx + 1}-{endIdx} of {totalCount}</label>
                            <button className={startIdx < pageSize ? pageButDisable : pageButEnable} onClick={handlePagePrev}>Prev</button>
                            <button className={endIdx === totalCount ? pageButDisable : pageButEnable} onClick={handlePageNext}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default MarketSwapTable;