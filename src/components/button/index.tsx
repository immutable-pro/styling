import { buttonStyle } from "./style.css"

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
   return (<button className={buttonStyle} {...props}/>)
}

