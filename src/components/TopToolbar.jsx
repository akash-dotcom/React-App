import React, {useState} from "react";
import { TimeFrames } from "./TimeFrames";  

export default function TopToolbar() {
  
  return (
    <div className="row-start-1 col-start-1 col-span-2 flex px-2 py-2 bg-[#1E2226] border-b border-gray-700">
      {/* Stock Name  */}
      <div className="flex items-center gap-2">
        <span className="text-md text-white" >SUZLON</span>
      </div>
      <div>
        <span className="text-lg text-gray-300 mx-2">|</span>
      </div>
      {/* Timeframe Buttons */}
      <TimeFrames />
      <div>
        <span className="text-lg text-gray-300 mx-2">|</span>
      </div>
       {/* Indicators   */}
       <div>
          <button className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700">Indicators</button>
       </div>
      <div>
        <span className="text-lg text-gray-300 mx-2">|</span>
      </div>
      {/* Actions */} 
      <div className="flex gap-2">
        <button className="hover:underline">Save</button>
        <button className="hover:underline">Share</button>
      </div>
    </div>
  );
}
