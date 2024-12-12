import React, { useLayoutEffect, useMemo } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

const TwoCategoryStackedChart = ({ myData, theme }) => {
  const memoizedMyData = useMemo(() => myData, [myData]);

  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");
    root._logo.dispose();

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 0,
        layout: root.verticalLayout,
      })
    );

    const data = memoizedMyData;

    // Create axes
    const xRenderer = am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true,
    });
    const xAxis = chart.xAxes.push(
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

    const yAxis = chart.yAxes.push(
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
    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    // Add series
    function makeSeries(name, fieldName, colorIdx) {
      const series = chart.series.push(
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
        fill: theme[colorIdx],
      });

      //색상 set
      chart.get("colors").set("colors", theme);
      // series.columns.template.adapters.add("fill", (fill, target) => {
      //   return chart.get("colors").getIndex(series.columns.indexOf(target));
      // });
      // series.columns.template.setAll({ strokeOpacity: 0 });

      //데이터 셋
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

    const twoKeys = Object.keys(data[0]);
    const renderNumber = twoKeys.length - 1; // 2

    for (let i = 0; i < renderNumber; i++) {
      makeSeries(`${twoKeys[i + 1]}`, `${twoKeys[i + 1]}`, i);
    }

    //색상 set

    //추출
    return () => {
      root.dispose();
    };
  }, [memoizedMyData, theme]);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default TwoCategoryStackedChart;
