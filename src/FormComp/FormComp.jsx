import React, { Component } from 'react'
export class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state={
      par:"",
      child:"",
      border:""
    }
    this.onHandlecng = this.onHandlecng.bind(this);
    this.sub=this.sub.bind(this)
}

  onHandlecng(e){
    let xxx=e.target.name
    this.setState({
      [xxx]: e.target.value
  });
    // console.log(this.state)
    // console.log(e.target.value)
   
  }
  sub(e){
    e.preventDefault()
    this.props.submit(this.state)
  }
  componentDidMount(){
    this.props.setFlag(0)
}
    render() {
        return (
          <div className="container">
                <div className="row">
            <div className="card col-md-3 ">
                <div className="card-body">
                <h2 className="card-title">Add cities</h2>
               <form onSubmit={this.sub}>
  <div className="form-group">
    <label >City 1(should Already exist)</label>
    <input type="text" className="form-control" name="par" placeholder="city1" onChange={this.onHandlecng} value={this.state.par} required={true}></input>
  </div>
  <div className="form-group">
    <label >City 2(should be a new City)</label>
    <input type="text" className="form-control" name="child"   placeholder="City2" onChange={this.onHandlecng} value={this.state.child} required={true}></input>
  </div>
  <div className="form-group ">
  <label  >Border of city 1</label>
    <input type="Number" className="form-control" name="border" onChange={this.onHandlecng} value={this.state.border} required={true} placeholder="border"></input>
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

export default FormComp
