import { Rnd } from "react-rnd";
import React from "react";
import ToggleDelete from "../atoms/Delete";
import ToggleDrag from "../atoms/Drag";
import { useAppDispatch } from "app/redux/hooks";
import { SET_ACTIVE, UPDATE_POSITION } from "app/redux/features/content.slice";
import { ContentInterface } from "domain/entities/Content";

/*That's the most important component of the application.
He's the responsible for setting size, position and tell if the component is active or not.
Handling those three responsabilities and also setting visibility for the component is a lot of stuff
to do, but as i used an external library, called React RND, the jobs gets done a lot easier.
Otherway, this component would just be responsible for seting view to the component data, and i would have
passing some mouse location props to him. Such as i did in the sidemenu component.
*/

const DraggableComponent: React.FC<ContentInterface> = ({
  id,
  size,
  position,
  color,
  index,
  isActive,
  isUndraggable,
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Rnd
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //As
          border: isActive ? "3px solid red" : "0px",
          background: color,
        }}
        position={{
          x: position.x,
          y: position.y,
        }}
        default={{
          height: size.height,
          width: size.width,
          x: position.x,
          y: position.y,
        }}
        height={size.height}
        width={size.width}
        minHeight={100}
        minWidth={100}
        enableResizing={true}
        disableDragging={isUndraggable}
        bounds={"parent"}
        /*We we click here we a going to set the component active using his id as a parameter
        Only one of the is going to be used as an active element in our array
        */
        onClick={() => {
          dispatch(SET_ACTIVE({ id: id }));
        }}
        /*When the dragging stops, position and element position in the array are going to be also set
        in this dispatch. Node property is provided by React Rnd
        */
        onDragStop={(e, node) => {
          dispatch(UPDATE_POSITION({ index: index, x: node.x, y: node.y }));
        }}
      >
        {isActive && (
          <>
            {/* these button are going to be visible when the component is active  */}
            <ToggleDelete isActive={isActive} />
            <ToggleDrag index={index} isUndraggable={isUndraggable} />
          </>
        )}
      </Rnd>
    </>
  );
};

export default DraggableComponent;
