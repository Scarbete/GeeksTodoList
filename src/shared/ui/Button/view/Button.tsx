import {FC, HTMLAttributes, ReactNode} from 'react'
import classNames from 'classnames'
import classes from './Button.module.sass'


type Props = {
    className?: string
    children: ReactNode
} & HTMLAttributes<HTMLButtonElement>


export const Button: FC<Props> = (props) => {

    const {
        className,
        children,
        ...otherProps
    } = props

    return (
        <button
            {...otherProps}
            className={classNames(classes.button, className)}
        >
            {children}
        </button>
    )
}