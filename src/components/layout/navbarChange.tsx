import React from 'react';

interface NavbarProps {
  forms: { title: string; description: string }[];
  selecedForm: string;
  handleSelectedForm: (item: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ forms, selecedForm, handleSelectedForm }) => {

  return (
    <div className="flex justify-end pt-[20px] md:pt-[30px] lg:pt-[36.26px]">
      <div className="flex flex-row p-[7px] space-x-1 bg-primary-default rounded-[16px] border border-[#14181F]">
        {forms.map((item, index) => (
          <div
            key={index}
            className={`md:text-[14px] lg:text-[16px] w-[50px] md:w-[60px] lg:w-[72px] md:py-[4px] lg:py-[6px] text-center leading-[20px] rounded-[8px] hover:text-yellow ${selecedForm === item.title
              ? 'bg-[#242F36] text-yellow font-bold'
              : 'bg-transparent text-primary-medium'
              }`}
            onClick={() => handleSelectedForm(item.title)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
