import React from 'react'
import { Profilecards } from './Profilecards'
import porsche from "./IMG/911targa.jpg"
import mazda from "./IMG/rx7.jpg"
import s14 from "./IMG/s14.jpg"
import supra from "./IMG/supra.jpg"
import r32 from "./IMG/r32.jpg"
import evo from "./IMG/evo.jpg"
export const Profile = () => {
    return (
        <div>
            <div className="heading">
                <h1>JDM</h1>
            </div>
            <div className="container">
                <Profilecards image={porsche} name={"Porsche"} model={"911 Targa"} />
                <Profilecards image={mazda} name={"Mazda"} model={"Rx7"} />
                <Profilecards image={s14} name={"Nissan"} model={"S14"} />
                <Profilecards image={supra} name={"Toyota"} model={"Supra"} />
                <Profilecards image={r32} name={"Nissan"} model={"R34 Skyline"} />
                <Profilecards image={evo} name={"Mitsubishi"} model={"Lancer"} />
            </div>
        </div>
    )
}
