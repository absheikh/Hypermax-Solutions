import React from "react";

export default function Home(props) {
  return (
    <div>
      {props.header}
      Home
      {props.footer}
    </div>
  );
}
