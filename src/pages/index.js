import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";

// 클라이언트 사이드에서만 렌더링하도록 설정
const GradientChart = dynamic(
  () => import("@/src/components/charts/pie/GradientChart"),
  {
    ssr: false,
  }
);

export default function Home() {
  const stepperRef = useRef(null);

  return (
    <main className="w-full">
      <Fieldset
        legend="인포그래픽 만들기"
        className="w-full h-full overflow-y-auto"
      >
        <div className="flex items-center justify-between">
          <div className="pl-4 w-1/3">
            <h2 className="text-5xl leading-relaxed">
              로그인할 필요 없이 데이터를 그래프와 지도에서 시각적으로 확인하고,
              더 나은 결정을 내려보세요.
            </h2>
            <p className="text-2xl leading-relaxed">
              간단히 데이터를 입력하고, 직관적인 그래프와 지도에서 그려냅니다.
              시각화된 인포그래픽을 활용하세요.
            </p>
            <Button
              label="그래프 만들러가기"
              icon="pi pi-arrow-right"
              iconPos="right"
              size="small"
              rounded
            />
          </div>
          <div className="flex-1">
            <GradientChart
              myData={[
                { category: "영희", value: 14.3 },
                { category: "철수", value: 12.9 },
                { category: "유리", value: 21.01 },
                { category: "지연", value: 22 },
              ]}
            />
          </div>
        </div>
        <div className="my-40">
          <h2 className="text-center">
            원하는 그래프를 간편하게 만들어 보세요
          </h2>
          <h3 className="text-center">
            간단하고 빠르게 무료로 인포그래픽을 생성하세요
          </h3>
          <div className="relative h-[400px]">
            <Image
              src="/images/img_1.png" // public 폴더 내 경로
              alt="My Image"
              layout="fill" // 부모 컨테이너를 기준으로 채움
              objectFit="contain" // 원본 비율을 유지하며 컨테이너에 맞춤
            />
          </div>

          <p className="p-2 border-1 border-slate-400 bg-gray-50 text-center">
            그래프는 데이터를 시각적으로 표현하여 분석하고 통찰을 얻을 수 있도록
            도와주는 도구입니다. 그래프의 유형은 데이터의 특성이나 분석 목적에
            따라 다양하게 나눌 수 있습니다.
            <br />
            파이 차트, 막대 그래프, 꺾은선 그래프 등 다양한 유형의 차트를 몇
            번의 클릭만으로 제작해보세요. 직관적인 인터페이스와 색상테마
            옵션으로 전문적인 결과물을 손쉽게 완성할 수 있습니다.
          </p>
        </div>
        <div className="my-40">
          <h2 className="text-center">그래프 유형</h2>
          <p className="text-center">
            그래프는 데이터를 시각적으로 표현하여 분석하고 통찰을 얻을 수 있도록
            도와주는 도구입니다. 그래프의 유형은 데이터의 특성이나 분석 목적에
            따라 다양하게 나눌 수 있습니다.
          </p>
          <div>
            <ul className="grid grid-cols-4 items-stretch gap-2">
              <li>
                <Card title="선 그래프 (Line Chart)" className="h-full">
                  <Image
                    src="/images/img_graph1.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={300} // 이미지의 높이
                    layout="responsive"
                  />
                  <strong className="block text-lg">
                    시간에 따른 변화나 추세를 시각화할 때 사용합니다.
                  </strong>
                  <p>
                    특징: 데이터를 점으로 표시하고, 이 점들을 선으로 연결하여
                    변화의 흐름을 보여줍니다.
                  </p>
                  <span className="text-sm">주식 가격 변화, 기온 변화</span>
                </Card>
              </li>
              <li>
                <Card title="막대 그래프 (Bar Chart)" className="h-full">
                  <Image
                    src="/images/img_graph2.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={300} // 이미지의 높이
                    layout="responsive"
                  />
                  <strong className="block text-lg">
                    카테고리별로 값을 비교할 때 사용합니다.
                  </strong>
                  <p>
                    특징: 막대의 길이로 각 카테고리의 크기를 비교할 수 있습니다.
                    수평막대그래프나 수직막대그래프가 있습니다.
                  </p>
                  <span className="text-sm">각 국가별 인구수, 연도별 매출</span>
                </Card>
              </li>
              <li>
                <Card title="지도 그래프 (Map Chart)" className="h-full">
                  <Image
                    src="/images/img_graph3.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={300} // 이미지의 높이
                    layout="responsive"
                  />
                  <strong className="block text-lg">
                    지리적 데이터를 시각화할 때 사용합니다.
                  </strong>
                  <p>
                    특징: 지도 위에 데이터를 표시하여 지역별 정보를 시각적으로
                    보여줍니다.
                  </p>
                  <span className="text-sm">국가별 인구, 매출 분포</span>
                </Card>
              </li>
              <li>
                <Card title="원 그래프 (Pie Chart)" className="h-full">
                  <Image
                    src="/images/img_graph4.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={300} // 이미지의 높이
                    layout="responsive"
                  />
                  <strong className="block text-lg">
                    전체에 대한 각 항목의 비율을 보여줄 때 사용합니다.
                  </strong>
                  <p>
                    특징: 각 부분의 크기로 비율을 나타내며, 원 형태로 데이터가
                    분할됩니다.
                  </p>
                  <span className="text-sm">시장 점유율, 예산 배분</span>
                </Card>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>이 사이트에서 그래프를 시각화 하는 방법</h2>
          <Stepper ref={stepperRef}>
            <StepperPanel header="데이터 입력">
              <div className="p-2 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
                <div className="w-1/3">
                  <Image
                    src="/images/howto1.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={2} // 이미지의 높이
                    layout="responsive"
                  />
                </div>
                <div className="flex-1">
                  <strong className="block text-lg">데이터 입력</strong>
                  <p>
                    차트를 만들 때 필요한, 데이터명과 데이트 값을 입력합니다.
                  </p>
                  <p>
                    여러개의 데이트를 입력할 시, 데이터 한번 입력한 후 데이터
                    추가를 누르고 다음 데이터를 입력합니다.
                  </p>
                  <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    onClick={() => stepperRef.current.nextCallback()}
                  />
                </div>
              </div>
            </StepperPanel>
            <StepperPanel header="그래프 생성">
              <div className="p-2 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
                <div className="w-1/3">
                  <Image
                    src="/images/howto2.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={2} // 이미지의 높이
                    layout="responsive"
                  />
                </div>
                <div className="flex-1">
                  <strong className="block text-lg">그래프 생성</strong>
                  <p>
                    차례대로 입력한 &#40;데이터-값&#41; 순서대로 차트가
                    만들어집니다.
                  </p>
                  <p>
                    여러개의 데이트를 입력할 시, 데이터 명과 해당 값을 입력한
                    순서대로 차트가 만들어집니다.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      label="Back"
                      severity="secondary"
                      icon="pi pi-arrow-left"
                      onClick={() => stepperRef.current.prevCallback()}
                    />
                    <Button
                      label="Next"
                      icon="pi pi-arrow-right"
                      iconPos="right"
                      onClick={() => stepperRef.current.nextCallback()}
                    />
                  </div>
                </div>
              </div>
            </StepperPanel>
            <StepperPanel header="데이터 삭제">
              <div className="p-2 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
                <div className="w-1/3">
                  <Image
                    src="/images/howto3.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={2} // 이미지의 높이
                    layout="responsive"
                  />
                </div>
                <div className="flex-1">
                  <strong className="block text-lg">데이터 삭제</strong>
                  <p>마지막 데이터를 삭제할 수 있습니다.</p>
                  <p>
                    마지막 데이터 삭제 버튼을 누르면 가장 최신의 데이터를
                    삭제해서 차트를 수정할 수 있습니다.
                  </p>
                  <Button
                    label="Back"
                    severity="secondary"
                    icon="pi pi-arrow-left"
                    onClick={() => stepperRef.current.prevCallback()}
                  />
                </div>
              </div>
            </StepperPanel>
          </Stepper>
        </div>
      </Fieldset>
    </main>
  );
}
