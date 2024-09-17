"use client";
import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Button from "@/components/ui/button";
import Image from "next/image";
import GTU from "@/components/ui/gtu";
import TradeButton from "../../button/Trade";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onConfirmed: () => void;
}

const ConfirmSwapModal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirmed }) => {

    const handleConfirm = () => {
        onConfirmed();
    }

    const backgroundStyle = `${isOpen ? '' : 'opacity-0' + ' pointer-events-none'} transition-opacity duration-500`;
    const divStyle = `${isOpen ? '' : 'scale-95'} transition-transform duration-500`;
    return (
        <div className={`fixed inset-0 flex ${backgroundStyle} items-center justify-center z-[1000] bg-black glass-stroke-xl`} onClick={onClose}>
            <div className={`transform ${divStyle} w-[600px] h-[650px] bg-primary-dark rounded-[10px] p-[30px]`} onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-row justify-between">
                    <label className="text-[24px] text-white">Confirm Swap</label>
                    <Button
                        className="flex items-center justify-center bg-dark w-10 h-10 text-[24px]"
                        radius="rounded-1"
                        handleClick={onClose}
                    >
                        &#x2715;
                    </Button>
                </div>
                <hr className="border-b-[1px] border-seconday-dark"></hr>
                <div className="flex flex-row justify-between mt-[30px] w-[540px] h-[80px] px-[41.5px] rounded-[10px] border-[0.2px] bg-seconday-default border-seconday-dark">
                    <div className="flex flex-row items-center">
                        <Image src="/svgs/coin/slav.svg" alt="slav" width={40} height={40}></Image>
                        <div className="font-medium text-[24px] ml-[10px]">SLAV</div>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                        <div className="text-[16px]">$567.45</div>
                        <div className="font-bold text-[24px] font-dmsans">2050.786</div>
                    </div>
                </div>
                <div className="pl-[80px]">
                    <ArrowDownwardIcon className=" text-seconday-dark h-[30px]" />
                </div>
                <div className="flex flex-row justify-between w-[540px] h-[80px] px-[41.5px] rounded-[10px] border-[0.2px] bg-seconday-default border-seconday-dark">
                    <div className="flex flex-row items-center">
                        <Image src="/svgs/coin/slav.svg" alt="slav" width={40} height={40}></Image>
                        <div className="font-medium text-[24px] ml-[10px]">SLAV</div>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                        <div className="text-[16px]">$567.45</div>
                        <div className="font-bold text-[24px] font-dmsans">2050.786</div>
                    </div>
                </div>
                <div className="flex flex-row justify-end mt-10">
                    <GTU />
                </div>
                <div className="mt-[22px]">
                    <div className="flex flex-row justify-between mb-[10px]">
                        <span className="text-seconday-dark font-dmsans">Price impact</span>
                        <span className="text-green font-dmsans">0.45%</span>
                    </div>
                    <div className="flex flex-row justify-between mb-[10px]">
                        <span className="text-seconday-dark font-dmsans">LP Fee:</span>
                        <span className="font-dmsans">0.234 CCD%</span>
                    </div>
                    <div className="flex flex-row justify-between mb-[10px]">
                        <span className="text-seconday-dark font-dmsans">Minimum to receive</span>
                        <span className="font-dmsans">2049.89 SLAV</span>
                    </div>
                    <div className="flex flex-row justify-between mb-[10px]">
                        <span className="text-seconday-dark font-dmsans">Transaction cost:</span>
                        <span className="font-dmsans">0.02 SLAV-USDC LP</span>
                    </div>
                    <div className="flex flex-row justify-between mb-[10px]">
                        <span className="text-seconday-dark font-dmsans">Slippage</span>
                        <div>
                            <span className="font-dmsans">1%</span>
                            <BorderColorIcon className="text-seconday-dark" />
                        </div>
                    </div>
                </div>

                <TradeButton className="text-black bg-gradient-blue-dark mt-[31px]" label="CONFIRM SWAP" openModal={handleConfirm} />

            </div>
        </div>
    );
};

export default ConfirmSwapModal;
