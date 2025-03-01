import useFetch from "./useFetch";

export default function TestUseFetchHook() {
  const [data, pending, error] = useFetch("https://dummyjson.com/recipes", {});
  console.log(data, pending, error); // data, pending, error
  if (pending) return <h1>loading</h1>;
  if (error) return <div>some error occured</div>;
  return (
    <div>
      <h1>useFetch hook</h1>
      {data && data.recipes
        ? data.recipes.map((item, index) => <div key={index}>{item.name}</div>)
        : null}
    </div>
  );
}
