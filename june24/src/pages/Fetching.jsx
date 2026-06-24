import { useState } from 'react'

function Fetching() {
  const [name, setName] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  async function handlePredict() {
    if (!name.trim()) return setResults([])
    setLoading(true)
    const response = await fetch(`https://api.nationalize.io?name=${name}`)
    const data = await response.json()
    setResults(data.country || [])
    setLoading(false)
  }

  return (
    <section className="page-card">
      <h1>Fetching Page</h1>
      <p>Type a name and click predict.</p>
      <div className="counter-actions">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Type a name" />
        <button type="button" onClick={handlePredict}>Predict</button>
      </div>
      {loading && <p>Loading...</p>}
      <ul>
        {results.map((item) => (
          <li key={item.country_id}>
            {item.country_id} - {(item.probability * 100).toFixed(2)}%
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Fetching
