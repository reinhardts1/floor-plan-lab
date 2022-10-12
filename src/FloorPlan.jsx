import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  return (
    <>
      <Bedroom bedNum={1}/>
      <Kitchen />
      <Bath size={'Half'}/>
      <LivingRoom />
      <Bedroom bedNum={2}/>
      <Bath size={'Full'}/>
      <Bedroom bedNum={3}/>
      <Bath size={'Full'}/>
    </>
  );
}

export default FloorPlan;