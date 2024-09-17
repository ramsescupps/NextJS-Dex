"use client"
import React from "react";
import { useState } from "react";
import HistoryTable from "./HistoryTable";
import MarketSwapTable from "./MarketSwapTable";
import InformationPanel from "./InformationPanel";
import { swapData, historyData } from "@/utils/mockup";

const inactive = "text-[16px] md:text-[14px] lg:text-[16px] text-[#6f7382] pb-[10px]";
const active = "text-[16px] md:text-[14px] lg:text-[16px] text-white border-b-[3.5px] border-[#ffb703] pb-[10px]";

const InfoTabs = () => {

    const [tabKey, setTabKey] = useState('info');
    const handleClick = (key: string) => {
        setTabKey(key);
    }
    return (
        <div className="basis-[63%] overflow-x-scroll">
            <div className="flex flex-row gap-[15px]">
                <button id="info" className={(tabKey == "info" ? active : inactive)} onClick={(e) => handleClick('info')}>Info</button>
                <button id="swap" className={(tabKey == "swap" ? active : inactive)} onClick={(e) => handleClick('swap')}>Market Swaps</button>
                <button id="history" className={(tabKey == "history" ? active : inactive)} onClick={(e) => handleClick('history')}>My History</button>
            </div>
            <hr className="border-[#131e38]"></hr>
            <div>
                {(tabKey == "info") && <InformationPanel />}
                {(tabKey == "swap") && <MarketSwapTable data={swapData} />}
                {(tabKey == "history") && <HistoryTable data={historyData} />}
            </div>
        </div>
    )
}

export default InfoTabs;