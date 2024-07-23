import Navbar from "./components/navbar";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <main className="flex w-full flex-col h-full justify-start items-start">
      <Navbar />
      <Dashboard />
    </main>
  );
}
