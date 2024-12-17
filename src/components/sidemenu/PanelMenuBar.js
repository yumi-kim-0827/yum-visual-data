import React from "react";
import { useRouter } from "next/router";
//components
import { PanelMenu } from "primereact/panelmenu";

export default function PanelMenuBar() {
  const router = useRouter();
  const items = [
    {
      label: "막대 그래프만들기",
      icon: "pi pi-chart-line",
      items: [
        {
          label: "기본 수직 막대그래프",
          icon: "pi pi-pencil",
          command: () => router.push("/create/bar"),
        },
        {
          label: "기본 수직 라벨 막대그래프",
          icon: "pi pi-pencil",
          command: () => router.push("/create/bar/barChart1"),
        },
        {
          label: "두 항목 비율 비교 그래프",
          icon: "pi pi-pencil",
          command: () => router.push("/create/bar/barChart2"),
        },
        {
          label: "년도별 두 항목 비교 클러스터",
          icon: "pi pi-pencil",
          command: () => router.push("/create/bar/barChart3"),
        },
        {
          label: "년도별 세 항목 비교 클러스터",
          icon: "pi pi-pencil",
          command: () => router.push("/create/bar/barChart4"),
        },
      ],
    },
    {
      label: "선 그래프만들기",
      icon: "pi pi-chart-line",
      items: [
        {
          label: "시간에 따른 선그래프",
          icon: "pi pi-pencil",
          command: () => router.push("/create/line/line1"),
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
          label: "범위 세계지도",
          icon: "pi pi-map",
          command: () => router.push("/create/map/mapRangePoint"),
        },
        {
          label: "Tablet",
          icon: "pi pi-tablet",
        },
      ],
    },
    {
      label: "도구",
      icon: "pi pi-wrench",
      items: [
        {
          label: "색상 코드 추출",
          icon: "pi pi-palette",
          command: () => router.push("/tools/colorPick"),
        },
        {
          label: "2가지 색상 조합",
          icon: "pi pi-palette",
          command: () => router.push("/tools/twotonecolor"),
        },
      ],
    },
  ];
  return <PanelMenu model={items} className="w-full md:w-20rem" />;
}
