import { trpc } from "../trpc";

export function App() {
  const { data, isLoading } = trpc.user.getUsers.useQuery();

  if (isLoading) return <span>Loading ...</span>;
  if (!data) return <span>No data found</span>

  return data.map(d => <div key={d.id}>{d.name}</div>);
}

export default App;
