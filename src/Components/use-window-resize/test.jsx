import { useState } from "react";
import useWindowResize from "./useWindowResize";
export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>useWindowResize hook </h1>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
}
