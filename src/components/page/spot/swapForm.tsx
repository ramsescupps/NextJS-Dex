import React, { useEffect, useState } from 'react';

import TradeButton from '@/components/ui/button/Trade';
import ArrowIcon from '@/components/ui/arrow';
import TokenForm1 from '@/components/ui/form/tokenForm1';
import Setting from '@/components/ui/setting';
import ConnectModal from "@/components/ui/modal/connect";
import GTU from '@/components/ui/gtu';
import Fee from '@/components/ui/status';
import SpotProps from '@/types/SpotProps';
import { useWallet } from '@/contexts/ConnectContext';
import ConfirmSwapModal from '@/components/ui/modal/confirmSwap';
import { useNotification } from '@/contexts/NotificationContext';
import { SizeCSS } from '@/utils/rwd';

const feeItems = [
  { label: 'Slippage', value: '0%', state: true },
  { label: 'Liquidity Provider Fee', value: '0 GTU', state: true }
];
const swapState = { init: 'init', approve: 'approve', swap: 'swap', insufficient: 'insufficient' };

const SwapForm: React.FC<SpotProps> = ({ title }) => {
  const [fromAmount, setFromAmount] = useState<number>(0);
  const [toAmount, setToAmount] = useState<number>(0);
  const [formState, setFormState] = useState<string>(swapState.init);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmModal, setIsConfirmModal] = useState<boolean>(false);
  const { isConnected, connectWallet } = useWallet();
  const { showNotification } = useNotification();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openConfirmModal = () => setIsConfirmModal(true);
  const closeConfirmModal = () => setIsConfirmModal(false);

  const changeFormState = () => {
    if (fromAmount == 0 && toAmount == 0) {
      setFormState(swapState.init);
      return;
    }
    setFormState(swapState.approve);
    if (fromAmount != 0 && toAmount != 0) {
      if (fromAmount > toAmount) {
        setFormState(swapState.insufficient);
        return;
      }
      setFormState(swapState.swap);
    }
  }
  const onFromAmountChange = (value: number) => {
    setFromAmount(value);
  }
  const onToAmountChange = (value: number) => {
    setToAmount(value);
  }

  const onApprove = () => {

  }
  const handleWalletConnect = () => {
    connectWallet();
  };
  const handleConfirmSwap = () => {
    closeConfirmModal();
    // do something

    // show notification
    showNotification({
      title: "Swap Successfull",
      message: "You have swapped 2050.786 SLAV for 567.87 GTU",
      variant: 'success',
      delay: 4000,
    });
  }
  useEffect(() => {
    changeFormState();
  }, [fromAmount, toAmount]);

  return (
    <div className={SizeCSS.transactionPadding}>
      {(formState == swapState.approve || formState == swapState.swap) && <div>
        <Fee items={feeItems} className="px-[35px] pt-[74px] pb-[22px] mb-[40px] border border-seconday-light space-y-[15px] rounded-[10px]" />
      </div>}
      <div className="flex flex-row items-center justify-between my-[40px]">
        <Setting title={title} />
      </div>

      <TokenForm1
        amount={fromAmount}
        onChange={(e: any) => onFromAmountChange(e.target.value)}
        label="From"
        balance="0"
        state={true}
      />

      <div className="flex justify-center mt-[20.12px] mb-[16px]">
        <ArrowIcon />
      </div>

      <TokenForm1
        amount={toAmount}
        onChange={(e: any) => onToAmountChange(e.target.value)}
        label="To receive"
        balance="0"
        state={true}
      />

      <div className="mt-10">
        {isConnected ? (
          <div>
            {formState === swapState.init && <TradeButton className="border text-yellow border-yellow" label="APPROVE" openModal={onApprove} />}
            {formState === swapState.approve && <TradeButton className="border text-yellow border-yellow" label="APPROVE" openModal={onApprove} />}
            {formState === swapState.swap && <TradeButton className="text-black bg-gradient-blue-dark" label="SWAP" openModal={openConfirmModal} />}
            {formState === swapState.insufficient && <TradeButton className="border text-primary-medium border-primary-medium" label="INSUFFICIENT BALANCE" />}
          </div>
        ) : (
          <TradeButton className="text-black bg-gradient-blue-dark" label="Connect Wallet" openModal={openModal} />
        )}
      </div>

      <div className="flex flex-row justify-center mt-10">
        <GTU />
      </div>

      {(formState == swapState.init || formState == swapState.insufficient) && <div className="mt-[42px]">
        <Fee items={feeItems} className={SizeCSS.statusPanel} />
      </div>}

      <ConnectModal isOpen={isModalOpen} onClose={closeModal} onConnect={handleWalletConnect} />
      <ConfirmSwapModal isOpen={isConfirmModal} onClose={closeConfirmModal} onConfirmed={handleConfirmSwap} />
    </div>
  );
};

export default SwapForm;
