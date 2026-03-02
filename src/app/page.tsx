import { Header } from "@/components/Header";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";

//page.tsx (server) -> menu.tsx (server) -> link (client)

export default function HomePage() {
  return (
    <div>
      <SpinLoader containerClasses={clsx("min-h-[500px]", "bg-amber-500")} />
    </div>
  );
}
