import { useAppSelector } from "app/redux/hooks";
import React from "react";
import DraggableComponent from "../molecules/DraggableComponent";

//Thats the component responsible for passing and receiving props in our draggable squares.
//He's the one who make the bridge between our state and our component
const ContentFactory = () => {
  const content = useAppSelector((state) => state.content);
  return (
    <>
      {content &&
        content.content.map((item: any, i) => {
          return (
            <>
              <DraggableComponent
                id={item.id}
                size={item.size}
                position={item.position}
                color={item.color}
                index={i}
                isActive={item.isActive}
                isUndraggable={item.isUndraggable}
                isResizable={item.isResizable}
              />
            </>
          );
        })}
    </>
  );
};

export default ContentFactory;
