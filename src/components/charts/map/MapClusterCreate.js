import React, { useState, useLayoutEffect } from "react";
//map import
import * as am5 from "@amcharts/amcharts5"; // am5 import
import * as am5map from "@amcharts/amcharts5/map"; // am5map import
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow"; // geodata import

const MapClusterCreate = ({ myData }) => {
  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
      })
    );

    const zoomControl = chart.set(
      "zoomControl",
      am5map.ZoomControl.new(root, {})
    );
    zoomControl.homeButton.set("visible", true);

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow.default,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xdadada),
    });

    const pointSeries = chart.series.push(
      am5map.ClusteredPointSeries.new(root, {})
    );
    pointSeries.set("clusteredBullet", function (root) {
      const container = am5.Container.new(root, {
        cursorOverStyle: "pointer",
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    // Create regular bullets
    pointSeries.bullets.push(function () {
      const circle = am5.Circle.new(root, {
        radius: 6,
        tooltipY: 0,
        fill: am5.color(0xff8c00),
        tooltipText: "{title}",
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    // Set data
    const cities = myData;

    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      addCity(city.longitude, city.latitude, city.title);
    }

    function addCity(longitude, latitude, title) {
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title,
      });
    }

    chart.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, [myData]);

  return (
    <>
      <div id="chartdiv" style={{ width: "100%", height: "600px" }}></div>
    </>
  );
};

export default MapClusterCreate;
