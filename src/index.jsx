import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.scss";

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
