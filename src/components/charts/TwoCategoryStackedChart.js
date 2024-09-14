import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

const TwoCategoryStackedChart = ({ myData }) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root._logo.dispose();

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

    let data = myData;

    // Create axes
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true,
    });
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "categoryName",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xRenderer.grid.template.setAll({
      location: 1,
    });

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: 100,
        numberFormat: "#'%'",
        strictMinMax: true,
        calculateTotals: true,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    // Add legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    // Add series
    function makeSeries(name, fieldName) {
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          stacked: true,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          valueYShow: "valueYTotalPercent",
          categoryXField: "categoryName",
        })
      );

      series.columns.template.setAll({
        tooltipText:
          "{name}, {categoryX}:{valueYTotalPercent.formatNumber('#.#')}%",
        tooltipY: am5.percent(10),
      });
      series.data.setAll(data);

      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            text: "{valueYTotalPercent.formatNumber('#.#')}%",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true,
          }),
        });
      });

      legend.data.push(series);
    }

    let twoKeys = Object.keys(data[0]);
    let renderNumber = twoKeys.length - 1; // 2

    for (let i = 0; i < renderNumber; i++) {
      makeSeries(`${twoKeys[i + 1]}`, `${twoKeys[i + 1]}`);
    }

    return () => {
      root.dispose();
    };
  }, [myData]);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default TwoCategoryStackedChart;
