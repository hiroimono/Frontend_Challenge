import React from 'react';

function Navbar () {
    return (
        <div className="cd-slider-nav">
            <nav className="navbar">
                <div className="tm-navbar-bg" style={{fontSize:'12px', height: '60px', overflow:'hidden', color: 'white', display:'flex'}}>

                    <a className="navbar-brand" href="/" style={{justifyContent:'flex-start'}}>
                        <img src="https://hexad.de/wp-content/themes/hexad/img/hexad-logo.png" alt="Hexad Logo" style={{height: '45px'}} />
                        <p style={{fontFamily: 'Big Shoulders Display', color: '#3f97c9'}}>CHALLENGE</p>
                    </a>

                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                      &#9776;
                    </button>

                    <div className="collapse navbar-toggleable-md text-xs-center tm-navbar" id="tmNavbar" style={{justifyContent:'flex-end'}}>
                        <ul className="nav navbar-nav">

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
