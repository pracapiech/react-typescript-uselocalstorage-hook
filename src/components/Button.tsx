import styled from "styled-components";

interface ButtonInterface {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonElement = styled.button`
  width: 48px;
  height: 48px;
  margin: 12px;
  font-size: 16px;
  font-weight: 500;
  font-family: "IBM Plex Mono", monospace;
  color: #2f3e46;
  background-color: #84a98cff;
  border: none;
  border-radius: 12px;
  transition: all 100ms linear;
  &:hover {
    cursor: pointer;
    background-color: #84a98c99;
  }
`;

export function Button({ children, onClick }: ButtonInterface) {
  return <ButtonElement onClick={onClick}>{children}</ButtonElement>;
}
