import React, { useState } from "react";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

const Home = () => {
  const [value3, setValue3] = useState(25);
  const [passwordOp, setPasswordOp] = useState(null);
  const passwordOptions = [
    { name: "숫자만", code: "passwordOp1" },
    { name: "소문자 영어만", code: "passwordOp2" },
    { name: "대문자 영어만", code: "passwordOp3" },
    { name: "특수문자만", code: "passwordOp4" },
    { name: "숫자 + 소문자영어", code: "passwordOp5" },
    { name: "숫자 + 대문자영어", code: "passwordOp6" },
    { name: "숫자 + 특수문자", code: "passwordOp7" },
    { name: "숫자 + 소문자영어 + 특수문자", code: "passwordOp8" },
    { name: "숫자 + 대문자영어 + 특수문자", code: "passwordOp9" },
    { name: "소문자영어 + 특수문자", code: "passwordOp10" },
    { name: "대문자영어 + 특수문자", code: "passwordOp11" },
  ];

  return (
    <main className="w-full">
      <Fieldset
        legend="비밀번호 자동 생성기"
        className="w-full h-full overflow-y-auto"
      >
        <h2>비밀번호를 위한 임의의 문자열을 생성합니다.</h2>
        <Card pt={{ content: { style: { padding: "0" } } }}>
          <div className="flex gap-4 items-end">
            <div className="">
              <label htmlFor="minmax-buttons" className="font-bold block mb-2">
                패스워드 자릿수 &#40;최대 20자리까지&#41;
              </label>
              <InputNumber
                inputId="minmax-buttons"
                value={value3}
                onValueChange={(e) => setValue3(e.value)}
                mode="decimal"
                showButtons
                min={0}
                max={20}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password-option" className="font-bold block mb-2">
                패쓰워드 생성 조건
              </label>
              <Dropdown
                value={passwordOp}
                onChange={(e) => setPasswordOp(e.value)}
                options={passwordOptions}
                optionLabel="name"
                placeholder="선택"
                className="w-full md:w-14rem"
              />
            </div>
            <Button
              label="패쓰워드 생성하기"
              icon="pi pi-check"
              iconPos="right"
            />
          </div>
        </Card>
      </Fieldset>
    </main>
  );
};

export default Home;
