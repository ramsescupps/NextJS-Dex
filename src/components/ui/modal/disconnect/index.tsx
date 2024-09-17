"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

interface ModalProps {
    isOpen?: boolean;
    address: string | undefined;
    onClose: () => void;
    onDisconnect: () => void;
}

const DisconnectModal: React.FC<ModalProps> = ({ isOpen, address, onClose, onDisconnect }) => {

    const backgroundStyle = `${isOpen ? '' : 'opacity-0' + ' pointer-events-none'} transition-opacity duration-500`;
    const divStyle = `${isOpen ? '' : 'scale-95'} transition-transform duration-500`;

    return (
        <div className={`${backgroundStyle} fixed inset-0 flex items-center justify-center z-[1000] bg-black glass-stroke-xl`} onClick={onClose}>
            <div className={`${divStyle} w-[550px] h-[550px] bg-primary-dark rounded-[10px] p-[30px]`} onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-row justify-between">
                    <label className="text-[24px] text-white">User Account</label>
                    <Button
                        className="flex items-center justify-center bg-dark w-10 h-10 text-[24px]"
                        radius="rounded-1"
                        handleClick={onClose}
                    >
                        &#x2715;
                    </Button>
                </div>
                <div className="flex flex-col mt-[30px] p-[20px] h-[147px]  rounded-[3px] border-[2px] bg-primary-default border-seconday-dark">
                    <div className="flex flex-row items-center">
                        <Image src="/imgs/avatar.png" alt="slav" width={30} height={30}></Image>
                        <div className="font-medium text-[24px] ml-[10px]">Anonymous Croc</div>
                    </div>
                    <div className="flex flex-row justify-between mt-[30px] w-1/2 mb-[10px]">
                        <div className="flex flex-col">
                            <div className="text-seconday-middle text-[10px]">Balance</div>
                            <div className="flex flex-row">
                                <Image src="/svgs/coin/ccd.svg" alt="ccd" width={22} height={22}></Image>
                                <span className="text-[16px] font-semibold">2500</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-seconday-middle text-[10px]">Network</div>
                            <div className="text-[16px] font-semibold">Concordium</div>
                        </div>

                    </div>
                </div>

                <div className="h-[68.5px] mt-[40px] mb-[120px]">
                    <div className="text-seconday-middle mb-[10px]">
                        My Wallet Address
                    </div>
                    <div className="flex justify-center h-[40px] border-[2px] rounded-[3px] border-seconday-light">
                        <div className="my-auto">{address}</div>
                    </div>
                </div>
                <div>
                    <div className="w-2/3 flex flex-row justify-between">
                        <Button
                            className="h-6"
                        >
                            <div className="flex flex-row items-center">
                                <Image src="/svgs/transaction.svg" alt="transaction" width={24} height={24}></Image>
                                <span className="text-seconday-middle">See all transactions</span>
                            </div>
                        </Button>
                        <Button
                            className="h-6"
                            handleClick={onDisconnect}
                        >
                            <div className="flex flex-row items-center">
                                <Image src="/svgs/disconnect.svg" alt="transaction" width={24} height={24}></Image>
                                <span className="text-seconday-middle">Disconnect Wallet</span>
                            </div>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DisconnectModal;
