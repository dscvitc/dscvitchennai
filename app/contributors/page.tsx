"use client";
import React from "react";

import CardList from "../../components/contributors/List";

const Contributors = () => {
  return (
    <div className="mx-auto md:max-w-4xl lg:max-w-7xl ">
      {/* Width snap for the whole content. Must be added to the root of every "page" */}
      <CardList />
    </div>
  );
};

export default Contributors;
