function LearnPage() {
  return (
    <section className="page-card">
      <span className="page-tag">Learn</span>
      <h1>Key React Router ideas in this example</h1>

      <div className="stack-list">
        <div className="stack-item">
          <h2>BrowserRouter</h2>
          <p>
            Wraps the app so React Router can watch the browser URL and render
            the correct page.
          </p>
        </div>

        <div className="stack-item">
          <h2>Routes and Route</h2>
          <p>
            These match a path like <code>/test</code> to a component like the
            test page.
          </p>
        </div>

        <div className="stack-item">
          <h2>NavLink</h2>
          <p>
            This works like a link, but it can also style the active page so
            users can see where they are.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LearnPage
