import { IonChip, IonIcon } from "@ionic/react";
import { person } from "ionicons/icons";

interface CardCourse {
  id?: string;
}
const CardCourse = () => {
  return (
    <div className="grid gap-4 bg-card border-1 border-medium border-solid shadow-sm rounded-xl p-4 flex-col w-full">
      <div className="grid grid-cols-[100px_1fr] gap-6 w-full">
        <picture className="max-w-[100px] relative">
          <img
            className="w-full aspect-[10/10] h-full rounded object-cover"
            src="../assets/img/teacher.jfif"
            alt=""
          />
        </picture>
        <div className="flex flex-col w-full">
          <h2 className="text-sm font-bold mb-2">Fundamentos de algebra</h2>
          <div className="flex items-center text-gray gap-2 text-xs">
            <IonIcon icon={person} />
            <p>Daniel Pérez</p>
          </div>
          <div className="flex flex-auto flex-wrap mt-2">
            <IonChip color="medium" className="text-[10px]">
              Matemáticas
            </IonChip>
            <IonChip color="medium" className="text-[10px]">
              Algebra
            </IonChip>
            <IonChip color="medium" className="text-[10px]">
              Principiantes
            </IonChip>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 h-auto grid-rows-3 gap-1">
        <p className="text-[10px] text-gray self-end">Progreso</p>
        <p className="text-[10px] text-gray self-end">Última fecha</p>
        <p className="text-[10px]">20/29 lecciones</p>
          <p className="text-[10px]">
            {new Date().toLocaleDateString("es", {
              day: "2-digit",
              year: "numeric",
              month: "long",
              
            })}
          </p>
        <div className="w-[100%] col-span-full rounded-full bg-light flex items-center mt-4">
            <div className="w-[70%] col-span-full h-3 rounded-full bg-[#01CDB2]"></div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
