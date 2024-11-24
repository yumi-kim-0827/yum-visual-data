import React from "react";
import dynamic from "next/dynamic";
//components
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";

// 클라이언트 사이드에서만 렌더링하도록 설정
const GradientChart = dynamic(
  () => import("@/src/components/charts/pie/GradientChart"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="w-full">
      <Fieldset legend="인포그래픽 만들기" className="w-full">
        <div className="flex items-center gap-4">
          <div className="w-1/3">
            <h2>
              데이터를 그래프와 지도에서 시각적으로 확인하고, 더 나은 결정을
              내려보세요.
            </h2>
            <p>
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
            <div>
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
        </div>
      </Fieldset>
    </main>
  );
}
