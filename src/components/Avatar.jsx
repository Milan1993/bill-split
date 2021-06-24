import styled from "styled-components";
import test from "../images/wd.jpeg";

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 35px;
  }
`;

const Avatar = () => {
  return (
    <Button>
      <img src={test} />
    </Button>
  );
};

export default Avatar;
