import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
//components
import { Fieldset } from "primereact/fieldset";
import BasicInput from "@/src/components/charts/input/BasicInput";

// 클라이언트 사이드에서만 렌더링하도록 설정
const VerticalLabelBarChart = dynamic(
  () => import("@/src/components/charts/VerticalLabelBarChart"),
  {
    ssr: false,
  }
);

export default function Home() {
  //전달 데이터
  const [myData, setData] = useState([]);
  //데이터 추가 핸들러
  const handleClickDataUpdate = (input) => {
    setData((prev) => [...prev, { ...input, value: parseInt(input.value) }]);
  };
  return (
    <main className="flex-1 flex flex-col gap-2">
      <Fieldset legend="데이터 추가하기">
        <BasicInput handleClickDataUpdate={handleClickDataUpdate} />
      </Fieldset>
      <Fieldset legend="그래프">
        <VerticalLabelBarChart myData={myData} />
      </Fieldset>
    </main>
  );
}
