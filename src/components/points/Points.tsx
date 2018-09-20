import * as React from "react";
import styled from "styled-components";

interface IProps {
  points: number;
  theme: string[];
  prefix: string;
  when: string;
}

const Points = ({ when, prefix, theme, points }: IProps) => (
  <Wrapper>
    <When>{when}</When>
    <Numbers theme={theme}>
      {prefix}
      {points}
    </Numbers>
  </Wrapper>
);

const Wrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  width: 10rem;
  color: white;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
`;

const When = styled.div`
  font-size: 1.5rem;
  font-family: Lora;
`;

const Numbers = styled.div<{ theme: string[] }>`
  font-size: 4rem;
  font-weight: 600;
  color: ${props => props.theme[2]};
`;

export { Points };
