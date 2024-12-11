import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
//components
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";

// 클라이언트 사이드에서만 렌더링하도록 설정
const GradientChart = dynamic(
  () => import("@/src/components/charts/pie/GradientChart"),
  {
    ssr: false,
  }
);

export default function Home() {
  const stepperRef = useRef(null);

  return (
    <main className="w-full">
      <Fieldset
        legend="Create Infographics"
        className="w-full h-full overflow-y-auto"
      >
        <div className="flex items-center justify-between">
          <div className="w-1/3">
            <h2 className="text-5xl">
              Visualize data on graphs and maps without the need to log in, and
              make better decisions.
            </h2>
            <p className="text-2xl">
              Simply input your data and see it rendered on intuitive graphs and
              maps. Leverage visualized infographics to your advantage.
            </p>
            <Button
              label="Generate Graphs"
              icon="pi pi-arrow-right"
              iconPos="right"
              size="small"
              rounded
            />
          </div>
          <div className="flex-1">
            <GradientChart
              myData={[
                { category: "John", value: 14.3 },
                { category: "Sarah", value: 12.9 },
                { category: "Emily", value: 21.01 },
                { category: "Michael", value: 22 },
              ]}
            />
          </div>
        </div>
        <div className="my-40">
          <h2 className="text-center">Graph Types</h2>
          <p className="text-center">
            Graphs are powerful tools for visually representing data, helping
            you analyze and gain insights. The type of graph you choose can vary
            depending on the nature of the data and the purpose of your
            analysis.
          </p>
          <div>
            <ul className="grid grid-cols-4 items-stretch gap-2">
              <li>
                <Card title="(Line Chart)" className="h-full">
                  <Image
                    src="/images/img_graph1.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={300} // 이미지의 높이
                    layout="responsive"
                  />
                  <strong className="block text-lg">
                    Used to visualize changes or trends over time.
                  </strong>
                  <p>
                    Features: Data points are plotted and connected with lines
                    to show the flow of changes.
                  </p>
                  <span className="text-sm">
                    Examples: Stock price changes, temperature fluctuations
                  </span>
                </Card>
              </li>
              <li>
                <Card title="(Bar Chart)" className="h-full">
                  <Image
                    src="/images/img_graph2.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={300} // 이미지의 높이
                    layout="responsive"
                  />
                  <strong className="block text-lg">
                    Used to compare values across categories.
                  </strong>
                  <p>
                    Features: The length of the bars represents the size of each
                    category. Includes horizontal and vertical bar charts.
                  </p>
                  <span className="text-sm">
                    Examples: Population by country, revenue by year
                  </span>
                </Card>
              </li>
              <li>
                <Card title="(Map Chart)" className="h-full">
                  <Image
                    src="/images/img_graph3.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={300} // 이미지의 높이
                    layout="responsive"
                  />
                  <strong className="block text-lg">
                    Used to visualize geographical data.
                  </strong>
                  <p>
                    Features: Displays data on a map to provide a visual
                    representation of regional information.
                  </p>
                  <span className="text-sm">
                    Examples: Population by country, sales distribution
                  </span>
                </Card>
              </li>
              <li>
                <Card title="(Pie Chart)" className="h-full">
                  <Image
                    src="/images/img_graph4.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={300} // 이미지의 높이
                    layout="responsive"
                  />
                  <strong className="block text-lg">
                    Used to show the proportion of each item relative to the
                    whole.
                  </strong>
                  <p>
                    Features: Represents proportions with segment sizes in a
                    circular chart.
                  </p>
                  <span className="text-sm">
                    Examples: Market share, budget allocation
                  </span>
                </Card>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>How to Visualize Graphs on This Site</h2>
          <Stepper ref={stepperRef}>
            <StepperPanel header="Input Data">
              <div className="p-2 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
                <div className="w-1/3">
                  <Image
                    src="/images/howto1.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={2} // 이미지의 높이
                    layout="responsive"
                  />
                </div>
                <div className="flex-1">
                  <strong className="block text-lg">Input Data</strong>
                  <p>
                    Enter the dataset name and corresponding values required to
                    create the chart.
                  </p>
                  <p>
                    When inputting multiple datasets, add one dataset, click
                    &#40;Add Data,&#41; and then input the next dataset.
                  </p>
                  <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    onClick={() => stepperRef.current.nextCallback()}
                  />
                </div>
              </div>
            </StepperPanel>
            <StepperPanel header="Generate Graph">
              <div className="p-2 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
                <div className="w-1/3">
                  <Image
                    src="/images/howto2.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={2} // 이미지의 높이
                    layout="responsive"
                  />
                </div>
                <div className="flex-1">
                  <strong className="block text-lg">Generate Graph</strong>
                  <p>
                    The chart will be created in the order of the inputted
                    [Dataset - Value] pairs.
                  </p>
                  <p>
                    When inputting multiple datasets, the chart will be
                    generated based on the sequence of dataset names and their
                    respective values.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      label="Back"
                      severity="secondary"
                      icon="pi pi-arrow-left"
                      onClick={() => stepperRef.current.prevCallback()}
                    />
                    <Button
                      label="Next"
                      icon="pi pi-arrow-right"
                      iconPos="right"
                      onClick={() => stepperRef.current.nextCallback()}
                    />
                  </div>
                </div>
              </div>
            </StepperPanel>
            <StepperPanel header="Delete Data">
              <div className="p-2 flex gap-4 items-center border-1 border-blue-400 rounded-md  overflow-hidden">
                <div className="w-1/3">
                  <Image
                    src="/images/howto3.png" // public 폴더 내 경로
                    alt="My Image"
                    width={300} // 이미지의 너비
                    height={2} // 이미지의 높이
                    layout="responsive"
                  />
                </div>
                <div className="flex-1">
                  <strong className="block text-lg">Delete Data</strong>
                  <p> You can remove the most recently added dataset.</p>
                  <p>
                    Clicking the &#40;Delete Last Data&#41; button will delete
                    the latest dataset, allowing you to modify the chart
                    accordingly.
                  </p>
                  <Button
                    label="Back"
                    severity="secondary"
                    icon="pi pi-arrow-left"
                    onClick={() => stepperRef.current.prevCallback()}
                  />
                </div>
              </div>
            </StepperPanel>
          </Stepper>
        </div>
      </Fieldset>
    </main>
  );
}
