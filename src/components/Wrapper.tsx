import styled from "styled-components";

interface WrapperInterface {
  children: React.ReactNode;
}

const WrapperElement = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export function Wrapper({ children }: WrapperInterface) {
  return <WrapperElement>{children}</WrapperElement>;
}
