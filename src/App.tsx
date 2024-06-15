import { useEffect, useState } from "react";
import Navbar from "./pages/navbar";
import { SelectedPage } from "./helper/types";
import Home from "./pages/home/Home";
import Benefits from "./pages/benenfits/index";
import OurClasses from "./pages/ourclasses/index";
import ContactUs from "./pages/contactUs/Contact";
import Login from "./pages/login/Login";


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
