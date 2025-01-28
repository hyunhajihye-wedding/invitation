import ComponentWrapper from "./ComponentWrapper";
import CommonHeader from "./CommonHeader";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import CalendarWrapper from "./CalendarWrapper";

const CalendarComponent = () => {
  const WEDDING_DATE = new Date(2025, 4, 18);

  return (
    <ComponentWrapper>
      <CommonHeader title="예식 일시" />
      <CalendarWrapper>
        <DayPicker
          className={{ disabled: "day-disabled" }}
          mode="single"
          selected={WEDDING_DATE}
          defaultMonth={WEDDING_DATE}
          hideNavigation
        />
      </CalendarWrapper>
    </ComponentWrapper>
  );
};

export default CalendarComponent;
