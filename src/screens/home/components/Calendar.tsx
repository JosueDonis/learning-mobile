import { meetings } from "@/mocks";
import { IonAvatar, IonIcon } from "@ionic/react";
import { calendarOutline } from "ionicons/icons";
import CardCalendar from "./CardCalendar";

interface CalendarProps {
  klass?: string;
}
const Calendar: React.FC<CalendarProps> = ({ klass }) => {
  const today = new Date();

  return (
    <div className="flex flex-col mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-poppins text-lg font-bold">
          <span className="capitalize">
            {today.toLocaleDateString("es-ES", {
              weekday: "long",
            })}
          </span>
          {`, ${today.toLocaleDateString("es-ES", {
            day: "2-digit",
          })} de `}
          <span className="capitalize">
            {today.toLocaleDateString("es-ES", { month: "long" })}
          </span>
        </h2>
        <div className="flex p-3 rounded-lg bg-light-shade text-2xl">
          <IonIcon src="../assets/icons/today.svg" />
        </div>
      </div>
      {meetings.map(
        ({ id, klass, title, description, date, endDate, users }) => (
          <CardCalendar
            key={id}
            klass={klass}
            title={title}
            description={description}
            date={date}
            endDate={endDate}
            users={users}
          />
        )
      )}
    </div>
  );
};

export default Calendar;
