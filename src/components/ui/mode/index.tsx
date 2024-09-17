import React from 'react';

interface Props {
  selectedItem: string;
  items: string[];
  setSelectItem: (item: string) => void;
}
const SwapForm: React.FC<Props> = ({ selectedItem, items, setSelectItem }) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-row p-2 space-x-1 bg-primary-default rounded-[16px] border border-[#14181F]">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectItem(item)}
            className={`text-[16px] px-[6px] text-center py-[6px] rounded-[8px] ${selectedItem === item ? 'bg-[#242F36] text-yellow font-bold' : 'bg-transparent opacity-[68%]'
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SwapForm;
