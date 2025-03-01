import React from "react";
import MenuItem from "./menu-item";
import "./tree-menu.css";
function MenuList({ list = [] }) {
  return (
    <ul className="menu-list">
      {list && list.length
        ? list.map((item, index) => <MenuItem key={index} item={item} />)
        : null}
    </ul>
  );
}
export default MenuList;
