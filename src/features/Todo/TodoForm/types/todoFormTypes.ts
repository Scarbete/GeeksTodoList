import {ChangeEvent, FormEvent} from 'react'

export type TodoFormState = {
    title: string
}

export type TodoFormActions = {
    setTitle: (event: ChangeEvent<HTMLInputElement>) => void
    submitForm: (event: FormEvent<HTMLFormElement>) => void
}