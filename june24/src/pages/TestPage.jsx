import { useState } from 'react'
import CounterBox from '../components/CounterBox'

function TestPage() {
  const [count, setCount] = useState(0)

  return (
    <section className="page-card">
      <span className="page-tag">Test Page</span>
      <h1>Try an interactive route</h1>
      <p>
        This page keeps its own local state. Use it to test that navigation is
        working and that React can still render normal interactive components
        inside a route.
      </p>

      <CounterBox
        num={count}
        setnum={setCount}
        secret="This counter lives only on the Test page."
      />
    </section>
  )
}

export default TestPage
