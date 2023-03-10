/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import EWChart, { EWChartData, getColorsByIndex } from 'ewchart';
import { Button } from 'antd';
import { disOrder } from './helper';

const des = `
1. 
`;

const arr1 = [
  75, 25, 90, 251, 208, null, null, null, null, 60, 170, 248, 52, 238, 96, 132, 68, 253, 163, 98, 107, 155, 110, 82, 93, 148, 185, 111, 55, 63,
];
const arr2 = [
  75, 132, 68, 253, 163, 98, 107, 25, 90, 251, 208, 56, 97, 79, 238, 96, 155, 110, 82, 93, 148, 185, 111, null, null, null, null, 19, 60, 63,
];
const initConfig = {
  x: {
    start: 1677658584000, // 时间戳
    end: 1677658614000, // 时间戳
    interval: 1000, // 1秒，每个点的时间间隔
  },
  y: {
    start: 0,
    end: 300,
  },
  yUnit: 'K',
  pointType: 'fill', // fill实心 stroke空心
  pointSize: 5, // 点大小
  groups: [
    {
      lineType: 'solid',
      label: '今天',
      values: arr1,
    },
    {
      lineType: 'dotted',
      label: '昨天',
      values: arr2,
    },
  ],
};

const ScatterChart = ({ handleSelect }) => {
  const [chooseIndex, setChooseIndex] = useState<number | undefined>(undefined);
  const [chartConfig, setChartConfig] = useState(initConfig)
  const [labels] = useState(() => chartConfig.groups.map(group => group.label));
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

  const handleRefresh = () => {
    const newChartConfig = Object.assign({}, chartConfig);
    newChartConfig.groups.forEach(group => {
      group.values = disOrder(group.values);
    });
    setChartConfig(newChartConfig);
  };

  const handelFootClick = (i: number) => {
    if(i === chooseIndex) {
      const newChartConfig = Object.assign({}, initConfig)
      setChartConfig(newChartConfig);
      setChooseIndex(undefined);
    } else {
      setChooseIndex(i);
      if(i !== undefined) {
        const newChartConfig = Object.assign({}, initConfig)
        newChartConfig.groups = [newChartConfig.groups[i]];
        const [start, end] = getExtent(newChartConfig.groups[0].values)
        newChartConfig.y = { start, end };
        setChartConfig(newChartConfig);
      }
    }
  };

  const getExtent = (arr: Array<number | null>) => {
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    arr.forEach(d => {
      if(d != null && max < d) {
        max = d;
      }
      if(d != null && min > d) {
        min = d;
      }
    })

    return [min, max];
  }

  return (
    <div className="my-chart">

      <Button onClick={handleRefresh}>刷新</Button>

      <EWChart
        type="scatter"
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
          onSelect: handleSelect,
        }}
        interactive={{
          mouse: {
            crossText: true, // 是否展示y坐标实时文本
          },
          select: {
            min: 5, // 最小的选中范围中允许出现的点个数
          },
        }}
      />

      <div className="chart-foot">
        {labels.map((label, index) => {
          return (
            <div className={'foot-item ' + ((chooseIndex === index || chooseIndex === undefined)? 'choosed' : 'no_choose')} key={index} onClick={() => handelFootClick(index)}>
              <span className="foot-dot" style={{ backgroundColor: getColorsByIndex(index) }}></span>
              <span className="foot-label">{label}</span>
            </div>
          );
        })}
      </div>

      <div className="chart-tooltip" ref={tooltipRef}></div>
    </div>
  );
};

const Scatter = () => {
  const [dateText, setDateText] = useState('暂无数据');
  const handleSelect = (dateRange: Date[]) => {
    setDateText(dateRange[0].toLocaleTimeString() + '~' + dateRange[1].toLocaleTimeString());
  };

  const Chart = useMemo(() => <ScatterChart handleSelect={handleSelect} />, []); // 必须使用useMemo避免react重绘丢掉ewchart中的状态

  return (
    <div className="test_box">
      {Chart}
      选择的时间：{dateText}
    
      <pre>
        <code>{des}</code>
      </pre>
    </div>
  );
};

export default Scatter;
