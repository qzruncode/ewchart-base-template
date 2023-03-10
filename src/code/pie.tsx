import React, { useRef, useState } from 'react';
import EWChart, { getColorsByIndex } from 'ewchart';
import { Button } from 'antd';
import { disOrder } from './helper';

const des = `
示例代码，具体请查看此demo源码
<EWChart
  type="pie"
  size={chartSizeParams}
  data={{
    groups: pieData,
  }}
  method={{
    onMove: handleMove,
  }}
  interactive={{
    mouse: {
      shadow: true, // 是否展示选中pie的阴影
      pieText: true, // 是否展示选中pie的提示文字
    },
  }}
/>
`;

const arr = [
  {
    label: 'a1',
    value: 29649,
  },
  {
    label: 'a2',
    value: 31561,
  },
  {
    label: 'a3',
    value: 3210,
  },
  {
    label: 'a4',
    value: 4723,
  },
  {
    label: 'a5',
    value: 5287,
  },
];

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const PieChart = () => {
  const tooltipRef = useRef(null);
  const [pieData, setPieData] = useState(arr);
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
      const newPieData = [...pieData];
      newPieData.forEach(d => {
        delete d.choose;
      });
      setPieData(newPieData);
      setChooseIndex(undefined);
    } else {
      setChooseIndex(i);
      if (i !== undefined) {
        const newPieData = [...pieData];
        newPieData.forEach(d => {
          delete d.choose;
        });
        newPieData[i] = Object.assign({}, newPieData[i], { choose: true });
        setPieData(newPieData);
      }
    }
  };

  return (
    <div className="my-chart">
      <Button
        onClick={() => {
          setPieData(disOrder(pieData));
        }}>
        刷新
      </Button>
      <EWChart
        type="pie"
        size={chartSizeParams}
        data={{
          groups: pieData,
        }}
        method={{
          onMove: handleMove,
        }}
        interactive={{
          mouse: {
            shadow: true, // 是否展示选中pie的阴影
            pieText: true, // 是否展示选中pie的提示文字
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

const Tooltip = () => {
  return (
    <div className="test_box">
      <PieChart />
      <pre>
        <code>{des}</code>
      </pre>
    </div>
  );
};

export default Tooltip;
