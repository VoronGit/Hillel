import styles from "./Button.module.scss";

interface ButtonProps {
    title: string,
    type: any,
    styleType: string,
    clickCallback: any
}

const Button = ({title,type,styleType,clickCallback}:ButtonProps) => {
    return <button type={type} style={styles} className={styles[styleType]} onClick={clickCallback}><span>{title}</span></button>
}

export default Button;