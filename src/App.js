import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  state = {
    counters : [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  };
  //LifeCycle hook
  //Mounting pace
  //Este constructor se llama una vez, sólo cuando se
  //crea una instancia de una clase.
  //Este metodo solo se llama cuando el component se ha renderizado, y publicado en el DOM.
  constructor(props){
    super(props);
    console.log('App-Constructor')
    
  }
//ComponentDidMount
//Este metodo se llama despues de que un componente se ha rendezriado en el DOM.
//Lugar perfecto para hacer uso del AJAX, para coger datos del servidor
componentDidMount(){
  console.log('App-Mounted')

}
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({counters})
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters})


  }

  handleDelete = (counterId) => {
   const counters = this.state.counters.filter(c => c.id !== counterId);
   this.setState({counters: counters})
    
  };
  render(){
    console.log('App-render')
    return (
      <div>
     <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=> c.value >0).length}></NavBar>
      <main className='container'>
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}></Counters>
      </main>
     </React.Fragment>
     </div>
      
    );

  }
  

  
}

export default App;
