import React, { useState } from 'react';

import TradeButton from '@/components/ui/button/Trade';
import ArrowIcon from '@/components/ui/arrow';
import TokenForm1 from '@/components/ui/form/tokenForm1';
import Setting from '@/components/ui/setting';
import ConnectModal from "@/components/ui/modal/connect";
import GTU from '@/components/ui/gtu';
import Fee from '@/components/ui/status';
import SpotProps from '@/types/SpotProps';
import { useWallet } from '@/contexts/ConnectContext';
import { SizeCSS } from '@/utils/rwd';

const feeItems = [
    { label: 'Slippage', value: '0%', state: true },
    { label: 'Liquidity Provider Fee', value: '0 GTU', state: true }
];

const TradeForm: React.FC<SpotProps> = ({ title }) => {

    const [fromAmount, setFromAmount] = useState<number>(0);
    const [toAmount, setToAmount] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { isConnected, connectWallet } = useWallet();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleWalletConnect = () => {
        connectWallet();
    };

    return (
        <div className='px-[29.7px] py-[24px]'>
            <div className="flex flex-row items-center justify-between mb-[40px]">
                <Setting title={title} />
            </div>

            <TokenForm1
                amount={fromAmount}
                onChange={(e: any) => setFromAmount(e.target.value)}
                label="From"
                balance="0"
                state={true}
            />

            <div className="flex justify-center mt-[20.12px] mb-[16px]">
                <ArrowIcon />
            </div>

            <TokenForm1
                amount={toAmount}
                onChange={(e: any) => setToAmount(e.target.value)}
                label="To receive"
                balance="0"
                state={false}
            />

            <div className="mt-10">
                {isConnected ? (
                    <TradeButton className="border text-yellow border-yellow" label="APPROVE" />
                ) : (
                    <TradeButton className="text-black bg-gradient-blue-dark" label="Connect Wallet" openModal={openModal} />
                )}
            </div>

            <div className="flex flex-row justify-center mt-10">
                <GTU />
            </div>

            <div className="mt-[42px]">
                <Fee items={feeItems} className={SizeCSS.statusPanel} />
            </div>

            <ConnectModal isOpen={isModalOpen} onClose={closeModal} onConnect={handleWalletConnect} />
        </div>
    );
};

export default TradeForm;
