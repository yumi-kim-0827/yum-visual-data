import React, { useState } from "react";
import { useRouter } from "next/router";
//components
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

export default function Header() {
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

  //헤더 구성
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
    <Toolbar start={startContent} center={centerContent} end={endContent} />
  );
}
