import React, { useRef, useState } from 'react';
import EWChart, { getColorsByIndex } from 'ewchart';
import { Button } from 'antd';
import { disOrder } from '../helper';
import { Sandpack } from '@codesandbox/sandpack-react';

const des = `
import React, { useRef, useState } from 'react';
import EWChart, { getColorsByIndex } from 'ewchart';
import { Button } from 'antd';
import { disOrder } from './helper';

const arr = [
  { label: 'a1-longlonglonglongtext', values: [29649, 5287] },
  { label: 'a2-longlonglonglongtext', values: [5287, 4723] },
  { label: 'a3-longlonglonglongtext', values: [4723, 3210] },
  { label: 'a4-longlonglonglongtext', values: [3210, 31561] },
  { label: 'a5-longlonglonglongtext', values: [31561, 29649] },
  { label: 'a6-longlonglonglongtext', values: [29649, 3210] },
];

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const HistogramChart = () => {
  const tooltipRef = useRef(null);
  const [histogramData, setHistogramData] = useState(arr);
  const [labels] = useState(() => arr.map(d => d.label));
  const [chooseIndex, setChooseIndex] = useState<number | undefined>(undefined);

  const handleMove = (
    type: 'enter' | 'move' | 'leave', // 鼠标事件类型
    data: Array<{ color?: string; label: string; value: number | null }>, // 当前点的信息
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
        data.forEach(d => {
          html += \`<div className="title"><span>$\{d.label}</span>：<span>\${d.value}</span></div>\`;
        });
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

  const handelFootClick = (i: number) => {
    if (i === chooseIndex) {
      setHistogramData(arr);
      setChooseIndex(undefined);
    } else {
      setChooseIndex(i);
      if (i !== undefined) {
        setHistogramData([arr[i]]);
      }
    }
  };

  return (
    <div className="my-chart" style={{ flex: 1 }}>
      <Button
        onClick={() => {
          const newData = [...histogramData];
          newData.forEach(d => {
            d.values = disOrder(d.values);
          });
          setHistogramData(newData);
        }}>
        刷新
      </Button>
      <EWChart
        renderer="svg"
        type="histogram"
        size={chartSizeParams}
        data={{
          groups: histogramData,
          y: {
            start: 0,
            end: 40000,
          },
          yUnit: 'K',
          gap: 5, // 柱子之间的间隙
          maxWidth: 30, // 柱子最大的宽度
        }}
        method={{
          onMove: handleMove,
        }}
        interactive={{
          mouse: {
            barText: true, // 是否展示选中柱子上方的文字
          },
        }}
      />

      <div className="chart-tooltip" ref={tooltipRef}></div>

      <div className="chart-foot">
        {labels.map((label, index) => {
          return (
            <div
              className={'foot-item ' + (chooseIndex === index || chooseIndex === undefined ? 'choosed' : 'no_choose')}
              key={index}
              onClick={() => handelFootClick(index)}>
              <span className="foot-dot" style={{ backgroundColor: getColorsByIndex(index) }}></span>
              <span className="foot-label">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Histogram = () => {
  return (
    <div className="test_box">
      <div style={{ display: 'flex' }}>
        <HistogramChart />
        <HistogramChart />
      </div>
    </div>
  );
};

export default Histogram;
`;

const arr = [
  { label: 'a1-longlonglonglongtext', values: [29649, 5287] },
  { label: 'a2-longlonglonglongtext', values: [5287, 4723] },
  { label: 'a3-longlonglonglongtext', values: [4723, 3210] },
  { label: 'a4-longlonglonglongtext', values: [3210, 31561] },
  { label: 'a5-longlonglonglongtext', values: [31561, 29649] },
  { label: 'a6-longlonglonglongtext', values: [29649, 3210] },
];

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const HistogramChart = () => {
  const tooltipRef = useRef(null);
  const [histogramData, setHistogramData] = useState(arr);
  const [labels] = useState(() => arr.map(d => d.label));
  const [chooseIndex, setChooseIndex] = useState<number | undefined>(undefined);

  const handleMove = (
    type: 'enter' | 'move' | 'leave', // 鼠标事件类型
    data: Array<{ color?: string; label: string; value: number | null }>, // 当前点的信息
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
        data.forEach(d => {
          html += `<div className="title"><span>${d.label}</span>：<span>${d.value}</span></div>`;
        });
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

  const handelFootClick = (i: number) => {
    if (i === chooseIndex) {
      setHistogramData(arr);
      setChooseIndex(undefined);
    } else {
      setChooseIndex(i);
      if (i !== undefined) {
        setHistogramData([arr[i]]);
      }
    }
  };

  return (
    <div className="my-chart" style={{ flex: 1 }}>
      <Button
        onClick={() => {
          const newData = [...histogramData];
          newData.forEach(d => {
            d.values = disOrder(d.values);
          });
          setHistogramData(newData);
        }}>
        刷新
      </Button>
      <EWChart
        renderer="svg"
        type="histogram"
        size={chartSizeParams}
        data={{
          groups: histogramData,
          y: {
            start: 0,
            end: 40000,
          },
          yUnit: 'K',
          gap: 5, // 柱子之间的间隙
          maxWidth: 30, // 柱子最大的宽度
        }}
        method={{
          onMove: handleMove,
        }}
        interactive={{
          mouse: {
            barText: true, // 是否展示选中柱子上方的文字
          },
        }}
      />

      <div className="chart-tooltip" ref={tooltipRef}></div>

      <div className="chart-foot">
        {labels.map((label, index) => {
          return (
            <div
              className={'foot-item ' + (chooseIndex === index || chooseIndex === undefined ? 'choosed' : 'no_choose')}
              key={index}
              onClick={() => handelFootClick(index)}>
              <span className="foot-dot" style={{ backgroundColor: getColorsByIndex(index) }}></span>
              <span className="foot-label">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Histogram = () => {
  return (
    <div className="test_box">
      <div style={{ display: 'flex' }}>
        <HistogramChart />
        <HistogramChart />
      </div>

      <Sandpack
        template="react"
        theme="dark"
        files={{
          '/main.tsx': des,
        }}
        options={{
          layout: 'none',
          visibleFiles: ['/main.tsx'],
          activeFile: '/main.tsx',
          editorHeight: '460px',
        }}
      />
    </div>
  );
};

export default Histogram;
