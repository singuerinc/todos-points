import * as OpenColor from "open-color";
import styled from "styled-components";

interface IProps {
  src: string;
}

const Avatar = styled.img<IProps>`
  width: 8rem;
  height: 8rem;
  border: 0.5rem dotted rgba(255, 255, 255, 0.1);
  background-color: ${OpenColor.white};
  background-image: url(${props => props.src}) no-repeat;
  background-size: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 1rem 0 0.5rem;
`;

export { Avatar };
