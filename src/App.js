
import React from "react";

class App extends React.Component {
  constructor(){
    super()
    this.state={
    fullName : 'ameni',
    bio : 'im fullstack js',
    imgSrc : 'https://th.bing.com/th/id/R.1194254c298934c9a686d53059d997f7?rik=1V%2ftCR1CTgggfQ&riu=http%3a%2f%2fwww.cpie32.org%2fwp-content%2fuploads%2f2017%2f01%2fno-image.png&ehk=8kd2qt%2fFJZqmxkhcT8STDMMkmRh%2bS2G9FDwZdQ%2fanF8%3d&risl=&pid=ImgRaw&r=0',
    profession : 'studiant',
    
      show: false,
      count: 0,
      intervalle: null
      
     

    }
  }
  componentDidMount(){
    console.log('Hi Counter Comp is mounted');
    this.setState({intervalle: setInterval(()=> this.setState({count: this.state.count+1}),1000)})
}


  toggleShow =()=>{
    this.setState({show: !this.state.show})
  }
  render (){
    
  return (
   
    
    <div>
    <button onClick={this.toggleShow}>Show profile</button>
        {this.state.show && <div>
          <h2>{this.state.fullName}</h2>
          <h3>{this.state.bio}</h3>
          <h1>{this.state.profession}</h1>
          <img
          className="d-block w-100"
          src= {this.state.imgSrc}
          alt="First slide"/>
    
              <h3>{this.state.count}</h3>

          </div>
          }
          <div>
            
          </div>

      
    </div>
  );
}
}
export default App;
