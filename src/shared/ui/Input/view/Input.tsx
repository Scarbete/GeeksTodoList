import {ChangeEventHandler, FC, HTMLAttributes} from 'react'
import classNames from 'classnames'
import classes from './Input.module.sass'


type Props = {
    className?: string
    type?: string
    placeholder?: string
    value?: any
    onChange?: ChangeEventHandler<HTMLInputElement>
} & HTMLAttributes<HTMLInputElement>


export const Input: FC<Props> = (props) => {

    const {
        className,
        type = 'text',
        placeholder,
        ...otherProps
    } = props

    return (
        <input
            className={classNames(
                classes.input,
                className
            )}
            type={type}
            placeholder={placeholder}
            {...otherProps}
        />
    )
}