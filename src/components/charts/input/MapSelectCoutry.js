import React, { useState } from "react";
//components
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Message } from "primereact/message";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
//data
import nationIsoList from "@/src/data/wordlowlist";

const MapSelectCoutry = () => {
  const [selectedNation, setSelectedNation] = useState(null);
  //입력 데이터
  const [input, setInput] = useState(null);

  console.log(input);

  const onChange = (e) => {
    setInput(e.value);
  };

  const onSubmit = () => {
    if (isNaN(input.value)) {
      alert("입력값은 숫자여야 합니다.");
    } else if (input.category === "") {
      alert("데이터명을 입력해주세요.");
    } else {
      handleClickDataUpdate(input);
    }
    setInput({
      category: "",
      value: 0,
    });
  };

  const onDelete = () => {
    handleClickDataDelete();
  };
  console.log(nationIsoList);
  return (
    <>
      <div className="flex flex-col gap-2 mb-4">
        <Message text="표시할 나라를 선택합니다." />
        <Message text="선택한 나라의 데이터 숫자를 입력합니다." />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <label>나라 선택</label>
          <Dropdown
            value={selectedNation}
            onChange={(e) => setSelectedNation(e.value)}
            options={nationIsoList}
            optionLabel="korean"
            placeholder="Select a City"
            className="flex-1"
          />
        </div>
        <FloatLabel>
          <InputNumber
            inputId="integeronly"
            value={input}
            onChange={onChange}
            className="w-full"
          />
          <label htmlFor="username">데이터값</label>
        </FloatLabel>
        <Button
          label="데이터 추가"
          icon="pi pi-plus-circle"
          onClick={onSubmit}
        />
        <Button
          label="마지막 데이터 삭제"
          severity="info"
          icon="pi pi-trash"
          onClick={onDelete}
        />
      </div>
    </>
  );
};

export default MapSelectCoutry;
