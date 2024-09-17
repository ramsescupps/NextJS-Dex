"use client"

import React, { createContext, useState, useContext, ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";

interface Note {
    show: boolean;
    title: string;
    message: string;
    variant: string | null;
    delay: number;
}

interface ContextType {
    note: Note | null;
    showNotification: (note: Omit<Note, ('show')>) => void;
}

// Initialize context with undefined as the default value
export const NotificationContext = createContext<ContextType | undefined>(undefined);

const Toastr = ({ note, hide }: { note: Note | null, hide: () => void }) => {
    if (note == null) return;
    const backgroundStyle = `${note.show ? '' : 'opacity-0' + ' pointer-events-none'} transition-opacity duration-1000`;
    const divStyle = `${note.show ? '' : 'scale-95'} transition-transform duration-1000`;
    return (
        <div className={`${backgroundStyle} fixed inset-0 flex justify-end z-[1000] bg-black notification-backround`} onClick={hide}>
            <div className={`${divStyle} w-[500px] h-[137px] bg-[rgba(21,21,21,0.8)]  border-[0.5px] ${note.variant == 'success' ? 'border-green' : 'border-cancel'} rounded-[10px] p-[20px] m-[50px]`} onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-row justify-between pl-[10px]">
                    <div className="flex flex-row gap-[15px]">
                        <div className={`border-[1px] ${note.variant == 'success' ? 'border-green' : 'border-cancel'} rounded-full w-[24px] h-[24px]`}><Image src="/svgs/note.svg" alt="note" width={15} height={15} className="m-1"></Image></div>
                        <div className="flex flex-col">
                            <div className={`text-[18px] font-medium ${note.variant == 'success' ? 'text-green' : 'text-cancel'}`}>{note.title}</div>
                            <div className="text-[14px] mt-[7.5px] mb-[21px]">{note.message}</div>
                            <Link href="" className="underline decoration-yellow bg-clip-text text-transparent bg-gradient-to-br from-[#FFDC85] to-[#FFB704] italic">View transaction on explorer</Link>
                        </div>

                    </div>

                    <Button
                        className="flex items-center justify-center bg-dark w-10 h-10 text-[24px]"
                        radius="rounded-1"
                        handleClick={hide}
                    >
                        &#x2715;
                    </Button>
                </div>
            </div>
        </div>
    );
}
// Custom hook to use the ConnectContext
export const useNotification = (): ContextType => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useWallet must be used within a ConnectProvider');
    }
    return context;
}

// ConnectProvider component
export const NotificationProvider = ({ children }: { children: ReactNode }) => {

    const defaultNote = {
        show: false,
        title: '',
        message: '',
        variant: null,
        delay: 3000,
    };
    const [note, setNote] = useState<Note | null>(defaultNote);

    const showNotification = ({
        title, message, variant, delay = 3000
    }: Omit<Note, 'show'>) => {
        setNote({
            show: true, title, message, variant: variant ?? 'light', delay
        });
        setTimeout(() => {
            setNote(defaultNote);
        }, delay);
    }
    const hideNotification = () => {
        setNote(prev => {
            if (!prev) {
                return null;
            }
            return {
                ...prev,
                show: false,
                title: prev.title,
                message: prev.message,
                variant: prev.variant ?? null,
                delay: prev.delay ?? 3000,
            };
        });
    };

    return (
        <NotificationContext.Provider value={{ note, showNotification }}>
            <Toastr note={note} hide={hideNotification} />
            {children}
        </NotificationContext.Provider>
    );
}