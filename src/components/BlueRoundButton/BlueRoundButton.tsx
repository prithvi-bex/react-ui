import React from "react";

type ButtonProps = {
    lable: string;
  };

const BlueRoundButton = (props:ButtonProps) => {
  return (
    <div className="bg-blue font-vietnampro aspect-auto	 rounded-full px-9 py-2 text-sm font-medium text-white ">
      <p>{props.lable}</p>
    </div>
  );
};

export default BlueRoundButton;
