import React, { useState } from "react";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Tag } from "primereact/tag";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Home = () => {
  const list1 = [
    { letter: "&", code: "&amp;", text: "앰퍼샌드" },
    { letter: "?", code: "&#63;", text: "물음표" },
    { letter: "!", code: "&#33;", text: "느낌표" },
    { letter: "~", code: "&#126;", text: "꼬리표" },
    { letter: "|", code: "&#124;", text: "수직선" },
    { letter: "<", code: "&lt;", text: "꺾쇠 괄호 열기" },
    { letter: ">", code: "&gt;", text: "꺾쇠 괄호 닫기" },
    { letter: '"', code: "&quot;", text: "큰따옴표" },
    { letter: "'", code: "&apos;", text: "작은따옴표 (HTML5)" },
    { letter: ":", code: "&#58;", text: "콜론" },
    { letter: ";", code: "&#59;", text: "세미콜론" },
    { letter: "(", code: "&#40;", text: "왼쪽 괄호" },
    { letter: ")", code: "&#41;", text: "오른쪽 괄호" },
    { letter: "{", code: "&#123;", text: "왼쪽 중괄호" },
    { letter: "}", code: "&#125;", text: "오른쪽 중괄호" },
    { letter: "[", code: "&#91;", text: "왼쪽 대괄호" },
    { letter: "]", code: "&#93;", text: "오른쪽 대괄호" },
    { letter: "^", code: "&#94;", text: "	탈자부호" },
    { letter: ",", code: "&#44;", text: "쉼표" },
    { letter: "©", code: "&copy;", text: "저작권 기호" },
    { letter: "®", code: "&reg;", text: "등록상표 기호" },
    { letter: "™", code: "&trade;", text: "상표 기호" },
    { letter: "€", code: "&#36;", text: "달러" },
    { letter: "$", code: "&euro;", text: "유로 기호" },
    { letter: "£", code: "&pound;", text: "파운드 기호" },
    { letter: "¥", code: "&yen;", text: "엔 기호" },
  ];

  const list2 = [
    { letter: "공백", code: "&nbsp;", text: "비어있는 공백" },
    { letter: "얇은 공백", code: "&thinsp;", text: "얇은 공백" },
    { letter: "넓은 공백", code: "&ensp;", text: "반각 공백" },
    { letter: "긴 공백", code: "&emsp;", text: "전각 공백" },
    { letter: "space", code: "&#09;", text: "수평탭" },
  ];

  const list3 = [
    { letter: "+", code: "&#43;", text: "더하기 기호" },
    { letter: "%", code: "&#37;", text: "백분율 기호" },
    { letter: "±", code: "&#177;", text: "더하기 빼기 기호" },
    { letter: "=", code: "&#61;", text: "등호" },
    { letter: "", code: "", text: "" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("html 코드가 복사되었습니다.");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  const renderCodeColumn = (rowData) => {
    return (
      <Tag
        value={rowData.code}
        onClick={() => {
          copyToClipboard(rowData.code);
        }}
        className="cursor-pointer hover:opacity-80"
      ></Tag>
    );
  };

  return (
    <main className="w-full">
      <Fieldset
        legend="특수문자 html 모음"
        className="w-full h-full overflow-y-auto"
      >
        <h3>일반 특수문자 html 코드</h3>
        <DataTable value={list1} tableStyle={{ minWidth: "50rem" }}>
          <Column field="letter" header="특수문자"></Column>
          <Column
            field="code"
            header="HTML 코드"
            body={renderCodeColumn}
          ></Column>
          <Column field="text" header="설명"></Column>
        </DataTable>
        <h3>공백 문자 html 코드</h3>
        <DataTable value={list2} tableStyle={{ minWidth: "50rem" }}>
          <Column field="letter" header="특수문자"></Column>
          <Column
            field="code"
            header="HTML 코드"
            body={renderCodeColumn}
          ></Column>
          <Column field="text" header="설명"></Column>
        </DataTable>
        <h3>수학 기호 html 코드</h3>
        <DataTable value={list3} tableStyle={{ minWidth: "50rem" }}>
          <Column field="letter" header="특수문자"></Column>
          <Column
            field="code"
            header="HTML 코드"
            body={renderCodeColumn}
          ></Column>
          <Column field="text" header="설명"></Column>
        </DataTable>
      </Fieldset>
    </main>
  );
};

export default Home;
