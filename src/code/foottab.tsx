/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import EWChart, { EWChartData, getColorsByIndex } from 'ewchart';
import { Breadcrumb, Button } from 'antd';
import { disOrder } from './helper';

const des = 
`
一般的开源绘图包中的foottab都是内置的，这种方式开箱即用能够提供一定的便利，但是丧失了灵活性，在实际开发项目中经常会遇到定制化的需求，基于这种情形，在开发ewchart时，
我会将绘图以外的所有功能提供给用户自定义去实现，本例为使用foottab的demo，具体请查看此demo源码
`

const arr1 = [
  75, 25, 90, 251, 208, null, null, null, null, 60, 170, 248, 52, 238, 96, 132, 68, 253, 163, 98, 107, 155, 110, 82, 93, 148, 185, 111, 55, 63,
];
const arr2 = [
  75, 132, 68, 253, 163, 98, 107, 25, 90, 251, 208, 56, 97, 79, 238, 96, 155, 110, 82, 93, 148, 185, 111, null, null, null, null, 19, 60, 63,
];
const initConfig: EWChartData = {
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
  groups: [
    {
      lineType: 'solid',
      label: '今天',
      break: 'line',
      breakType: 'dotted',
      values: arr1,
    },
    {
      lineType: 'dotted',
      label: '昨天',
      break: 'none',
      values: arr2,
    },
  ],
};

const Line = () => {
  const [chooseIndex, setChooseIndex] = useState<number | undefined>(undefined);
  const [chartConfig, setChartConfig] = useState(initConfig)
  const [labels] = useState(() => chartConfig.groups.map(group => group.label))

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

  const handleRefresh = () => {
    const newChartConfig = Object.assign({}, chartConfig)
    newChartConfig.groups.forEach(group => {
      group.values = disOrder(group.values);
    })
    setChartConfig(newChartConfig)
  }

  return (
    <div className="test_box">
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>ewchart</Breadcrumb.Item>
        <Breadcrumb.Item>foottab</Breadcrumb.Item>
      </Breadcrumb>

      <Button onClick={handleRefresh}>刷新</Button>
          
      <EWChart
        chart={{ type: 'line' }}
        size={{
          // 宽度自适应
          height: 300,
          top: 20,
          right: 30,
          bottom: 30,
          left: 30,
        }}
        data={chartConfig}
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

      <pre>
        <code>{des}</code>
      </pre>
    </div>
  );
};

export default Line;
