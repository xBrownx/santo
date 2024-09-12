import { css } from 'styled-components';
import { Calcs as CALCS } from './calcs';

const Style = {}

Style.width = CALCS.pxToViewWidth;
Style.height = CALCS.pxToViewHeight;
Style.fontSize = CALCS.fontSize;

Style.colour = {
    primary: '#9F472B',
    secondary: '#4160AE',
    neutralLight: '#F6FAF9',
    neutralDark: '#0C0C20',
}

Style.font = {
    primary: css``,
    secondary: css``,
}

export default Style;
