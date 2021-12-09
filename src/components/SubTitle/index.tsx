import { Wraper } from "./styles";


export interface SubTitleProps {
    text: string;
    isDark: boolean;
    amount?: string;
  };

const SubTitle = ({text, isDark, amount}:SubTitleProps): JSX.Element => {
return (
    <Wraper isDark={isDark ? true : false} >
        <p>{text}</p>
        <input>{amount}</input>
    </Wraper>
    );
}

export default SubTitle;