interface CouterInterface {
  children: React.ReactNode;
}

export function Couter({ children }: CouterInterface) {
  return <h1>{children}</h1>;
}
