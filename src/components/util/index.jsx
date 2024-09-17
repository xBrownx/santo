import { css } from 'styled-components';
import * as CALCS from './calcs';

export const Style = {}

Style.width = CALCS.pxToViewWidth;
Style.height = CALCS.pxToViewHeight;
Style.fontSize = CALCS.pxToFontSize;
Style.customHeight = CALCS.pxToCustomHeight;


Style.colour = {
    primary: '#9F472B',
    secondary: '#4160AE',
    secondaryDark: '#2E4683',
    neutralLight: '#F6FAF9',
    neutralDark: '#0C0C20',
}

Style.font = {
    primary: css``,
    secondary: css``,
}


