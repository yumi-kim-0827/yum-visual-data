import React, { useRef } from "react";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Tooltip } from "primereact/tooltip";

const Home = () => {
  const stepperRef = useRef(null);

  return (
    <main className="w-full">
      <Fieldset
        legend="인포그래픽이란?"
        className="w-full h-full overflow-y-auto"
      >
        <h2>복잡한 데이터를 시각적으로 한눈에!</h2>
        <div className="p-2">
          <Image
            src="/images/img_info1.png" // public 폴더 내 경로
            alt="My Image"
            width={300} // 이미지의 너비
            height={300} // 이미지의 높이
            layout="responsive"
          />
        </div>
        <Panel header="정의">
          <p className="m-0">
            인포그래픽(Infographic)은 정보(Information)와 그래픽(Graphics)**의
            합성어로, 복잡한 데이터를 시각적으로 쉽게 이해할 수 있도록 표현한
            것입니다.
          </p>
          <p className="m-0">
            데이터를 단순히 텍스트로 나열하는 대신, 차트, 아이콘, 이미지, 색상
            등을 사용하여 정보를 효과적으로 전달하는 데 초점을 맞춥니다.
          </p>
        </Panel>
        <h2>인포그래픽의 주요 목적?</h2>
        <Card>
          <Stepper ref={stepperRef} style={{ flexBasis: "50rem" }}>
            <StepperPanel header="정보의 단순화">
              <div className="flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                  복잡한 데이터를 시각적으로 표현하여 쉽게 이해할 수 있도록
                  도와요.
                </div>
              </div>
            </StepperPanel>
            <StepperPanel header="주의 끌기">
              <div className="flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                  색상, 레이아웃, 그래픽 요소를 활용하여 사람들의 관심을 끌고
                  메시지를 효과적으로 전달해요.
                </div>
              </div>
            </StepperPanel>
            <StepperPanel header="기억력 강화">
              <div className="flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                  시각적 자료는 텍스트보다 기억에 오래 남는 특성이 있어요.
                </div>
              </div>
            </StepperPanel>
          </Stepper>
        </Card>
        <h2>인포그래픽은 무엇으로 이뤄져있을까?</h2>
        <Panel header="인포그래픽의 구성 요소">
          <div className="flex justify-center gap-2">
            <Tooltip target=".inforound1" />
            <div
              className="inforound1 flex flex-col justify-center items-center w-[220px] h-[220px] rounded-full bg-sky-900 text-white border-2 border-dotted"
              data-pr-tooltip="전달하려는 핵심 정보나 통계 자료."
              data-pr-position="top"
            >
              <span>데이터</span>
            </div>
            <Tooltip target=".inforound2" />
            <div
              className="inforound2 flex flex-col justify-center items-center w-[220px] h-[220px] rounded-full bg-zinc-800 text-white border-2 border-dotted"
              data-pr-tooltip="색상, 아이콘, 일러스트레이션 등 시각적인 표현."
              data-pr-position="top"
            >
              <span>디자인 요소</span>
            </div>
            <Tooltip target=".inforound3" />
            <div
              className="inforound3 flex flex-col justify-center items-center w-[220px] h-[220px] rounded-full bg-stone-700 text-white border-2 border-dotted"
              data-pr-tooltip="정보를 자연스럽게 전달할 수 있는 흐름."
              data-pr-position="top"
            >
              <span>스토리텔링</span>
            </div>
          </div>
        </Panel>
        <h2>인포그래픽의 유형</h2>
        <div className="grid grid-cols-5 gap-4">
          <Card>
            <i className="pi pi-chart-bar" style={{ fontSize: "1.5rem" }}></i>
            <h4>통계형</h4>
            <p>
              데이터나 숫자 중심의 정보를 강조하는 그래픽. 예: 시장 분석, 판매
              성과.
            </p>
          </Card>
          <Card>
            <i
              className="pi pi-sort-amount-down"
              style={{ fontSize: "1.5rem" }}
            ></i>
            <h4>프로세스형</h4>
            <p>
              어떤 과정이나 절차를 시각적으로 표현. 예: 제품 개발 과정, 문제
              해결 단계.
            </p>
          </Card>
          <Card>
            <i className="pi pi-book" style={{ fontSize: "1.5rem" }}></i>
            <h4>정보형</h4>
            <p>
              텍스트와 그래픽이 균형 있게 배치된 형식. 예: 역사적 사건 요약,
              교육 자료.
            </p>
          </Card>
          <Card>
            <i className="pi pi-chart-line" style={{ fontSize: "1.5rem" }}></i>
            <h4>타임라인형</h4>
            <p>
              시간의 흐름에 따라 사건을 나열. 예: 기술 발전의 역사, 프로젝트
              일정.
            </p>
          </Card>
          <Card>
            <i
              className="pi pi-angle-double-left"
              style={{ fontSize: "1.5rem" }}
            ></i>
            <h4>비교형</h4>
            <p>
              여러 항목을 비교하여 차이점과 공통점을 시각적으로 보여줌. 예: 제품
              비교, 경쟁사 분석.
            </p>
          </Card>
        </div>
      </Fieldset>
    </main>
  );
};

export default Home;
