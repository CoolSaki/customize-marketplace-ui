import * as React from 'react'
import './Back.css'

export type BackProps = {
  className?: string
  absolute?: boolean
  onClick?: () => void
  type?: string
}

export class Back extends React.PureComponent<BackProps> {
  render(): JSX.Element {
    const { children, className, absolute, onClick, type } = this.props

    const classes = ['dcl', 'back']
    if (className) {
      classes.push(className)
    }

    if (absolute) {
      classes.push('absolute')
    }

    if (type === 'multiple') {
      classes.push('multiple')
    }

    return (
      <div className={classes.join(' ')} onClick={onClick}>
        {children}
      </div>
    )
  }
}
