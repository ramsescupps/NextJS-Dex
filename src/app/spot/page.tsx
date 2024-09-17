"use client";

import React, { useState } from "react";

import { useTheme } from "@/contexts/ThemeContext";
import Navbar from '@/components/layout/navbarChange';

import ChartPanel from "@/components/common/chart";
import BoardPanel from "@/components/common/board/BoardPanel";
import SettingForm from '@/components/common/option/settingForm';
import AddForm from '@/components/common/option/addForm';
import SwapForm from '@/components/page/spot/swapForm';
import LimitForm from '@/components/page/spot/limitForm';
import DCAForm from '@/components/page/spot/dcaForm';
import VAForm from '@/components/page/spot/vaForm';

import { spotForms, additionForms } from "@/utils/mockup";
import { DefaultCSS } from "@/utils/defaultCSS";

const PerpsPage: React.FC = () => {
    const [selecedForm, setSelectedForm] = useState<string>('Swap');
    const { addBtnClicked, selectedAddBtn, releaseAddBtn } = useTheme();

    const handleSelectedForm = (item: string) => {
        releaseAddBtn();
        setSelectedForm(item);
    }

    const renderForm = () => {
        if (addBtnClicked) {
            switch (selectedAddBtn) {
                case additionForms[0]:
                    return <SettingForm />
                case additionForms[1]:
                    return <AddForm />
            }
        }

        switch (selecedForm) {
            case spotForms[0].title:
                return <SwapForm title={spotForms[0].title} />
            case spotForms[1].title:
                return <LimitForm title={spotForms[1].title} />
            case spotForms[2].title:
                return <DCAForm title={spotForms[2].title} description={spotForms[2].description} />
            case spotForms[3].title:
                return <VAForm title={spotForms[3].title} description={spotForms[3].description} />
        }
    };

    return (
        <>
            <Navbar forms={spotForms} selecedForm={selecedForm} handleSelectedForm={handleSelectedForm} />
            <div className={DefaultCSS.container}>
                <div className={DefaultCSS.leftPanel}>
                    <ChartPanel />
                    <div className={DefaultCSS.marketPanel}>
                        <BoardPanel />
                    </div>
                </div>

                <div className={`${DefaultCSS.transactionPanel} rounded-[10px]`}>
                    {renderForm()}
                </div>
            </div>
        </>
    );
};

export default PerpsPage;
