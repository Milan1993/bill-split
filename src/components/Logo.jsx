import styled from "styled-components";
import { ReactComponent as ReactLogo } from "../images/stopwatch.svg";

const LogoSVG = styled(ReactLogo)`
  width: 35px;
  fill: white;
  vertical-align: middle;
`;

const LogoContainer = styled.a`
    display: flex;
    text-decoration: none;
    color: white;
    gap: 8px;

    span {
        display: block;
    }

    span:first-child { 
        font-weight: bold;
        font-size: 2em;
        line-height: 25px;
        letter-spacing: 5px;
    }
`;
const Logo = () => {
  return (
    <LogoContainer href="/">
      <LogoSVG />
      <div>
        <span>FIT</span>
        <span>chaser</span>
      </div>
    </LogoContainer>
  );
};

export default Logo;
