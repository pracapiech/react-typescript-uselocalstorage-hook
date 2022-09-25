import { useLocalStorage } from "./hooks/useLocalstorage";
import { Wrapper } from "./components/Wrapper";
import { Couter } from "./components/Counter";
import { Button } from "./components/Button";

export function App() {
  const [count, setCounter] = useLocalStorage<number>("counter", 0);

  return (
    <Wrapper>
      <Button onClick={() => setCounter((prev) => prev + 1)}>&#43;</Button>
      <Couter>{count}</Couter>
      <Button onClick={() => setCounter((prev) => prev - 1)}>&#8209;</Button>
    </Wrapper>
  );
}
