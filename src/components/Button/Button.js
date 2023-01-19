import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from 'components/Button/Button.styles'

const Button = ({ children }) => <Wrapper>{children}</Wrapper>

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  children: null,
}

export default Button
