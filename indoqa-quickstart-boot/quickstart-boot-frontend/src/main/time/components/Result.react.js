import React, {PropTypes} from 'react'

const Result = ({result, error, isLoading}) => {
  if (isLoading) {
    return <span> loading.. </span>
  }

  if (error) {
    return <span> ERROR fetching time: {error} </span>
  }

  if (!result) {
    return <span> Select a location! </span>
  }

  return (
    <div>
      <div> current time: {result.get('time')} </div>
      <div> country: {result.get('countryName')} </div>
      <div> timezone: {result.get('timezoneId')} </div>
    </div>
  )
}

Result.propTypes = {
  result: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default Result
