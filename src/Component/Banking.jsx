
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw } from "../actions/action";

const Banking = () => {
  const [amount, setAmount] = useState(() => {
    
    return 0
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleDeposit = () => {
    dispatch(deposit(+amount));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(+amount));
  };

  return (
    <div className="dev">
      <div className="field">
        <input
        id="inpu"
          type="number"
          className=""
          placeholder="Amount"
          value={amount}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn"
        onClick={handleDeposit}
      >
        Deposit
      </button>
      <button
        className="btn"
        onClick={handleWithdraw}
      >
        Withdraw
      </button>
    </div>
  );
};

export default Banking;
