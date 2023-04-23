import React, { useEffect, useMemo, useRef, useState } from 'react';
import EWChart from 'ewchart';
import { Button } from 'antd';
import { disOrder } from '../helper';
import { Sandpack } from '@codesandbox/sandpack-react';

const des = `
import React, { useEffect, useMemo, useRef, useState } from 'react';
import EWChart from 'ewchart';
import { Button } from 'antd';
import { disOrder } from '../helper';

const arr1: number[] = [];

for (let i = 0; i < 10000; i++) {
  arr1.push(Math.random() * 200);
}

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const LineChart = ({ handleSelect }) => {
  const tooltipRef = useRef(null);
  const [toDay, setToDay] = useState(arr1);

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
          html += \`<div className="title"><span>\${d.label}</span>：<span>\${d.value}</span></div>\`;
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

  return (
    <div className="my-chart">
      <Button
        onClick={() => {
          setToDay(disOrder(toDay));
        }}>
        刷新
      </Button>
      <EWChart
        renderer="canvas+svg"
        type="line"
        size={chartSizeParams}
        data={{
          x: {
            start: 1677658584000, // 时间戳
            end: 1677658584000 + 1000 * 10000, // 时间戳
            interval: 1000, // 1秒，每个点的时间间隔
          },
          y: {
            start: 0,
            end: 300,
          },
          yUnit: 'K',
          groups: [
            {
              lineType: 'solid',
              label: '今天',
              break: 'line',
              breakType: 'dotted',
              values: toDay,
            },
          ],
        }}
        method={{
          onMove: handleMove,
          onSelect: handleSelect,
        }}
        interactive={{
          select: {
            min: 5, // 最小的选中范围中允许出现的点个数
          },
          mouse: {
            crossText: true, // 是否展示y坐标实时文本
          },
        }}
      />

      <div className="chart-tooltip" ref={tooltipRef}></div>
    </div>
  );
};

const Tooltip = () => {
  const [dateText, setDateText] = useState('暂无数据');

  const handleSelect = (dateRange: Date[]) => {
    setDateText(dateRange[0].toLocaleTimeString() + '~' + dateRange[1].toLocaleTimeString());
  };

  const Line = useMemo(() => <LineChart handleSelect={handleSelect} />, []); // 必须使用useMemo避免react重绘丢掉ewchart中的状态

  return (
    <div className="test_box">
      {Line}
      选择的时间：{dateText}
    </div>
  );
};

export default Tooltip;
`;

const arr1: number[] = [];

for (let i = 0; i < 10000; i++) {
  arr1.push(Math.random() * 200);
}

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const LineChart = ({ handleSelect }) => {
  const tooltipRef = useRef(null);
  const [toDay, setToDay] = useState(arr1);

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

  return (
    <div className="my-chart">
      <Button
        onClick={() => {
          setToDay(disOrder(toDay));
        }}>
        刷新
      </Button>
      <EWChart
        renderer="canvas+svg"
        type="line"
        size={chartSizeParams}
        data={{
          x: {
            start: 1677658584000, // 时间戳
            end: 1677658584000 + 1000 * 10000, // 时间戳
            interval: 1000, // 1秒，每个点的时间间隔
          },
          y: {
            start: 0,
            end: 300,
          },
          yUnit: 'K',
          groups: [
            {
              lineType: 'solid',
              label: '今天',
              break: 'line',
              breakType: 'dotted',
              values: toDay,
            },
          ],
        }}
        method={{
          onMove: handleMove,
          onSelect: handleSelect,
        }}
        interactive={{
          select: {
            min: 5, // 最小的选中范围中允许出现的点个数
          },
          mouse: {
            crossText: true, // 是否展示y坐标实时文本
          },
        }}
      />

      <div className="chart-tooltip" ref={tooltipRef}></div>
    </div>
  );
};

const Tooltip = () => {
  const [dateText, setDateText] = useState('暂无数据');

  const handleSelect = (dateRange: Date[]) => {
    setDateText(dateRange[0].toLocaleTimeString() + '~' + dateRange[1].toLocaleTimeString());
  };

  const Line = useMemo(() => <LineChart handleSelect={handleSelect} />, []); // 必须使用useMemo避免react重绘丢掉ewchart中的状态

  return (
    <div className="test_box">
      {Line}
      选择的时间：{dateText}
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

export default Tooltip;
