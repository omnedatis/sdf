import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import AodIcon from '@mui/icons-material/Aod';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import CampaignIcon from '@mui/icons-material/Campaign';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';

import { useState } from 'react';
import './App.css';



function App() {

  //
  const [secondMenuPos, setSecondMenuPos] = useState(['side-col'])
  const fristColHandleOnClick = function (e) {
    if (secondMenuPos.length === 1) {
      setSecondMenuPos(['side-col', 'second-left'])
    }
    if (secondMenuPos.length === 2) {
      setSecondMenuPos(['side-col'])
    }
  }
  const itemHandleOnClick = function () {

  }
  // first menu
  const firstMenuItems = [
    <div>基金</div>, <div>投組</div>, <AlarmOnIcon />, <div>AI SQS</div>, <AssuredWorkloadIcon />,
    <BedroomChildIcon />, <Brightness2Icon />, <CampaignIcon />, <CenterFocusWeakIcon />,
    <AodIcon />, <AccessTimeIcon />, <AddIcCallIcon />
  ]
  const firstMenu = []
  for (const [idx, each] of firstMenuItems.entries()) {
    firstMenu.push(<button key={`${idx}_menu`} onClick={fristColHandleOnClick}>
      {each}
    </button>)
  }
  //second menu
  return (
    <div className="App">
      <div className="convas">
        <div className='header'>

        </div>
        <div>
          <div className='side-col' style={{"height":"100vh", "zIndex":"1"}}>
            
          </div>
          <div className='side-col front' style={{"overflowY": "scroll" }}>
            {firstMenu}
          </div>
          <div className={secondMenuPos.join(' ')} style={{"backgroundColor":"#252526", "height":"100vh"}} >
            <div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
