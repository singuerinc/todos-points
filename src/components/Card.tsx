import * as React from "react";
import styled from "styled-components";
import { IUser } from "../core/IUser";
import { UserProfile } from "./UserProfile";

interface IProps {
  user: IUser;
  theme: string[];
}

const Card = ({ theme, user }: IProps) => (
  <StyledCard theme={theme}>
    <UserProfile user={user} />
  </StyledCard>
);

interface IStyledCard {
  theme: string[];
}

const StyledCard = styled.div<IStyledCard>`
  flex: 1 1 auto;
  border: 4px solid ${props => props.theme[6]};
  background-color: ${props => props.theme[9]};
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.4);
  border-radius: 1.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

export { Card };
