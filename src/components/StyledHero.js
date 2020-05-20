// styled components: Attach styles to components which will be immediately rendered. dymanically access image using styled components

import styled from 'styled-components'
import defaultImg from '../images/room-1.jpeg';

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => props.img? props.img : defaultImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;