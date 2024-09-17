"use client";

import { useState, useMemo } from "react";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { useWallet } from "@/contexts/ConnectContext";
import Button from "@/components/ui/button";
import ConnectWalletModal from "@/components/ui/modal/connect";

import { URIs } from '@/utils/mockup';
import DisconnectModal from "../ui/modal/disconnect";
import DisconConfirmModal from "../ui/modal/disconnect/DisconConfirmModal";

const Header = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDisconModal, setIsDisconModal] = useState(false);
    const [isDisconConfirmModal, setIsDisconConfirmModal] = useState(false);
    const { isConnected, wallet, connectWallet, disConnectWallet } = useWallet();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openDisconModal = () => setIsDisconModal(true);
    const closeDisconModal = () => setIsDisconModal(false);

    const openDisconConfirmModal = () => setIsDisconConfirmModal(true);
    const closeDisconConfirmModal = () => setIsDisconConfirmModal(false);

    const onConnectWallet = () => {
        connectWallet();
    }
    const onDisconnectWallet = () => {
        closeDisconModal();
        openDisconConfirmModal();
    }
    const onDisconConirmed = () => {
        disConnectWallet();
        // show noticifation 
    }

    // Memoize selectedItem calculation
    const selectedItem = useMemo(() => {
        return URIs.find(item => pathname.includes(item.title))?.title || null;
    }, [pathname]);

    return (
        <div className="w-full border-b default-border">
            <div className="relative flex flex-row items-center justify-between py-5">
                <Image src="/imgs/logo.png" alt="logo" width={138} height={59} className="w-[100px] md:w-[138px]" />

                <div className="flex flex-row ml-20 md:mx-auto items-center space-x-4 md:space-x-[27px]">
                    {URIs.map((item) => {
                        const isSelected = selectedItem === item.title;
                        const isHovered = hoveredItem === item.title;

                        return (
                            <div
                                key={item.title}
                                onMouseEnter={() => setHoveredItem(item.title)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className={`flex flex-col items-center font-poppins capitalize scale-[1.1]`}
                            >
                                <Link href={item.link} className={`md:text-[16px] leading-10 tracking-[-0.02em] ${isSelected || isHovered ? "text-grandient-orange font-bold " : "text-seconday-dark font-normal"}  hover:text-grandient-orange`}>
                                    {item.title}
                                </Link>
                                <span
                                    className="h-[2px] w-[34px] md:w-[44px]"
                                    style={{
                                        backgroundImage: isSelected || isHovered
                                            ? `url('/svgs/selection.svg')`
                                            : 'none',
                                    }}
                                ></span>
                            </div>
                        );
                    })}
                </div>

                <div className="flex space-x-1 md:space-x-2 md:text-[16px]">
                    <Button
                        className="justify-center px-[10px] md:px-[21px] bg-primary-light font-semibold items-center py-1 md:py-2 leading-[26.77px]"
                        radius="rounded-[6px]"
                    >
                        GTU
                    </Button>
                    <Button
                        className="justify-between w-[80px] md:w-[110px] px-[10px] bg-primary-light font-semibold items-center py-2 leading-[26.77px]"
                        radius="rounded-[6px]"
                        border="border-[#353840] border-2"
                    >
                        <span className="font-semibold md:text-[16px]">GTU</span>
                        <span>--</span>
                    </Button>
                    {!isConnected && <Button
                        className="justify-center w-content md:w-[169px] px-[10px] bg-gradient-blue-light text-[#02002B] font-medium items-center py-2 leading-[26.77px]"
                        radius="rounded-[6px]"
                        border="border-[#21D184] border-2"
                        handleClick={openModal}
                    >
                        Connect wallet
                    </Button>}
                    {isConnected && <Button
                        className="justify-between items-center w-[169px] px-[10px] bg-primary-light text-[#02002B] font-medium py-2 text-[16px] leading-[26.77px]"
                        radius="rounded-[6px]"
                        border="border-[#353840] border-2"
                        handleClick={openDisconModal}
                    >
                        <div className="text-[16px] w-[109px]">{wallet?.address.slice(0, 10) + "..."}</div>
                        <Image src="/imgs/avatar.png" alt="waleet" width={28} height={28} className="w-7 h-7"></Image>
                    </Button>}

                    <ConnectWalletModal onConnect={onConnectWallet} isOpen={isModalOpen} onClose={closeModal} />
                    <DisconnectModal onDisconnect={onDisconnectWallet} address={wallet?.address} isOpen={isDisconModal} onClose={closeDisconModal} />
                    <DisconConfirmModal isOpen={isDisconConfirmModal} onClose={closeDisconConfirmModal} onDisconnect={onDisconConirmed} />
                </div>
            </div>
        </div>
    );
};

export default Header;
