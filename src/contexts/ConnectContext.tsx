"use client"
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';

interface Wallet {
    address: string;
}

interface ContextType {
    isConnected: boolean;
    wallet: Wallet | null;
    connectWallet: () => void;
    disConnectWallet: () => void;
}

export const ConnectContext = createContext<ContextType | undefined>(undefined);

export const useWallet = (): ContextType => {
    const context = useContext(ConnectContext);
    if (!context) {
        throw new Error('useWallet must be used within a ConnectProvider');
    }
    return context;
}

// ConnectProvider component
const addrSessionKey = '_WALLET_ADDRESS_'
export const ConnectProvider = ({ children }: { children: ReactNode }) => {
    const [wallet, setWallet] = useState<Wallet | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    // Fetch session data only after the component mounts (client-side)
    useEffect(() => {
        const fechedCookie = getCookie(addrSessionKey)?.toString();
        if (fechedCookie) {
            const sessionWallet = JSON.parse(fechedCookie);
            setWallet(sessionWallet);
            setIsConnected(true);
        }
    }, []);

    const connectWallet = () => {
        const fakeWallet = { address: "3XSLuJcXg6xEua6iBPnWacc3iWh93yEDMCqX8FbE3RDSbEnT9P" };
        setWallet(fakeWallet);
        setCookie(addrSessionKey, JSON.stringify(fakeWallet));
        setIsConnected(true);
    };

    const disConnectWallet = () => {
        deleteCookie(addrSessionKey);
        setWallet(null);
        setIsConnected(false);
    };

    return (
        <ConnectContext.Provider value={{ isConnected, wallet, connectWallet, disConnectWallet }}>
            {children}
        </ConnectContext.Provider>
    );
}