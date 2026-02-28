import { Header } from "@/components/Header";

//page.tsx (server) -> menu.tsx (server) -> link (client)

export default function HomePage() {
  console.log("HomePage");

  return (
    <div>
      <Header />
    </div>
  );
}
