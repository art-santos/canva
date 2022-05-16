import React from "react";
import Content from "infrastructure/components/organisms/Content";
import SideMenu from "infrastructure/components/organisms/SideMenu";
import { Box, Flex } from "@chakra-ui/layout";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { persistCookie } from "data/usecases/persist";
import { NextPage } from "next";
import { getInitialContent } from "app/redux/features/content.slice";

/*Firstly, let's start with the index page. I could use serverside props to render this 
page from server side, but i'm already using cache for almost all the css via emotionCache*/

const Home: NextPage = () => {
  const content = useAppSelector((state) => state.content);
  const created = useAppSelector((state) => state.content.created);
  const deleted = useAppSelector((state) => state.content.deleted);
  const dispatch = useAppDispatch();

  //Hero we are goind to activate the async thunks to check if there's any cookies with data in our browser
  React.useEffect(() => {
    dispatch(getInitialContent({}));
  }, []);

  /*Here, this use effect is a callback that persist the data in the cookie everytime we make any changes to the content data
  if the user created more than he deleted, we are going to set the last state.
  Is he deleted the same amount we are going to return an empty state
*/
  React.useEffect(() => {
    if (created > deleted) {
      if (content.content[0]) {
        persistCookie("content", content.content);
      }
    } else {
      persistCookie("content", content.content);
    }
  }, [content]);

  React.useEffect(() => {
    persistCookie("actions", { created, deleted });
  }, [created, deleted]);

  //That's our layout =)
  return (
    <>
      <Flex h="full">
        <Box w={1 / 7}>
          <SideMenu />
        </Box>
        <Box w={6 / 7}>
          <Content />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
