import { gql, useQuery } from "@apollo/client";
import { Fragment } from "react";
import Container from "../UI/Container";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const GET_MENU = gql`
  query GET_HEADER_MENU {
    menuItems(where: { location: HCMS_MENU_HEADER, parentId: "0" }) {
      nodes {
        label
        id
        url
        childItems {
          nodes {
            label
            id
            url
          }
        }
      }
    }
  }
`;

const Main = props => {
  const { data, loading, error } = useQuery(GET_MENU);
  let menus;

  if (!loading && !error && data) {
    menus = data.menuItems.nodes;
  }
  return (
    <Fragment>
      <Header menu={menus} />
      <Container>{props.children}</Container>
      <Footer />
    </Fragment>
  );
};

export default Main;
