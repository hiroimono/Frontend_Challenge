import React from 'react';

function Footer () {
    return (
        <footer className="footer" style = {{ position:'fixed', bottom:'0', width: '100%', padding: '5px', backgroundColor:'rgba(0,0,0,0.70)'}}>
            <div className="content has-text-centered">
                <p style={{textAlign:'center'}}>
                    <a href="/"><i className="fas fa-at"></i><strong> CHALLENGE </strong></a>
                    <span style={{color:'white'}}>2019, Berlin. The source code is licensed with love <i className="fas fa-heart" style={{color:'red'}}></i> by <a href="https://github.com/hiroimono">HIROIMONO</a>. </span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
