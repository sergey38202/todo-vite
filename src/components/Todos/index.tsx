import {useEffect, useState} from "react";
import { Fragment } from "react";
import axios from "axios";
import Todo from "../Todo";
import TodosHeader from "./components/TodosHeader";

import {TTodoDto} from "../../Types";
import styles from "./styles.module.scss";

const Todos = () => {
    const [todos, setTodos] = useState<null | TTodoDto[]>(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => setTodos(res.data))
            .catch((error) => console.log('error', error))
    }, []);

    return (
        <div className={styles.container}>
            <TodosHeader todoSum={todos?.length || 0} />
            { todos?.map((todo) => {
                const { id } = todo;

                return (
                    <Fragment key={id}>
                        <Todo todos={todo} />
                    </Fragment>
                );
            }) }
        </div>
    );
}

export default Todos;