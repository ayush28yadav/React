import { useContext } from 'react'
import CountContext from './CountContext'

function ContextChild() {
  const count = useContext(CountContext)

  return <p>Grandchild: count = {count}</p>
}

export default ContextChild
