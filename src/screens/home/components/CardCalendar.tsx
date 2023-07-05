import { IonAvatar } from "@ionic/react";

interface CardCalendarProps {
  id?: string;
  klass?: string;
  klassText?: string;
  title?: string;
  description?: string;
  users?: string[];
  date?: Date;
  endDate?: Date;
}
const CardCalendar: React.FC<CardCalendarProps> = ({
  klass,
  klassText,
  title,
  description,
  users,
  date,
  endDate,
}) => {
  return (
    <div className="grid grid-cols-[80px,1fr] justify-start mb-4">
      <p className="text-xs font-bold uppercase">
        {date?.toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </p>
      <div className={`flex flex-col rounded-lg p-4 ${klass}`}>
        <h2 className="text-sm font-bold">{title}</h2>
        <span className="text-[12px]">{description}</span>
        <div className="flex mt-2 items-center justify-between">
          <div className="flex -space-x-2 overflow-hidde">
            {users?.map((user) => (
              <img
                key={user}
                className="inline-block h-8 w-8 rounded-full"
                src={user}
                alt={user}
              />
            ))}
          </div>
          <p className="text-xs uppercase">
            {`${date?.toLocaleTimeString("es-ES", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })} - ${endDate?.toLocaleTimeString("es-ES", {
              hour: "2-digit",
              hour12: true,
              minute: "2-digit",
            })}`}
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCalendar;
