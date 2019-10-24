import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '@/i18n'

class Error extends React.Component {
  constructor (props) {
    super(props)
  }

  static getInitialProps = async ({ res, err }) => {
    console.log(this.props)
    return { namespacesRequired: ['common'] }
  }

  render () {
    return (
      <p>error</p>
    )
  }
}

Error.defaultProps = { statusCode: null }

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Error)
