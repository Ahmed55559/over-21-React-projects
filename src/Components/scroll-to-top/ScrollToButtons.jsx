import { useRef } from "react";
import useFetch from "../use-fetch/useFetch";

export default function ScrollToButtons() {
  const [data, pending, error] = useFetch("https://dummyjson.com/users");
  const buttomRef = useRef(null);
  const topRef = useRef(null);
  if (pending) return <h1>Loading...</h1>;
  if (error) return <h1>Error occured : {error}</h1>;
  const handleScrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
    // console.log(topRef);
  };
  const handleScrollToButtom = () => {
    buttomRef.current.scrollIntoView({ behavior: "smooth" });
    // console.log(buttomRef);
  };
  return (
    <div>
      <h1>Scroll buttons</h1>
      <div className="topRef" ref={topRef}></div>
      <button onClick={handleScrollToButtom}>Scroll to buttom</button>
      {data && data.users && data.users.length ? (
        <ul>
          {data.users.map((user, index) => (
            <li key={index}>{user.firstName}</li>
          ))}
          {data.users.map((user, index) => (
            <li key={index}>{user.lastName}</li>
          ))}
        </ul>
      ) : null}
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <div className="buttomRef" ref={buttomRef}></div>
    </div>
  );
}
