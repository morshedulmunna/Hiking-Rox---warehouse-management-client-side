import React from "react";
import mongo from "../../Images/mongoDb.png";

const WhenUseMongoNode = () => {
  return (
    <>
      <div className="mt-12">
        <h1 className="font-bold text-3xl py-2">
          When should you use nodejs and when should you use mongodb??
        </h1>

        <div className="flex justify-between lg:flex-row  flex-col">
          <img
            className="h-[400px] lg:w-1/2  w-full object-cover"
            src={mongo}
            alt=""
          />
          <div className="lg:w-1/2 w-full lg:pl-7 px-2 pt-3">
            <h2 className="font-bold text-xl">When use Node.js?</h2>
            <p>
              If your server side code requires very few cpu cycles. In other
              world you are doing non blocking operation and does not have heavy
              algorithm/Job which consumes lots of CPU cycles. If you are from
              Javascript back ground and comfortable in writing Single Threaded
              code just like client side JS.
            </p>
            <h2 className="font-bold text-xl mt-12">When use MongoDB?</h2>
            <p>
              MongoDB facilitate to store database in json(javascript object
              notation) (or simply when data in form of key value pair) this is
              very fast and efficient so you should use it when you have key
              value pair to store(json data) one of the best advantage with
              MongoDB is you can store a collection inside another collection
              (in relational database is can be said as table inside another
              table) this neglect use of “join”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhenUseMongoNode;
