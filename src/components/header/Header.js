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
      command: () => router.push("/"),
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
  //우측 버튼 메뉴
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
    {
      label: "Delete",
      icon: "pi pi-times",
    },
  ];

  //툴바 구성
  const startContent = (
    <>
      <Button icon="pi pi-plus" className="mr-2" />
      <Button icon="pi pi-print" className="mr-2" />
      <Button icon="pi pi-upload" />
    </>
  );

  const centerContent = (
    <IconField iconPosition="left">
      <InputIcon className="pi pi-search" />
      <InputText placeholder="Search" />
    </IconField>
  );

  const endContent = (
    <div class="flex gap-2">
      <SplitButton label="Save" model={items} icon="pi pi-check"></SplitButton>
    </div>
  );

  return (
    // <Toolbar start={startContent} center={centerContent} end={endContent} />
    <Menubar model={manubarItems} />
  );
}
