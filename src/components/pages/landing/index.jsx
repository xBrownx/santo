import { memo } from 'react';
import { landing as CONST } from '../../../constants/index.jsx'
import { Page } from "../../templates/index.jsx";
import img from "../../../assets/Landing-Placeholder.png"



    function Landing() {
        return (
            <Page $bgPrimary $fullScreen>
                <img src={img} alt="Landing Placeholder" />
            </Page>
        );
    }


export default memo(Landing);