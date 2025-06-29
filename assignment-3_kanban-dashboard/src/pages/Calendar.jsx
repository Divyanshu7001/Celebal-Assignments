import React from "react";
import { Header } from "../components";
import {
  ScheduleComponent,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  ViewsDirective,
  Agenda,
  Inject,
  Month,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import { scheduleData } from "../data/dummy";

const Calendar = () => {
  return(
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Calendar" />
      <div className="w-full">
        <ScheduleComponent
          height="650px"
          selectedDate={new Date(2021,0,10)}
          eventSettings={{ dataSource: scheduleData }}
          allowResizing={true}
          allowDragAndDrop={true}
        >
          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective option="WorkWeek" />
            <ViewDirective option="Month" />
            <ViewDirective option="Agenda" />
          </ViewsDirective>
          <DatePickerComponent
            id="datepicker"
            placeholder="Select a date"
            floatLabelType="Auto"
            width="250px"/>
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calendar;
