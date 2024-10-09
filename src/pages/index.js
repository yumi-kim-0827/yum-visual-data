import React from "react";
import dynamic from "next/dynamic";
//components
import { Fieldset } from "primereact/fieldset";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Fieldset legend="인포그래픽 만들기">메인</Fieldset>
    </main>
  );
}
