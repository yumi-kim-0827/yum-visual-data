import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
//components
import { Fieldset } from "primereact/fieldset";
import DateValueInput from "@/src/components/charts/input/DateValueInput";

// 클라이언트 사이드에서만 렌더링하도록 설정
const SimpleLineChart = dynamic(
  () => import("@/src/components/charts/line/SimpleLineChart"),
  {
    ssr: false,
  }
);

export default function Home() {
  //전달 데이터
  const [myData, setData] = useState([]);
  //데이터 추가 핸들러
  const handleClickDataUpdate = (data) => {
    setData((prev) => [...prev, data]);
  };
  //마지막 데이터 삭제 핸들러
  const handleClickDataDelete = () => {
    setData((prev) => prev.slice(0, -1));
  };

  return (
    <main className="flex-1 flex gap-2">
      <Fieldset
        legend="데이터 추가하기"
        className="w-1/3 h-full overflow-y-auto"
      >
        <DateValueInput
          handleClickDataUpdate={handleClickDataUpdate}
          handleClickDataDelete={handleClickDataDelete}
        />
      </Fieldset>
      <Fieldset legend="그래프" className="w-2/3 h-full overflow-y-auto">
        {myData.length > 0 ? (
          <SimpleLineChart myData={myData} />
        ) : (
          <span className="block text-center text-stone-500">
            <i className="pi pi-exclamation-circle"></i> 데이터를 추가해주세요.
            날짜는 1일씩 연속하여 차례대로 입력하셔야 합니다.
          </span>
        )}
      </Fieldset>
    </main>
  );
}
