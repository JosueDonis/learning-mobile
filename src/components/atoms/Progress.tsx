import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressProps {
  klass?: string;
  value: number;
  total?: number;
  title?: string;
  description?: string;
  color?: "primary" | "secondary" | "tertiary";
  type?: "progress" | "average";
}

const Progress: React.FC<ProgressProps> = ({
  klass,
  value = 0,
  total,
  title,
  description,
  type = "average",
  color = "primary",
}) => {
  const colors = {
    primary: {
      pathColor: "#4C3BAE",
      backgroundColor: "#27187e",
    },
    secondary: {
      pathColor: "#8196FF",
      backgroundColor: "#758bfd",
    },
    tertiary: {
      pathColor: "#BBC2FF",
      backgroundColor: "#aeb8fe",
    },
  };
  return (
    <div className={`flex flex-col h-50 p-4 rounded-xl bg-primary ${klass}`}>
      <div className="flex w-20 h-20 mb-4">
        <CircularProgressbar
          value={value}
          text={type === "average" ? `${value}/${total}`: `${value}%`}
          background={false}
          className="font-poppins"
          styles={buildStyles({
            strokeLinecap: "round",
            pathColor: colors[color].pathColor,
            textColor: "white",
            trailColor: colors[color].backgroundColor,
            backgroundColor: colors[color].backgroundColor,
            textSize: "14px",
          })}
        />
      </div>
      <div className="text-white font-poppins flex flex-col gap-1">
        <h2 className="text-sm font-bold">{title}</h2>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default Progress;
