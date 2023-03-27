import { useState } from 'react';
import './App.css';
import layerNames from './data/layerNames.json'


function App() {

  //
  const [secondButtonPos, setSecondButtonPos] = useState(0);
  const [secondMenuPos, setSecondMenuPos] = useState(['side-col']);
  const firstColHandleOnClick = function (e) {

    if (secondMenuPos.length === 1) {
      setSecondMenuPos(['side-col', 'second-left']);
      setSecondButtonPos(e);
    }
    if (secondMenuPos.length === 2) {
      setSecondMenuPos(['side-col']);

    }
  }
  // first menu
  const firstMenuItems = [];
  for (const each in layerNames) {
    firstMenuItems.push(each);
  }
  const firstMenu = [];
  for (const [idx, each] of firstMenuItems.entries()) {
    firstMenu.push(<button key={`${idx}_menu`} onClick={() => { firstColHandleOnClick(idx) }}>
      {each}
    </button>)
  };
  //second menu
  const secondMemu = [];
  let cnt = 0;
  for (const each in layerNames) {
    if (cnt === secondButtonPos) {
      for (const [idx, item] of layerNames[each].entries()) {
        secondMemu.push(<div style={{"position":"relative", "width":"var(--bw)"}}>
            <button key={`${idx}_smenu`} style={{ "color": "#ffffff"}}>
              {item}</button>
          </div>
          )
      }
      break
    }
    cnt += 1
  }
  return (
    <div className="App">
      <div className="convas">
        <div className='header'>

        </div>
        <div>
          <div className='side-col' style={{ "height": "calc(100vh - var(--hh)", "zIndex": "1" }}>

          </div>
          <div className='side-col front' style={{ "overflowY": "scroll" }}>
            {firstMenu}
          </div>
          <div className={secondMenuPos.join(' ')} style={
            {
              "backgroundColor": "#252526",
              "height": "calc(100vh - var(--hh)",
              "justify-content": "space-around"
            }} >
            {secondMemu}
          </div>
          <div className='pane'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
