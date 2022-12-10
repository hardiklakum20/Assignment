import React, { Component } from 'react';

// this.state={
//     input:'',
//     price:'59.99',
    
// }
// console.log(state);
// let data = (input,price)=>{
//     return input*price;
// }
// console.log(data(5,4));



class quantity extends Component {
    // constructor(props){
    //     super(props)
    //     console.log("constructor called");
    //     this.state={
    //         input:' ',
    //         price:'59.99',
    //         multi :' ',
    //     }
    // }
    // handleinput1=(event)=>{
    //    this.setState({
    //         input:event.target.value
    //    })
    // }
    // handleprice=(event)=>{
    //     this.setState({
    //          price:59.99
    //     })
    //  }
    //  total = (event)=>{
    //     this.setState({
    //         multi:parseInt(this.state.input) * parseInt(this.state.price)
    //     })
    //     event.default()
    //  }
    constructor(props){
        super(props)
        this.state={
          num1:'',
          num2:'',
          total:''
        }
      }
    
      handlenum1= (event) =>{
        this.setState({
          num1:event.target.value
        })
      }
      
      handlenum2= (event) =>{
        this.setState({
          num2:event.target.value
        })
      }
      exe = (event) =>{
        this.setState({
          total:parseInt(this.state.num1) * parseInt(20)
          
        })
        event.prevent.default()
      }

      exe = (event) =>{
        this.setState({
          total:parseInt(this.state.num1) * parseInt(40)
          
        })
        event.prevent.default()
      }

    render() {
        return (
            <>
            <div className="container text-center ">
                <h1>Mobile Shopping</h1>
            </div>
               <div className="container mt-5">
                <form onBlur={this.exe}>
                    <table className="table table-light table-hover table-bordered">
                        <thead>
                            <tr className='text-center'>
                                <th scope='col'>Photo</th>
                                <th scope='col'>Quantity</th>
                                <th scope='col'>Price per Unit</th>
                                <th scope='col'>Price(sub total)</th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <td><img src="img/redmi.jpg" alt="" className='h-25 w-25' scope='col'/></td>
                                <td><center><input type="Numbers"  value={this.state.num1}  onChange={this.handlenum1}/></center></td>
                                <td> <h6 onChange={this.handlenum2}>20$</h6></td>
                                <td><h6>{this.state.total}$</h6></td>
                                <td><center><button className='btn btn-danger'>Remove</button></center></td>
                            </tr>
                            <tr className='text-center'>
                                <td><img src="img/vivo.jpg" alt="" className='h-25 w-25' scope='col'/></td>
                                <td><center><input type="text" value={this.state.num1} onChange={this.handlenum1}/></center></td>
                                <td><h6 onChange={this.handlenum2}>$12.99</h6></td>
                                <td><h6>{this.state.total}$</h6></td>
                                <td><center><button className='btn btn-danger'>Remove</button></center></td>
                            </tr>
                        </tbody>
                    </table>
                    </form>
                    
               </div>
            </>
        );
    }
}



export default quantity;