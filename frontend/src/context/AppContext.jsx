import React, { createContext, useState } from 'react'
import Loader from '../componets/loader'

export const Context = createContext({
  setLoading: (state, options) => {}
})

export default function AppContext(props) {
  const [loading, _setLoading] = useState({ visible: false, text: '' })
  const setLoading = (state, options) => {
    _setLoading({ visible: state, ...options })
  }
  return (
    <Context.Provider
      value={{
        setLoading
      }}
    >
      {props.children}
      {loading.visible && <Loader {...loading} />}
    </Context.Provider>
  )
}
