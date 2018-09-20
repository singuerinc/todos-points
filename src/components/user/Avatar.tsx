import * as OpenColor from "open-color";
import styled from "styled-components";

const Avatar = styled.div`
  width: 8rem;
  height: 8rem;
  border: 4px solid ${OpenColor.white};
  background-color: ${OpenColor.gray[9]};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  margin: 1rem 0 0.5rem;
`;

export { Avatar };
