import React, { Component } from 'react';
import Quantity from './quantity';

class Quntity_compo extends Component {
    render() {
        return (
            <>
                <div className="container text-center">
                    <h1>Mobile Shopping</h1>
                </div>
               <Quantity imgsrc="img/vivo.jpg" price="59.99$" total="$"></Quantity>
               <Quantity imgsrc="img/redmi.jpg" price="49.99$" total="$"></Quantity>
            </>
        );
    }
}

export default Quntity_compo;