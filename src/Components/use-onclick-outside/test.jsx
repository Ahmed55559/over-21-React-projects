import { useRef, useState } from "react";
import useOnClickOutside from "./useOutsideClick";
export default function UseOnClickOutsideTest() {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowModal(false));
  return (
    <div>
      <h1>useOnClickOutside hook </h1>
      <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              backgroundColor: "white",
              padding: "20px",
            }}
            ref={ref}
          >
            <h2>Modal</h2>
            <p>Click outside to close</p>
          </div>
        </div>
      )}
    </div>
  );
}
