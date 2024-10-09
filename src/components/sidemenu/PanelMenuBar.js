import React from "react";
import { useRouter } from "next/router";
//components
import { PanelMenu } from "primereact/panelmenu";

export default function PanelMenuBar() {
  const router = useRouter();
  const items = [
    {
      label: "그래프만들기",
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
              command: () => router.push("/create/line"),
            },
          ],
        },
      ],
    },
    {
      label: "파이만들기",
      icon: "pi pi-cloud",
      items: [
        {
          label: "파이 차트",
          icon: "pi pi-cloud-upload",
          command: () => router.push("/create/pie/pieChart1"),
        },
        {
          label: "Download",
          icon: "pi pi-cloud-download",
        },
        {
          label: "Sync",
          icon: "pi pi-refresh",
        },
      ],
    },
    {
      label: "지도만들기",
      icon: "pi pi-desktop",
      items: [
        {
          label: "Phone",
          icon: "pi pi-mobile",
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
