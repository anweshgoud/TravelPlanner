import styles from "./Heading.module.css";

const Heading = ({children}) => {

  return (
    <div>
      <div className={styles.home}>{children}</div>
    </div>
  )

}

export default Heading;
