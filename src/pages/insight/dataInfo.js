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
      <Fieldset legend="데이터란?" className="w-full h-full overflow-y-auto">
        <h2>사실, 통계, 측정값, 또는 정보를 나타내는 값들의 집합</h2>
        <Panel header="정의">
          <p className="m-0">
            데이터(Data)는 우리가 일상에서 접하는 정보를 말합니다. 그런데, 이
            정보는 그냥 단순히 눈에 보이는 숫자나 글자만을 의미하는 것이
            아닙니다.
          </p>
          <p className="m-0">
            데이터를 조금 더 넓게 생각하면, 우리가 어떤 일을 하거나 결정을 내릴
            때 필요하거나 활용할 수 있는 모든 형태의 정보를 포함합니다.
          </p>
          <h3>데이터란 무엇인가?</h3>
          <p className="m-0">
            데이터는 사실, 의미 있는 정보로 가공될 수 있는 원초적인 사실이나
            숫자, 문장들입니다. 예를 들어, 친구의 전화번호나 오늘의 날씨, 또는
            우리가 클릭한 웹사이트의 방문 기록 모두 데이터입니다. 하지만, 이
            데이터를 잘 활용하려면 그 자체로는 정보가 부족할 수 있기 때문에,
            분석이나 처리 과정을 거쳐 의미 있는 형태로 변환하는 것이 중요합니다.
          </p>
        </Panel>
        <h2>인포그래픽에서의 데이터</h2>
        <Panel header="정의">
          <p className="m-0">
            인포그래픽에서 데이터는 그래프, 차트, 지도, 아이콘 등 다양한 시각적
            요소로 변환되어, 복잡한 정보를 빠르고 쉽게 전달하는 역할을 합니다.
          </p>
        </Panel>
        <h2>데이터의 예시</h2>
        <Panel header="정의">
          <p className="m-0">
            <i className="pi pi-check"></i> 숫자 데이터: &quot;25&quot;,
            &quot;100&quot;, &quot;3.14&quot; 같은 숫자는 데이터를 구성하는
            기본적인 요소입니다. 예를 들어, 온도, 가격, 점수 등은 숫자로
            표현됩니다.
          </p>
          <p className="m-0">
            <i className="pi pi-check"></i> 문자 데이터: 이름, 주소, 이메일
            주소와 같은 문자로 표현된 정보도 데이터입니다
          </p>
          <p className="m-0">
            <i className="pi pi-check"></i> 시간 데이터: &quot;2024년 12월
            11일&quot;, &quot;오후 3시&quot;와 같은 시간 정보도 데이터입니다.
          </p>
          <p className="m-0">
            <i className="pi pi-check"></i> 이미지, 오디오, 비디오: 우리가
            스마트폰에서 보는 사진이나 영상도 데이터를 구성하는 중요한 부분이죠.
            이들은 파일 형태로 저장되어, 필요할 때 사용할 수 있습니다.
          </p>
        </Panel>
        <h2>데이터가 중요한 이유</h2>
        <Card>
          <p className="m-0">
            1. 분석: 데이터를 모은 후, 그 속에서 패턴이나 관계를 찾아냅니다.
            예를 들어, 매출 데이터를 분석하여 어떤 제품이 잘 팔리는지 알 수
            있습니다.
          </p>
          <p className="m-0">
            2. 결정: 데이터를 바탕으로 의사결정을 내립니다. 예를 들어, 회사는
            고객의 피드백 데이터를 기반으로 서비스를 개선할 수 있습니다.
          </p>
          <p className="m-0">
            3. 예측: 과거의 데이터를 통해 미래를 예측하는 데 사용되기도 합니다.
            예를 들어, 날씨 데이터를 분석해서 내일의 날씨를 예측할 수 있습니다.
          </p>
        </Card>
      </Fieldset>
    </main>
  );
};

export default Home;
