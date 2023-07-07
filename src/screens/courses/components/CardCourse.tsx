import { Button } from "@/components/atoms";
import { IonChip, IonIcon } from "@ionic/react";
import { eyeOutline, person } from "ionicons/icons";

interface CardCourseProps {
  id?: string;
  title?: string;
  teacher?: string;
  tags?: string[];
  progress?: string;
  lessons?: number;
  totalLessons?: number;
  dueDate?: Date;
  picture?: string;
  type?: "ON_GOING" | "COMPLETED";
}
const CardCourse: React.FC<CardCourseProps> = ({
  id,
  title,
  teacher,
  tags,
  progress,
  lessons,
  totalLessons,
  dueDate,
  picture,
  type = "ON_GOING",
}) => {
  return (
    <div className="grid my-2  bg-card border-1 border-medium border-solid shadow-sm rounded-xl p-4 h-fit">
      <div className="flex gap-4">
        <picture className="max-w-[100px] relative">
          <img
          loading="lazy"
            className="w-full aspect-[10/10] h-full rounded object-cover"
            src={picture}
            alt=""
          />
        </picture>
        <div className="flex flex-col">
          <h2 className="text-sm font-bold mb-2">{title}</h2>
          <div className="flex items-center text-gray gap-2 text-xs">
            <IonIcon icon={person} />
            <p>{teacher}</p>
          </div>
          <div className="mt-2 flex flex-wrap">
            {tags?.map((tag) => (
              <IonChip
                key={tag}
                color="medium"
                className="text-[8px] h-fit p-2 m-1"
              >
                {tag}
              </IonChip>
            ))}
          </div>
        </div>
      </div>
      {type === "ON_GOING" ? (
        <>
          <div className="grid grid-cols-2 gap-1 items-center mt-2">
            <div className="text-[10px]">
              <p className="text-gray">Progreso</p>
              <p className="">
                {lessons}/{totalLessons} lecciones
              </p>
            </div>
            <div className="text-[10px]">
              <p className="text-gray">Última fecha</p>
              <p className="">
                {dueDate?.toLocaleDateString("es", {
                  day: "2-digit",
                  year: "numeric",
                  month: "long",
                })}
              </p>
            </div>
          </div>
          <div className="w-[100%] rounded-full bg-light mt-4 h-fit">
            <div
              style={{ width: progress }}
              className={`col-span-full h-3 rounded-full bg-[#01CDB2]`}
            ></div>
          </div>
        </>
      ) : (
        <div className="w-full flex items-center mt-3 justify-end">
          <Button label="Obtener certificado" klass="bg-tertiary-item h-[40px] !text-dark text-xs rounded-full" />
        </div>
      )}
    </div>
  );
};

export default CardCourse;
