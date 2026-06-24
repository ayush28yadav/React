function CounterBox({ num, setnum, secret }) {
  return (
    <section className="counter-card">
      <p className="counter-label">Test counter</p>
      <h2>{num}</h2>
      <p>{secret}</p>
      <div className="counter-actions">
        <button type="button" onClick={() => setnum((prevCount) => prevCount + 1)}>
          Increase
        </button>
        <button type="button" onClick={() => setnum(0)} className="secondary-button">
          Reset
        </button>
      </div>
    </section>
  )
}

export default CounterBox
