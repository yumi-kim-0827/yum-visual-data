import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
//components
import { Fieldset } from "primereact/fieldset";
import BasicInput from "@/src/components/charts/input/BasicInput";

// 클라이언트 사이드에서만 렌더링하도록 설정
const SemiPieChart = dynamic(
  () => import("@/src/components/charts/pie/SemiPieChart"),
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
  //마지막 데이터 삭제 핸들러
  const handleClickDataDelete = () => {
    setData((prev) => prev.slice(0, -1));
  };

  return (
    <main className="flex-1 flex gap-2">
      <Fieldset legend="데이터 추가하기" className="w-1/3">
        <BasicInput
          handleClickDataUpdate={handleClickDataUpdate}
          handleClickDataDelete={handleClickDataDelete}
        />
      </Fieldset>
      <Fieldset legend="그래프" className="w-2/3">
        {myData.length > 0 ? (
          <SemiPieChart myData={myData} />
        ) : (
          <span className="block text-center text-stone-500">
            <i className="pi pi-exclamation-circle"></i> 데이터를 추가해주세요.
          </span>
        )}
      </Fieldset>
    </main>
  );
}
