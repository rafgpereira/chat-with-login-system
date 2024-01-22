import styles from './SubmitButton.module.css'

function SubmitButton({text}){
   return(
    <div className={styles.submit_button}>
        <button>{text}</button>
    </div>
   ) 
}
export default SubmitButton