import {TodoList} from '@/features/Todo/TodoList'
import {TodoForm} from '@/features/Todo/TodoForm'
import classes from './TodoWidget.module.sass'

export const TodoWidget = () => {

    return (
        <div className={classes.todoWidget}>
            <h1 className={classes.title}>TO DO</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    )
}