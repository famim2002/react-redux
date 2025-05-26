import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../reduxStore/counter/countSlice";

const IncrementBtn = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="button-css" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
};

export default IncrementBtn;
