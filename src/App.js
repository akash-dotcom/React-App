
import React, { useEffect, useRef } from 'react';
import TradingChart from './components/TradingChart';
import TopToolbar from './components/TopToolbar';
import LeftToolbar from './components/LeftToolbar';
import RightPanel from './RightPanel';

function App() {

  return (
    <div className="h-screen grid grid-cols-[65px_1fr] grid-rows-[auto_1fr] bg-[#161A1E] text-white">
        <TopToolbar />
        <LeftToolbar />
        <div className="row-start-2 col-start-2 flex flex-row overflow-hidden h-full">
          <TradingChart />
          <RightPanel />  
        </div>
    </div>
  );
}
// Just comment

export default App;
