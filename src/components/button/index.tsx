import styles from './Button.module.css'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
   return (<button className={styles.buttonExp} {...props}/>)
}
