import React from "react";
import JWt from "./JWt";
import NodeJs from "./NodeJs";
import SQLvsNOSQL from "./SQLvsNOSQL";
import WhenUseMongoNode from "./WhenUseMongoNode";
const Blog = () => {
  return (
    <div className="lg:container  container mx-auto lg:px-12 px-2 mt-12 mb-12">
      <NodeJs />
      <WhenUseMongoNode />
      <SQLvsNOSQL />
      <JWt />
    </div>
  );
};

export default Blog;
