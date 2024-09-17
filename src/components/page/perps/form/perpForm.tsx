import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import DetailPanel from '@/components/ui/status';
import ConnectModal from "@/components/ui/modal/connect";
import TradeButton from '@/components/ui/button/Trade';
import TokenForm1 from '@/components/ui/form/tokenForm1';
import Button from '@/components/ui/button';
import { useWallet } from '@/contexts/ConnectContext';

const PerpsInputForm: React.FC<{ type: string }> = ({ type }) => {

    const detailItems = [
        { label: 'Entry price', value: '$142,18', state: false },
        { label: 'Liquidation price', value: '-', state: false },
        { label: 'Open fee', value: '(0.06%)0,0006 USD', state: false },
        { label: 'Price impact', value: '-', state: true },
        { label: 'Borrow rate', value: '0.0033% / hr', state: true },
        { label: 'Available liquidity', value: '$2.500.000', state: false },
    ];

    const collateralItems = [
        { label: 'Collateral', value: '--', state: false },
        { label: 'Size in USD', value: '--', state: false },
    ];

    const [fromAmount, setFromAmount] = useState<number>(0);
    const [toAmount, setToAmount] = useState<number>(0);
    const [leverage, setLeverage] = useState<number>(0);
    const [clickedBut, setClickedBut] = useState('long');
    const { isConnected, connectWallet } = useWallet();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const onClickPerpBut = (name: string) => {
        setClickedBut(name);
    }
    const handlePlus = () => {
        setLeverage(leverage + 1);
    }
    const handleMinus = () => {
        setLeverage(leverage - 1);
    }
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleWalletConnect = () => {
        connectWallet();
    };

    return (
        <div className='px-[15px] py-[22px]'>
            <div className="px-[14.7px]">
                <div className="flex flex-row items-center justify-between mb-[40px]">
                    <div>
                        <div className="flex flex-row p-2 space-x-1 h-[48px] bg-primary-default rounded-[16px] border border-[#14181F]">
                            <Button
                                className={`text-[16px] w-[72px] justify-center px-[4px] py-[6px] ${clickedBut === 'long' ? 'bg-[#242F36] text-[#FFB703] font-bold' : 'bg-transparent opacity-[68%]'}`}
                                radius="rounded-[8px]"
                                handleClick={() => onClickPerpBut('long')}
                            >
                                Long
                            </Button>
                            <Button
                                className={`text-[16px] w-[72px] justify-center py-[6px] ${clickedBut === 'short' ? 'bg-[#242F36] text-[#FFB703] font-bold' : 'bg-transparent opacity-[68%]'}`}
                                radius="rounded-[8px]"
                                handleClick={() => onClickPerpBut('short')}
                            >
                                Short
                            </Button>
                        </div>
                    </div>
                </div>

                <TokenForm1
                    amount={fromAmount}
                    onChange={(e: any) => setFromAmount(e.target.value)}
                    label="You are paying"
                    balance="0"
                    state={true}
                />

                <TokenForm1
                    amount={toAmount}
                    onChange={(e: any) => setToAmount(e.target.value)}
                    label="Size of Long"
                    balance="0"
                    state={true}
                />

                <div className=' mt-[16px]'>
                    <div className='mb-[10px] pl-[16px] text-primary-medium'>Leverage</div>
                    <div className={`bg-seconday-default h-[69px] border border-primary-default rounded-[10px] flex flex-row justify-between px-[22px] items-center`}>
                        <div className='flex flex-row'>
                            <button className='w-[48px] h-[32px] text-primary-medium'><RemoveIcon className='text-primary-medium w-[24px] h-[24px]' onClick={handleMinus} /></button>
                            <div className='w-[0px] border border-primary-default h-[26px] mx-2'></div>
                        </div>
                        <div className='text-[18px] font-dmsans text-primary-medium'>{leverage}</div>
                        <div className='flex flex-row'>
                            <div className='w-[0px] border border-primary-default h-[26px] mx-2'></div>
                            <button className='w-[48px] h-[32px] text-primary-medium'><AddIcon className='text-primary-medium w-[24px] h-[24px]' onClick={handlePlus} /></button>
                        </div>
                    </div>
                </div>

                <div className='mt-[16px]'>
                    <DetailPanel items={collateralItems} className="px-[24px] py-[8px] border border-seconday-light space-y-[10px] rounded-[10px]" />
                </div>

                <div className="mt-[32px]">
                    {isConnected ? (
                        <TradeButton className="border text-yellow border-yellow" label="APPROVE" />
                    ) : (
                        <TradeButton className="text-black bg-gradient-blue-dark" label="Connect Wallet" openModal={openModal} />
                    )}
                </div>
                <ConnectModal isOpen={isModalOpen} onClose={closeModal} onConnect={handleWalletConnect} />
            </div>
            <div className='mt-[34px]'>
                <DetailPanel items={detailItems} className="px-[34px] py-[9px] border border-seconday-light space-y-[10px] rounded-[10px]" />
            </div>
        </div>
    );
};

export default PerpsInputForm;
