import {FC} from 'react'
import {Todo, useTodoModel} from '@/widgets/TodoWidget'
import {EditTodoCard} from '@/features/Todo/EditTodoCard'
import {DefaultTodoCard} from '@/features/Todo/DefaultTodoCard'

type Props = {
    item: Todo
}

export const TodoCard: FC<Props> = (props) => {

    const {item} = props

    const {isEdit} = useTodoModel()

    return (
        <>
            {isEdit === item.id
                ? <EditTodoCard item={item} />
                : <DefaultTodoCard item={item} />
            }
        </>
    )
}