import { coursesCompleted } from "@/mocks";
import CardCourse from "./CardCourse";
import Placeholder from "@/components/atoms/Placeholder";
import { ReactElement, useEffect, useState } from "react";
import { CourseType } from "@/types/course";
interface TabCompletedProps {
  search: string;
}
const TabCompleted: React.FC<TabCompletedProps> = ({ search }) => {
  const [filters, setFilters] = useState(coursesCompleted);
  const onFilter = () => {
    const filter = coursesCompleted.filter((course) =>
      `${course.title ?? ""} ${course?.teacher ?? ""}`
        .trim()
        .toLowerCase()
        .includes(search?.trim()?.toLowerCase())
    );
    setFilters(filter);
  };
  useEffect(() => {
    onFilter();
  }, [search]);
  return (
    <>
      {filters.length ? (
        filters.map((course) => (
          <CardCourse key={course.id} {...course} type="COMPLETED" />
        ))
      ) : (
        <Placeholder
          klass="h-[55vh] w-full"
          klassImage="w-[180px] aspect-auto h-[100px]"
          img="../assets/img/empty.png"
          title="No se han encontrado resultados"
          description="¡Intentalo nuevamente!"
        />
      )}
    </>
  );
};

export default TabCompleted;
