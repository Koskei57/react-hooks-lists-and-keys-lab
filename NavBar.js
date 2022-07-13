import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const NavLinks = links.map((Nav) => (
    <a key={Nav} href={"#" + Nav}> {Nav} </a>
  ));

  return (
    <nav>{NavLinks}</nav>
  );
}

export default NavBar;
