import React from "react";
import PropTypes from 'prop-types'

export const ListItem = ({mark, launch}) => {
  return (
    <>
      <li>{mark} - {launch}</li>
    </>
  )
}

ListItem.propTypes = {
  mark: PropTypes.string.isRequired,
  launch: PropTypes.number
}

ListItem.defaultProps = {
  mark: "Faltou a marca",
  launch: 0
}