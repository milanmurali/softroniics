import React from 'react'
import lap from './IMG/lap.png'
import mtp1 from "./IMG/mtp1.png"
export const Bootstrap2 = () => {
    return (
        <div className='container-fluid'>

            <div className='row justify-content-center align-items-center' style={{ backgroundColor: '#003f9d', height: '100vh' }}>

                <div className='col mt-5 mx-5'>

                    <div className='texts'>
                        <h1 className='text-white mb-5'>Really catchy headline here</h1>
                        <p className='text-white mb-4  w-100'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iure
                            saepe aspernatur et, delectus, voluptatum inventore consequatur fugit excepturi
                        </p>
                    </div>

                    <div className='d-flex gap-4'>
                        <button className='btn btn-light' style={{ color: '#003f9d', fontWeight: 'bolder' }}>Get Started</button>
                        <button className='rounded btn text-white border-white border-1'>Learn More</button>
                    </div>

                </div>

                <div className='col mt-5 mx-5 d-flex justify-content-center align-items-center' >
                    <img className='rounded' src={lap} alt='IMAGE NOT FOUND' width='600px' />
                </div>

            </div>

            <div className='row justify-content-center align-items-center mx-5 mt-5' style={{ height: '100vh' }}>

                <div className='col text-center'>
                    <img className='rounded' src={mtp1} alt='IMAGE NOT FOUND' width='250px' />
                    <h1 className='mt-2'>Feature Name</h1>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iure
                        saepe aspernatur?
                    </p>
                </div>

                <div className='col text-center'>
                    <img className='rounded' src={mtp1} alt='IMAGE NOT FOUND' width='250px' />
                    <h1 className='mt-2'>Feature Name</h1>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit, amet
                    </p>

                </div>

                <div className='col text-center'>
                    <img className='rounded' src={mtp1} alt='IMAGE NOT FOUND' width='250px' />
                    <h1 className='mt-2'>Feature Name</h1>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aliquid ut, a deleniti,
                        tempore unde pariatur autem aliquam nemo at eum laboriosam nesciunt eveniet, tenetur magni? Enim, molestiae voluptatibus!
                    </p>
                </div>
            </div>

        </div>

    )
}
