import React from 'react'
import './beginner.css'

const Beginner = () => {
    return (

        <div className='row justify-content-center  container-fluid' >

            <div className="col-md-3 col-11 mt-4 template  ">
                <div className='title'>
                    <h3 className='title-text' >Introduction to Coding</h3>
                    <div className="col-2 offer ">
                    <span>8 Classes </span>
                    <span className='sav'> SAVE 5%</span>
                    </div>
                </div>
                <div className=' title-des' >
                    <h5>Curriculum Includes</h5>
                    <p> Sequence, Fundamentals CodingBlocks Loops </p>
                    <p className='detail' >View Detailed curriculum</p>
                </div>
                <hr />
                <div className='col-2 price'>
                <h3> Rs.6,399</h3>
                <span ><s  className='old-price'>Rs.6799</s> </span>
                </div>
                <p className='per-cls' >Price Per Class Rs.800</p>
                <button type="button" class="btn" id="banner-btn-1">Buy Now</button>
            </div>

            <div className="col-md-3 col-11 mt-4 template ">
                <div className='title'>
                    <h3 className='title-text' >App Developer Certificate</h3>
                    <div className="col-2 offer ">
                    <span>48 Classes </span>
                    <span className='sav'> SAVE 10%</span>
                    </div>
                </div>
                <div className=' title-des' >
                    <h5>Curriculum Includes</h5>
                    <p className='intro'> Introduction to Coding </p>
                    <p>Events/ UI, Conditionals, Complex Loop, LogicStructures, Turtle Coding</p>
                    <p className='detail' >View Detailed curriculum</p>
                </div>
                <div> 
                    <span className='trend'> MOST POPULAR</span> <hr />
                
                </div>
                <div className='col-2 price'>
                <h3> Rs.35,999</h3>
                <span ><s  className='old-price'>Rs.39,999</s> </span>
                </div>
                <p className='per-cls'>Price Per Class Rs.750</p>
                <button type="button" class="btn" id="banner-btn-1">Buy Now</button>

            </div>
            <div className="col-md-3 col-11 mt-4 template  ">
                <div className='title' >
                    <h3 className='title-text' >Advance Coding with Space Tech</h3>
                    <div className="col-2 offer ">
                    <span>144 Classes </span>
                    <span className='sav'> SAVE 15%</span>
                    </div>
                </div>
                <div className='title-des' >
                    <h5>Curriculum Includes</h5>
                    <p className='intro' >Introduction to Coding</p>
                    <p className='intro'>App Developer Ceritificate</p>
                    <p> Extended UI/UX, Rich GUI app, Space Tech simulation in Space Lab/ Game Lab, Professional Game Design </p>
                    <p className='detail' >View Detailed curriculum</p>
                </div>
                <div> 
                    <span className='val'> BEST VALUE</span> <hr />
                
                </div>
                <div className='col-2 price'>
                <h3> Rs.99,999</h3>
                <span ><s  className='old-price'>Rs.119,999</s> </span>
                </div>
                <p className='per-cls'>Price Per Class Rs.694</p>
                <button type="button" class="btn" id="banner-btn-1">Buy Now</button>

            </div>
        </div>

    )
}

export default Beginner
