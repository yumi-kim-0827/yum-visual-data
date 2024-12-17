import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
//components
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Message } from "primereact/message";
import { Badge } from "primereact/badge";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { Divider } from "primereact/divider";
import ColorPickerContainer from "@/src/components/charts/color/ColorPickerContainer";
//data
import themeList from "@/src/data/colortheme";

// 클라이언트 사이드에서만 렌더링하도록 설정
const ThreeCategoryClusterChart = dynamic(
  () => import("@/src/components/charts/bar/ThreeCategoryClusterChart"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [inputDisable, setInputDisable] = useState(false);
  const [year, setYear] = useState(null);
  const [firstDataKey, setFirstDataKey] = useState("");
  const [firstDataValue, setFirstDataValue] = useState(null);
  const [secondDataKey, setSecondDataKey] = useState("");
  const [secondDataValue, setSecondDataValue] = useState(null);
  const [threeDataKey, setThreeDataKey] = useState("");
  const [threeDataValue, setThreeDataValue] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  //최종 데이터
  const [myData, setMyData] = useState([]);
  console.log(myData);
  //데이터 추가
  const handleAddData = () => {
    if (firstDataValue && secondDataValue && threeDataValue) {
      setMyData((prev) => {
        const existsYear = prev.some((data) => data.year === updatedData.year);
        return existsYear ? prev : [...prev, updatedData];
      });
      setInputDisable(true);
    } else {
      alert("데이터 값을 모두 입력해주세요");
    }

    setFirstDataValue(null);
    setSecondDataValue(null);
    setThreeDataValue(null);
  };

  useEffect(() => {
    const updated = {
      year: `${year}`,
      [firstDataKey]: firstDataValue,
      [secondDataKey]: secondDataValue,
      [threeDataKey]: threeDataValue,
    };

    setUpdatedData(updated);
  }, [
    year,
    firstDataKey,
    firstDataValue,
    secondDataKey,
    secondDataValue,
    threeDataKey,
    threeDataValue,
  ]);

  //색상 테마 선택 index
  const [theme, setTheme] = useState(0);

  //색상 테마 상태 업데이트 함수
  const handleSelectTheme = (themeNumber) => {
    setTheme(themeNumber);
  };

  return (
    <main className="flex-1 flex gap-2">
      <Fieldset
        legend="데이터 추가하기"
        className="w-1/3  h-full overflow-y-auto"
      >
        <Message
          text="연도별 두 카테고리의 데이터값을 입력합니다."
          className="mb-2"
        />
        {firstDataKey}
        {secondDataKey}
        {threeDataKey}
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="flex-1 flex flex-col items-start gap-2">
              <Badge value="첫번째 비교 데이터 명"></Badge>
              <FloatLabel
                pt={{
                  root: { style: { flex: "1", width: "100%" } },
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
                  disabled={inputDisable}
                />
                <label htmlFor="username">첫번째 데이터 명</label>
              </FloatLabel>
            </div>
            <div className="flex-1 flex flex-col items-start gap-2">
              <Badge value="두번째 비교 데이터 명"></Badge>
              <FloatLabel
                pt={{
                  root: { style: { flex: "1", width: "100%" } },
                }}
              >
                <InputText
                  id="username"
                  name="category"
                  value={secondDataKey}
                  onChange={(e) => {
                    setSecondDataKey(e.target.value);
                  }}
                  className="w-full"
                  disabled={inputDisable}
                />
                <label htmlFor="username">두번째 데이터 명</label>
              </FloatLabel>
            </div>
            <div className="flex-1 flex flex-col items-start gap-2">
              <Badge value="세번째 비교 데이터 명"></Badge>
              <FloatLabel
                pt={{
                  root: { style: { flex: "1", width: "100%" } },
                }}
              >
                <InputText
                  id="username"
                  name="category"
                  value={threeDataKey}
                  onChange={(e) => {
                    setThreeDataKey(e.target.value);
                  }}
                  className="w-full"
                  disabled={inputDisable}
                />
                <label htmlFor="username">세번째 데이터 명</label>
              </FloatLabel>
            </div>
          </div>
          <Message
            text="데이터 추가 버튼을 누르면 데이터명 수정이 불가합니다."
            className="mb-2"
          />
          <div className="flex items-center gap-4">
            <label>연도 선택</label>
            <Calendar
              year={year}
              onChange={(e) => {
                if (e.value) {
                  setYear(new Date(e.value).getFullYear()); // 연도만 저장
                }
              }}
              view="year"
              dateFormat="yy"
              showIcon
              className="flex-1"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-2">
            <Badge value="첫번째 비교 데이터 값"></Badge>
            <div className="w-full flex items-center gap-2">
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
                <label htmlFor="username">숫자를 입력해주세요</label>
              </FloatLabel>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-2">
            <Badge value="두번째 비교 데이터 값" className="mb-2"></Badge>
            <div className="w-full flex items-center gap-2">
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
                <label htmlFor="username">숫자를 입력해주세요</label>
              </FloatLabel>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-2">
            <Badge value="세번째 비교 데이터 값" className="mb-2"></Badge>
            <div className="w-full flex items-center gap-2">
              <FloatLabel
                pt={{
                  root: { style: { flex: "1" } },
                }}
              >
                <InputNumber
                  id="username"
                  value={threeDataValue}
                  onChange={(e) => {
                    setThreeDataValue(e.value);
                  }}
                  className="w-full"
                />
                <label htmlFor="username">숫자를 입력해주세요</label>
              </FloatLabel>
            </div>
          </div>
          <Button
            label="데이터 추가"
            icon="pi pi-plus-circle"
            className="w-full"
            onClick={handleAddData}
          />
        </div>
      </Fieldset>
      <Fieldset legend="그래프" className="w-2/3 h-full overflow-y-auto">
        <ColorPickerContainer handleSelectTheme={handleSelectTheme} />
        {/* 두 데이터가 담기는 객체 수가 각각 2개 이상일때 */}
        {firstDataKey !== "" || secondDataKey !== "" || threeDataKey !== "" ? (
          <ThreeCategoryClusterChart
            myData={myData}
            firstDataKey={firstDataKey}
            secondDataKey={secondDataKey}
            threeDataKey={threeDataKey}
            theme={themeList[theme]}
          />
        ) : (
          <div className="block text-stone-500">
            <div className="pt-2 px-4 pb-4 bg-gray-50 rounded-lg">
              <h2 className="p-0 text-base text-zinc-600">
                데이터 시각화 생성 예시
              </h2>
              <div className="p-2 border-1 border-blue-400 bg-white">
                <table
                  aria-labelledby="sample-data"
                  className="w-full text-left text-zinc-500 text-sm"
                >
                  <caption id="sample-data table-caption" className="hidden">
                    예시 표: 데이터 입력시 인포그래픽 차트 데이터 시각화
                    생성하기
                  </caption>
                  <thead className="border-1">
                    <tr className="border-b-1 border-blue-400">
                      <th scope="col" className="w-1/4">
                        연도
                      </th>
                      <th scope="col">피카츄</th>
                      <th scope="col">이브이</th>
                      <th scope="col">꼬부기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">2024</th>
                      <td>100</td>
                      <td>30</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">2025</th>
                      <td>55</td>
                      <td>12</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ThreeCategoryClusterChart
              myData={[
                {
                  year: "2024",
                  ["피카츄"]: 100,
                  ["이브이"]: 30,
                  ["꼬부기"]: 3,
                },
                {
                  year: "2025",
                  ["피카츄"]: 55,
                  ["이브이"]: 12,
                  ["꼬부기"]: 5,
                },
              ]}
              firstDataKey="피카츄"
              secondDataKey="이브이"
              threeDataKey="꼬부기"
              theme={themeList[theme]}
            />
          </div>
        )}
      </Fieldset>
    </main>
  );
}
