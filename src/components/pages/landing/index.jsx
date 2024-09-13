import { memo } from 'react';
import { landingConst as CONST } from './constants'
import { Page } from "../../templates/index.jsx";
import bg from '../../../assets/bg.png'


function Landing() {
    return (
        <Page
            $bgPrimary
            $fullScreen
        >
            <img src={bg} alt={""} style={{height: '100%', objectFit: 'contain'}} />

        </Page>
    );
}


export default memo(Landing);