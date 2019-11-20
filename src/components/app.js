import React from 'react';
import Navbar from './navbar';

import Footer from './footer';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (

            <div>
                <Navbar/>

                <Footer />
            </div>

        );
    }
}
