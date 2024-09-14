import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
//components
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Badge } from "primereact/badge";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";

// 클라이언트 사이드에서만 렌더링하도록 설정
const TwoCategoryStackedChart = dynamic(
  () => import("@/src/components/charts/TwoCategoryStackedChart"),
  {
    ssr: false,
  }
);

export default function Home() {
  //최종 데이터
  const [myData, setMyData] = useState([
    {
      categoryName: "2021",
      A: 2.5,
      B: 2.5,
      C: 1.2,
    },
    {
      categoryName: "2022",
      A: 2.6,
      B: 3,
      C: 1.2,
    },
  ]);

  return (
    <main className="flex-1 flex flex-col gap-2">
      <Fieldset legend="데이터 추가하기">
        <Message
          text="2가지 데이터 종류에 각각 누적 데이터를 입력합니다. 각각 들어가는 비교항목명은 같아야합니다."
          className="mb-4"
        />
        <div className="flex gap-2 mb-4">
          <div>
            <Badge value="비교할 두 항목 명" className="mb-2"></Badge>
            <div className="flex gap-2">
              <FloatLabel>
                <InputText id="username" name="category" value={""} />
                <label for="username">첫번째 그래프 이름</label>
              </FloatLabel>
              <FloatLabel>
                <InputText id="username" name="category" value={""} />
                <label for="username">두번째 그래프 이름</label>
              </FloatLabel>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <Badge value="첫번쨰 데이터 값" className="mb-2"></Badge>
            <div className="flex gap-2">
              <FloatLabel>
                <InputText id="username" name="category" value={""} />
                <label for="username">데이터 명</label>
              </FloatLabel>
              <FloatLabel>
                <InputText id="username" name="category" value={""} />
                <label for="username">데이터값</label>
              </FloatLabel>
              <Button
                label="데이터 추가"
                icon="pi pi-plus-circle"
                // onClick={onSubmit}
              />
            </div>
          </div>
          <div className="flex-1">
            <Badge value="두번쨰 데이터 값" className="mb-2"></Badge>
            <div className="flex gap-2">
              <FloatLabel>
                <InputText id="username" name="category" value={""} />
                <label for="username">데이터 명</label>
              </FloatLabel>
              <FloatLabel>
                <InputText id="username" name="category" value={""} />
                <label for="username">데이터값</label>
              </FloatLabel>
              <Button
                label="데이터 추가"
                icon="pi pi-plus-circle"
                // onClick={onSubmit}
              />
            </div>
          </div>
        </div>
      </Fieldset>
      {/* <Fieldset legend="데이터 추가하기">
        <OneCateMultiInput handleClickDataUpdate={handleClickDataUpdate} />
      </Fieldset> */}
      <Fieldset legend="그래프">
        <TwoCategoryStackedChart myData={myData} />
      </Fieldset>
    </main>
  );
}
