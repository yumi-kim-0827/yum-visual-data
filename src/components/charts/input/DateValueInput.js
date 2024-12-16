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
    value: null,
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
    if (data.value === null) {
      alert("데이터 값을 입력해주세요.");
    } else {
      handleClickDataUpdate(data);
    }
    setData({
      date: "",
      value: null,
    });
  };

  const onDelete = () => {
    handleClickDataDelete();
  };

  return (
    <>
      <div className="flex flex-col gap-2 mb-4">
        <Message text="날짜별 데이터 수치를 입력합니다." />
        <Message text="날짜는 1일씩 연속해야합니다." />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <label>일자 선택</label>
          <Calendar
            value={data.date ? new Date(data.date) : null}
            onChange={(e) => {
              const formedDate = formatDate(e.value);
              setData((prev) => ({ ...prev, date: formedDate }));
            }}
            showIcon
            className="flex-1"
          />
        </div>
        <FloatLabel>
          <InputNumber
            inputId="integeronly"
            value={data.value}
            onChange={(e) => {
              setData((prev) => ({ ...prev, value: e.value }));
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
}
