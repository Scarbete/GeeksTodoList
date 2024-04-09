import {useTodoModel} from '@/widgets/TodoWidget'
import {MultiContainer} from '@/shared/ui/MultiContainer'
import {TodoCard} from '@/features/Todo/TodoCard'
import classes from './TodoList.module.sass'


export const TodoList = () => {

    const {todos} = useTodoModel()

    return (
        <div className={classes.todoList}>
            <MultiContainer className={classes.container}>
                {todos?.map(item =>
                    <TodoCard
                        key={item.id}
                        item={item}
                    />
                )}
            </MultiContainer>
        </div>
    )
}