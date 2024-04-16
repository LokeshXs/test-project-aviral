import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopThree from "pages/DesktopThree";
import DesktopFour from "pages/DesktopFour";
import DesktopFive from "pages/DesktopFive";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopthree",
      element: <DesktopThree />,
    },
    {
      path: "desktopfour",
      element: <DesktopFour />,
    },
    {
      path: "desktopfive",
      element: <DesktopFive />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
