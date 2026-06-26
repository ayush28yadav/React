import PropDrillChild from './PropDrillChild'

function PropDrillMiddle({ count }) {
  return (
    <div>
      <p>Middle: passing count down</p>
      <PropDrillChild count={count} />
    </div>
  )
}

export default PropDrillMiddle
