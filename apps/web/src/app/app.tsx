import { trpc } from "../trpc";

export function App() {
  const onClick = async () => {
    const user = await trpc.user.getUserById.query('0');

    console.log(user);
  };

  return (
    <button onClick={onClick}>Test Trpc</button>
  );
}

export default App;
