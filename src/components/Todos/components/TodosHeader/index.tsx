import PlusIcon from "../../../../assets/plus.svg";

import { TTTodoHeaderProps } from "./types";
import styles from "./styles.module.scss";

const TodosHeader = ({ todoSum }: TTTodoHeaderProps) => {
    return (
         <div className={styles.container}>
             <p className={styles.title}>Today</p>
             <div className={styles.controllersWrapper}>
                 <img src={PlusIcon} alt="plus" />
                 <div className={styles.countBlock}>
                     <span className={styles.count}>{ todoSum }</span>
                 </div>
             </div>
         </div>
    );
}

export default TodosHeader;