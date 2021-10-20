import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie } from "data/usecases/persist";
import { uuid } from "uuidv4";

export const getInitialContent: any = createAsyncThunk(
  "posts/getInitialContent",
  async () => {
    const cookie = {
      content: getCookie("content"),
      actions: getCookie("actions"),
    };
    const dataContent = await JSON.parse(cookie.content);
    const dataActions = await JSON.parse(cookie.actions);
    console.log({ content: dataContent, actions: dataActions });
    return { content: dataContent, actions: dataActions };
  }
);
/*
    That's the handle of all states and actions of the application, let's see some more of them bellow:
*/
export const contentSlice = createSlice({
  name: "contentSlice",
  initialState: { content: [], created: 0, deleted: 0 },
  /* Here we set the initial state of this state. Is going to have all the  squares, colors, positions 
    sizes, isActive, isUndraggable, index, and so many more things that our imagination allow us to think
    Everything here is also going to be store inside of the cookie. So, if the user leaves our application
    when he get's back, things will be exactly the way he left.

    We are also going to manipulate create and delete, responsible to set the total amount of the user.
    In index, it's going to interfer if the user is going to get an empty state or a populated state.
*/
  reducers: {
    ADD_CONTENT: (state: any, action) => {
      /*Here, thats the main component we are going to create. As we aren't 
            going to use the resize property this time, it will be left static, but can be changed wherever we want to,
            */
      const newContent = {
        id: uuid(),
        size: {
          height: 90,
          width: 90,
        },
        position: {
          x: action.payload.position.x,
          y: action.payload.position.y,
        },
        color: action.payload.color,
        isActive: false,
        isUndraggable: false,
        isResizable: true,
        index: action.payload.index,
      };
      //------------------------------
      state.content.push(newContent);
      /*
            Here, we are pushsing this new item we created to state.content, where all the application 
            squares should be. 
            */
      state.created = state.created + 1;
      /*
            As long as we've created this new item in the squares array, let's also set created to one more 
            than it was before.
            */
    },

    SET_ACTIVE: (state: any, action) => {
      state.content.map((item: any) =>
        item.id !== action.payload.id
          ? (item.isActive = false)
          : (item.isActive = true)
      );
      /*
        Here, we are going to look throw every item of the square's array and see whether it is
        equal to the content of the action we've passed in or not. If it's not, the function is going to
        set it to unaction, if it is, the funcion is going to set it to active.
        */
    },

    DELETE_CONTENT: (state: any) => ({
      ...state,
      content: state.content.filter((item: any) => !item.isActive),
      deleted: state.deleted + 1,
      /*
            That's the function responsible for deleting items from the square's array. 
            it's going to look throw all the items and send back to us a brand new array.
            this array contains all the items it had before, except the item who has the id equal
            to the value of the action passed to it.
        */
    }),

    SET_DRAGGABLE: (state: any, action) => {
      state.content[action.payload.index].isUndraggable =
        !state.content[action.payload.index].isUndraggable;
    },
    /*
            That's the function responsible for locking our square in the same place. 
            The function is going to get exactly the position of the square in the array ang change
            the state of isUndraggable to the OPOSITE of what it was before. so it changes 1 - 0 - 1 
        */

    SET_RESIZABLE: (state: any, action) => {
      state.content[action.payload.index].isResizable =
        !state.content[action.payload.index].isResizable;
      /*
            We are not going to use this function now, but is does exactly the same the one above does.
            */
    },

    UPDATE_POSITION: (state: any, action) => {
      state.content[action.payload.index].position = {
        x: action.payload.x,
        y: action.payload.y,
      };
      /*
            That's a function dependable of React Rnd Right now. It basically is going to recive
            the index of the square in the array and update it with the props of axis x and y 
            received from react rdn
        */
    },

    UPDATE_SIZE: (state: any, action) => {
      state.content[action.payload.index].size = {
        height: action.payload.h,
        width: action.payload.w,
      };
      /*
            React rdn is going to send us the amount changed in height and width. I just summed them with the
            height and width we had before. This function gets the position and updates it's size object
            */
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getInitialContent.fulfilled, (state, action: any) => {
      state.content = action.payload.content;
      state.created = action.payload.actions.created;
      state.deleted = action.payload.actions.deleted;
      //Here we are just setting some asynchronous states to the store.
    });
  },
});

export const {
  ADD_CONTENT,
  DELETE_CONTENT,
  SET_ACTIVE,
  SET_DRAGGABLE,
  SET_RESIZABLE,
  UPDATE_POSITION,
  UPDATE_SIZE,
} = contentSlice.actions;

export default contentSlice.reducer;
