import React from "react";
import dynamic from "next/dynamic";
//components
import { Fieldset } from "primereact/fieldset";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Fieldset legend="Header">메인</Fieldset>
    </main>
  );
}
