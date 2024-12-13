import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";

export default function Home() {
  const router = useRouter();
  const stepperRef = useRef(null);

  return (
    <main className="w-full">
      <Fieldset
        legend="인포그래픽 만들기"
        className="w-full h-full overflow-y-auto"
      >
        <h2>기본 막대 그래프 만드는 방법 훑어보기</h2>
        <Button
          label="기본 막대그래프 생성 바로가기"
          rounded
          onClick={() => {
            router.push("/create/bar");
          }}
        />
        <Stepper ref={stepperRef}>
          <StepperPanel header="그래프 확인">
            <div className="p-2 mx-auto w-2/3 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
              <div className="w-3/5">
                <Image
                  src="/images/help1.png" // public 폴더 내 경로
                  alt="My Image"
                  width={500} // 이미지의 너비
                  height={2} // 이미지의 높이
                  layout="responsive"
                />
              </div>
              <div className="flex-1">
                <strong className="block text-lg">데이터 확인</strong>
                <p>
                  막대 그래프는 각 데이터 항목과 해당 값을 시각적으로
                  나타냅니다.
                </p>
                <p>
                  기본 막대 그래프는 왼쪽에서 오른쪽으로 순서대로 생성되며, 각각
                  데이터 이름과 값을 반드시 입력해야 합니다.
                </p>
              </div>
            </div>
          </StepperPanel>
          <StepperPanel header="데이터 입력과 삭제">
            <div className="p-2 mx-auto w-2/3 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
              <div className="w-3/5">
                <Image
                  src="/images/help2.png" // public 폴더 내 경로
                  alt="My Image"
                  width={500} // 이미지의 너비
                  height={2} // 이미지의 높이
                  layout="responsive"
                />
              </div>
              <div className="flex-1">
                <strong className="block text-lg">데이터 입력과 삭제</strong>
                <p>막대 그래프에 표시할 데이터를 순서대로 입력합니다.</p>
                <p>
                  첫 번째 데이터를 입력하면 초기 막대 그래프가 생성됩니다. 이후
                  데이터 이름과 값을 추가하면 새로운 막대 그래프가 차례로
                  생성됩니다.
                </p>
                <p>
                  필요하지 않은 데이터는 삭제 버튼을 눌러 마지막으로 추가된 막대
                  그래프를 제거할 수 있습니다.
                </p>
              </div>
            </div>
          </StepperPanel>
          <StepperPanel header="색상 테마 적용">
            <div className="p-2 mx-auto w-2/3 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
              <div className="w-3/5">
                <Image
                  src="/images/help3.png" // public 폴더 내 경로
                  alt="My Image"
                  width={500} // 이미지의 너비
                  height={2} // 이미지의 높이
                  layout="responsive"
                />
              </div>
              <div className="flex-1">
                <strong className="block text-lg">색상 테마 적용</strong>
                <p>
                  그래프와 차트에 원하는 색상 테마를 쉽게 적용할 수 있습니다.
                </p>
                <p>그래프 상단에 표시된 컬러칩에서 원하는 테마를 선택하세요.</p>
                <p>
                  선택한 색상 테마에 따라 인포그래픽의 컬러 팔레트가 자동으로
                  업데이트됩니다.
                </p>
              </div>
            </div>
          </StepperPanel>
        </Stepper>
        <h2 className="pt-12">수직 라벨 막대 그래프 만드는 방법 훑어보기</h2>
        <Button
          label="수직 라벨 막대그래프 생성 바로가기"
          rounded
          onClick={() => {
            router.push("/create/bar/barChart1");
          }}
        />
        <Stepper ref={stepperRef}>
          <StepperPanel header="그래프 확인">
            <div className="p-2 mx-auto w-2/3 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
              <div className="w-3/5">
                <Image
                  src="/images/help5.png" // public 폴더 내 경로
                  alt="My Image"
                  width={500} // 이미지의 너비
                  height={2} // 이미지의 높이
                  layout="responsive"
                />
              </div>
              <div className="flex-1">
                <strong className="block text-lg">데이터 확인</strong>
                <p>
                  막대 그래프는 각 데이터 항목과 해당 값을 시각적으로
                  나타냅니다.
                </p>
                <p>
                  기본 막대 그래프는 왼쪽에서 오른쪽으로 순서대로 생성되며, 각각
                  데이터 이름과 값을 반드시 입력해야 합니다.
                </p>
              </div>
            </div>
          </StepperPanel>
          <StepperPanel header="데이터 입력과 삭제">
            <div className="p-2 mx-auto w-2/3 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
              <div className="w-3/5">
                <Image
                  src="/images/help2.png" // public 폴더 내 경로
                  alt="My Image"
                  width={500} // 이미지의 너비
                  height={2} // 이미지의 높이
                  layout="responsive"
                />
              </div>
              <div className="flex-1">
                <strong className="block text-lg">데이터 입력과 삭제</strong>
                <p>막대 그래프에 표시할 데이터를 순서대로 입력합니다.</p>
                <p>
                  첫 번째 데이터를 입력하면 초기 막대 그래프가 생성됩니다. 이후
                  데이터 이름과 값을 추가하면 새로운 막대 그래프가 차례로
                  생성됩니다.
                </p>
                <p>
                  필요하지 않은 데이터는 삭제 버튼을 눌러 마지막으로 추가된 막대
                  그래프를 제거할 수 있습니다.
                </p>
              </div>
            </div>
          </StepperPanel>
          <StepperPanel header="색상 테마 적용">
            <div className="p-2 mx-auto w-2/3 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
              <div className="w-3/5">
                <Image
                  src="/images/help3.png" // public 폴더 내 경로
                  alt="My Image"
                  width={500} // 이미지의 너비
                  height={2} // 이미지의 높이
                  layout="responsive"
                />
              </div>
              <div className="flex-1">
                <strong className="block text-lg">색상 테마 적용</strong>
                <p>
                  그래프와 차트에 원하는 색상 테마를 쉽게 적용할 수 있습니다.
                </p>
                <p>그래프 상단에 표시된 컬러칩에서 원하는 테마를 선택하세요.</p>
                <p>
                  선택한 색상 테마에 따라 인포그래픽의 컬러 팔레트가 자동으로
                  업데이트됩니다.
                </p>
              </div>
            </div>
          </StepperPanel>
        </Stepper>
        <h2 className="pt-12">두 항목 비율 비교 그래프 만드는 방법 훑어보기</h2>
        <Button
          label="두 항목 비율 비교 그래프 생성 바로가기"
          rounded
          onClick={() => {
            router.push("/create/bar/barChart2");
          }}
        />
        <Stepper ref={stepperRef}>
          <StepperPanel header="그래프 확인">
            <div className="p-2 mx-auto w-2/3 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
              <div className="w-3/5">
                <Image
                  src="/images/help6.png" // public 폴더 내 경로
                  alt="My Image"
                  width={500} // 이미지의 너비
                  height={2} // 이미지의 높이
                  layout="responsive"
                />
              </div>
              <div className="flex-1">
                <strong className="block text-lg">데이터 확인</strong>
                <p>이 그래프는 두 항목의 데이터 카테고리 비율을 비교합니다.</p>
                <p>
                  두 비교군에서 비교할 데이터 항목은 동일한 이름으로 순서에 맞게
                  입력해야 합니다.
                </p>
              </div>
            </div>
          </StepperPanel>
          <StepperPanel header="데이터 입력과 삭제">
            <div className="p-2 mx-auto w-2/3 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
              <div className="w-3/5">
                <Image
                  src="/images/help7.png" // public 폴더 내 경로
                  alt="My Image"
                  width={500} // 이미지의 너비
                  height={2} // 이미지의 높이
                  layout="responsive"
                />
              </div>
              <div className="flex-1">
                <strong className="block text-lg">데이터 입력과 삭제</strong>
                <p>비교할 두개의 비교군 이름을 입력합니다.</p>
                <p>
                  첫번째 비교군의 데이터를 입력합니다. 만약 비교군1의
                  &#39;키&#39;와 데이터값 &#39;175&#39;을 입력하고 데이터 추가
                  버튼을 누릅니다.
                </p>
                <p>
                  두번째 비교군의 데이터를 입력합니다. 위에서 첫번째 비교군의
                  데이터명을 똑같이 입력하고 값을 줍니다. 예시의 비교군1과 같이
                  비교군2의 &#39;키&#39;와 데이터값 &#39;182&#39;를 입력한 후
                  데이터 추가 버튼을 누릅니다.
                </p>
              </div>
            </div>
          </StepperPanel>
          <StepperPanel header="색상 테마 적용">
            <div className="p-2 mx-auto w-2/3 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
              <div className="w-3/5">
                <Image
                  src="/images/help8.png" // public 폴더 내 경로
                  alt="My Image"
                  width={500} // 이미지의 너비
                  height={2} // 이미지의 높이
                  layout="responsive"
                />
              </div>
              <div className="flex-1">
                <strong className="block text-lg">색상 테마 적용</strong>
                <p>
                  그래프와 차트에 원하는 색상 테마를 쉽게 적용할 수 있습니다.
                </p>
                <p>그래프 상단에 표시된 컬러칩에서 원하는 테마를 선택하세요.</p>
                <p>
                  선택한 색상 테마에 따라 인포그래픽의 컬러 팔레트가 자동으로
                  업데이트됩니다.
                </p>
              </div>
            </div>
          </StepperPanel>
        </Stepper>
      </Fieldset>
    </main>
  );
}
