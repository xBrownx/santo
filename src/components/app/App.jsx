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
        overview: useRef(),
        location: useRef(),
        availability: useRef(),
        agency: useRef(),
        enquire: useRef(),
    }
    return (
        <>
            <Header $pageRefs={pageRefs} />
            <Landing $pageRef={pageRefs.landing} />
            <Overview $pageRef={pageRefs.overview}/>
            <Location $pageRef={pageRefs.location}/>
            <Availability $pageRef={pageRefs.availability}/>
            <ScrollingText />
            <Agency $pageRef={pageRefs.agency}/>
            <Enquire $pageRef={pageRefs.enquire}/>
            <Footer />
        </>
    )
}

export default App
