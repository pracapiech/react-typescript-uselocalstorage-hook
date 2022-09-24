interface WrapperInterface {
  children: React.ReactNode;
}

export function Wrapper({ children }: WrapperInterface) {
  return <div>{children}</div>;
}
