import React from 'react'
import porsche from "./IMG/911targa.jpg"
import mazda from "./IMG/rx7.jpg"
import s14 from "./IMG/s14.jpg"
import supra from "./IMG/supra.jpg"
import r32 from "./IMG/r32.jpg"
import evo from "./IMG/evo.jpg"
export const Bootstrap1 = () => {
    return (
        <div>
            <div className='container-fluid text-center'>
                <h1>JDM</h1>
            </div>

            <div className="main d-flex flex-wrap">

                <div className="col-4 text-center">
                    <img src={porsche} alt="IMAGE NOT FOUND" width="200px" height="200px" className="rounded-circle" />
                    <h2>Porsche</h2>
                    <h3>911 Targa</h3>
                </div>

                <div className="col-4 text-center">
                    <img src={mazda} alt="IMAGE NOT FOUND" width="200px" height="200px" className="rounded-circle" />
                    <h2>Mazda</h2>
                    <h3>Rx7</h3>
                </div>

                <div className="col-4 text-center">
                    <img src={s14} alt="IMAGE NOT FOUND" width="200px" height="200px" className="rounded-circle" />
                    <h2>Nissan</h2>
                    <h3>S14</h3>
                </div>

                <div className="col-4 text-center">
                    <img src={supra} alt="IMAGE NOT FOUND" width="200px" height="200px" className="rounded-circle" />
                    <h2>Toyota</h2>
                    <h3>Supra</h3>
                </div>

                <div className="col-4 text-center">
                    <img src={r32} alt="IMAGE NOT FOUND" width="200px" height="200px" className="rounded-circle" />
                    <h2>Nissan</h2>
                    <h3>R34 Skyline</h3>
                </div>

                <div className="col-4 text-center">
                    <img src={evo} alt="IMAGE NOT FOUND" width="200px" height="200px" className="rounded-circle" />
                    <h2>Mitsubishi</h2>
                    <h3>Lancer</h3>
                </div>
            </div>
        </div>
    )
}
