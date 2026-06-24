function AboutPage() {
  return (
    <section className="page-card">
      <span className="page-tag">About</span>
      <h1>Why beginners often start with routing</h1>
      <p>
        Routing is one of the first real app features that makes a project feel
        bigger than a single page component.
      </p>

      <div className="stack-list">
        <div className="stack-item">
          <h2>Shared layout</h2>
          <p>
            A navbar, footer, or sidebar can stay the same while only the page
            content switches.
          </p>
        </div>

        <div className="stack-item">
          <h2>Clear URLs</h2>
          <p>
            Pages like <code>/about</code> and <code>/learn</code> make the app
            easier to understand and navigate.
          </p>
        </div>

        <div className="stack-item">
          <h2>Better structure</h2>
          <p>
            Each page can live in its own component file, which keeps the code
            cleaner as the project grows.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
