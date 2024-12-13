import React from "react";
//components
import { Card } from "primereact/card";

const ColorPicker = ({ handleSelectTheme }) => {
  return (
    <Card
      pt={{
        root: { style: { marginBottom: "1rem" } },
        body: { style: { padding: "0.625rem", backgroundColor: "#f7f7f7" } },
        content: { style: { padding: "0" } },
      }}
    >
      <p className="m-0 text-neutral-700 font-bold">색상 테마 선택</p>
      <div className="theme-list p-2 flex gap-2">
        <span
          className="theme-1"
          onClick={() => {
            handleSelectTheme("1");
          }}
        ></span>
        <span
          className="theme-2"
          onClick={() => {
            handleSelectTheme("2");
          }}
        ></span>
        <span
          className="theme-3"
          onClick={() => {
            handleSelectTheme("3");
          }}
        ></span>
        <span
          className="theme-4"
          onClick={() => {
            handleSelectTheme("4");
          }}
        ></span>
        <span
          className="theme-5"
          onClick={() => {
            handleSelectTheme("5");
          }}
        ></span>
        <span
          className="theme-6"
          onClick={() => {
            handleSelectTheme("6");
          }}
        ></span>
        <span
          className="theme-15"
          onClick={() => {
            handleSelectTheme("15");
          }}
        ></span>
        <span
          className="theme-7"
          onClick={() => {
            handleSelectTheme("7");
          }}
        ></span>
        <span
          className="theme-8"
          onClick={() => {
            handleSelectTheme("8");
          }}
        ></span>
        <span
          className="theme-9"
          onClick={() => {
            handleSelectTheme("9");
          }}
        ></span>
        <span
          className="theme-10"
          onClick={() => {
            handleSelectTheme("10");
          }}
        ></span>
        <span
          className="theme-11"
          onClick={() => {
            handleSelectTheme("11");
          }}
        ></span>
        <span
          className="theme-12"
          onClick={() => {
            handleSelectTheme("12");
          }}
        ></span>
        <span
          className="theme-13"
          onClick={() => {
            handleSelectTheme("13");
          }}
        ></span>
        <span
          className="theme-14"
          onClick={() => {
            handleSelectTheme("14");
          }}
        ></span>
      </div>
    </Card>
  );
};

export default ColorPicker;
