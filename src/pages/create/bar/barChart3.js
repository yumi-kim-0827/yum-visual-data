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
const TwoCategoryClusterChart = dynamic(
  () => import("@/src/components/charts/bar/TwoCategoryClusterChart"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [year, setYear] = useState(null);
  const [firstDataKey, setFirstDataKey] = useState("");
  const [firstDataValue, setFirstDataValue] = useState(null);
  const [secondDataKey, setSecondDataKey] = useState("");
  const [secondDataValue, setSecondDataValue] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  //최종 데이터
  const [myData, setMyData] = useState([]);

  //데이터 추가
  const handleAddData = () => {
    if (firstDataValue & secondDataValue) {
      setMyData((prev) => {
        const existsYear = prev.some((data) => data.year === updatedData.year);
        return existsYear ? prev : [...prev, updatedData];
      });
    } else {
      alert("데이터 값을 모두 입력해주세요");
    }

    setFirstDataValue(null);
    setSecondDataValue(null);
  };

  useEffect(() => {
    const updated = {
      year: `${year}`,
      [firstDataKey]: firstDataValue,
      [secondDataKey]: secondDataValue,
    };

    setUpdatedData(updated);
  }, [year, firstDataKey, firstDataValue, secondDataKey, secondDataValue]);

  //색상 테마 선택 index
  const [theme, setTheme] = useState(0);

  //   const data1propertyCount = Object.keys(myData[0]).length;
  const data1propertyCount = 2;
  //   const data2propertyCount = Object.keys(myData[1]).length;

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
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="flex-1 flex flex-col gap-2">
              <Badge value="첫번째 비교 데이터 명"></Badge>
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
                <label htmlFor="username">첫번째 데이터 명</label>
              </FloatLabel>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <Badge value="두번째 비교 데이터 명"></Badge>
              <FloatLabel
                pt={{
                  root: { style: { flex: "1" } },
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
                />
                <label htmlFor="username">두번째 데이터 명</label>
              </FloatLabel>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label>년도 선택</label>
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
                <label htmlFor="username">데이터값</label>
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
                <label htmlFor="username">데이터값</label>
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
        {data1propertyCount > 1 ? (
          <TwoCategoryClusterChart
            myData={myData}
            firstDataKey={firstDataKey}
            secondDataKey={secondDataKey}
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
                        데이터
                      </th>
                      <th scope="col">비교군 이름</th>
                      <th scope="col">데이터 명 (같아야함)과 값</th>
                      <th scope="col">값</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">첫번째 비교군</th>
                      <td>피카츄</td>
                      <td>파워 : 13</td>
                      <td>높이뛰기 : 50</td>
                    </tr>
                    <tr>
                      <th scope="row">두번째 비교군</th>
                      <td>이브이</td>
                      <td>파워 : 56</td>
                      <td>높이뛰기 : 19</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <TwoCategoryClusterChart myData={myData} theme={themeList[theme]} />
          </div>
        )}
      </Fieldset>
    </main>
  );
}
