import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";

import { SelectedPage } from "../../helper/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../helper/ActionButton";
import Link from "./link";
import ActionButtonLogin from "../../helper/ActionButtonLogin";


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);




  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>

      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >


        <div className={`${flexBetween}  mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>

            <img alt="logo" src={Logo} />



            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link

                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link

                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link

                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link

                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link

                    page="Login"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                </div>
                <div className={`${flexBetween} gap-8`}>
                  <ActionButtonLogin setSelectedPage={setSelectedPage}>
                    <p>Login</p>
                  </ActionButtonLogin>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    <p>Create Account</p>
                  </ActionButton>

                </div>
              </div>
            ) : (
              <button
                className="  rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />

              </button>
            )}
          </div>
        </div>
      </div>


      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 h-[520px] w-[180px] z-40 bg-secondary-500 drop-shadow-lg rounded-md">

          <div className="flex justify-end p-5">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>


          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link

              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link

              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link

              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link

              page="Login"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;