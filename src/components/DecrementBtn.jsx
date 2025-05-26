import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../../reduxStore/counter/countSlice";

const DecrementBtn = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="button-css " onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default DecrementBtn;
