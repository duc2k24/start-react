import React from 'react'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({to, href,disabled, primary = false, outline = false, text, small, large, children, onClick, ...passProp}) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProp,
    }

    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if(to) {
        props.to = to
        Comp = Link

    }
    else if(href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        disabled,
        small,
        large,
        text,
    })


  return (
    <Comp className={classes} {...props}>
        <span>{children}</span>
    </Comp>
  )
}

export default Button