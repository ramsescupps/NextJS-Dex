import React, { useState, useEffect, useRef } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Token from '@/components/ui/token';
import { SizeCSS } from '@/utils/rwd';

interface Props {
  containerStyle?: string;
  dropDownStyle?: string;
  dropDownnItemStyle?: string;
  options: { logo?: string; title: string; value: string }[];
}

const Select: React.FC<Props> = ({
  options,
  containerStyle,
  dropDownStyle,
  dropDownnItemStyle,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(options[0].title);
  const [dropdownWidth, setDropdownWidth] = useState<string | number>('auto');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const currentItem = options.find((item) => item.title === selectedItem);
  const logo = currentItem?.logo || '';
  const title = currentItem?.title || '';

  const handleSelect = (option: string) => {
    setSelectedItem(option);
    setVisible(false);
  };

  // Function to handle click outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (visible) {
      if (dropdownRef.current && parentRef.current) {
        dropdownRef.current.style.visibility = 'hidden';
        dropdownRef.current.style.display = 'block';

        const dropdownContentWidth = dropdownRef.current.scrollWidth;
        const parentWidth = parentRef.current.offsetWidth;

        dropdownRef.current.style.display = '';
        dropdownRef.current.style.visibility = '';

        if (dropdownContentWidth > parentWidth) {
          setDropdownWidth('max-content');
        } else {
          setDropdownWidth(parentWidth);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible, options]);

  return (
    <div className="relative" ref={parentRef}>
      <div
        className={`cursor-pointer flex justify-between items-center ${containerStyle}`}
        onClick={() => setVisible(true)}
      >
        <div className="flex flex-row items-center justify-center">
          {logo ? <Token logo={logo} title={title} /> : <span className={`${SizeCSS.font18} font-semibold`}>{selectedItem}</span>}
        </div>
        <div className="ml-[10px] text-primary-light">
          {visible ? <ArrowDropUpIcon fontSize="large" /> : <ArrowDropDownIcon fontSize="large" />}
        </div>
      </div>

      {visible && (
        <div
          ref={dropdownRef}
          style={{ width: dropdownWidth }}
          className={`dropdown-menu ${visible ? 'visible' : ''} z-10 absolute left-0 top-full mt-4 radius-scrollbar ${dropDownStyle}`}
        >
          {options.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-[10px] hover:bg-primary-dark ${selectedItem === item.title ? 'bg-primary-dark' : 'bg-transparent'
                }`}
              onClick={() => handleSelect(item.title)}
            >
              <div data-id={item.value} className={`flex flex-row justify-start items-center ${SizeCSS.font18} ${dropDownnItemStyle}`}>
                {item.logo ? <Token logo={item.logo} title={item.title} /> : item.title}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
