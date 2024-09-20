import { memo } from 'react';
import { landingConst as CONST } from './constants'
import { Page } from "../../templates/index.jsx";
import BackgroundVideo from "../../molecules/backgroundVideo/index.jsx";
import Arrow from "../../../assets/Arrow.svg";
import { Link } from "../../atoms/index.jsx";
import { ArrowContainer } from "./styles.jsx";


function Landing(props) {
    return (
        <Page
            $bgPrimary
            $fullScreen
            $pageRef={props.$pageRef}
        >
            <BackgroundVideo src={CONST.assets.backgroundVideo} />
            <ArrowContainer>
                <Link>
                    <Arrow onClick={() => props.navigateTo("about")} />
                </Link>
            </ArrowContainer>
        </Page>
    );
}


export default memo(Landing);