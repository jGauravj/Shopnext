import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import Searchbar from "./Searchbar";
import Carticon from "./Carticon";
import FavoriteButton from "./FavoriteButton";
import Signin from "./Signin";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="bg-white py-5 ">
      <Container className="flex justify-between items-center text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 md:gap-0 justify-start">
          <MobileMenu />
          <Logo className="" />
        </div>
        <HeaderMenu />
        <div className="w-auto flex md:w-1/3 place-items-center justify-end gap-5">
          <Searchbar />
          <Carticon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <Signin />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
