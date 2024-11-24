import React from "react";
//components
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";

export default function Home() {
  return (
    <main className="w-full">
      <Fieldset legend="인포그래픽 만들기" className="w-full">
        <h2>
          데이터를 그래프와 지도에서 시각적으로 확인하고, 더 나은 결정을
          내려보세요.
        </h2>
        <p>간단히 데이터를 입력하고, 직관적인 그래프와 지도에서 그려냅니다.</p>
        <span>
          데이터를 시각화하여 더 쉽게 분석하고, 빠르게 통찰을 얻으세요.
        </span>
        <Button
          label="그래프 만들러가기"
          icon="pi pi-arrow-right"
          iconPos="right"
          size="small"
          rounded
        />
      </Fieldset>
    </main>
  );
}
