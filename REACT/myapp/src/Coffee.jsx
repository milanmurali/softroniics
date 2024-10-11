import React from 'react'
import "./Coffee.css"
import coffee1 from './IMG/coffee1.jpg';
import tea1 from './IMG/tea1.jpg';
import coffeebeans from './IMG/coffeebeans.jpg';
import coffeesmoke from './IMG/coffeesmoke.jpg';
import coffeesmoke2 from './IMG/coffeesmoke2.jpg';
import coffee2 from './IMG/coffee2.jpg';
import cappucino1 from './IMG/cappucino1.jpg';
export const Coffee = () => {
    return (
        <div>
            <div class="row1 container d-flex my-5">

                <div class="r1c1 col mt-5 pt-5">
                    <h1 class="r1c1head">Your coffee</h1>
                    <h1 class="r1c1head">Your vibe</h1>
                    <h1 class="r1c1head">Your energy</h1>
                    <p class="r1para mt-5">
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipiscing elit. Faucibus <br />
                        in libero risus semper habitant arcu <br />
                        eget. Et integer facilisi eget.
                    </p>
                    <button class="button mb-5">Explore</button>
                </div>

                <div class="r1c2 col ms-5">
                    <img class="r1pic1 rounded-circle" src={coffee1} alt="IMAGE NOT FOUND" />
                    <img class="r1pic2 rounded-circle" src={tea1} alt="IMAGE NOT FOUND" />
                </div>
            </div>

            <div class="row2 container-fluid d-flex justify-content-around text-white text-center">

                <div class="r2c1 mt-5">
                    <img class="r2pic" src={coffeebeans} alt="IMAGE NOT FOUND" />
                    <p class="mt-3">Et integer facilisi eget.</p>
                </div>
                <div class="r2c1 mt-5">
                    <img class="r2pic" src={coffeesmoke} alt="IMAGE NOT FOUND" />
                    <p class="mt-3">Et integer facilisi eget.</p>
                </div>
                <div class="r2c1 mt-5">
                    <img class="r2pic" src={coffeesmoke2} alt="IMAGE NOT FOUND" />
                    <p class="mt-3">Et integer facilisi eget.</p>
                </div>
                <div class="r2c1 mt-5">
                    <img class="r2pic" src={coffee2} alt="IMAGE NOT FOUND" />
                    <p class="mt-3">Et integer facilisi eget.</p>
                </div>
                <div class="r2c1 mt-5">
                    <img class="r2pic" src={cappucino1} alt="IMAGE NOT FOUND" />
                    <p class="mt-3">Et integer facilisi eget.</p>
                </div>


                <div class="rowmid container d-flex text-black px-5 pt-3">

                    <div class="mid1 col d-flex flex-column align-items-center">
                        <img class="r3icon" src="https://img.icons8.com/?size=100&id=9bJspZ2v8DnH&format=png&color=000000"
                            alt="IMAGE NOT FOUND" />
                        <h1 class="midh">190 +</h1>
                        <p class="midp">Lorem ipsum dolor <br/>sit amet, consectetur</p>
                    </div>

                    <div class="mid2 col d-flex flex-column align-items-center">
                        <img class="r3icon" src="https://img.icons8.com/?size=100&id=9bJspZ2v8DnH&format=png&color=000000"
                            alt="IMAGE NOT FOUND" />
                        <h1 class="midh">123K</h1>
                        <p class="midp">Lorem ipsum dolor <br/>sit amet, consectetur</p>
                    </div>

                    <div class="mid3 col d-flex flex-column align-items-center">
                        <img class="r3icon" src="https://img.icons8.com/?size=100&id=9bJspZ2v8DnH&format=png&color=000000"
                            alt="IMAGE NOT FOUND" />
                        <h1 class="midh">58</h1>
                        <p class="midp">Lorem ipsum dolor <br/>sit amet, consectetur</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
