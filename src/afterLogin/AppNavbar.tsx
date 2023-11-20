import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { userStore } from "../state/userStore";
import { Models } from "appwrite";
import LogoutModal from "./LogoutModal";
import { Link } from "react-router-dom";
import React from "react";

export default function AppNavbar() {
  const user = userStore(
    (state) => state.user
  ) as Models.User<Models.Preferences>;
  
  return (
    <Navbar className="shadow-lg ">
      <NavbarBrand>
        <Link to="/Home">
          <p className="font-bold text-inherit">PS-Studio</p>
        </Link>
      </NavbarBrand>
      
      <NavbarItem className="m-0">
        <Link to="/Profile">
           <h1 className="font-bold text-inherit">Profile</h1>
        </Link>   
      </NavbarItem>

      <NavbarItem>
        <Link to="/Portfolio">
          <h1 className="font-bold text-inherit">Portfolio</h1>
        </Link>
      </NavbarItem>

      <NavbarContent justify="end">
        <NavbarItem>
          <h1 className="font-bold text-inherit">{user.name}</h1>
        </NavbarItem>

        <NavbarItem>
          <LogoutModal />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
