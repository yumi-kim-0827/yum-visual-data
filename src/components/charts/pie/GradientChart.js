import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5/index";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const GradientChart = ({ myData }) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root._logo.dispose();
    root.setThemes([am5themes_Animated.new(root)]);

    // 데이타 셋
    // Set data
    let data = myData;

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
        layout: root.verticalLayout,
        innerRadius: am5.percent(60),
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
      })
    );

    series.set(
      "colors",
      am5.ColorSet.new(root, {
        colors: [
          am5.color(0xff7455),
          am5.color(0xffbe55),
          am5.color(0x73ddcb),
          am5.color(0x758ffa),
          am5.color(0xb075fa),
          am5.color(0xfa75b9),
          am5.color(0xa75253),
        ],
      })
    );

    let gradient = am5.RadialGradient.new(root, {
      stops: [
        { color: am5.color(0x000000) },
        { color: am5.color(0x000000) },
        {},
      ],
    });

    series.slices.template.setAll({
      fillGradient: gradient,
      strokeWidth: 2,
      stroke: am5.color(0xffffff),
    });

    series.ticks.template.setAll({
      strokeOpacity: 0.4,
      strokeDasharray: [2, 2],
    });

    series.states.create("hidden", {
      endAngle: -90,
    });

    // Set data

    series.data.setAll(data);

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
      })
    );
    legend.markerRectangles.template.adapters.add("fillGradient", function () {
      return undefined;
    });
    legend.data.setAll(series.dataItems);

    series.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, [myData]);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default GradientChart;
