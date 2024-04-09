import {FC, ReactNode} from 'react'
import classes from './MultiContainer.module.sass'
import classNames from 'classnames'

type Props = {
    className?: string
    children: ReactNode
}

export const MultiContainer: FC<Props> = (props) => {

    const {
        className,
        children
    } = props

    return (
        <div className={classNames(classes.container, className)}>
            {children}
        </div>
    )
}