import ContextChild from './ContextChild'

function ContextMiddle() {
  return (
    <div>
      <p>Middle: no count props passed here</p>
      <ContextChild />
    </div>
  )
}

export default ContextMiddle
