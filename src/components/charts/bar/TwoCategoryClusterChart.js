import React, { useLayoutEffect, useMemo } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5index from "@amcharts/amcharts5/index";
import * as am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const TwoCategoryClusterChart = ({
  myData,
  firstDataKey,
  secondDataKey,
  theme,
}) => {
  const memoizedMyData = useMemo(
    () => myData,
    [myData, firstDataKey, secondDataKey]
  );

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root._logo.dispose();
    // Create chart

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 0,
        layout: root.verticalLayout,
      })
    );

    // Add legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    // Data
    let data = memoizedMyData;

    // Create axes
    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: true,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
          minorGridEnabled: true,
        }),
      })
    );

    yAxis.data.setAll(data);

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
          strokeOpacity: 0.1,
          minGridDistance: 50,
        }),
        min: 0,
      })
    );

    //색상 set
    const colorSet = am5.ColorSet.new(root, {
      colors: theme.map((color) => am5.color(color)), // Convert theme array to am5 colors
      reuse: true,
    });

    chart.set("colors", colorSet);

    // Add series
    function createSeries(field, name) {
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: field,
          categoryYField: "year",
          sequencedInterpolation: true,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "[bold]{name}[/]\n{categoryY}: {valueX}",
          }),
        })
      );

      series.columns.template.setAll({
        height: am5.p100,
        strokeOpacity: 0,
      });

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationX: 1,
          locationY: 0.5,
          sprite: am5.Label.new(root, {
            centerY: am5.p50,
            text: "{valueX}",
            populateText: true,
          }),
        });
      });

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationX: 1,
          locationY: 0.5,
          sprite: am5.Label.new(root, {
            centerX: am5.p100,
            centerY: am5.p50,
            text: "{name}",
            fill: am5.color(0xffffff),
            populateText: true,
          }),
        });
      });

      series.data.setAll(data);
      series.appear();

      return series;
    }

    createSeries(`${firstDataKey}`, `${firstDataKey}`);
    createSeries(`${secondDataKey}`, `${secondDataKey}`);

    legend.data.setAll(chart.series.values);

    // Add cursor
    let cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomY",
      })
    );
    cursor.lineY.set("forceHidden", true);
    cursor.lineX.set("forceHidden", true);

    // Make stuff animate on load
    chart.appear(1000, 100);

    //추출
    return () => {
      root.dispose();
    };
  }, [memoizedMyData, theme, firstDataKey, secondDataKey]);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default TwoCategoryClusterChart;
