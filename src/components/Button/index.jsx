import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[27px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    orange_50: "bg-orange-50",
    blue_50: "bg-blue-50",
    cyan_50: "bg-cyan-50",
    white_A700: "bg-white-A700 shadow-xs",
    indigo_A400_01: "bg-indigo-A400_01 text-black-900",
    gray_100: "bg-gray-100",
  },
};
const sizes = {
  lg: "h-[69px] px-[35px] text-[32px]",
  md: "h-[62px]",
  xs: "h-[50px] px-3",
  sm: "h-[55px] px-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["lg", "md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["orange_50", "blue_50", "cyan_50", "white_A700", "indigo_A400_01", "gray_100"]),
};

export { Button };
