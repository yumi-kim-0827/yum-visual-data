import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState({
    date: "",
    value: 0,
  });

  function formatDate(date) {
    if (!date) return;
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    ); // 로컬 타임존으로 변환
    const MM = String(localDate.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(localDate.getUTCDate()).padStart(2, "0");
    const YYYY = String(localDate.getUTCFullYear());

    return `${YYYY}-${MM}-${dd}`;
  }

  const onSubmit = () => {
    handleClickDataUpdate(data);
    setData({
      date: "",
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
      <div className="flex items-center gap-2">
        <Calendar
          value={data.date ? new Date(data.date) : null}
          onChange={(e) => {
            const formedDate = formatDate(e.value);
            setData((prev) => ({ ...prev, date: formedDate }));
          }}
        />
        <FloatLabel>
          <InputNumber
            inputId="integeronly"
            value={data.value}
            onChange={(e) => {
              setData((prev) => ({ ...prev, value: e.value }));
            }}
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
