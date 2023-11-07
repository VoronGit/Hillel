import styles from './ApplyForm.module.scss'
import Button from '../Button/Button'
import FormBlock from '../FormBlock/FormBlock'
import Input from '../Input/Input'

const Applyform = () => {
    return (
    <FormBlock>
        <Input label='Name:' type='text' placeholder='Ivan' onChangeCallback={(e:any) => {console.log(e.target.value)}}/>
        <div className={styles.buttonRow}>
            <Button title='Save' type="approveButton" clickCallback={(event: any) => { event?.preventDefault(); console.log('Save pressed') }} />
            <Button title='Reset' type="cancelButton" clickCallback={(event: any) => { event?.preventDefault(); console.log('Reset pressed') }} />
        </div>
    </FormBlock>
    )
}

export default Applyform;