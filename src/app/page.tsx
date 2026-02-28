import clsx from "clsx";

export default function HomePage() {
  return (
    <h1
      className={clsx(
        "text-xl",
        "font-bold",
        "text-emerald-500",
        "hover:text-emerald-50",
        "hover:bg-emerald-500",
        "duration-1000",
      )}
    >
      Testando
    </h1>
  );
}
