import styled from 'styled-components';
import imgKraftwerkMembers from './../../images/kraftwerk-members.svg';
import imgTempAlbumArt from './../../images/album-trace.png';

const StyledContainer = styled.div`
  position: relative;
  width: 100vh;
  height: 100vh;
  /* background: #abde5d; */
  background-image: url(${imgTempAlbumArt});
  background-size: cover;
`;

const StyledBandMembers = styled.div`
  height: 100vh;
  width: 46vh;
  position: absolute;
  top: 0;
  right: 6vh;
  background: url(${imgKraftwerkMembers});
`;

export { StyledContainer, StyledBandMembers };
