import React, { useState } from "react";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Message } from "primereact/message";

const Home = () => {
  const [textNumber, setTextNumber] = useState(25);
  const [passwordOp, setPasswordOp] = useState(null);
  const [generatedPw, setGeneratedPw] = useState("");
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
    { name: "소문자영어 + 대문자영어", code: "passwordOp12" },
    { name: "소문자영어 + 대문자영어 + 숫자", code: "passwordOp13" },
    { name: "소문자영어 + 대문자영어 + 특수문자", code: "passwordOp14" },
  ];

  // 숫자만 passwordOp1
  const generateRandomNumberString = (length) => {
    let result = "";
    const digits = "0123456789";
    for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return result;
  };

  // 소문자 영어만 passwordOp2
  const generateRandomString = (length) => {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  // 대문자 영어만 passwordOp3
  const generateRandomUppercaseString = (length) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  // 특수문자만 passwordOp4
  const generateRandomSpecialCharacterString = (length) => {
    let result = "";
    const specialCharacters = "!@#$%^&*()_+[]{}|;:',.<>?/`~";
    for (let i = 0; i < length; i++) {
      result += specialCharacters.charAt(
        Math.floor(Math.random() * specialCharacters.length)
      );
    }
    return result;
  };

  // 숫자와 소문자 영어 passwordOp5
  const generateRandomNumberAndLowercaseString = (length) => {
    let result = [];
    const digits = "0123456789";
    const characters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < length; i++) {
      // 숫자와 소문자 중 하나를 랜덤하게 선택
      if (Math.random() < 0.5) {
        result.push(digits.charAt(Math.floor(Math.random() * digits.length)));
      } else {
        result.push(
          characters.charAt(Math.floor(Math.random() * characters.length))
        );
      }
    }

    // 배열을 문자열로 변환
    return result.join("");
  };

  // 숫자와 대문자 영어 passwordOp6
  const generateRandomNumberAndUppercaseString = (length) => {
    let result = [];
    const digits = "0123456789";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < length; i++) {
      // 숫자와 대문자 중 하나를 랜덤하게 선택
      if (Math.random() < 0.5) {
        result.push(digits.charAt(Math.floor(Math.random() * digits.length)));
      } else {
        result.push(
          characters.charAt(Math.floor(Math.random() * characters.length))
        );
      }
    }

    // 배열을 문자열로 변환
    return result.join("");
  };
  // 숫자와 특수문자 passwordOp7
  const generateRandomNumberAndSpecialCharString = (length) => {
    let result = [];
    const digits = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      // 숫자와 특수문자 중 하나를 랜덤하게 선택
      if (Math.random() < 0.5) {
        result.push(digits.charAt(Math.floor(Math.random() * digits.length)));
      } else {
        result.push(
          specialChars.charAt(Math.floor(Math.random() * specialChars.length))
        );
      }
    }

    // 배열을 문자열로 변환
    return result.join("");
  };

  // 숫자, 소문자 영어, 특수문자 passwordOp8
  const generateRandomNumberLowercaseAndSpecialCharString = (length) => {
    let result = [];
    const digits = "0123456789";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      // 숫자, 소문자 영어, 특수문자 중 하나를 랜덤하게 선택
      const choice = Math.floor(Math.random() * 3); // 0, 1, 2 중 하나 선택
      if (choice === 0) {
        result.push(digits.charAt(Math.floor(Math.random() * digits.length)));
      } else if (choice === 1) {
        result.push(
          lowercaseChars.charAt(
            Math.floor(Math.random() * lowercaseChars.length)
          )
        );
      } else {
        result.push(
          specialChars.charAt(Math.floor(Math.random() * specialChars.length))
        );
      }
    }

    // 배열을 문자열로 변환
    return result.join("");
  };

  // 숫자, 소문자 영어, 특수문자 passwordOp9
  const generateRandomNumberUppercaseAndSpecialCharString = (length) => {
    let result = [];
    const digits = "0123456789";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      // 숫자, 대문자 영어, 특수문자 중 하나를 랜덤하게 선택
      const choice = Math.floor(Math.random() * 3); // 0, 1, 2 중 하나 선택
      if (choice === 0) {
        result.push(digits.charAt(Math.floor(Math.random() * digits.length)));
      } else if (choice === 1) {
        result.push(
          uppercaseChars.charAt(
            Math.floor(Math.random() * uppercaseChars.length)
          )
        );
      } else {
        result.push(
          specialChars.charAt(Math.floor(Math.random() * specialChars.length))
        );
      }
    }

    // 배열을 문자열로 변환
    return result.join("");
  };

  // 소문자 영어와 특수문자 passwordOp10
  const generateRandomLowercaseAndSpecialCharString = (length) => {
    let result = [];
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      // 소문자 영어와 특수문자 중 하나를 랜덤하게 선택
      const choice = Math.floor(Math.random() * 2); // 0 또는 1 중 하나 선택
      if (choice === 0) {
        result.push(
          lowercaseChars.charAt(
            Math.floor(Math.random() * lowercaseChars.length)
          )
        );
      } else {
        result.push(
          specialChars.charAt(Math.floor(Math.random() * specialChars.length))
        );
      }
    }

    // 배열을 문자열로 변환
    return result.join("");
  };

  // 대문자 영어와 특수문자 passwordOp11
  const generateRandomUppercaseAndSpecialCharString = (length) => {
    let result = [];
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      // 대문자 영어와 특수문자 중 하나를 랜덤하게 선택
      const choice = Math.floor(Math.random() * 2); // 0 또는 1 중 하나 선택
      if (choice === 0) {
        result.push(
          uppercaseChars.charAt(
            Math.floor(Math.random() * uppercaseChars.length)
          )
        );
      } else {
        result.push(
          specialChars.charAt(Math.floor(Math.random() * specialChars.length))
        );
      }
    }

    // 배열을 문자열로 변환
    return result.join("");
  };

  // 소문자 영어 + 대문자 영어 passwordOp12
  const generateRandomLowercaseAndUppercaseString = (length) => {
    let result = [];
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < length; i++) {
      // 소문자 영어와 대문자 영어 중 하나를 랜덤하게 선택
      const choice = Math.floor(Math.random() * 2); // 0 또는 1 중 하나 선택
      if (choice === 0) {
        result.push(
          lowercaseChars.charAt(
            Math.floor(Math.random() * lowercaseChars.length)
          )
        );
      } else {
        result.push(
          uppercaseChars.charAt(
            Math.floor(Math.random() * uppercaseChars.length)
          )
        );
      }
    }

    // 배열을 문자열로 변환
    return result.join("");
  };

  // 소문자 영어, 대문자 영어, 숫자 passwordOp13
  const generateRandomLowercaseUppercaseNumberString = (length) => {
    let result = [];
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    for (let i = 0; i < length; i++) {
      // 소문자, 대문자, 숫자 중 하나를 랜덤하게 선택
      const choice = Math.floor(Math.random() * 3); // 0, 1, 또는 2 중 하나 선택
      if (choice === 0) {
        result.push(
          lowercaseChars.charAt(
            Math.floor(Math.random() * lowercaseChars.length)
          )
        );
      } else if (choice === 1) {
        result.push(
          uppercaseChars.charAt(
            Math.floor(Math.random() * uppercaseChars.length)
          )
        );
      } else {
        result.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
      }
    }

    // 배열을 문자열로 변환
    return result.join("");
  };

  // 소문자영어 + 대문자영어 + 특수문자 passwordOp14
  const generateRandomLowercaseUppercaseSpecialCharString = (length) => {
    let result = [];
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      // 소문자, 대문자, 특수문자 중 하나를 랜덤하게 선택
      const choice = Math.floor(Math.random() * 3); // 0, 1, 또는 2 중 하나 선택
      if (choice === 0) {
        result.push(
          lowercaseChars.charAt(
            Math.floor(Math.random() * lowercaseChars.length)
          )
        );
      } else if (choice === 1) {
        result.push(
          uppercaseChars.charAt(
            Math.floor(Math.random() * uppercaseChars.length)
          )
        );
      } else {
        result.push(
          specialChars.charAt(Math.floor(Math.random() * specialChars.length))
        );
      }
    }

    // 배열을 문자열로 변환
    return result.join("");
  };

  const handlePasswordGenerate = () => {
    let result = ""; // 초기화된 결과 변수
    switch (passwordOp?.code) {
      case "passwordOp1":
        result = generateRandomNumberString(textNumber);
        break;
      case "passwordOp2":
        result = generateRandomString(textNumber);
        break;
      case "passwordOp3":
        result = generateRandomUppercaseString(textNumber);
        break;
      case "passwordOp4":
        result = generateRandomSpecialCharacterString(textNumber);
        break;
      case "passwordOp5":
        result = generateRandomNumberAndLowercaseString(textNumber);
        break;
      case "passwordOp6":
        result = generateRandomNumberAndUppercaseString(textNumber);
        break;
      case "passwordOp7":
        result = generateRandomNumberAndSpecialCharString(textNumber);
        break;
      case "passwordOp8":
        result = generateRandomNumberLowercaseAndSpecialCharString(textNumber);
        break;
      case "passwordOp9":
        result = generateRandomNumberUppercaseAndSpecialCharString(textNumber);
        break;
      case "passwordOp10":
        result = generateRandomLowercaseAndSpecialCharString(textNumber);
        break;
      case "passwordOp11":
        result = generateRandomUppercaseAndSpecialCharString(textNumber);
        break;
      case "passwordOp12":
        result = generateRandomLowercaseAndUppercaseString(textNumber);
        break;
      case "passwordOp13":
        result = generateRandomLowercaseUppercaseNumberString(textNumber);
        break;
      case "passwordOp14":
        result = generateRandomLowercaseUppercaseSpecialCharString(textNumber);
        break;
      default:
        alert("옵션을 선택하세요.");
        return;
    }
    setGeneratedPw(result);
  };

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
                value={textNumber}
                onValueChange={(e) => setTextNumber(e.value)}
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
              onClick={handlePasswordGenerate}
            />
          </div>
        </Card>
        <h3>비밀번호 생성 결과</h3>
        <Card pt={{ content: { style: { padding: "0" } } }}>
          <p>{generatedPw}</p>
        </Card>
      </Fieldset>
    </main>
  );
};

export default Home;
