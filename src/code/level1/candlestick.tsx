/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import EWChart, { EWChartData } from 'ewchart';
import { Button } from 'antd';
import { disOrder } from '../helper';
import { Sandpack } from '@codesandbox/sandpack-react';
import StockData from '../data/stock.json';

const des = `
import React, { useEffect, useMemo, useRef, useState } from 'react';
import EWChart, { EWChartData } from 'ewchart';
import { Button } from 'antd';
import { disOrder } from '../helper';
import StockData from '../data/stock.json';

const initConfig = {
  x: {
    start: 1512432000000, // 时间戳
    end: 1516147200000, // 时间戳
    interval: 86400000, // 86400秒，每个点的时间间隔
    format: '%Y.%m.%d',
  },
  y: {
    start: 130,
    end: 180,
  },
  yUnit: 'K',
  maxWidth: 15, // 每根k线的宽度
  groups: [
    {
      values: StockData,
    },
  ],
};

const ScatterChart = () => {
  const [chartConfig, setChartConfig] = useState(initConfig);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const ob = observer();
    tooltipRef.current && ob.observe(tooltipRef.current);
    return () => {
      ob.disconnect();
    };
  }, []);

  const observer = () => {
    const ob = new IntersectionObserver(
      entries => {
        if (entries[0].intersectionRatio > 0 && entries[0].intersectionRatio < 1) {
          entries[0].target.style.left =
            entries[0].target.parentElement.offsetWidth - entries[0].target.offsetWidth + 'px';
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.1, 0.5, 1],
      }
    );
    tooltipRef.current && ob.observe(tooltipRef.current);
    return ob;
  };

  const handleMove = (
    type: 'enter' | 'move' | 'leave', // 鼠标事件类型
    data: Array<{ color?: string; label: string; value: number | null; x?: number; y?: number }>, // 当前点的信息
    position: { x: number; y: number } // 鼠标的实时位置
  ) => {
    if (tooltipRef.current) {
      if (type === 'move') {
        const maxOffsetX = position.x + tooltipRef.current.offsetWidth + 20;
        if (maxOffsetX < tooltipRef.current.parentElement.offsetWidth) {
          tooltipRef.current.style.left = position.x + 20 + 'px';
        }
        tooltipRef.current.style.top = position.y + tooltipRef.current.offsetHeight + 20 + 'px';
        let html = '';
        for (const [key, value] of Object.entries(data)) {
          html += \`<div className="title"><span>\${key}</span>：<span>\${value}</span></div>\`;
        }
        if (html === '') {
          tooltipRef.current.style.display = 'none';
        } else {
          tooltipRef.current.style.display = 'block';
          tooltipRef.current.innerHTML = html;
        }
      } else if (type === 'enter') {
        tooltipRef.current.style.display = 'block';
      } else if (type === 'leave') {
        tooltipRef.current.style.display = 'none';
      }
    }
  };

  const handleRefresh = () => {
    const newChartConfig = Object.assign({}, chartConfig);
    newChartConfig.groups.forEach(group => {
      group.values = disOrder(group.values);
    });
    setChartConfig(newChartConfig);
  };

  return (
    <div className="my-chart">
      <Button onClick={handleRefresh}>刷新</Button>

      <EWChart
        renderer="svg"
        type="candlestick"
        size={{
          // 宽度自适应
          height: 300,
          top: 20,
          right: 30,
          bottom: 30,
          left: 30,
        }}
        data={chartConfig as EWChartData}
        method={{
          onMove: handleMove,
        }}
        interactive={{
          mouse: {
            crossText: true, // 是否展示y坐标实时文本
          },
        }}
      />

      <div className="chart-tooltip" ref={tooltipRef}></div>
    </div>
  );
};

const Scatter = () => {
  const Chart = useMemo(() => <ScatterChart />, []); // 必须使用useMemo避免react重绘丢掉ewchart中的状态

  return (
    <div className="test_box">
      {Chart}
    </div>
  );
};

export default Scatter;
`;

const initConfig = {
  x: {
    start: 1512432000000, // 时间戳
    end: 1516147200000, // 时间戳
    interval: 86400000, // 86400秒，每个点的时间间隔
    format: '%Y.%m.%d',
  },
  y: {
    start: 130,
    end: 180,
  },
  yUnit: 'K',
  maxWidth: 15, // 每根k线的宽度
  groups: [
    {
      values: StockData,
    },
  ],
};

const ScatterChart = () => {
  const [chartConfig, setChartConfig] = useState(initConfig);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const ob = observer();
    tooltipRef.current && ob.observe(tooltipRef.current);
    return () => {
      ob.disconnect();
    };
  }, []);

  const observer = () => {
    const ob = new IntersectionObserver(
      entries => {
        if (entries[0].intersectionRatio > 0 && entries[0].intersectionRatio < 1) {
          entries[0].target.style.left =
            entries[0].target.parentElement.offsetWidth - entries[0].target.offsetWidth + 'px';
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.1, 0.5, 1],
      }
    );
    tooltipRef.current && ob.observe(tooltipRef.current);
    return ob;
  };

  const handleMove = (
    type: 'enter' | 'move' | 'leave', // 鼠标事件类型
    data: Array<{ color?: string; label: string; value: number | null; x?: number; y?: number }>, // 当前点的信息
    position: { x: number; y: number } // 鼠标的实时位置
  ) => {
    if (tooltipRef.current) {
      if (type === 'move') {
        const maxOffsetX = position.x + tooltipRef.current.offsetWidth + 20;
        if (maxOffsetX < tooltipRef.current.parentElement.offsetWidth) {
          tooltipRef.current.style.left = position.x + 10 + 'px';
        }
        tooltipRef.current.style.top = position.y + tooltipRef.current.offsetHeight + 10 + 'px';
        let html = '';
        for (const [key, value] of Object.entries(data)) {
          html += `<div className="title"><span>${key}</span>：<span>${value}</span></div>`;
        }
        if (html === '') {
          tooltipRef.current.style.display = 'none';
        } else {
          tooltipRef.current.style.display = 'block';
          tooltipRef.current.innerHTML = html;
        }
      } else if (type === 'enter') {
        tooltipRef.current.style.display = 'block';
      } else if (type === 'leave') {
        tooltipRef.current.style.display = 'none';
      }
    }
  };

  const handleRefresh = () => {
    const newChartConfig = Object.assign({}, chartConfig);
    newChartConfig.groups.forEach(group => {
      group.values = disOrder(group.values);
    });
    setChartConfig(newChartConfig);
  };

  return (
    <div className="my-chart">
      <Button onClick={handleRefresh}>刷新</Button>

      <EWChart
        renderer="svg"
        type="candlestick"
        size={{
          // 宽度自适应
          height: 300,
          top: 20,
          right: 30,
          bottom: 30,
          left: 30,
        }}
        data={chartConfig as EWChartData}
        method={{
          onMove: handleMove,
        }}
        interactive={{
          mouse: {
            crossText: true, // 是否展示y坐标实时文本
          },
        }}
      />

      <div className="chart-tooltip" ref={tooltipRef}></div>
    </div>
  );
};

const Scatter = () => {
  const Chart = useMemo(() => <ScatterChart />, []); // 必须使用useMemo避免react重绘丢掉ewchart中的状态

  return (
    <div className="test_box">
      {Chart}
      <Sandpack
        template="react"
        theme="dark"
        files={{
          '/main.tsx': des,
          '/tree.json': JSON.stringify(StockData, null, '\t'),
        }}
        options={{
          layout: 'none',
          visibleFiles: ['/main.tsx', '/tree.json'],
          activeFile: '/main.tsx',
          editorHeight: '600px',
        }}
      />
    </div>
  );
};

export default Scatter;
