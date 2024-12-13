import React, { useState } from "react";
import { useRouter } from "next/router";
//components
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Menubar } from "primereact/menubar";

export default function Header() {
  const router = useRouter();

  //메뉴 구성
  const manubarItems = [
    {
      label: "홈",
      icon: "pi pi-home",
      command: () => router.push("/"),
    },
    {
      label: "사용 설명",
      icon: "pi pi-home",
      command: () => router.push("/insight/help"),
    },
    {
      label: "궁금해요",
      icon: "pi pi-search",
      items: [
        {
          label: "인포그래픽이란?",
          icon: "pi pi-server",
          command: () => router.push("/insight/infographicInfo"),
        },
        {
          label: "차트의 종류",
          icon: "pi pi-bolt",
          command: () => router.push("/insight/chartInfo"),
        },
        {
          label: "데이터의 종류",
          icon: "pi pi-server",
          command: () => router.push("/insight/dataInfo"),
        },
      ],
    },
  ];

  const endContent = (
    <div class="flex gap-1">
      <Button
        label="한국어"
        rounded
        text
        severity="help"
        aria-label="Favorite"
        onClick={() => {
          router.push("/");
        }}
      />
      <Button
        label=" English"
        rounded
        text
        severity="danger"
        aria-label="Cancel"
        onClick={() => {
          router.push("/en");
        }}
      />
    </div>
  );

  return (
    // <Toolbar start={startContent} center={centerContent} end={endContent} />
    <Menubar model={manubarItems} end={endContent} />
  );
}
