import React from 'react'

const SummaryCard = ({
  title = "Title",
  content = "Add content prop",
  showCurrency = false,
}) => {
  return (
    <div className="border-2 border-[#f1EAD9] px-4 rounded-2xl bg-[#F1EAD9]/40 w-75 ">
      <h3 className="text-[#4B2E4D] font-medium ">{title}</h3>
      <p className={`text-[#D9A441] font-semibold text-[18px]`}>
        {showCurrency && <span>&#8358;</span>}
        {content}
      </p>
    </div>
  );
};

export default SummaryCard
