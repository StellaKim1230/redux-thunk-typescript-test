import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootAction } from 'AppTypes'

import { ReduxState } from './types'

import { getMainStats as getMainStatsAction } from './redux/actions/mainStats'

import './MainPage.scss'

interface Props {
  isLoading: boolean
  getMainStats: () => (dispatch: Dispatch) => void
}

class MainPage extends Component<Props> {
  componentDidMount() {
    this.props.getMainStats()
  }

  render() {
    const {
      isLoading,
      amountByCategory,
      amountPerRange,
      balanceByAccount,
    } = this.props

    const isValidData = amountByCategory && amountPerRange && balanceByAccount

    const { balances } = amountPerRange

    return !isLoading && isValidData && (
      <div className='MainPage'>
        MainPage
      </div>
    )
  }
}

const mapStateToProps = ({ mainStats }: ReduxState) => ({
  isLoading: mainStats.isLoading,
  amountByCategory: mainStats.amountByCategory,
  amountPerRange: mainStats.amountPerRange,
  balanceByAccount: mainStats.balanceByAccount,
})

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
  getMainStats: getMainStatsAction,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)
