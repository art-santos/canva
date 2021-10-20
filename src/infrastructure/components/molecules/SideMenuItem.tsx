import React from "react";

import useMousePosition from "app/hooks/mouse/useMouseHook";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { ADD_CONTENT } from "app/redux/features/content.slice";
import { ValidateCreate } from "app/usecases/ValidateCreate";

/*Here's where things start to get interesting.
The sidemenu component is the responsible for passing data to the state, such as mouse position
Index and color clicked by the use, so we can generate our components inside content
*/

interface SideMenuProps {
  data: string;
}

const SideMenuItem: React.FC<SideMenuProps> = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.content);
  const [active, setActive] = React.useState(false);
  const { x, y } = useMousePosition();

  /*When the user first clicks or mousedown our side menu square, that's going to set our 
  ghost component to active. this component is going to follow the mouse wherever it goes.
  */
  const handleClick = () => {
    setActive(true);
  };
  /*When the user defines the position he wants the square to be, he just needs to give the right click
    if the component is in the allowed area, it's going to be create. Otherway, it doesn't
  */
  const handleCreate = () => {
    setActive(false);
    if (ValidateCreate(x, y)) {
      dispatch(
        ADD_CONTENT({
          index: content.content.length,
          color: data,
          position: { x: x - 270, y: y - 150 },
        })
      );
    }
  };
  //The validation occurs based in the size of the elements other than content component.
  return (
    <>
      <div
        style={{
          backgroundColor: data,
          height: "60px",
          width: "60px",
        }}
        onClick={() => handleClick()}
        onMouseDown={() => handleClick()}
      />
      {active && (
        <div
          style={{
            background: data,
            width: "60px",
            height: "60px",
            position: "absolute",
            opacity: "0.6",
            top: y - 10,
            left: x - 10,
          }}
          onClick={() => handleCreate()}
        />
      )}
    </>
  );
};

export default SideMenuItem;
