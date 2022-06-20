import * as React from "react";
import "./app.scss";
import Item from "../Item";
import { getData } from "./appSlice";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getData());
    window.localStorage.setItem("data", JSON.stringify(data));
  }, [dispatch]);
  return (
    <main>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Item item={item} />
          </div>
        );
      })}
    </main>
  );
};

export default Index;
