import React, { useState } from "react";
//components
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

export default function BasicInput({
  handleClickDataUpdate,
  handleClickDataDelete,
}) {
  //입력 데이터
  const [input, setInput] = useState({
    category: "",
    value: 0,
  });

  console.log(input);

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
      <Message
        text="하나의 데이터명과 데이터값을 입력 후 추가할 수 있습니다."
        className="mb-4"
      />
      <div className="flex gap-2">
        <FloatLabel>
          <InputText
            name="category"
            value={input.category}
            onChange={onChange}
          />
          <label htmlFor="username">데이터명</label>
        </FloatLabel>
        <FloatLabel>
          <InputText name="value" value={input.value} onChange={onChange} />
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
