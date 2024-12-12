import React, { useLayoutEffect, useMemo } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

const SimpleBarChart = ({ myData, theme }) => {
  const memoizedMyData = useMemo(() => myData, [myData]);

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root._logo.dispose();

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    // Create X and Y axes
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
        }),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Add cursor
    let cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomX",
      })
    );
    cursor.lineY.set("visible", false);

    // 데이타 셋
    let data = memoizedMyData;
    xAxis.data.setAll(data);

    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
      })
    );

    series.data.setAll(data);

    //색상 set
    chart.get("colors").set("colors", theme);

    series.columns.template.adapters.add("fill", (fill, target) => {
      // 색상 인덱스가 정확히 매칭될 수 있도록 보장
      const index = series.columns.indexOf(target);
      if (index < theme) {
        return colorSet.getIndex(index); // 색상 인덱스를 색상 테마에 맞게 설정
      }
      return fill; // 색상 인덱스가 범위를 벗어나면 기본 색상을 유지
    });

    series.columns.template.setAll({ strokeOpacity: 0 });

    // Make stuff animate on load
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [memoizedMyData, theme]);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default SimpleBarChart;
