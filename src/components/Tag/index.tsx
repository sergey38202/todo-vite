import { TTagProps } from "./types";
import styles from "./styles.module.scss";

const Tag = ({ type, title }: TTagProps) => {
    return (
        <div className={`${styles.container} ${type === 'secondary' && styles.containerSecondary}`}>
            <p className={`${styles.title} ${type === 'secondary' && styles.titleSecondary}`}>
                { title }
            </p>
        </div>
    );
}

export default Tag;