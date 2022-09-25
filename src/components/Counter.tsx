import styled from "styled-components";

interface CouterInterface {
  children: React.ReactNode;
}

const CounterElement = styled.h1`
  width: 80px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #2f3e46;
  overflow: hidden;
`;

export function Couter({ children }: CouterInterface) {
  return <CounterElement>{children}</CounterElement>;
}
