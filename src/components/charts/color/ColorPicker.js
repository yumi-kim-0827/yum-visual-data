import React from "react";
//components
import { Card } from "primereact/card";

const ColorPicker = ({ handleSelectTheme }) => {
  return (
    <Card>
      <p>색상 테마 선택</p>
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
      </div>
    </Card>
  );
};

export default ColorPicker;
