import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
interface SegmentsProps {
    
}
const Segments = () => {
  return (
    <IonSegment value="default">
      <IonSegmentButton value="default">
        <IonLabel>Default</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="segment">
        <IonLabel>Segment</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default Segments;
