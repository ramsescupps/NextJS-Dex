"use client";
import React, { useState } from "react";
import ErrorIcon from '@mui/icons-material/Error';
import Button from "@/components/ui/button";
import TradeButton from "../../button/Trade";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onDisconnect: () => void;
}

const DisconConfirmModal: React.FC<ModalProps> = ({ isOpen, onClose, onDisconnect }) => {

    const backgroundStyle = `${isOpen ? '' : 'opacity-0' + ' pointer-events-none'} transition-opacity duration-500`;
    const divStyle = `${isOpen ? '' : 'scale-95'} transition-transform duration-500`;

    const handleConfirm = () => {
        onDisconnect();
        onClose();
    }

    return (
        <div className={`${backgroundStyle} fixed inset-0 flex items-center justify-center z-[1000] bg-black glass-stroke-xl`} onClick={onClose}>
            <div className={`${divStyle} w-[500px] h-[450px] bg-primary-dark rounded-[6px] p-[30px]`} onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-end">
                    <Button
                        className="flex items-center justify-center bg-dark w-[40px] h-[40px] text-[24px]"
                        radius="rounded-1"
                        handleClick={onClose}
                    >
                        &#x2715;
                    </Button>
                </div>
                <div className="flex justify-center"><ErrorIcon className="text-yellow w-[40px] h-[40px]" /></div>
                <div className="mt-[50px] text-center text-[24px] font-bold">Disconnect Wallet</div>
                <div className="mt-[36px] mb-[99px] text-center text-[16px] text-seconday-middle">Are you sure you want to disconnect your wallet?</div>
                <div className="flex flex-row justify-between gap-[20px] px-[30px]">
                    <TradeButton className="text-black bg-gradient-blue-dark" label="DISCONNECT" openModal={handleConfirm} />
                    <TradeButton className="text-cancel border-[1px] border-cancel" label="CANCEL" openModal={onClose} />
                </div>
            </div>
        </div>
    );
};

export default DisconConfirmModal;
