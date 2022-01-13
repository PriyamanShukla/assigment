import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
       
          
      <div className="container" >
      <div className="row row-cols-5">
        <div className="col">Beginner <br/> (Grade 1)</div>
        <div className="col">Intermediate <br/> (Grade 2-3)</div>
        <div className="col">Advanced <br/> (Grade 4-6)</div>
        <div className="col"> Professional <br/> (Grade 7-9)</div>
        <div className="col">Applied Tech <br/> (Grade 10+)</div>
      </div>
    </div>
    )
}

export default Navbar
