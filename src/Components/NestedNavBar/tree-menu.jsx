import React from "react";
import MenuList from "./menu-list";
import "./tree-menu.css";
const TreeMenu = ({ menus }) => {
  return (
    <nav>
      <MenuList list={menus} />
    </nav>
  );
};

export default TreeMenu;
