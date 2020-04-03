import React from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash/fp'

import Summary from 'components/Summary'

import { RootView } from './styles'

const Home = ({ listsById }) => (
  <RootView>
    {map(summary => <Summary key={summary.id} {...summary} />)(listsById)}
  </RootView>
)

const mapStateToProps = ({ listsById }) => ({ listsById })

export default connect(mapStateToProps)(Home)
