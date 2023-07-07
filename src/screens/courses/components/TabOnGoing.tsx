import { courses } from "@/mocks";
import CardCourse from "./CardCourse";
import Placeholder from "@/components/atoms/Placeholder";

interface TabOnGoingProps {
  search: string;
}
const TabOnGoing: React.FC<TabOnGoingProps> = ({ search }) => {
  const onFilter = () => {
    const filter = courses.filter((course) =>
      `${course.title ?? ""} ${course?.teacher ?? ""}`
        .trim()
        .toLowerCase()
        .includes(search?.trim()?.toLowerCase())
    );
    return filter.length ? (
      filter.map((course) => <CardCourse key={course.id} {...course} />)
    ) : (
      <Placeholder
        klass="h-[55vh] w-full"
        klassImage="w-[180px] aspect-auto h-[100px]"
        img="../assets/img/empty.png"
        title="No se han encontrado resultados"
        description="¡Intentalo nuevamente!"
      />
    );
  };

  return onFilter();
};

export default TabOnGoing;
