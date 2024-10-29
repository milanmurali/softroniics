import React from 'react'
import { Loggedin } from './Loggedin'
import { NotLoggedin } from './NotLoggedin'

export const Main = () => {
    let state = false
  return (
    <div>
        {state ? <Loggedin/> : <NotLoggedin/>}
    </div>
  )
}
