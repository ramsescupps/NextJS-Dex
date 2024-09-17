"use client";
import React, { useState } from "react";
import NetworkButton from "./NetworkButton";
import WalletButton from "./WalletButton";
import Button from "@/components/ui/button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onConnect: () => void;
}

const ConnectWalletModal: React.FC<ModalProps> = ({ isOpen, onClose, onConnect }) => {
    const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

    const networks = [
        { src: '/svgs/coin/ccd.svg', alt: 'ccd', label: 'CCD' },
        { src: '/svgs/coin/slav.svg', alt: 'slav', label: 'SLAV' },
        { src: '/svgs/coin/eth.svg', alt: 'eth', label: 'ETH' },
        { src: '/svgs/coin/bsc.svg', alt: 'bsc', label: 'BSC' },
    ];

    const wallets = [
        { src: '/svgs/coin/bictory.svg', alt: 'bictoryConnect', label: 'BictoryConnect1' },
        { src: '/svgs/coin/bictory.svg', alt: 'bictoryConnect', label: 'BictoryConnect2' },
    ];

    const handleNetworkSelect = (label: string) => {
        setSelectedNetwork((prev) => (prev === label ? null : label));
    };

    const handleWalletSelect = (label: string) => {
        setSelectedWallet(label);
        if (selectedNetwork) {
            onConnect();
            onClose();
        }
    };
    const backgroundStyle = `${isOpen ? '' : 'opacity-0' + ' pointer-events-none'} transition-opacity duration-500`;
    const divStyle = `${isOpen ? '' : 'scale-95'} transition-transform duration-500`;
    return (
        <div className={`${backgroundStyle} fixed inset-0 flex items-center justify-center z-[1000] bg-black glass-stroke-xl`} onClick={onClose}>
            <div className={`${divStyle} w-[500px] h-[550px] bg-[#0E1014] rounded-4 p-[30px]`} onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-row justify-between">
                    <label className="text-[24px] text-white">Connect Wallet</label>
                    <Button
                        className="flex items-center justify-center bg-dark w-10 h-10 text-[24px]"
                        radius="rounded-1"
                        handleClick={onClose}
                    >
                        &#x2715;
                    </Button>
                </div>

                <div className="mt-[30px]">
                    <div className="text-[12px] text-[#b1b1b3]">Select Network</div>
                    <div className="flex flex-row flex-wrap gap-x-[35px] gap-y-[10px] pt-[20px]">
                        {networks.map((network) => (
                            <NetworkButton
                                key={network.label}
                                {...network}
                                isSelected={selectedNetwork === network.label}
                                onClick={() => handleNetworkSelect(network.label)}
                            />
                        ))}
                    </div>
                    <div className="mt-10 border-t-2 border-dashed border-[#3c3d40] my-4"></div>
                </div>

                <div className="mt-10">
                    <div className="text-[12px] text-[#b1b1b3]">Select Wallet</div>
                    <div className="flex flex-col gap-y-[10px] pt-[20px]">
                        {wallets.map((wallet) => (
                            <WalletButton
                                key={wallet.label}
                                {...wallet}
                                isSelected={selectedWallet === wallet.label}
                                onClick={() => handleWalletSelect(wallet.label)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectWalletModal;
