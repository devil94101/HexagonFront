import React, { Component } from 'react'

export class Remove extends Component {
    constructor(props) {
        super(props);
        this.state={
          name:""
        }
        this.cng = this.cng.bind(this);
        this.sub=this.sub.bind(this)
    }
    cng(e){
        this.setState({
            name:e.target.value
        })
    }
    sub(e){
        e.preventDefault();
        this.props.free(this.state);
    }
    componentDidMount(){
        this.props.setFlag(0)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
            <div className=" card col-md-3 ">
                <div className="card-body">
                <h2 className="card-title">Make Covid Free</h2>
               <form onSubmit={this.sub}>
  <div className="form-group">
    <label >Enter city name</label>
    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.cng} placeholder="Enter city"></input>
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

export default Remove
