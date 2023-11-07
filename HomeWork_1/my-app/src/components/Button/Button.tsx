import styles from "./Button.module.scss";

interface ButtonProps {
    title: string,
    type: string,
    clickCallback: any
}

const Button = ({title,type,clickCallback}:ButtonProps) => {
    return <button className={styles[type]} onClick={clickCallback}><span>{title}</span></button>
}

export default Button;