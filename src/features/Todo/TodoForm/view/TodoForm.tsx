import {MultiContainer} from '@/shared/ui/MultiContainer'
import {Button} from '@/shared/ui/Button'
import {Input} from '@/shared/ui/Input'
import {useTodoFormModel} from '@/features/Todo/TodoForm'
import classes from './TodoForm.module.sass'


export const TodoForm = () => {

    const {
        title,
        setTitle,
        submitForm
    } = useTodoFormModel()

    return (
        <div className={classes.todoForm}>
            <MultiContainer className={classes.container}>
                <form onSubmit={submitForm}>
                    <Input
                        value={title}
                        onChange={setTitle}
                        type={'text'}
                        placeholder={'Enter title'}
                    />
                    <Button>
                        Add task
                    </Button>
                </form>
            </MultiContainer>
        </div>
    )
}