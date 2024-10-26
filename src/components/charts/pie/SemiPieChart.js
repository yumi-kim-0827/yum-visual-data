import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5/index";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const SemiPieChart = ({ myData }) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root._logo.dispose();
    root.setThemes([am5themes_Animated.new(root)]);

    // 데이타 셋
    // Set data
    let data = myData;

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        startAngle: 180,
        endAngle: 360,
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        startAngle: 180,
        endAngle: 360,
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      })
    );

    series.states.create("hidden", {
      startAngle: 180,
      endAngle: 180,
    });

    series.slices.template.setAll({
      cornerRadius: 5,
    });

    series.ticks.template.setAll({
      forceHidden: true,
    });

    series.data.setAll(data);
    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [myData]);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default SemiPieChart;
