import React from "react";

export interface NavLink {
  id: number;
  name: string;
  link: string;
}

const NavLinks: NavLink[] = [
  { id: 1, name: "About", link: "#" },
  { id: 2, name: "Service", link: "#" },
  { id: 3, name: "Projects", link: "#" },
  { id: 4, name: "Testimonials", link: "#" },
  { id: 5, name: "FAQ", link: "#" },
];

interface NavMenuProps {
  children: (link: NavLink) => React.ReactNode;
}

const NavMenu: React.FC<NavMenuProps> = ({ children }) => {
  return <>{NavLinks.map(children)}</>;
};

export default NavMenu;
