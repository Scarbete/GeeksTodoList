import {create} from 'zustand'
import {TodoActions, TodoState} from '../types/todoTypes'

const localTodos = 'localTodos'

export const useTodoModel = create<TodoState & TodoActions>((set, get) => ({
    todos: JSON.parse(localStorage.getItem(localTodos) || '[]'),
    isEdit: null,
    removeTodo: (id) => {
        const {todos} = get()
        const newList = todos.filter(
            item => item.id !== id
        )
        set({todos: [...newList]})
        localStorage.setItem(localTodos, JSON.stringify(get().todos))
    },
    addTodo: (newTodo) => {
        const {todos} = get()
        set({todos: [...todos, newTodo]})
        localStorage.setItem(localTodos, JSON.stringify(get().todos))
    },
    selectToEdit: (id) => {
        set({isEdit: id})
    },
    editTodo: (id, newTitle) => {
        const {todos} = get()

        const newList = todos.map(item => {
            if (item.id === id) {
                return {...item, title: newTitle}
            }
            else return item
        })

        set({todos: [...newList]})
        localStorage.setItem(localTodos, JSON.stringify(newList))
    }
}))