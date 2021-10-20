import React from "react";
import SideMenuItem from "../molecules/SideMenuItem";

//Those are the color rendered by our list. If you want to add or remove some, just add the color to the list
const sideMenu = ["blue", "green", "red", "pink", "orange", "purple"];

//Thats the component responsible to turn this list up here into many squares in our side menu
const MapFactory = () => {
  return (
    <>
      {sideMenu.map((item, i) => {
        return (
          <>
            <SideMenuItem data={item} key={i} />
          </>
        );
      })}
    </>
  );
};

export default MapFactory;
