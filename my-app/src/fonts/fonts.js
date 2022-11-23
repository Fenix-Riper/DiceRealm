import { createGlobalStyle } from 'styled-components';

import RubikDistressed from './RobotoCondensed-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'RobotoCondensed';
        src: local('RobotoCondensed'), local('RobotoCondensed'),
        url(${RubikDistressed}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
`;