import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import request from './Components/Helper/Url'
import Result from './Components/Result';

function App() {
  const [selectitem,setSelectitem] = useState(request.fetchTrending);
  console.log(selectitem)
  return (
    <div className="App">
      <Header/>
      <Navbar setSelectitem={setSelectitem}/>
      <Result selectitem={selectitem}/>
      </div>
  );
}

export default App;
