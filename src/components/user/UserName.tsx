import * as OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";

interface IProps {
  name: string;
}

const UserName = ({ name }: IProps) => <StyledUserName>{name}</StyledUserName>;

const StyledUserName = styled.h1`
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  font-size: 3rem;
  font-weight: 600;
  color: ${OpenColor.white};
  text-transform: uppercase;
`;

export { UserName };
