import React from "react";

const sizes = {
  "3xl": "text-[40px] font-extrabold md:text-[38px] sm:text-4xl",
  "2xl": "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  xl: "text-[25px] font-black md:text-[23px] sm:text-[21px]",
  s: "text-[17px] font-semibold",
  md: "text-xl font-semibold",
  xs: "text-[15px] font-semibold",
  lg: "text-[22px] font-semibold",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
