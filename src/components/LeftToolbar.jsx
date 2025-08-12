import React from "react";
import { LineChart, Brush, Settings, PencilLine } from 'lucide-react';

const tools = [
  { icon: <LineChart />, label: 'Trendline' },
  { icon: <Brush />, label: 'Draw' },
  { icon: <PencilLine />, label: 'Fib' },
  { icon: <Settings />, label: 'Settings' }
];

export default function LeftToolbar() {
  return (
    <div className="row-start-2 col-start-1 h-full w-[65px] border-r border-gray-700 flex flex-col items-center bg-[#1E2226] py-2 border-r border-gray-700">
      {tools.map((tool, idx) => (
        <div
          key={idx}
          className="p-2 hover:bg-gray-700 rounded cursor-pointer"
          title={tool.label}
        >
          {tool.icon}
        </div>
      ))}
    </div>
  );
}
