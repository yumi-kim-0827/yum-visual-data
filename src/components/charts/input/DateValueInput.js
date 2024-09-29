import React, { useState } from "react";
//components
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { Message } from "primereact/message";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

export default function DateValueInput({
  handleClickDataUpdate,
  handleClickDataDelete,
}) {
  const [date, setDate] = useState(null);
  const [input, setInput] = useState(null);

  function formatDate(date) {
    if (!date) return;
    const MM = String(date.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(date.getUTCDate()).padStart(2, "0");
    const YYYY = String(date.getUTCFullYear());

    return `${YYYY}-${MM}-${dd}`;
  }
  console.log(formatDate(date));

  const onChange = (e) => {};

  const onSubmit = () => {};

  const onDelete = () => {
    handleClickDataDelete();
  };

  return (
    <>
      <div className="flex gap-2">
        <Message text="날짜별 데이터 수치를 입력합니다." className="mb-4" />
        <Message text="날짜는 1일씩 연속해야합니다." className="mb-4" />
      </div>
      <div className="flex items-center gap-2">
        <Calendar value={date} onChange={(e) => setDate(e.value)} />
        <FloatLabel>
          <InputNumber
            inputId="integeronly"
            value={input}
            onValueChange={(e) => onChange(e.value)}
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
