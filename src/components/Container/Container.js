import Calculator from '../Calculator/Calculator';
// import Pointer from '../Pointer/Pointer';
import * as s from './Container.styles';

const Container = () => (
  <s.StyledContainer>
    <Calculator />
    {/* <Pointer /> */}
    <s.StyledBandMembers />
  </s.StyledContainer>
);

export default Container;
