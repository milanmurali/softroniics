import React from 'react'
import { Demo } from './Demo'
import bean from "./IMG/bean.jpg"
import "./parent.css"

export const Parent = () => {
    return (
            <div className="outer">
                <Demo id={1} image={bean} name={"John"} age={"19"} />
                <Demo id={2} image={bean} name={"Susan"} age={"32"} />
                <Demo id={3} image={bean} name={"Elton"} age={"24"} />
            </div>
            )
}   
