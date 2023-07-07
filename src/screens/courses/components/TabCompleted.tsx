import { coursesCompleted } from "@/mocks";
import CardCourse from "./CardCourse";
import Placeholder from "@/components/atoms/Placeholder";
interface TabCompletedProps {
  search: string;
}
const TabCompleted: React.FC<TabCompletedProps> = ({ search }) => {
  const onFilter = () => {
    const filter = coursesCompleted.filter((course) =>
      `${course.title ?? ""} ${course?.teacher ?? ""}`
        .trim()
        .toLowerCase()
        .includes(search?.trim()?.toLowerCase())
    );
    return filter.length ? (
      filter.map((course) => <CardCourse key={course.id} {...course} type="COMPLETED" />)
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

export default TabCompleted;
