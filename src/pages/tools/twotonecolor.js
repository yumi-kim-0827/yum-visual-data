import React from "react";
//components
import { Fieldset } from "primereact/fieldset";
import { Message } from "primereact/message";
import { ColorPicker } from "primereact/colorpicker";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";
//data
import twotonelist from "@/src/data/twotonecolorcollabo";
import webtonelist from "@/src/data/webtonecolor";
const Home = () => {
  console.log(twotonelist);

  const copyToClipboard = (colorHex) => {
    navigator.clipboard
      .writeText(colorHex)
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
        legend="2025 올해의 컬러 조합"
        className="w-full h-full overflow-y-auto"
      >
        <Card pt={{ content: { style: { padding: "0" } } }} className="mb-2">
          <h3>2025 팬톤 컬러</h3>
          <ColorPicker
            disabled
            value="A47764"
            tooltip="모카 무스"
            pt={{
              root: { style: { width: "100%", height: "100px" } },
              input: {
                style: { display: "block", width: "100%", height: "100%" },
              },
            }}
          />
        </Card>
        <Card pt={{ content: { style: { padding: "0" } } }} className="mb-2">
          <div className="flex items-center gap-2">
            <h3>2025 팬톤 컬러팔레트 조합</h3>
            <Message
              text="색상을 클릭하면 HEX 코드가 복사됩니다."
              style={{
                padding: "6px 12px",
                border: "0",
                borderWidth: "0",
                color: "#333",
                backgroundColor: "#f3f3f3",
              }}
            />
          </div>
          <div className="pb-4">
            <Panel header=" 따뜻하고 풍부한 갈색 톤으로 초콜릿과 커피의 부드러운 조화를 연상시키는 칼라">
              <strong>
                팬톤 컬러 연구소의 리트리스 아이즈먼(Leatrice Eiseman) 소장은
                모카 무스에 대해 &#34;세련되고 화려한 동시에, 클래식하며 소박한
                매력을 지닌 색&#34;이라며, &#34;겸손하고 베이직한 갈색에 대한
                우리의 인식을 고급스러움과 화려함으로 확장할 수 있도록
                해준다&#34;고 설명했습니다.
                <br />
              </strong>
              <span>
                출처 :
                https://www.mhnse.com/news/articleView.html?idxno=355628&utm_source=chatgpt.com
              </span>
            </Panel>
          </div>
          <div className="p-4 w-full grid grid-cols-4 gap-6 border-1 border-zinc-200 rounded-md">
            {twotonelist.map((item, id) => {
              return (
                <div className="flex gap-1" key={id}>
                  {item.map((twotone, idx) => {
                    return (
                      <>
                        <ColorPicker
                          format="hex"
                          disabled
                          value={twotone}
                          pt={{
                            root: { style: { width: "100%", height: "100px" } },
                            input: {
                              style: {
                                display: "block",
                                width: "100%",
                                height: "100%",
                              },
                            },
                          }}
                          onClick={() => {
                            copyToClipboard(twotone);
                          }}
                        />
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Card>
        <Card pt={{ content: { style: { padding: "0" } } }} className="mb-2">
          <div className="flex items-center gap-2">
            <h3>웹사이트 기반 색조합</h3>
            <Message
              text="색상을 클릭하면 HEX 코드가 복사됩니다."
              style={{
                padding: "6px 12px",
                border: "0",
                borderWidth: "0",
                color: "#333",
                backgroundColor: "#f3f3f3",
              }}
            />
          </div>
          <div className="pb-4">
            <Panel
              header=" 웹사이트에서 색 조합은 사용자 경험과 브랜드 이미지에 큰 영향을
                미치기 때문에 중요합니다."
            >
              <strong>1. 첫인상과 감정 전달</strong>
              <p className="m-0 mb-2">
                색상은 사용자에게 즉각적인 첫인상을 남기며, 홈페이지 방문자들은
                색상을 통해 웹사이트의 분위기와 성격을 빠르게 파악합니다.
              </p>
              <strong>2. 가독성과 접근성</strong>
              <p className="m-0 mb-2">
                스트와 배경의 색상 대비를 잘 조합하면 콘텐츠의 가독성이
                향상됩니다. 색상 대비를 맞추면 시각적으로 불편함이 줄어들고,
                누구나 쉽게 정보를 읽을 수 있습니다.
              </p>
              <strong>3. 사용자 경험&#40;UX&#41; 강화</strong>
              <p className="m-0 mb-2">
                주요 액션&#40;버튼, 링크&#41;에 강조된 색상을 사용하면 사용자의
                행동 유도&#40;CTA&#41;를 쉽게 할 수 있습니다.
              </p>
              <strong>4. 브랜드 아이덴티티와 일관성</strong>
              <p className="m-0 mb-2">
                색상은 브랜드의 정체성과 스토리를 시각적으로 표현하는 수단이기
                때문에, 일관된 색상 조합은 브랜드를 더 쉽게 기억하고 인식하도록
                만듭니다.
              </p>
            </Panel>
          </div>
          <div className="p-4 w-full grid grid-cols-4 gap-6 border-1 border-zinc-200 rounded-md">
            {webtonelist.map((item, id) => {
              return (
                <div className="flex gap-1" key={id}>
                  {item.map((threetone, idx) => {
                    return (
                      <>
                        <ColorPicker
                          format="hex"
                          disabled
                          value={threetone}
                          pt={{
                            root: { style: { width: "100%", height: "100px" } },
                            input: {
                              style: {
                                display: "block",
                                width: "100%",
                                height: "100%",
                              },
                            },
                          }}
                          onClick={() => {
                            copyToClipboard(threetone);
                          }}
                        />
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Card>
      </Fieldset>
    </main>
  );
};

export default Home;
