import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

import { clearToaster } from '../actions/toaster'

const Toaster = (props) => {

  const doClearToaster = () => {
    props.dispatch(clearToaster())
  }


  return (
    <div className={`toaster toaster--${props.toaster.type}`}>
      <p className="toaster__text">{props.toaster.message}</p>
      <button className="btn toaster__close-btn" onClick={() => doClearToaster()}>Clear toaster</button>
    </div>
  )

}

const mapStateToProps = (globalState) => {
  return {
    toaster: globalState.toaster
  }
}

export default connect(mapStateToProps)(Toaster)
