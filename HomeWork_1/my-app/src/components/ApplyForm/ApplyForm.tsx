import styles from './ApplyForm.module.scss'
import Button from '../Button/Button'
import { Formik, Form, Field } from 'formik';

const Applyform = () => {
    return (
        <Formik
            initialValues={{ name: '', age: '', city: '' }}
            validate={() => { }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values);
                    setSubmitting(false);
                }, 400);
            }}
        >
            {() => (
                <Form className={styles.mainForm}>
                    <label htmlFor="name">Name:
                        <Field id='name' name='name' />
                    </label>
                    <label htmlFor="age">Age:
                        <Field id='age' name='age' type='number'/>
                    </label>
                    <label htmlFor="city">City:
                        <Field id='city' name='city' component='select'>
                            <option value=""></option>
                            <option value="Kyiv">Kyiv</option>
                            <option value="Dnipro">Dnipro</option>
                        </Field>
                    </label>
                    <div className={styles.buttonRow}>
                        <Button title='Save' type='submit' styleType="approveButton" clickCallback={() => { }} />
                        <Button title='Reset' type='reset' styleType="cancelButton" clickCallback={() => { }} />
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Applyform;