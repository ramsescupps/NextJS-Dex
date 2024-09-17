"use client"

import React, { createContext, useState, useContext, ReactNode } from "react";

interface ContextType {
    addBtnClicked: boolean;
    selectedAddBtn: string;
    handleAddBtnClick: (name: string) => void;
    releaseAddBtn: () => void;
}

// Initialize context with undefined as the default value
export const ThemeContext = createContext<ContextType | undefined>(undefined);

// Custom hook to use the ThemeContext
export const useTheme = (): ContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useWallet must be used within a ThemeProvider');
    }

    return context;
}

// ThemeProvider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [selectedAddBtn, setSelectedAddBtn] = useState<string>('');
    const [addBtnClicked, setAddBtnClicked] = useState(false);

    const handleAddBtnClick = (name: string) => {
        setSelectedAddBtn(name);
        setAddBtnClicked(true);
    }

    const releaseAddBtn = () => {
        setAddBtnClicked(false);
    }

    return (
        <ThemeContext.Provider
            value={{
                addBtnClicked, selectedAddBtn, handleAddBtnClick, releaseAddBtn
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}