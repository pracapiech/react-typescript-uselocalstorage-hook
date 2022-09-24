interface ButtonInterface {
  children: React.ReactNode;
  onClick: () => void;
}

export function Button({ children, onClick }: ButtonInterface) {
  return <button onClick={onClick}>{children}</button>;
}
