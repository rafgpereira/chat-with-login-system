import styles from './InputForm.module.css'

function InputForm({type, placeholder, name, text, handleOnChange, value}){

    return (
        <div className={styles.input}>
            <label htmlFor={name}>{text}</label>
            <input type={type} placeholder={placeholder} name={name} id={name} onChange={handleOnChange} value={value}></input>
        </div>

    )

}
export default InputForm