import React, { Component } from 'react'

import {Graph} from 'react-d3-graph'

export class GraphComp extends Component {
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
            console.log(this.props.data)
        let x={nodes:[],
        links:[]
        }
        for(let i in this.props.data){
            x['nodes'].push({id:i});
            for(let j of this.props.data[i]['neighbours']){
                x['links'].push({source:i,target:j['name']})
            }
        }
        this.setState({
            data:x
        })
        }
        
    }
    render() {
        if(this.state.data['nodes'].length!==0){
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

export default Graph
