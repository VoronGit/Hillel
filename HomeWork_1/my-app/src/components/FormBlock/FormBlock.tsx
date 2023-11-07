import styles from "./FormBlock.module.scss";

const FormBlock = ({children}:{children:any}) => {
    return <form className={styles.mainForm}>{children}</form>
}

export default FormBlock;