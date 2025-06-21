import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRting";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   //   {/* <StarRating
//   //     maxRating={5}
//   //     color="black"
//   //     messages={["Terrible", "Bad", "Good", "Amazing"]}
//   //   /> */}
//   //   <App />
//   // </React.StrictMode>

// );
