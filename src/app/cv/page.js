export default function CV() {
    return (
      <div>
        <nav style={{ display: "flex", justifyContent: "space-around", padding: "1rem", backgroundColor: "#f0f0f0" }}>
          <a href="/home" style={{ textDecoration: "none", color: "black" }}>Home</a>
          <a href="/cv" style={{ textDecoration: "none", color: "black" }}>CV</a>
        </nav>
        <section style={{ padding: "2rem" }}>
          <h1>Curriculum Vitae</h1>
          <p>
            Contact Information: <br />
            Name: Ewoud van Vooren <br />
            Email: <a href="mailto:ewoud.vanvooren@gmail.com">ewoud.vanvooren@gmail.com </a>
          </p>
        </section>
      </div>
    );
  }