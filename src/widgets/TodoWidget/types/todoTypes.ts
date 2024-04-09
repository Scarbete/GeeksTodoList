
export type Todo = {
    id: number
    title: string
    completed: boolean
}

export type TodoState = {
    todos: Todo[]
    isEdit: number | null
}

export type TodoActions = {
    removeTodo: (id: number) => void
    addTodo: (newTodo: Todo) => void
    selectToEdit: (id: number | null) => void
    editTodo: (id: number, newTitle: string) => void
}