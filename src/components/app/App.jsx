import './App.css'
import { useRef } from 'react';

import Header from "../organisms/header";
import Landing from "../pages/landing";
import Overview from "../pages/overview";
import Location from "../pages/location";
import Availability from "../pages/availability";
import Agency from "../pages/agency";
import Enquire from "../pages/enquire";
import Footer from "../organisms/footer";
import ScrollingText from "../organisms/scrollingText/index.jsx";


function App() {

    const pageRefs = {
        landing: useRef(),
        about: useRef(),
        location: useRef(),
        site: useRef(),
        agency: useRef(),
        enquire: useRef(),
    }

    const navigateTo = (pageId) => {

        setTimeout(() => {
            pageRefs[pageId].current.scrollIntoView({
                behavior: "smooth",
                block: 'start'
            })
        }, 100);
    }

    return (
        <>
            <Header
                $pageRefs={pageRefs}
                navigateTo={navigateTo}
            />
            <Landing
                $pageRef={pageRefs.landing}
                navigateTo={navigateTo}
            />
            <Overview $pageRef={pageRefs.about}/>
            <Location $pageRef={pageRefs.location}/>
            <Availability $pageRef={pageRefs.site}/>
            <ScrollingText />
            <Agency $pageRef={pageRefs.agency}/>
            <Enquire
                $pageRef={pageRefs.enquire}
                navigateTo={navigateTo}
            />
            <Footer />
        </>
    )
}

export default App
