import {FC} from 'react'
import {Todo, useTodoModel} from '@/widgets/TodoWidget'
import removeImage from '@/shared/assets/images/Delete.svg'
import editImage from '@/shared/assets/images/Edit.svg'
import classes from '../../TodoCard/view/TodoCard.module.sass'

type Props = {
    item: Todo
}

export const DefaultTodoCard: FC<Props> = (props) => {

    const {item} = props

    const {removeTodo, selectToEdit} = useTodoModel()

    const handleRemoveTodo = () => removeTodo(item.id)
    const handleEditTodo = () => selectToEdit(item.id)

    return (
        <div className={classes.todoCard}>
            <div className={classes.todoCard__info}>
                {item.title}
            </div>
            <div className={classes.todoCard__tools}>
                <button onClick={handleEditTodo} className={classes.tool}>
                    <img src={editImage} alt="editImage"/>
                </button>
                <button onClick={handleRemoveTodo} className={classes.tool}>
                    <img src={removeImage} alt="removeImage"/>
                </button>
            </div>
        </div>
    )
}