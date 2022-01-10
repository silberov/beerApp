import { Wraper } from "./styles";

export type yeastProps = {
    yeast: string;
    temperature: {
      value: number;
      unit: string;
  }
  };
  
  const Yeast = ({yeast, temperature}:yeastProps): JSX.Element => {
    return (
      <Wraper>
         YEAST
      </Wraper>
    );
  };
  
  export default Yeast;
  