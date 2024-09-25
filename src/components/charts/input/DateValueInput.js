import React, { useState } from "react";
//components
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

export default function DateValueInput({
  handleClickDataUpdate,
  handleClickDataDelete,
}) {
  const [date, setDate] = useState(null);
  console.log(date);
  //입력 데이터
  const [input, setInput] = useState({
    category: "",
    value: 0,
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
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

  return (
    <>
      <div className="flex gap-2">
        <Message text="날짜별 데이터 수치를 입력합니다." className="mb-4" />
        <Message text="날짜는 1일씩 연속해야합니다." className="mb-4" />
      </div>
      <div className="flex gap-2">
        <Calendar value={date} onChange={(e) => setDate(e.value)} />
        <FloatLabel>
          <InputText
            id="username"
            name="value"
            value={input.value}
            onChange={onChange}
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
}
