import * as React from "react";
import styled from "styled-components";

interface IProps {
  points: number;
  prefix: string;
  when: string;
}

const Points = ({ when, prefix, points }: IProps) => (
  <Wrapper>
    <When>{when}</When>
    <Numbers>
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
`;

const Numbers = styled.div`
  font-size: 4rem;
  font-weight: 600;
`;

export { Points };
