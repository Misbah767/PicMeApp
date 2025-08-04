import React from "react";
import InputOption from "./InputOption";
import { paymentMethods } from "./PaymentIcons";

const PaymentOptions = ({ selectedOption, setSelectedOption }) => {
  return (
    <div role="radiogroup" aria-label="Payment Options">
      {paymentMethods.map(({ id, label, Icon }) => (
        <InputOption
          key={id}
          id={id}
          label={label}
          Icon={Icon}
          isSelected={selectedOption === id}
          onChange={setSelectedOption}
        />
      ))}
    </div>
  );
};
s
export default PaymentOptions;
