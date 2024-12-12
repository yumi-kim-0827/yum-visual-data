import React, { useLayoutEffect, useMemo } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function VerticalLabelBarChart({ myData, theme }) {
  const memoizedMyData = useMemo(() => myData, [myData]);

  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");
    root._logo.dispose();

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 1,
      })
    );

    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    });

    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
    });

    xRenderer.grid.template.setAll({
      location: 1,
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "category",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1,
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      })
    );

    // Create series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "category",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    });

    // 데이타 셋 ****
    const data = memoizedMyData;

    xAxis.data.setAll(data);
    series.data.setAll(data);

    //색상 set
    chart.get("colors").set("colors", theme);
    series.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    series.columns.template.setAll({ strokeOpacity: 0 });

    //추출
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [memoizedMyData, theme]);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}
