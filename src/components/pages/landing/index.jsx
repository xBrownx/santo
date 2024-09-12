import { memo } from 'react';
import { landingConst as CONST } from './constants'
import { Page } from "../../templates/index.jsx";
import img from "../../../assets/Landing-Placeholder.png"


function Landing() {
    return (
        <Page
            $bgPrimary
            $fullScreen
        >
            <img src={img} alt="Landing Placeholder" />
        </Page>
    );
}


export default memo(Landing);