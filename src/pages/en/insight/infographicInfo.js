import React, { useRef } from "react";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Tooltip } from "primereact/tooltip";

const Home = () => {
  const stepperRef = useRef(null);

  return (
    <main className="w-full">
      <Fieldset
        legend="What is infographics?"
        className="w-full h-full overflow-y-auto"
      >
        <h2>Visualize Complex Data at a Glance!</h2>
        <div className="p-2">
          <Image
            src="/images/img_info1.png" // public 폴더 내 경로
            alt="My Image"
            width={300} // 이미지의 너비
            height={300} // 이미지의 높이
            layout="responsive"
          />
        </div>
        <Panel header="definition">
          <p className="m-0">
            Infographic is a compound of Information and Graphics, designed to
            visually present complex data for easy understanding.
          </p>
          <p className="m-0">
            Instead of listing data as plain text, it focuses on effectively
            delivering information using charts, icons, images, and colors.
          </p>
        </Panel>
        <h2>What Are the Main Goals of Infographics?</h2>
        <Card>
          <Stepper ref={stepperRef} style={{ flexBasis: "50rem" }}>
            <StepperPanel header="Simplification of information">
              <div className="flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                  Visual representation of complex data helps in easy
                  understanding.
                </div>
              </div>
            </StepperPanel>
            <StepperPanel header="get attention">
              <div className="flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                  Colors, layouts, and graphics attract attention and deliver
                  messages effectively.
                </div>
              </div>
            </StepperPanel>
            <StepperPanel header="Strengthen your memory">
              <div className="flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                  Visual materials tend to stay longer in memory than text.
                </div>
              </div>
            </StepperPanel>
          </Stepper>
        </Card>
        <h2>What Are Infographics Made Of?</h2>
        <Panel header="Infographics">
          <div className="flex justify-center gap-2">
            <Tooltip target=".inforound1" />
            <div
              className="inforound1 flex flex-col justify-center items-center w-[220px] h-[220px] rounded-full bg-sky-900 text-white border-2 border-dotted"
              data-pr-tooltip="Key information or statistics you want to convey."
              data-pr-position="top"
            >
              <span>Data</span>
            </div>
            <Tooltip target=".inforound2" />
            <div
              className="inforound2 flex flex-col justify-center items-center w-[220px] h-[220px] rounded-full bg-zinc-800 text-white border-2 border-dotted"
              data-pr-tooltip="Visual expressions such as colors, icons, and illustrations."
              data-pr-position="top"
            >
              <span>Design Elements</span>
            </div>
            <Tooltip target=".inforound3" />
            <div
              className="inforound3 flex flex-col justify-center items-center w-[220px] h-[220px] rounded-full bg-stone-700 text-white border-2 border-dotted"
              data-pr-tooltip="A flow that conveys information naturally."
              data-pr-position="top"
            >
              <span>Storytelling</span>
            </div>
          </div>
        </Panel>
        <h2>Types of Infographics</h2>
        <div className="grid grid-cols-5 gap-4">
          <Card>
            <i className="pi pi-chart-bar" style={{ fontSize: "1.5rem" }}></i>
            <h4>Statistical</h4>
            <p>
              Graphics emphasizing data or numbers. E.g., market analysis, sales
              performance.
            </p>
          </Card>
          <Card>
            <i
              className="pi pi-sort-amount-down"
              style={{ fontSize: "1.5rem" }}
            ></i>
            <h4>Process</h4>
            <p>
              Visual representation of processes or steps. E.g., product
              development, problem-solving steps.
            </p>
          </Card>
          <Card>
            <i className="pi pi-book" style={{ fontSize: "1.5rem" }}></i>
            <h4>Informational</h4>
            <p>
              A format with a balanced layout of text and graphics. E.g.,
              historical summaries, educational materials.
            </p>
          </Card>
          <Card>
            <i className="pi pi-chart-line" style={{ fontSize: "1.5rem" }}></i>
            <h4>Timeline</h4>
            <p>
              Events listed in chronological order. E.g., history of technology,
              project schedules.
            </p>
          </Card>
          <Card>
            <i
              className="pi pi-angle-double-left"
              style={{ fontSize: "1.5rem" }}
            ></i>
            <h4>Comparative</h4>
            <p>
              Visual representation of comparisons. E.g., product comparisons,
              competitor analysis.
            </p>
          </Card>
        </div>
      </Fieldset>
    </main>
  );
};

export default Home;
