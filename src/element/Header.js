import React from "react";

function Header(props) {
  return (
    <>
      <div>Header</div>
      <nav></nav>
      {props.childern}
    </>
  );
}

export default Header;
