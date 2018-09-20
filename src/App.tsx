import * as OpenColor from "open-color";
import * as React from "react";
import styled, { injectGlobal } from "styled-components";
import { Card } from "./components/Card";
import { IUser } from "./core/IUser";

interface IUserObj {
  user: IUser;
  theme: OpenColor.color;
}

const users: IUserObj[] = [
  {
    theme: OpenColor.green,
    user: { name: "Name" }
  },
  {
    theme: OpenColor.orange,
    user: { name: "Name" }
  }
];

const App = () => (
  <Wrapper>
    {users.map(u => (
      <Card user={u.user} theme={u.theme} />
    ))}
  </Wrapper>
);

injectGlobal`
  body {
    background-color: ${OpenColor.violet[9]};
  }

  #root {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export { App };
