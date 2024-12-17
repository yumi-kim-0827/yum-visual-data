import React, { useState } from "react";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Panel } from "primereact/panel";
import { ColorPicker } from "primereact/colorpicker";
import { Card } from "primereact/card";

const Home = () => {
  const [color, setColor] = useState(null);
  const [hexColor, setHexColor] = useState("#000000");
  const [rgbaColor, setRgbaColor] = useState("rgba(0, 0, 0, 1)");
  const [hsbColor, setHsbColor] = useState({ h: 0, s: 0, b: 0 });

  // HEX -> RGBA 변환 함수
  const hexToRgba = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  // HEX -> HSB 변환 함수
  const hexToHsb = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let delta = max - min;

    let h = 0,
      s = 0,
      v = max;

    if (delta !== 0) {
      s = delta / max;
      if (r === max) h = (g - b) / delta;
      else if (g === max) h = 2 + (b - r) / delta;
      else h = 4 + (r - g) / delta;

      h = Math.round(h * 60);
      if (h < 0) h += 360;
    }
    return { h, s: Math.round(s * 100), b: Math.round(v * 100) };
  };

  const handleColorChange = (e) => {
    const hex = `#${e.value}`; // HEX 값 가져오기
    setHexColor(hex);
    setRgbaColor(hexToRgba(hex));
    setHsbColor(hexToHsb(hex));
  };

  const [colorFirstHEX, setColorFirstHEX] = useState("ffb01c");
  const [colorSecondHEX, setColorSecondHEX] = useState("6e9aff");
  const [colorFirstRGB, setColorFirstRGB] = useState({
    r: 255,
    g: 182,
    b: 79,
  });
  const [colorSecondRGB, setColorSecondRGB] = useState({
    r: 99,
    g: 154,
    b: 255,
  });
  const [colorFirstHSB, setColorFirstHSB] = useState({ h: 32, s: 75, b: 100 });
  const [colorSecondHSB, setColorSecondHSB] = useState({
    h: 219,
    s: 47,
    b: 100,
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

  const copyToClipboardSecondRgb = () => {
    navigator.clipboard
      .writeText(JSON.stringify(colorSecondRGB))
      .then(() => {
        alert("색상이 클립보드에 복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  const copyToClipboardFirstHsb = () => {
    navigator.clipboard
      .writeText(JSON.stringify(colorFirstHSB))
      .then(() => {
        alert("색상이 클립보드에 복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  const copyToClipboardSecondHsb = () => {
    navigator.clipboard
      .writeText(JSON.stringify(colorSecondHSB))
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
        <h2>하나의 색상에 대한 다양한 색상 코드를 추출합니다.</h2>
        <Card pt={{ content: { style: { padding: "0" } } }}>
          <div className="flex gap-4 items-center">
            <ColorPicker
              value={hexColor.replace("#", "")} // PrimeReact의 ColorPicker는 HEX에서 '#' 없이 사용
              onChange={handleColorChange}
              inline
            />
            <div>
              <p>
                HEX: <span className="font-bold">{hexColor}</span>
              </p>
              <p>
                RGBA: <span className="font-bold">{rgbaColor}</span>
              </p>
              <p>
                HSB:
                <span className="font-bold">{`h: ${hsbColor.h}, s: ${hsbColor.s}%, b: ${hsbColor.b}%`}</span>
              </p>
            </div>
          </div>
        </Card>
        <h2>색상 선택 프로그램을 통해 색상 코드를 추출합니다.</h2>
        <Card pt={{ content: { style: { padding: "0" } } }}>
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <h3>HEX 코드 생성</h3>
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
              <h3>RGB 코드 생성</h3>
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
              <div className="flex gap-2 items-center">
                <ColorPicker
                  inputId="color-rgb"
                  format="rgb"
                  value={colorSecondRGB}
                  onChange={(e) => setColorSecondRGB(e.value)}
                  pt={{ input: { style: { width: "120px" } } }}
                />
                <div className="flex">
                  <label htmlFor="color-hex" className="font-bold">
                    RGB 코드 :
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="pl-2">
                      {JSON.stringify(colorSecondRGB)}
                    </span>
                    <i
                      className="pi pi-copy cursor-pointer hover:font-bold"
                      onClick={copyToClipboardSecondRgb}
                    >
                      복사
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h3>HSB 코드 생성</h3>
              <div className="flex gap-2 items-center">
                <ColorPicker
                  inputId="color-hsb"
                  format="hsb"
                  value={colorFirstHSB}
                  onChange={(e) => setColorFirstHSB(e.value)}
                  pt={{ input: { style: { width: "120px" } } }}
                />
                <div className="flex">
                  <label htmlFor="color-hex" className="font-bold">
                    HSB 코드 :
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="pl-2">
                      {JSON.stringify(colorFirstHSB)}
                    </span>
                    <i
                      className="pi pi-copy cursor-pointer hover:font-bold"
                      onClick={copyToClipboardFirstHsb}
                    >
                      복사
                    </i>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <ColorPicker
                  inputId="color-hsb"
                  format="hsb"
                  value={colorSecondHSB}
                  onChange={(e) => setColorSecondHSB(e.value)}
                  pt={{ input: { style: { width: "120px" } } }}
                />
                <div className="flex">
                  <label htmlFor="color-hex" className="font-bold">
                    HSB 코드 :
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="pl-2">
                      {JSON.stringify(colorSecondHSB)}
                    </span>
                    <i
                      className="pi pi-copy cursor-pointer hover:font-bold"
                      onClick={copyToClipboardSecondHsb}
                    >
                      복사
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <h3>색상 코드의 종류</h3>
        <div className="flex gap-2">
          <Panel header="HEX 코드">
            <h3 className="m-0">
              형식: #RRGGBB &#40;각각 16진수&#41; 각 부분은 Red, Green, Blue의
              색 강도를 나타냅니다
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
          <Panel header="HSL 코드">
            <h3 className="m-0">
              형식: hsl&#40;hue, saturation%, lightness%&#41; 각 부분은
              색조&#40;Hue&#41;, 채도&#40;Saturation&#41;,
              명도&#40;Lightness&#41;로 색상입니다.
            </h3>
            <div>
              <p>사용예시</p>
              <div className="p-2 bg-black rounded-md text-white">
                <p className="m-0">
                  background-color: hsl&#40;200, 80%, 60%&#41;
                  <span className="pl-2 text-emerald-700">
                    &#47;&#42; 부드러운 파란색 배경 &#42;&#47;
                  </span>
                </p>
              </div>
            </div>
          </Panel>
          <Panel header="HSLA  코드">
            <h3 className="m-0">
              형식: hsla&#40;hue, saturation%, lightness%, alpha&#41; HSL에
              Alpha 값을 추가하여 투명도 조절합니다
            </h3>
            <div>
              <p>사용예시</p>
              <div className="p-2 bg-black rounded-md text-white">
                <p className="m-0">
                  hsla&#40;0, 100%, 50%, 0.5&#41;
                  <span className="pl-2 text-emerald-700">
                    &#47;&#42; 반투명 빨강 &#42;&#47;
                  </span>
                </p>
              </div>
            </div>
          </Panel>
        </div>
        <h2>
          2025 올해의 팬톤 컬러 :
          <strong className="text-pentone">
            모카 무스&#40;Mocha Mousse&#41;
          </strong>
        </h2>
        <div className="px-12">
          <Image
            src="/images/pantone_1.png" // public 폴더 내 경로
            alt="My Image"
            width={1570} // 이미지의 너비
            height={300} // 이미지의 높이
            layout="responsive"
          />
        </div>
        <Card pt={{ content: { style: { padding: "0" } } }}>
          <p>
            이 색상은 팬톤 17-1230으로 분류되며, 따뜻하고 풍부한 갈색 톤으로,
            초콜릿과 커피의 부드러운 조화를 연상시킵니다.
          </p>
          <p>
            팬톤 컬러 연구소의 리트리스 아이즈먼&#40;Leatrice Eiseman&#41;
            소장은 모카 무스에 대해 &#34;세련되고 풍부하면서도 동시에 소박한
            클래식으로, 겸손하고 단단한 느낌을 주는 갈색의 인식을 확장하여
            고급스러움까지 포용한다&#34;고 설명했습니다.
          </p>
          <p>
            또한, 팬톤은 2025년 봄/여름 시즌을 위한 패션 컬러 트렌드 보고서에서
            자연에서 영감을 받은 다양한 색상을 소개했습니다.
          </p>
          <p>
            이 보고서에는 건강하고 따뜻한 갈색인 &#34;밀기울&#40;Bran&#41;&#34;,
            파스텔 톤의 &#34;라임 크림&#40;Lime Cream&#41;&#34;, 회색빛이 도는
            &#34;카슈미르&#40;Cashmere&#41;&#34;, 그리고 톡톡 튀는 &#34;화이트
            그레이프&#40;White Grape&#41;&#34; 등이 포함되어 있습니다.
          </p>
          <p>
            이러한 색상들은 자연의 색조를 반영하며, 현대적인 디자인과 패션에
            신선함과 우아함을 더해줄 것으로 기대됩니다.
          </p>
        </Card>
      </Fieldset>
    </main>
  );
};

export default Home;
