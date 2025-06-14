import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-around", padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <a href="#home" style={{ textDecoration: "none", color: "black" }}>Home</a>
        <a href="#cv" style={{ textDecoration: "none", color: "black" }}>CV</a>
      </nav>
      <section id="home" style={{ padding: "2rem" }}>
        <h1>home</h1>
        <p>ewoud website stuff</p>
      </section>
      <section id="cv" style={{ padding: "2rem" }}>
        <h1>Curriculum Vitae</h1>
        <p>cv stuff</p>
      </section>
    </div>
  );
}
