import {create} from 'zustand'
import {TodoFormActions, TodoFormState} from '@/features/Todo/TodoForm'
import {useTodoModel} from '@/widgets/TodoWidget'


export const useTodoFormModel = create<TodoFormState & TodoFormActions>((set, get) => ({
    title: '',
    setTitle: (event) => {
        set({title: event.target.value})
    },
    submitForm: (event) => {
        event.preventDefault()
        const {title} = get()
        if (title.trim()) {
            const newTodo = {
                id: Date.now(),
                title: title,
                completed: false
            }
            useTodoModel.getState().addTodo(newTodo)
            set({title: ''})
        }
    }
}))