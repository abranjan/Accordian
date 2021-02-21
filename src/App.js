
import React, {useState}  from 'react';
import './App.css';
import Accordian from './components/Accordian';

function App() {

  const [active, setActive] = useState("");
  return (
    <div className="App">
    {/* <ul><Accordian title ={"Welcome1"} active={active} setActive={setActive}/>
      <Accordian title ={"Welcome2"} active={active} setActive={setActive}/>
      </ul>
    <ul><Accordian title ={"Welcome3"} active={active} setActive={setActive}/>
      
      <Accordian title ={"Welcome4"} active={active} setActive={setActive}/>
      </ul>
      <ul>
        <Accordian title ={"Welcome5"} active={active} setActive={setActive}/>
      <Accordian title ={"Welcome6"} active={active} setActive={setActive}/>
      </ul> */}
      {/* <table>
        <tr>
          <td><Accordian title ={"Welcome1"} active={active} setActive={setActive}/></td>
          <td><Accordian title ={"Welcome2"} active={active} setActive={setActive}/></td>
        </tr>
        <tr>
          <td><Accordian title ={"Welcome3"} active={active} setActive={setActive}/></td>
          <td><Accordian title ={"Welcome4"} active={active} setActive={setActive}/></td>
        </tr>
      </table> */}
      <div class="div-table">
             <div class="div-table-row">
             <div class="div-table-col"><Accordian title ={"Welcome1"} active={active} setActive={setActive}/></div>
             <div class="div-table-col"><Accordian title ={"Welcome2"} active={active} setActive={setActive}/></div>
             <div class="div-table-col"><Accordian title ={"Welcome3"} active={active} setActive={setActive}/></div>
             <div class="div-table-col"><Accordian title ={"Welcome4"} active={active} setActive={setActive}/></div>
             <div class="div-table-col"><Accordian title ={"Welcome5"} active={active} setActive={setActive}/></div>
             <div class="div-table-col"><Accordian title ={"Welcome6"} active={active} setActive={setActive}/></div>
             </div>
            <div class="div-table-row">
            <div class="div-table-col"> <Accordian title ={"Welcome7"} active={active} setActive={setActive}/></div>
            <div class="div-table-col"><Accordian title ={"Welcome8"} active={active} setActive={setActive}/></div>
            <div class="div-table-col"><Accordian title ={"Welcome9"} active={active} setActive={setActive}/></div>
            <div class="div-table-col"><Accordian title ={"Welcome10"} active={active} setActive={setActive}/></div>
            <div class="div-table-col"><Accordian title ={"Welcome11"} active={active} setActive={setActive}/></div>
            <div class="div-table-col"><Accordian title ={"Welcome12"} active={active} setActive={setActive}/></div>
            </div>
           

      </div>
    </div>
  );
}

export default App;
