
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const activeGradientCss = "bg-gradient-to-br from-[#FFCB1A] to-[#FF8D07] bg-clip-text text-transparent";

const EarnPanel = () => {
    return (
        <div className="pr-[35.19px] border-[0.5px] border-[#ffb703] rounded-[10px] pl-[16px] bg-gradient-to-br from-[#141212] to-[#070b12]">
            <div className="flex flex-row justify-between py-[24px]">
                <div className={`text-[32px] font-bold ${activeGradientCss}`}>SLAV Pool</div>
                <div className="">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <span className={`text-[18px] font-semibold ${activeGradientCss}`}>APY</span>
                            <div className="ml-1 opacity-70 "><HelpOutlineIcon className="w-[16px] h-[16px]" /></div>
                        </div>
                        <div className={`text-[18px] font-semibold ${activeGradientCss}`}>
                            23%
                        </div>
                    </div>
                    <div className="text-[14px] font-medium opacity-70">
                        Last updated at 8/14/2024
                    </div>
                </div>
            </div>
            <div className={`text-[14px] w-full font-medium pb-[16px] max-w-[621px] ${activeGradientCss}`}>
                The Jupiter Liquidity Provider (JLP) Pool is a liquidity pool where it acts as a counterparty to traders — when traders seek to open leverage positions, they borrow tokens from the pool.
                The JLP token is the liquidity provider token where it's value is derived from:
                An index fund of SLAV, ETH, WSLAVC, USDC, USDT.
                Trader's profit and loss
                75% of the generated fees from opening and closing fees, price impact, borrowing fees, and trading fees of the pool
                The APY, denominated in USD, is calculated based on 75% of fees generated from perps trading activities which does not include assets appreciation and traders PnL. The generated fees are distributed back to holders by redepositing the fees into the pool hourly.
            </div>
        </div>
    );
}

export default EarnPanel;