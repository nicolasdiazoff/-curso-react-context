import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';
import { roboto } from './roboto';

export default createGlobalStyle`
	${normalize}
	${roboto}
`;
