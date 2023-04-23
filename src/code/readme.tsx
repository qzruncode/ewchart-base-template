import React from 'react';

function ReadMe() {
  return (
    <div>
      <h2>ewchart是专门将数据绘制成二维图形</h2>
      <p>
        1.
        开发ewchart的目的：我在开发业务需求过程中会经常遇到各种定制化的需求，然而现在的开源绘图工具大多写的太死，ewchart中只包含必要的绘图元素，诸如tooltip，foottab这类完全由用户自定义实现
      </p>
      <p>2. 支持的图形类别：折线图、面积图、饼图、直方图、散点图、树形图</p>
      <p>
        3. 支持的渲染模式：svg、canvas、canvas+svg。
        <br />
        <br />
        1）svg不适合path元素d属性超长的渲染场景，产生这种情况的一般都是曲线中包含大量的点，比如一条曲线由上万条数据生成，在用户侧可以在不影响曲线展示的情况下，将曲线中的部分点丢弃，在ewchart框架侧可以选择canvas渲染
        <br />
        <br />
        2）canvas适合渲染大量的数据，可以使绘制更加细腻，但是当渲染的图形变更时需要重新计算，在这方面svg更胜一筹，svg不需要重新计算整个渲染场景，只需要修改对应需要变更的dom元素即可。当遇到图表渲染大量数据时，用户交互只改变图的部分区域，这种情况选择canvas+svg渲染，canvas负责渲染基础图形，svg负责渲染变动的区域。
      </p>
      <p>4. 未来的计划：持续提供更多的绘图功能</p>
    </div>
  );
}

export default ReadMe;
