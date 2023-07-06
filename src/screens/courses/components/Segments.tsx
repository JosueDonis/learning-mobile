import { SegmentType } from "@/types/elements";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
interface SegmentsProps {
  value?: string;
  onChange?: (value?: string) => void;
  segments?: SegmentType[];
}
const Segments: React.FC<SegmentsProps> = ({ value, onChange, segments }) => {
  return (
    <IonSegment className="learning-segment" value={value} mode="ios" onIonChange={(e) => {
        onChange && onChange(e?.detail?.value as string);
    }}>
      {segments?.map(({ value, label }) => (
        <IonSegmentButton key={value} value={value}>
          <IonLabel>{label}</IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  );
};

export default Segments;
