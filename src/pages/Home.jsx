import React from "react";
import IncrementBtn from "../components/IncrementBtn";
import DecrementBtn from "../components/DecrementBtn";
import { useSelector } from "react-redux"

const Home = () => {
  const newValue = useSelector((state) => state.counter.value)

  return (
    <section>
      <div className="container">
        <div className="flex justify-center items-center h-dvh">
          <div className="custom-card-shadow w-[350px] border-2 rounded-2xl overflow-hidden border-stone-300 cursor-zoom-in ">
            <img src="/backpack.jpg" alt="" />
            <div className=" pl-5 pt-5">
              <h2 className="text-[28px]  underline">bag</h2>
              <p className=" text-[22px] font-semibold flex gap-3">
                price <span>50$</span>{" "}
                <span className="text-stone-400 line-through">70$</span>
              </p>
            </div>
            <div className="flex  gap-25 justify-center pt-[50px] pb-[20px] items-center">
              <div className="w-[60px] ">
                {" "}
                <h1 className="value-css">{newValue}</h1>
              </div>
              <div className="flex gap-5">
                {" "}
                <DecrementBtn />
                <IncrementBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
