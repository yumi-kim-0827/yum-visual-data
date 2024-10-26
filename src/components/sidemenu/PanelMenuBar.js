import React from "react";
import { useRouter } from "next/router";
//components
import { PanelMenu } from "primereact/panelmenu";

export default function PanelMenuBar() {
  const router = useRouter();
  const items = [
    {
      label: "막대 및 라인 그래프만들기",
      icon: "pi pi-chart-line",
      items: [
        {
          label: "막대그래프 만들기",
          icon: "pi pi-chart-bar",
          items: [
            {
              label: "심플 원칼라 막대그래프",
              icon: "pi pi-pencil",
              command: () => router.push("/create/bar"),
            },
            {
              label: "수직 라벨 막대그래프",
              icon: "pi pi-pencil",
              command: () => router.push("/create/bar/barChart1"),
            },
            {
              label: "두 항목 비율 비교 그래프",
              icon: "pi pi-pencil",
              command: () => router.push("/create/bar/barChart2"),
            },
          ],
        },
        {
          label: "라인그래프 만들기",
          icon: "pi pi-chart-line",
          items: [
            {
              label: "시간에 따른 선그래프",
              icon: "pi pi-pencil",
              command: () => router.push("/create/line/line1"),
            },
          ],
        },
      ],
    },
    {
      label: "파이만들기",
      icon: "pi pi-chart-pie",
      items: [
        {
          label: "파이 차트",
          icon: "pi pi-pencil",
          command: () => router.push("/create/pie/pieChart1"),
        },
        {
          label: "그라데이션 파이 차트",
          icon: "pi pi-pencil",
          command: () => router.push("/create/pie/pieChart2"),
        },
        {
          label: "하프 반형 파이 차트",
          icon: "pi pi-pencil",
          command: () => router.push("/create/pie/pieChart3"),
        },
      ],
    },
    {
      label: "지도만들기",
      icon: "pi pi-globe",
      items: [
        {
          label: "포인트 세계지도",
          icon: "pi pi-map",
          command: () => router.push("/create/map/mapClusterPoint"),
        },
        {
          label: "Desktop",
          icon: "pi pi-desktop",
        },
        {
          label: "Tablet",
          icon: "pi pi-tablet",
        },
      ],
    },
  ];
  return <PanelMenu model={items} className="w-full md:w-20rem" />;
}
