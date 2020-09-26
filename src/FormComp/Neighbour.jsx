import React, { Component } from 'react'

export class Neighbour extends Component {
    state={
        name:""
    }
    cng=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    sub=(e)=>{
        e.preventDefault();
        this.props.neigh(this.state)
    }
    componentDidMount(){
        this.props.setFlag(0)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
            <div className="col-md-3 col-md-offset-1 card" >
                <div className="card-body">
                <h3 className="card-title">Find Neighbours</h3>
               <form onSubmit={this.sub}>
  <div className="form-group">
    <label >Enter City name which already exist</label>
    <input type="text" className="form-control" name="name" placeholder="Enter city" onChange={this.cng} value={this.state.name} required={true}></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
            </div>
            </div>
            </div>
        )
    }
}

export default Neighbour
