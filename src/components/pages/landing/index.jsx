import { memo } from 'react';
import { landingConst as CONST } from './constants'
import { Page } from "../../templates/index.jsx";
import bg from '../../../assets/bg.png'


function Landing(props) {
    return (
        <Page
            $bgPrimary
            $fullScreen
            $pageRef={props.$pageRef}
        >
            <img src={bg} alt={""} style={{height: '100%', objectFit: 'contain'}} />
        </Page>
    );
}


export default memo(Landing);