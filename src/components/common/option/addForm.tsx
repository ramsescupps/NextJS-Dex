import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';
import Token from '@/components/ui/token';
import CloseIcon from '@/components/ui/close';
import { coinItems } from '@/utils/mockup';
import { useTheme } from '@/contexts/ThemeContext';

const AddForm: React.FC = () => {
  const { releaseAddBtn } = useTheme();
  const [selectedToken, setSelectedToken] = useState<string>("SLAV");
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredTokens, setFilteredTokens] = useState(coinItems);

  const handleTokenClick = (token: string) => {
    setSelectedToken(token);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const searchQuery = searchInput.toLowerCase();
    const result = coinItems.filter(
      ({ logo, description }) =>
        logo.toLowerCase().includes(searchQuery) ||
        description.toLowerCase().includes(searchQuery)
    );
    setFilteredTokens(result);
    if (result.length > 0) {
      setSelectedToken(result[0].logo);
    } else {
      setFilteredTokens([]);
    }
  };

  return (
    <>
      <div className="w-full bg-[#191F2A] rounded-[10px] rounded-except-bottom">
        <div className="pl-[26.89px] pr-[29.11px]">
          <div className="flex flex-row items-center justify-between pt-[20px]">
            <span className="font-semibold text-[24px] font-dmsans leading-[33.6px]">Add token</span>
            <div onClick={releaseAddBtn} className="cursor-pointer">
              <CloseIcon width="w-[20px]" height="h-[20px]" />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between mt-[25.2px]">
            <div className="mb-[10px] flex flex-row justify-between items-center pl-[21.4px] pr-[13.2px] w-full h-[64px] bg-[rgba(8,12,19,1)] rounded-[10px]">
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchChange}
                onKeyPress={(e: any) => e.key === "Enter" && handleSearch()}
                className="w-full pr-[21.4px] bg-transparent outline-none placeholder:text-primary-medium"
                placeholder="Search Token by name or paste Contract Address"
              />
              <button onClick={handleSearch}>
                <Image src="/svgs/search.svg" alt="search" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-[26.89px] pr-[29.11px] h-[400px] overflow-y-auto pt-[9.8px] scrollbar-thumb-black scrollbar-track-gray-800">
        {filteredTokens.length > 0 ? (
          filteredTokens.map(({ logo, description, amount }) => (
            <div
              key={logo}
              className={`flex flex-row justify-between items-center h-[61.55px] cursor-pointer px-[12px] rounded-[10px] hover:bg-seconday-default ${selectedToken === logo ? 'bg-seconday-default' : 'bg-transparent'}`}
              onClick={() => handleTokenClick(logo)}
            >
              <Token logo={logo} description={description} />
              <span className="text-[16px] font-semibold font-dmsans text-seconday-medium">{amount}</span>
            </div>
          ))
        ) : (
          <div className="mt-4 text-center text-primary-medium">No tokens found.</div>
        )}
      </div>

      <Button className="flex items-center justify-center w-full bg-[#191F2A] h-[55px]">
        <span className="text-green font-dmsans hover:scale-110">Manage Token lists</span>
      </Button>
    </>
  );
};

export default AddForm;
