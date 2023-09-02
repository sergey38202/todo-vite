import ProfileImage from "../../assets/Img.png";
import Tag from "../Tag";

import {RANDOM_END_DATE, RANDOM_START_DATE, RANDOM_TEXT} from "./constans";
import {TTodoProps} from "./types";
import styles from "./style.module.scss";

const Todo = ({ todos } : TTodoProps) => {
    const { title, completed } = todos;

    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <input type="checkbox" id="todo_checkbox" defaultChecked={completed} />
                <label htmlFor="todo_checkbox" className={styles.title}>{ title }</label>
            </div>
            <div className={styles.timeWrapper}>
                <p className={styles.time}>{ RANDOM_START_DATE }</p>
                <p className={styles.time}>{ RANDOM_END_DATE }</p>
            </div>
            <div className={styles.descriptionWrapper}>
                <p className={styles.description}>{ RANDOM_TEXT }</p>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerTagWrapper}>
                    <Tag type="primary" title="Entity title" />
                    <Tag type="secondary" title="Frontend" />
                </div>
                <img
                    className={styles.footerImage}
                    src={ProfileImage}
                    alt="Profile"
                />
            </div>
        </div>
    );
}

export default Todo;