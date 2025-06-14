export default function Page() {
  return (
    <main className="bg-black text-white px-6 py-12 font-sans">
      {/* Title */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Ewoud Van Vooren</h1>
        <nav className="flex justify-center gap-6 text-lg">
          <a href="#projects" className="underline hover:text-gray-300">Projects</a>
          <a href="#links" className="underline hover:text-gray-300">Links</a>
          <a href="#cv" className="underline hover:text-gray-300">CV</a>
        </nav>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-bold">e</h3>
            <p className="text-sm text-gray-400">e</p>
          </li>
          <li>
            <h3 className="text-xl font-bold">e</h3>
            <p className="text-sm text-gray-400">e</p>
          </li>
        </ul>
      </section>

      {/* Links Section */}
      <section id="links" className="mb-20">
        <h2 className="text-3xl font-semibold mb-4">Links</h2>
        <ul className="space-y-3 text-blue-400">
          <li>
            <a href="https://github.com/EwoudVV" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://youtube.com/]" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">
              YouTube
            </a>
          </li>
        </ul>
      </section>

      {/* CV Section */}
      <section id="cv">
        <h2 className="text-3xl font-semibold mb-4">Curriculum Vitae</h2>
        <p className="text-gray-300 mb-4">
          Ewoud Van Vooren is .
        </p>
        <ul className="text-gray-400 space-y-2 text-sm">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </main>
  );
}
