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
    theme: OpenColor.cyan,
    user: {
      name: "Name 1",
      points: {
        today: 15,
        week: 50
      }
    }
  },
  {
    theme: OpenColor.orange,
    user: {
      name: "Name 2",
      points: {
        today: 10,
        week: 30
      }
    }
  },
  {
    theme: OpenColor.lime,
    user: {
      name: "Name 2",
      points: {
        today: 10,
        week: 30
      }
    }
  },
  {
    theme: OpenColor.yellow,
    user: {
      name: "Name 2",
      points: {
        today: 10,
        week: 30
      }
    }
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
