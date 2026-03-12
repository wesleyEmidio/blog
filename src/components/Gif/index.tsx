import Image from "next/image";

export function GifPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Visualização de GIF</h1>

      <Image
        src="/images/desvio radial.gif"
        alt="GIF animado"
        width={400}
        height={400}
        unoptimized
      />
    </div>
  );
}
