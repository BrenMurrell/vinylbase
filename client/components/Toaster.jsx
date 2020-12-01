import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { clearToaster } from '../actions/toaster'

const Toaster = (props) => {
  const doClearToaster = () => {
    props.dispatch(clearToaster())
  }

  const speechSynth = window.speechSynthesis

  useEffect(() => {
    const utterThis = new SpeechSynthesisUtterance(props.toaster.message)
    speechSynth.speak(utterThis)
    setTimeout(() => {
      props.dispatch(clearToaster())
    }, 4000)
  }, [])

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
