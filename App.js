import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";







const Footer = () => {
  return (
    <div className="footer">
      <h4 className="copy-right" > Copyright©2024! </h4>
    </div>
  )
}
const AppLayout = () => {
  return (<div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppLayout />
);