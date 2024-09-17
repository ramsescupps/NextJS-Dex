"use client";

import React, { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import ChartPanel from "@/components/common/chart";
import BoardPanel from "@/components/common/board/BoardPanel";

import PerpPanel from "@/components/page/perps/form/perpForm";
import EarnPanel from "@/components/page/perps/form/earnPanel";
import TradePanel from "@/components/page/perps/form/tradeForm";
import BuyPanel from "@/components/page/perps/form/buyForm";
import SellPanel from "@/components/page/perps/form/sellForm";

import TabButtons from "@/components/page/perps/buttons/TabButtons";
import PerpButtons from "@/components/page/perps/buttons/PerpButtons";
import EarnButtons from "@/components/page/perps/buttons/EarnButtons";
import SettingForm from '@/components/common/option/settingForm';
import AddForm from '@/components/common/option/addForm';
import { DefaultCSS } from "@/utils/defaultCSS";

import { perpTabs, perpForms, earnForms, additionForms } from "@/utils/mockup";

const PerpsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedBtn, setSelectedBtn] = useState(perpForms[0]);
    const { addBtnClicked, selectedAddBtn, releaseAddBtn } = useTheme();

    const handleTabChange = (tabIndex: number) => {
        if (activeTab === 0 && tabIndex === 1) handleBtnClick(earnForms[0]);
        if (activeTab === 1 && tabIndex === 0) handleBtnClick(perpForms[0]);
        setActiveTab(tabIndex);
    };

    const handleBtnClick = (name: string) => {
        setSelectedBtn(name);
        releaseAddBtn();
    };

    const renderForm = () => {
        if (addBtnClicked) {
            switch (selectedAddBtn) {
                case additionForms[0]:
                    return <SettingForm />
                case additionForms[1]:
                    return <AddForm />
            }
        }

        if (activeTab === 0) {
            return <PerpPanel type={selectedBtn} />
        } else {
            switch (selectedBtn) {
                case earnForms[0]:
                    return <TradePanel title={earnForms[0]} />
                case earnForms[1]:
                    return <BuyPanel title={earnForms[1]} />
                case earnForms[2]:
                    return <SellPanel title={earnForms[2]} />
            }
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between pt-[20px] md:pt-[24.26px] h-full md:h-[80px] mb-[4.26px]">
                <TabButtons
                    tabs={perpTabs}
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                    activeStyle="bg-gradient-to-r from-[#68FFAE] to-[#30F874] bg-clip-text text-transparent"
                />
                <div className="">
                    {activeTab === 0 && (
                        <PerpButtons
                            items={perpForms}
                            selectedBtn={selectedBtn}
                            onBtnClick={handleBtnClick}
                        />
                    )}

                    {activeTab === 1 && (
                        <EarnButtons
                            items={earnForms}
                            selectedBtn={selectedBtn}
                            onBtnClick={handleBtnClick}
                        />
                    )}
                </div>
            </div>

            <div className={DefaultCSS.container}>
                <div className={DefaultCSS.leftPanel}>
                    {activeTab === 0 ? <ChartPanel /> : <EarnPanel />}
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
