import React, { useState } from "react";
//components
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Message } from "primereact/message";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

//타이틀, 위도 경도 입력
const MapLatLonInput = ({ handleClickDataUpdate, handleClickDataDelete }) => {
  //입력 데이터
  const [input, setInput] = useState({
    title: "",
    latitude: 0,
    longitude: 0,
  });

  console.log(input);

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (isNaN(input.latitude) || isNaN(input.longitude)) {
      alert("위도와 경도값은 숫자여야 합니다.");
    } else if (input.title === "") {
      alert("데이터명을 입력해주세요.");
    } else {
      handleClickDataUpdate({
        title: input.title,
        latitude: parseFloat(input.latitude),
        longitude: parseFloat(input.longitude),
      });
      console.log(input);
    }
    setInput({
      title: "",
      latitude: 0,
      longitude: 0,
    });
  };

  const onDelete = () => {
    handleClickDataDelete();
  };
  return (
    <>
      <Message
        text="하나의 데이터명과 데이터값을 입력 후 추가할 수 있습니다."
        className="mb-4"
      />
      <div className="flex gap-2">
        <FloatLabel>
          <InputText name="title" value={input.title} onChange={onChange} />
          <label htmlFor="username">나라 및 지역명</label>
        </FloatLabel>
        <FloatLabel>
          <InputText
            name="latitude"
            value={input.latitude}
            type="number"
            onChange={onChange}
          />
          <label htmlFor="latitude">위도 latitude값</label>
        </FloatLabel>
        <FloatLabel>
          <InputText
            name="longitude"
            value={input.longitude}
            type="number"
            onChange={onChange}
          />
          <label htmlFor="username">경도 longitude값</label>
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

export default MapLatLonInput;
