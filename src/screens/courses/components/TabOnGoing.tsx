import { courses } from "@/mocks";
import CardCourse from "./CardCourse";
import Placeholder from "@/components/atoms/Placeholder";
import { useEffect, useState } from "react";

interface TabOnGoingProps {
  search: string;
}
const TabOnGoing: React.FC<TabOnGoingProps> = ({ search }) => {
  const [filters, setFilters] = useState(courses);
  const onFilter = () => {
    const filter = courses.filter((course) =>
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
        filters.map((course) => <CardCourse key={course.id} {...course} />)
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

export default TabOnGoing;
