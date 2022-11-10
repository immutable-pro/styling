import clsx from 'clsx'
import './style.css'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
   return (<button className={clsx("button-exp")} {...props}/>)
}
