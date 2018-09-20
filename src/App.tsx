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
      avatar: "https://api.adorable.io/avatars/128/5.png",
      name: "Noemí",
      points: {
        today: 15,
        week: 50
      }
    }
  },
  {
    theme: OpenColor.orange,
    user: {
      avatar: "https://api.adorable.io/avatars/128/8.png",
      name: "Nahuel",
      points: {
        today: 10,
        week: 30
      }
    }
  },
  {
    theme: OpenColor.lime,
    user: {
      avatar: "https://api.adorable.io/avatars/128/7.png",
      name: "Hugo",
      points: {
        today: 10,
        week: 30
      }
    }
  },
  {
    theme: OpenColor.yellow,
    user: {
      avatar: "https://api.adorable.io/avatars/128/4.png",
      name: "Luca",
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
