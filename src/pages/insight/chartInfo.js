import React, { useRef } from "react";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";
import { Chip } from "primereact/chip";

const Home = () => {
  return (
    <main className="w-full">
      <Fieldset legend="차트?" className="w-full h-full overflow-y-auto">
        <h2>인포그래픽의 목적을 위한 유용한 도구!</h2>
        <Panel header="차트">
          <p className="m-0">
            다양한 유형의 차트는 정보를 시각적으로 전달하는 데 유용하며,
            데이터의 관계나 추세를 쉽게 이해할 수 있도록 도와줍니다.
          </p>
        </Panel>
        <h2>차트의 종류</h2>
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <h4>선 차트 (Line Chart)</h4>
            <div className="relative w-full h-[100px]">
              <Image
                src="/images/img_info1.png" // public 폴더 내 경로
                alt="My Image"
                layout="fill" // 부모 컨테이너를 기준으로 채움
                objectFit="contain" // 원본 비율을 유지하며 컨테이너에 맞춤
              />
            </div>
            <strong>
              시간의 흐름에 따라 추세를 파악하는 데 유리해서 많이 사용되는 차트
              유형 중 하나입니다.
            </strong>
            <p className="p-2 border-1 text-sm">
              점을 선으로 연결하여 데이터의 변화를 표시해요. 시간의 흐름에 따라
              추세를 파악하는 데 유리합니다.
            </p>
            <span>예시 : 주식 가격 변화나 날씨 변화</span>
          </Card>
          <Card>
            <h4>막대 차트 (Bar Chart)</h4>
            <div className="relative w-full h-[100px]">
              <Image
                src="/images/img_info1.png" // public 폴더 내 경로
                alt="My Image"
                layout="fill" // 부모 컨테이너를 기준으로 채움
                objectFit="contain" // 원본 비율을 유지하며 컨테이너에 맞춤
              />
            </div>
            <strong>다양한 범주 간의 비교를 위해 사용합니다.</strong>
            <p className="p-2 border-1 text-sm">
              범주 간의 차이를 직관적으로 시각화할 수 있어 데이터 비교가
              용이해요. 직선 또는 세로 막대가 사용해요. 수직 또는 수평 방식으로
              나타낼 수 있어요.
            </p>
            <span>예시 : 각 나라의 GDP, 연도별 매출 변화</span>
          </Card>
          <Card>
            <h4>산점도 (Scatter Plot)</h4>
            <div className="relative w-full h-[100px]">
              <Image
                src="/images/img_info1.png" // public 폴더 내 경로
                alt="My Image"
                layout="fill" // 부모 컨테이너를 기준으로 채움
                objectFit="contain" // 원본 비율을 유지하며 컨테이너에 맞춤
              />
            </div>
            <strong>두 변수 간의 관계를 보여줄 때 사용합니다.</strong>
            <p className="p-2 border-1 text-sm">
              X축과 Y축에 점을 찍어 변수 간의 상관 관계를 시각화합니다.
            </p>
            <span>예시 : 키와 몸무게 간의 관계</span>
          </Card>
          <Card>
            <h4>원형 차트 (Pie Chart)</h4>
            <div className="relative w-full h-[100px]">
              <Image
                src="/images/img_info1.png" // public 폴더 내 경로
                alt="My Image"
                layout="fill" // 부모 컨테이너를 기준으로 채움
                objectFit="contain" // 원본 비율을 유지하며 컨테이너에 맞춤
              />
            </div>
            <strong>전체에서 각 부분의 비율을 나타낼 때 사용합니다. </strong>
            <p className="p-2 border-1 text-sm">
              원을 나누어 각 부분의 비율을 나타내며, 직관적으로 이해하기 숴워요.
            </p>
            <span>
              예시 : 한 회사의 전체 매출에서 각 제품군이 차지하는 비율
            </span>
          </Card>
          <Card>
            <h4>도넛 차트 (Donut Chart)</h4>
            <div className="relative w-full h-[100px]">
              <Image
                src="/images/img_info1.png" // public 폴더 내 경로
                alt="My Image"
                layout="fill" // 부모 컨테이너를 기준으로 채움
                objectFit="contain" // 원본 비율을 유지하며 컨테이너에 맞춤
              />
            </div>
            <strong>데이터를 더 깔끔하게 비교할 수 있습니다.</strong>
            <p className="p-2 border-1 text-sm">
              원형 차트와 비슷하지만 중앙에 구멍이 뚫려 있어 데이터를 더
              깔끔하게 비교할 수 있습니다.
            </p>
          </Card>
          <Card>
            <h4>상자 수염 차트 (Box Plot)</h4>
            <div className="relative w-full h-[100px]">
              <Image
                src="/images/img_info1.png" // public 폴더 내 경로
                alt="My Image"
                layout="fill" // 부모 컨테이너를 기준으로 채움
                objectFit="contain" // 원본 비율을 유지하며 컨테이너에 맞춤
              />
            </div>
            <strong>데이터의 분포와 변동성을 한눈에 확인할 수 있습니다.</strong>
            <p className="p-2 border-1 text-sm">
              데이터의 중앙값, 사분위수, 최대/최소 값을 나타내요. 데이터의
              분포와 변동성을 시각적으로 보여줍니다.
            </p>
            <span>예시 : 시험 성적이나 소득 분포</span>
          </Card>
        </div>
        <h2>타사이트의 차트 생성 프로그램</h2>
        <div>
          <div className="flex gap-2 items-center">
            <Chip label="infogram.com" />
            <p>
              인포그래픽과 데이터 시각화를 쉽게 만들 수 있는 온라인
              플랫폼입니다.
            </p>
          </div>
        </div>
      </Fieldset>
    </main>
  );
};

export default Home;
