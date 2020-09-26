import React,{useState, useEffect} from 'react';
import './App.css';
import {GraphComp} from './Graph/GraphComp'
import axios from 'axios'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Neighbour from './FormComp/Neighbour';
import Remove from './FormComp/Remove';
import FormComp from './FormComp/FormComp';
import NeighbourGraph from './Graph/NeighbourGraph'
function App() {
  
  const [data, setData] = useState({})
  const [flag,setFlag] =useState(0)
  const [neighData,setneigh]= useState({})
  const submit=(x)=>{
      axios.post('https://hexagonapi.herokuapp.com/api/add',x)
      .then((res)=>{
        if(res.data.err!==true){
          console.log(res.data)
          setData(res.data)
        }
      }).catch(err=>{
        console.log(err);
      })
  }
  const freeData=(x)=>{
    axios.post('https://hexagonapi.herokuapp.com/api/free',x)
      .then((res)=>{
        if(res.data.err!==true){
          setData(res.data)
        }
      }).catch(err=>{
        console.log(err);
      })
  }
  const neigh=(x)=>{
    setneigh({});
    axios.post('https://hexagonapi.herokuapp.com/api/neighbour',x)
      .then((res)=>{
        if(res.data.err!==true){
          setneigh(res.data)
        }
      }).catch(err=>{
        console.log(err);
      })
  }
  useEffect(() => {
    axios.get('https://hexagonapi.herokuapp.com/api/getall')
      .then((res)=>{
        if(res.data.err!==true){
          setData(res.data)
        }
      }).catch(err=>{
        console.log(err);
      })
      setFlag(1);
  }, [flag])
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/neighbour"><Neighbour neigh={neigh} setFlag={setFlag}/><NeighbourGraph data={neighData}/></Route>
          <Route path="/free" ><Remove free={freeData} setFlag={setFlag}/>
          <GraphComp data={data}/>
          </Route>
          <Route path="/"><FormComp submit={submit} setFlag={setFlag}/>  <GraphComp data={data}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
