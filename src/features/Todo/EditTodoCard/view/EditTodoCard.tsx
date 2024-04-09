import {ChangeEventHandler, FC, useState} from 'react'
import {Button} from '@/shared/ui/Button'
import {Input} from '@/shared/ui/Input'
import {Todo, useTodoModel} from '@/widgets/TodoWidget'
import classes from '../../TodoCard/view/TodoCard.module.sass'

type Props = {
    item: Todo
}

export const EditTodoCard: FC<Props> = (props) => {

    const {item} = props

    const {editTodo, selectToEdit} = useTodoModel()

    const [newTitle, setNewTitle] = useState(item.title || '')

    const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
        setNewTitle(event.target.value)
    }

    const handleCancel = () => {
        selectToEdit(null)
    }

    const saveEditedTodo = () => {
        selectToEdit(null)
        editTodo(item.id, newTitle)
    }

    return (
        <div>
            <div className={classes.todoCard}>
                <Input
                    value={newTitle}
                    onChange={handleChangeTitle}
                    className={classes.todoCard__info}
                />
                <div className={classes.todoCard__tools}>
                    <Button onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={saveEditedTodo}>
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}