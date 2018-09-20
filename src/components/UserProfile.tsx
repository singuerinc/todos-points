import * as React from "react";
import styled from "styled-components";
import { IUser } from "../core/IUser";
import { Points } from "./points/Points";
import { Avatar } from "./user/Avatar";
import { UserName } from "./user/UserName";

interface IProps {
  user: IUser;
  theme: string[];
}

const UserProfile = ({ user, theme }: IProps) => (
  <Wrapper>
    <Avatar src={user.avatar} />
    <UserName name={user.name} />
    <WrapperPoints>
      <Points
        theme={theme}
        when="today"
        prefix="+"
        points={user.points.today}
      />
      <Points theme={theme} when="week" prefix="" points={user.points.week} />
    </WrapperPoints>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0.3rem;
  padding: 1rem 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const WrapperPoints = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export { UserProfile };
