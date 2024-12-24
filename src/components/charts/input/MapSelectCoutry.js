import React, { useState, useEffect } from "react";
//components
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Message } from "primereact/message";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
//data
import nationIsoList from "@/src/data/wordlowlist";

const MapSelectCoutry = ({ handleClickDataUpdate, handleClickDataDelete }) => {
  const [selectedData, setSelectedData] = useState({
    id: "",
    name: "",
    value: null,
  });

  const onSubmit = () => {
    if (isNaN(selectedData.value)) {
      alert("입력값은 숫자여야 합니다.");
    } else if (!selectedData.value) {
      alert("수치를 입력해주세요");
    } else {
      handleClickDataUpdate(selectedData);
    }
    setSelectedData({
      id: "",
      name: "",
      value: null,
    });
  };

  const onDelete = () => {
    handleClickDataDelete();
  };

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
            value={selectedData.id} // 선택된 값의 ID를 설정
            onChange={(e) => {
              const selectedNation = nationIsoList.find(
                (nation) => nation.id === e.value
              ); // 선택된 나라를 찾음
              setSelectedData((prev) => ({
                ...prev,
                id: selectedNation.id,
                name: selectedNation.korean, // 한글 이름 저장
              }));
            }}
            options={nationIsoList}
            optionLabel="korean" // 드롭다운에 표시할 라벨
            optionValue="id" // 선택 시 반환할 값
            placeholder="나라를 선택하세요"
            className="flex-1"
          />
        </div>
        <FloatLabel>
          <InputNumber
            inputId="integeronly"
            name="value"
            value={selectedData.value}
            onChange={(e) => {
              setSelectedData((prev) => ({
                ...prev,
                value: e.value,
              }));
            }}
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
