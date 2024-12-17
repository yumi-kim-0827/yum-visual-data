import React from "react";
//components
import { Fieldset } from "primereact/fieldset";
import { Message } from "primereact/message";
import { ColorPicker } from "primereact/colorpicker";
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
            <h3>2025 팬톤 컬러팔레트 조합 </h3>
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
