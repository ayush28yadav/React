function HomePage() {
  return (
    <section className="page-card">
      <span className="page-tag">Home</span>
      <h1>Welcome to a simple React Router example</h1>
      <p>
        This project uses a navbar and route-based pages so you can move around
        the app without reloading the browser.
      </p>

      <div className="info-grid">
        <article className="info-box">
          <h2>What routing means</h2>
          <p>
            Routing lets a React app show different components for different
            URLs like <code>/about</code> or <code>/test</code>.
          </p>
        </article>

        <article className="info-box">
          <h2>What to notice here</h2>
          <p>
            The navbar stays visible, but the main page content changes based on
            the selected route.
          </p>
        </article>
      </div>
    </section>
  )
}

export default HomePage
