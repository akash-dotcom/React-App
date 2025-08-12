import React from 'react'

// export const TradingChart = () => {
//   return (
//     <div>TradingChart</div>
//   )
// }

import { createChart,CandlestickSeries } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

export default function TradingChart() {
  const chartRef = useRef();

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: chartRef.current.clientHeight,
      layout: {
        background: { color: '#161A1E' },
        textColor: '#D1D5DB',
      },
      grid: {
        vertLines: { color: '#2c2c2c' },
        horzLines: { color: '#2c2c2c' },
      },
      crosshair: {
        mode: 1,
      },
      rightPriceScale: {
        borderColor: '#71649C',
      },
      timeScale: {
        borderColor: '#71649C',
      },
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
        upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
        wickUpColor: '#26a69a', wickDownColor: '#ef5350',
        });
    
        fetch('/candles_sorted.json')
        .then(response => response.json())
        .then(data => {
          const sortedData = data.sort((a, b) => new Date(a.time) - new Date(b.time));
          candlestickSeries.setData(sortedData);
        })
        .catch(error => {
          console.error("Error loading JSON data:", error);
        });
    return () => chart.remove();
  }, []);

  return <div ref={chartRef} className="w-full h-full" />;
}
