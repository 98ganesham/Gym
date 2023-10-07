import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/Home";
import Benefits from "./scenes/benenfits/index";
import OurClasses from "./scenes/ourclasses/index";
import ContactUs from "./scenes/contactUs/Contact";
import Login from "./scenes/login/Login";








function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handelScroll);
    return () => window.removeEventListener('scroll', handelScroll);
  }, []);




  return (
    <>
      <div className="app bg-gray-20">
        <Navbar

          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}

        />

        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Login setSelectedPage={setSelectedPage} />

      </div>


    </>
  )
}

export default App;
