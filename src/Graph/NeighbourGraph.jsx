import React, { Component } from 'react'
import {Graph} from 'react-d3-graph'
export class NeighbourGraph extends Component {

    state={
        data:{
            nodes:[],
            links:[]
        }
    }
    myConfig = {
        nodeHighlightBehavior: true,
        node: {
            color: "red",
            size: 200,
            highlightStrokeColor: "blue"
        },
        link: {
            highlightColor: "lightblue"
        }
    };
    componentDidUpdate(prev){
        if(prev.data!==this.props.data){
            console.log(this.props.data['neighbours'])
        let x={nodes:[],
        links:[]
        }
        x['nodes'].push({id:this.props.data['name']})
        if(this.props.data['neighbours']!==undefined){
            for(let i of this.props.data['neighbours']){
                x['nodes'].push({id:i['name']})
                x['links'].push({source:this.props.data['name'],target:i['name']})
            }
            console.log(x)
            if(x['links'].length!==0){
                this.setState({
                    data:x
                })
            }
        }
        }
        
    }
    render() {
        if(this.state.data['links'].length!==0){
            return (
                <div>
                    <Graph
        id="graph-id" 
        data={this.state.data}
        config={this.myConfig}/>
                </div>
            )
        }
        else{
            return(
                <h1 className="text-center" style={{
                    marginTop:"20px"
                }}>No data yet</h1>
            )
        }
    }
}

export default NeighbourGraph
