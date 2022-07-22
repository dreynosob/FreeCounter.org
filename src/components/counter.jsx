import React, { Component } from 'react';


class Counter extends Component {
    //Updating phase
    //Pasa cuando las propiedades o el state de un componente cambian
    componentDidUpdate(prevProps,prevState){
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
    }
    //UnMounting Phase
    //Pasa cuando un componente se elimina del DOM
    componentWillUnmount(){
        console.log('Counter-Unmount')

    }
    /*state = {
        //this.props.value = this.props.counter.value (coge todas las propiedades de counter, disminuyendo código)
        value: this.props.counter.value,
      } 
      hadleIncrement = (product) => {
        console.log(product)
        this.setState( {value : this.state.value + 1})
      }
      
*/

    render() { 
        //console.log(this.props)
     console.log('Counter-rendered')
        
        return (
            <div>

                <span className={this.getClasses()}>{this.formatCount()}</span>
                <button
                 className='btn btn-secondary btn-sm' 
                 onClick={ () => this.props.onIncrement(this.props.counter)}
                 >
                    Increment
                    </button>

                    <button
                     //this.props.id = this.props.counter.id (coge todas las propiedades de counter, disminuyendo código)
                    onClick={() => this.props.onDelete(this.props.counter.id)}


                     className='btn btn-danger btn-sm m-2'
                    
                    
                    >
                        Delete

                    </button>
                 
            </div>
        )
    }
    formatCount(){
        const {value: count} = this.props.counter
        return count === 0 ? 'Zero' : count
    }
    getClasses(){
        let classes = 'badge m-2 badge-'
        classes += this.props.counter.value === 0 ? 'warning' : 'primary'
        return classes
    }
}
 
export default Counter;
