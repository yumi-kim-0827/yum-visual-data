import React from "react";
import { useRouter } from "next/router";
//components
import { PanelMenu } from "primereact/panelmenu";

export default function PanelMenuBar() {
  const router = useRouter();
  const items = [
    {
      label: "그래프차트만들기",
      icon: "pi pi-file",
      items: [
        {
          label: "막대그래프만들기",
          icon: "pi pi-file",
          items: [
            {
              label: "심플 원칼라 막대그래프",
              icon: "pi pi-file-pdf",
              command: () => router.push("/create/bar"),
            },
            {
              label: "수직 라벨 막대그래프",
              icon: "pi pi-users",
              command: () => router.push("/create/bar/barChart1"),
            },
            {
              label: "두 항목 비율 비교 그래프",
              icon: "pi pi-users",
              command: () => router.push("/create/bar/barChart2"),
            },
          ],
        },
        {
          label: "Images",
          icon: "pi pi-image",
          items: [
            {
              label: "Logos",
              icon: "pi pi-image",
            },
          ],
        },
      ],
    },
    {
      label: "Cloud",
      icon: "pi pi-cloud",
      items: [
        {
          label: "Upload",
          icon: "pi pi-cloud-upload",
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
      label: "Devices",
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
