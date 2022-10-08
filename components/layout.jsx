import * as React from "react";

let HeroLayout = (props) => {
  //  Props is an object which will have children that will be of the following type
  //  The Children will obviously be DOM elements/React Fragments
  // interface PropsType{
  //  children: JSX.element
  // }

  return (
    <>
      <section className="grid grid-cols-12 text-black">
        <section className="col-start-2 col-span-10">{props.children}</section>
      </section>
    </>
  );
};

export default HeroLayout;
