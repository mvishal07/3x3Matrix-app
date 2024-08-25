import { Component } from "react";

import "./index.css";

class Matrix extends Component {
    state={
        grid:(Array(9).fill('white')),
        clicked:[]
    }

    onChangeColor = (index) =>{
        const {grid,clicked} = this.state
        if(grid[index]=== 'white'){
            const newGrid = [...grid]
            newGrid[index] = "green"
            this.setState({grid:newGrid})
            this.setState({clicked:[...clicked,index]})
            if(clicked.length === 8){
                setTimeout(()=>{
                    const orangeMatrix = Array(9).fill('orange')
                    this.setState({grid:orangeMatrix})
                },1000)
            }
        }
    }
  render() {
    const {grid} = this.state
    return <div className="bg-container">
   
        {grid.map((color,index)=>(<div key={index} className="grid-box" style={{backgroundColor: color}} onClick={()=>this.onChangeColor(index)} />))}</div>

  }
}
export default Matrix;
