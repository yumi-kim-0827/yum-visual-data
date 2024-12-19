import React, { useState } from "react";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Home = () => {
  const list1 = [
    { img: "😊 😃 😄 😁", text: "웃는 얼굴" },
    { img: "😄 😆 😅 😂 🤣", text: "크게 웃는 얼굴" },
    { img: "😊 😇 🙂 🙃", text: "미소짓는 얼굴" },
    { img: "😉 😌 😍 🥰", text: "눈웃음, 사랑" },
    { img: "😘 😗 😙 😚", text: "키스" },
    { img: "😜 😝 😛 😋", text: "장난스러운 얼굴" },
    { img: "🤔 🤨 😐 😑", text: "생각, 무표정" },
    { img: "😏 😒 🙄 😬", text: "의심, 짜증" },
    { img: "😔 😕 😢 😭", text: "슬픈 얼굴" },
    { img: "😡 😠 🤬 😤", text: "화난 얼굴" },
    { img: "🤗 🤭 🤫 🤔", text: "비밀스런 얼굴" },
  ];

  const list2 = [
    { img: "🐶 🐱 🐭 🐹", text: "개, 고양이, 쥐, 햄스터" },
    { img: "🐰 🦊 🐻 🐼", text: "토끼, 여우, 곰, 판다" },
    { img: "🐨 🐯 🦁 🐮", text: "코알라, 호랑이, 사자, 소" },
    { img: "🐷 🐸 🐵 🙈", text: "돼지, 개구리, 원숭이" },
    { img: "🦄 🐔 🦆 🦉", text: "유니콘, 닭, 오리, 부엉이" },
    { img: "🐍 🦖 🦕 🦧", text: "뱀, 공룡, 고릴라" },
  ];

  const list3 = [
    { img: "🌳 🌲 🌴 🎄", text: "나무, 야자수" },
    { img: "🌵 🌾 🌱 🌿", text: "선인장, 잔디" },
    { img: "🌷 🌼 🌻 🌺", text: "꽃, 해바라기" },
    { img: "🐷 🐸 🐵 🙈", text: "돼지, 개구리, 원숭이" },
    { img: "🦄 🐔 🦆 🦉", text: "유니콘, 닭, 오리, 부엉이" },
    { img: "🐚", text: "조개, 산호, 연꽃" },
  ];

  const list4 = [
    { img: "🚗 🚕 🚙 🚌", text: "자동차, 택시, 버스" },
    { img: "🚎 🚑 🚒 🚓", text: "트램, 구급차, 소방차, 경찰차" },
    { img: "🚲 🛵 🏍 🛴", text: "자전거, 스쿠터, 오토바이" },
    { img: "🚅 🚂 ✈️ 🚀", text: "기차, 비행기, 로켓" },
  ];

  const list5 = [
    { img: "⚽ 🏀 🏈 ⚾", text: "축구, 농구, 미식축구, 야구" },
    { img: "🎾 🏐 🏉 🎱", text: "테니스, 배구, 럭비, 당구" },
    { img: "🏓 🏸 🥅 🏒", text: "탁구, 배드민턴, 골대, 하키" },
    { img: "🏋️ 🏊 🚴 🏄", text: "역도, 수영, 자전거, 서핑" },
  ];

  const list6 = [
    { img: "📱 💻 🖥️ 🖨️", text: "스마트폰, 노트북, 데스크탑, 프린터" },
    { img: "⌨️ 🖱️ 🖲️ 🕹️", text: "키보드, 마우스, 조이스틱" },
    { img: "📡 📺 📟 📼", text: "안테나, TV, 호출기, 비디오테이프" },
  ];

  const list7 = [
    { img: "🏳️‍🌈 🏳️‍⚧️ 🏁 🏴", text: "무지개 깃발, 트랜스젠더 깃발, 체커 깃발" },
    { img: "🔔 🛎️ 🕰️ ⌛", text: "종, 타이머, 시계, 모래시계" },
    { img: "💡 🔦 🔋 🔌", text: "전구, 손전등, 배터리, 플러그" },
  ];

  return (
    <main className="w-full">
      <Fieldset legend="이모지 모음" className="w-full h-full overflow-y-auto">
        <Accordion activeIndex={0}>
          <AccordionTab header="😊 얼굴 이모지">
            <DataTable value={list1} tableStyle={{ minWidth: "50rem" }}>
              <Column field="img" header="이모지"></Column>
              <Column field="text" header="설명"></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="🐶 동물 이모지">
            <DataTable value={list2} tableStyle={{ minWidth: "50rem" }}>
              <Column field="img" header="이모지"></Column>
              <Column field="text" header="설명"></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="🌳 자연 이모지">
            <DataTable value={list3} tableStyle={{ minWidth: "50rem" }}>
              <Column field="img" header="이모지"></Column>
              <Column field="text" header="설명"></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="🚗 교통 이모지">
            <DataTable value={list4} tableStyle={{ minWidth: "50rem" }}>
              <Column field="img" header="이모지"></Column>
              <Column field="text" header="설명"></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="🎮 활동 및 스포츠 이모지">
            <DataTable value={list5} tableStyle={{ minWidth: "50rem" }}>
              <Column field="img" header="이모지"></Column>
              <Column field="text" header="설명"></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="💻 기술 이모지">
            <DataTable value={list6} tableStyle={{ minWidth: "50rem" }}>
              <Column field="img" header="이모지"></Column>
              <Column field="text" header="설명"></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="🏳️‍🌈 기타 이모지">
            <DataTable value={list7} tableStyle={{ minWidth: "50rem" }}>
              <Column field="img" header="이모지"></Column>
              <Column field="text" header="설명"></Column>
            </DataTable>
          </AccordionTab>
        </Accordion>
      </Fieldset>
    </main>
  );
};

export default Home;
