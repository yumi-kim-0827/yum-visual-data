import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
//components
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Message } from "primereact/message";
import { Badge } from "primereact/badge";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { Divider } from "primereact/divider";

// 클라이언트 사이드에서만 렌더링하도록 설정
const TwoCategoryStackedChart = dynamic(
  () => import("@/src/components/charts/bar/TwoCategoryStackedChart"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [categoryName1, setCategoryName1] = useState("항목1");
  const [categoryName2, setCategoryName2] = useState("항목2");
  const [firstDataKey, setFirstDataKey] = useState("");
  const [firstDataValue, setFirstDataValue] = useState(null);
  const [secondDataKey, setSecondDataKey] = useState("");
  const [secondDataValue, setSecondDataValue] = useState(null);

  //최종 데이터
  const [myData, setMyData] = useState([
    {
      categoryName: `${categoryName1}`,
    },
    {
      categoryName: `${categoryName2}`,
    },
  ]);
  const data1propertyCount = Object.keys(myData[0]).length;
  const data2propertyCount = Object.keys(myData[1]).length;

  useEffect(() => {
    setMyData([
      {
        categoryName: `${categoryName1}`,
      },
      {
        categoryName: `${categoryName2}`,
      },
    ]);
  }, [categoryName1, categoryName2]);

  const handleAddFirstData = () => {
    setMyData((prev) => {
      const newData = [...prev];
      newData[0] = { ...newData[0], [firstDataKey]: firstDataValue };
      return newData;
    });
    setFirstDataKey("");
    setFirstDataValue(null);
  };

  const handleAddSecondData = () => {
    setMyData((prev) => {
      const newData = [...prev];
      newData[1] = { ...newData[1], [secondDataKey]: secondDataValue };
      return newData;
    });
    setSecondDataKey("");
    setSecondDataValue(null);
  };

  return (
    <main className="flex-1 flex gap-2">
      <Fieldset legend="데이터 추가하기" className="w-1/3">
        <Message
          text="2가지 데이터 종류에 각각 누적 데이터를 입력합니다."
          className="mb-2"
        />
        <div className="flex gap-2 mb-4">
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
                <label htmlFor="username">첫번째 비교군</label>
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
                <label htmlFor="username">두번째 비교군</label>
              </FloatLabel>
            </div>
          </div>
        </div>
        <Divider />
        <Message
          text="각각의 항목에 들어갈 데이터 명과 순서는 동일해야합니다."
          className="mb-2"
        />
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex-1 flex flex-col items-start gap-2">
            <Badge value="첫번째 비교군의 데이터"></Badge>
            <div className="w-full flex items-center gap-2">
              <FloatLabel
                pt={{
                  root: { style: { flex: "1" } },
                }}
              >
                <InputText
                  id="username"
                  name="category"
                  value={firstDataKey}
                  onChange={(e) => {
                    setFirstDataKey(e.target.value);
                  }}
                  className="w-full"
                />
                <label htmlFor="username">데이터 명</label>
              </FloatLabel>
              <FloatLabel pt={{ root: { style: { flex: "1" } } }}>
                <InputNumber
                  id="username"
                  name="category"
                  value={firstDataValue}
                  onChange={(e) => {
                    setFirstDataValue(e.value);
                  }}
                  className="w-full"
                />
                <label htmlFor="username">데이터값</label>
              </FloatLabel>
            </div>
            <Button
              label="데이터 추가"
              icon="pi pi-plus-circle"
              onClick={handleAddFirstData}
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-2">
            <Badge value="두번째 비교군의 데이터" className="mb-2"></Badge>
            <div className="w-full flex items-center gap-2">
              <FloatLabel
                pt={{
                  root: { style: { flex: "1" } },
                }}
              >
                <InputText
                  id="username"
                  value={secondDataKey}
                  onChange={(e) => {
                    setSecondDataKey(e.target.value);
                  }}
                  className="w-full"
                />
                <label htmlFor="username">데이터 명</label>
              </FloatLabel>
              <FloatLabel
                pt={{
                  root: { style: { flex: "1" } },
                }}
              >
                <InputNumber
                  id="username"
                  value={secondDataValue}
                  onChange={(e) => {
                    setSecondDataValue(e.value);
                  }}
                  className="w-full"
                />
                <label htmlFor="username">데이터값</label>
              </FloatLabel>
            </div>
            <Button
              label="데이터 추가"
              icon="pi pi-plus-circle"
              onClick={handleAddSecondData}
              className="w-full"
            />
          </div>
        </div>
      </Fieldset>
      <Fieldset legend="그래프" className="w-2/3">
        {/* 두 데이터가 담기는 객체 수가 각각 2개 이상일때 */}
        {data1propertyCount > 1 && data2propertyCount > 1 ? (
          <TwoCategoryStackedChart myData={myData} />
        ) : (
          <span className="block text-center text-stone-500">
            <i className="pi pi-exclamation-circle"></i> 데이터를 추가해주세요
          </span>
        )}
      </Fieldset>
    </main>
  );
}
