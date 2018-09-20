import * as OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";
import { Card } from "./components/Card";

class App extends React.PureComponent {
  public render() {
    return (
      <Wrapper>
        <Card />
        <Card />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: ${OpenColor.violet[9]};
  display: flex;
  height: 100%;
`;

export { App };
