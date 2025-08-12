import React, {useState} from "react";
import TimeFrameDropDown from "./TimeFrameDropDown";

export const TimeFrames = () => {
    
  const [activeTF, setActiveTF] = useState('5m');
  
  return (
    <div className="flex items-center gap-2">
        {/* Timeframe Dropdown */}
        <TimeFrameDropDown
            value={activeTF}
            onChange={(value) => {
                setActiveTF(value);
                }}
        />
      {/* <select
        value={activeTF}
            onChange={(e) => setActiveTF(e.target.value)}
            className="appearance-none bg-[#1E2226] px-1 text-md text-white justify-items-center rounded hover:bg-gray-600">
        {timeframes.map(tf => (
          <option key={tf} value={tf} className="bg-[#2A2E35] text-white">
                {tf}
            </option>
        ))}
      </select> */}
        
      </div>
  )
}
