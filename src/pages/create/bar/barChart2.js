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
  const [categoryName1, setCategoryName1] = useState("항목1");
  const [categoryName2, setCategoryName2] = useState("항목2");
  const [formFirstData, setFormFirstData] = useState({});
  const [firstDataKey, setFirstDataKey] = useState("");
  const [firstDataValue, setFirstDataValue] = useState(null);

  //최종 데이터
  const [myData, setMyData] = useState([
    {
      categoryName: `${categoryName1}`,
      A: 2.5,
    },
    {
      categoryName: `${categoryName2}`,
      A: 2.6,
    },
  ]);

  useEffect(() => {
    setMyData([
      {
        categoryName: `${categoryName1}`,
        A: 2.5,
        B: 2,
      },
      {
        categoryName: `${categoryName2}`,
        A: 2.6,
        B: 3,
      },
    ]);
  }, [categoryName1, categoryName2]);
  console.log(formFirstData);
  return (
    <main className="flex-1 flex flex-col gap-2">
      <Fieldset legend="데이터 추가하기">
        <Message
          text="2가지 데이터 종류에 각각 누적 데이터를 입력합니다."
          className="mb-4"
        />
        <div className="flex gap-2 mb-3">
          <div>
            <Badge
              value="비교할 두 항목 명을 다르게 입력하세요"
              className="mb-2"
            ></Badge>

            <div className="flex items-center gap-2">
              <FloatLabel>
                <InputText
                  id="username"
                  name="category"
                  value={categoryName1}
                  onChange={(e) => {
                    setCategoryName1(e.target.value);
                  }}
                />
                <label for="username">첫번째 항목 이름</label>
              </FloatLabel>
              <FloatLabel>
                <InputText
                  id="username"
                  name="category"
                  value={categoryName2}
                  onChange={(e) => {
                    setCategoryName2(e.target.value);
                  }}
                />
                <label for="username">두번째 항목 이름</label>
              </FloatLabel>
            </div>
          </div>
        </div>
        <Message
          text="각각의 항목에 들어갈 데이터 명과 순서는 동일해야합니다."
          className="mb-4"
        />
        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <Badge value="첫번쨰 데이터 값" className="mb-2"></Badge>
            <div className="flex items-center gap-2">
              <FloatLabel>
                <InputText
                  id="username"
                  name="category"
                  value={firstDataKey}
                  onChange={(e) => {
                    setFirstDataKey(e.target.value);
                  }}
                />
                <label for="username">데이터 명</label>
              </FloatLabel>
              <FloatLabel>
                <InputText
                  id="username"
                  name="category"
                  value={firstDataValue}
                  onChange={(e) => {
                    setFirstDataValue(e.target.value);
                  }}
                />
                <label for="username">데이터값</label>
              </FloatLabel>
              <Button
                label="데이터 추가"
                icon="pi pi-plus-circle"
                onClick={() => {
                  setFormFirstData((prev) => ({
                    ...prev,
                    [firstDataKey]: firstDataValue,
                  }));
                  console.log(formFirstData);
                }}
              />
            </div>
          </div>
          <div className="flex-1">
            <Badge value="두번쨰 데이터 값" className="mb-2"></Badge>
            <div className="flex items-center gap-2">
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
      <Fieldset legend="그래프">
        <TwoCategoryStackedChart myData={myData} />
      </Fieldset>
    </main>
  );
}
