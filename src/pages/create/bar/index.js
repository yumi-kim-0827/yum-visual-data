import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
//components
import { Fieldset } from "primereact/fieldset";
import BasicInput from "@/src/components/charts/input/BasicInput";

// 클라이언트 사이드에서만 렌더링하도록 설정
const SimpleBarChart = dynamic(
  () => import("@/src/components/charts/bar/SimpleBarChart"),
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
      <Fieldset
        legend="데이터 추가하기"
        className="w-1/3  h-full overflow-y-auto"
      >
        <BasicInput
          handleClickDataUpdate={handleClickDataUpdate}
          handleClickDataDelete={handleClickDataDelete}
        />
      </Fieldset>
      <Fieldset legend="그래프" className="w-2/3 h-full overflow-y-auto">
        {myData.length > 0 ? (
          <SimpleBarChart myData={myData} />
        ) : (
          <span className="block text-stone-500">
            <div>
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
                        <th scope="col">데이터 명</th>
                        <th scope="col">값</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">첫번째 데이터</th>
                        <td>피카츄</td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <th scope="row">두번째 데이터</th>
                        <td>이브이</td>
                        <td>51</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <SimpleBarChart
                myData={[
                  {
                    category: "피카츄",
                    value: 50,
                  },
                  {
                    category: "이브이",
                    value: 51,
                  },
                ]}
              />
            </div>
          </span>
        )}
      </Fieldset>
    </main>
  );
}
