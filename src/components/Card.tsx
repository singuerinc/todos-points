import * as OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";
import { IUser } from "../core/IUser";
import { UserProfile } from "./UserProfile";

interface IState {
  user: IUser;
}

class Card extends React.Component {
  public state = {
    user: {
      name: "Name"
    }
  };

  public render() {
    const { user } = this.state;
    return (
      <StyledCard>
        <UserProfile user={user} />
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
  flex: 1 1 auto;
  border: 4px solid ${OpenColor.violet[6]};
  background-color: ${OpenColor.violet[9]};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 1.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

export { Card };
