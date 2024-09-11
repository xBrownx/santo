import './App.css'

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

    return (
        <>
            <Header />
            <Landing />
            <Overview />
            <Location />
            <Availability />
            <ScrollingText />
            <Agency />
            <Enquire />
            <Footer />
        </>
    )
}

export default App
