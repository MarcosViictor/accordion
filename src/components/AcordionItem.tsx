// AcordionItem.tsx
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Collapse } from 'react-collapse';

interface AcordionItemProps {
  title: string;
  desc: string;
  open: boolean;
  toggle: () => void;
}

const AcordionItem: React.FC<AcordionItemProps> = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[10px] flex">
      <div className="bg-white py-[25px] px-[50px] flex flex-col items-center cursor-pointer" onClick={toggle}>
        <div className="flex justify-around w-full"> 
          <p className="text-[22px] font-semibold title">{title}</p>
          <div className="text-[20px] icon">
            {open ? <FaMinus /> : <FaPlus />}
          </div>
        </div>

        <Collapse isOpened={open}>
          <div className="bg-white px-[50px] pb-[20px]">{desc}</div>
        </Collapse>
      </div>
    </div>
  );
};

export default AcordionItem;
