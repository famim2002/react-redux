import React from "react";
import IncrementBtn from "../components/IncrementBtn";
import DecrementBtn from "../components/DecrementBtn";

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-center gap-10 items-center h-dvh">
          <div>
            <img src="" alt="" />
          </div>
          <IncrementBtn />
          <h1 className="value-css">0</h1>
          <DecrementBtn />
        </div>
      </div>
    </section>
  );
};

export default Home;
