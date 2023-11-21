import React from 'react'

const NavBar = () => {
  return (
      <nav>
          <div className="container inner">
              <div className="logo">
                  <i className='uil uil-cell'></i>
                  SOURABH CV
              </div>
              <button>
                  <i className="uil uil-print"></i>
                  Download
              </button>
          </div>
   </nav>
  )
}

export default NavBar;