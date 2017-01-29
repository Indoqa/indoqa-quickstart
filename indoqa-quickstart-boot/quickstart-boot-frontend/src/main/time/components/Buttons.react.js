import React, {PropTypes} from 'react'

const Buttons = ({loadVienna, loadNewYork, loadInvalidLocation, clear}) => (
  <div>
    <div>
      <button onClick={loadVienna}> Vienna </button>
      <button onClick={loadNewYork}> New York </button>
      <button onClick={loadInvalidLocation}> Invalid Location </button>
      <button onClick={clear}> Clear </button>
    </div>
  </div>
)

Buttons.propTypes = {
  loadVienna: PropTypes.func.isRequired,
  loadNewYork: PropTypes.func.isRequired,
  loadInvalidLocation: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
}

export default Buttons
