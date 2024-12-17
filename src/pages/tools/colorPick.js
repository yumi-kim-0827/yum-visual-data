import React, { useState } from "react";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Panel } from "primereact/panel";
import { ColorPicker } from "primereact/colorpicker";
import { Card } from "primereact/card";
import { Chip } from "primereact/chip";

const Home = () => {
  const [colorFirstHEX, setColorFirstHEX] = useState("ffdf40");
  const [colorSecondHEX, setColorSecondHEX] = useState("646631");
  const [colorFirstRGB, setColorFirstRGB] = useState({
    r: 100,
    g: 102,
    b: 241,
  });
  const [colorSecondRGB, setColorSecondRGB] = useState({
    r: 100,
    g: 102,
    b: 241,
  });
  const [colorFirstHSB, setColorFirstHSB] = useState({ h: 239, s: 59, b: 95 });
  const [colorSecondHSB, setColorSecondHSB] = useState({
    h: 239,
    s: 59,
    b: 95,
  });

  const copyToClipboardFirstHEX = () => {
    navigator.clipboard
      .writeText(colorFirstHEX)
      .then(() => {
        alert("색상이 클립보드에 복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  const copyToClipboardSecondHEX = () => {
    navigator.clipboard
      .writeText(colorSecondHEX)
      .then(() => {
        alert("색상이 클립보드에 복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  const copyToClipboardFirstRgb = () => {
    navigator.clipboard
      .writeText(JSON.stringify(colorFirstRGB))
      .then(() => {
        alert("색상이 클립보드에 복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  return (
    <main className="w-full">
      <Fieldset
        legend="색상 코드 추출"
        className="w-full h-full overflow-y-auto"
      >
        <h2>색상 선택 프로그램을 통해 색상 코드를 추출합니다.</h2>
        <Card>
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <ColorPicker
                  inputId="color-hex"
                  format="hex"
                  value={colorFirstHEX}
                  onChange={(e) => setColorFirstHEX(e.value)}
                  pt={{ input: { style: { width: "120px" } } }}
                />
                <div className="flex">
                  <label htmlFor="color-hex" className="font-bold">
                    HEX 코드 :
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="pl-2">{colorFirstHEX}</span>
                    <i
                      className="pi pi-copy cursor-pointer hover:font-bold"
                      onClick={copyToClipboardFirstHEX}
                    >
                      복사
                    </i>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <ColorPicker
                  inputId="color-hex"
                  format="hex"
                  value={colorSecondHEX}
                  onChange={(e) => setColorSecondHEX(e.value)}
                  pt={{ input: { style: { width: "120px" } } }}
                />
                <div className="flex">
                  <label htmlFor="color-hex" className="font-bold">
                    HEX 코드 :
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="pl-2">{colorSecondHEX}</span>
                    <i
                      className="pi pi-copy cursor-pointer hover:font-bold"
                      onClick={copyToClipboardSecondHEX}
                    >
                      복사
                    </i>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <ColorPicker
                  inputId="color-rgb"
                  format="rgb"
                  value={colorFirstRGB}
                  onChange={(e) => setColorFirstRGB(e.value)}
                  pt={{ input: { style: { width: "120px" } } }}
                />
                <div className="flex">
                  <label htmlFor="color-hex" className="font-bold">
                    RGB 코드 :
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="pl-2">
                      {JSON.stringify(colorFirstRGB)}
                    </span>
                    <i
                      className="pi pi-copy cursor-pointer hover:font-bold"
                      onClick={copyToClipboardFirstRgb}
                    >
                      복사
                    </i>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center"></div>
            </div>
          </div>
        </Card>
        <h3>색상 코드의 종류</h3>
        <div className="flex gap-2">
          <Panel header="HEX 코드">
            <h3 className="m-0">
              형식: #RRGGBB (각각 16진수) 각 부분은 Red, Green, Blue의 색 강도를
              나타냅니다
            </h3>
            <div>
              <p>사용예시</p>
              <div className="p-2 bg-black rounded-md text-white">
                <p className="m-0">
                  color: &#35;3498db
                  <span className="pl-2 text-emerald-700">
                    &#47;&#42; 파란색 텍스트 &#42;&#47;
                  </span>
                </p>
                <p className="m-0">
                  background-color: &#35;f4f4f4
                  <span className="pl-2 text-emerald-700">
                    &#47;&#42; 밝은 회색 배경 &#42;&#47;
                  </span>
                </p>
              </div>
            </div>
          </Panel>
          <Panel header="RGB 코드">
            <h3 className="m-0">
              형식: rgb &#40;red, green, blue&#41; &#40;0~255의 정수 값&#41;
              값은 Red, Green, Blue의 색 강도를 나타냅니다.
            </h3>
            <div>
              <p>사용예시</p>
              <div className="p-2 bg-black rounded-md text-white">
                <p className="m-0">
                  background-color: rgb &#40;240, 128, 128&#41;
                  <span className="pl-2 text-emerald-700">
                    &#47;&#42; 밝은 빨간 배경 &#42;&#47;
                  </span>
                </p>
              </div>
            </div>
          </Panel>
          <Panel header="RGBA 코드">
            <h3 className="m-0">
              형식: rgba &#40;red, green, blue, alpha&#41;, Alpha 값
              &#40;0~1&#41;을 추가하여 투명도를 조절할 수 있습니다.
            </h3>
            <div>
              <p>사용예시</p>
              <div className="p-2 bg-black rounded-md text-white">
                <p className="m-0">
                  color: rgba &#40;0, 0, 0, 0.7&#41;
                  <span className="pl-2 text-emerald-700">
                    &#47;&#42; 약간 투명한 검은 텍스트 &#42;&#47;
                  </span>
                </p>
              </div>
            </div>
          </Panel>
        </div>
      </Fieldset>
    </main>
  );
};

export default Home;
