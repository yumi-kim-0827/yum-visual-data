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
    { img: "", text: "" },
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
          <AccordionTab header="Header II">
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </AccordionTab>
          <AccordionTab header="Header III">
            <p className="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </AccordionTab>
        </Accordion>
      </Fieldset>
    </main>
  );
};

export default Home;
