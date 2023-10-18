import './checkbox.css';
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import React, { ChangeEventHandler } from 'react'

import { Icon, IconType } from '../icon/icon'

export function Checkbox({
  onClick,
  isChecked,
  checkmark = 'check',
  label,
  size = 'md',
  icon,
  iconColor = 'primary',
  disabled,
  className,
  ...props
}: {
  onClick?: ChangeEventHandler<HTMLInputElement>
  isChecked?: boolean
  checkmark?: 'check' | 'minus'
  label?: string
  size?: 'sm' | 'md' | 'lg'
  icon?: IconType
  iconColor?: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>) {
  return (
    <div
      className={cn(
        'localize' + '-checkbox-container',
        'localize' + '-checkbox-size-' + size
      )}
    >
      <label className={cn('localize' + '-checkbox-label')}>
        <input
          className={cn(
            'localize' + '-checkbox-input',
            className
          )}
          type="checkbox"
          checked={isChecked}
          onChange={onClick}
          disabled={disabled}
          {...props}
        />
        <button
          className={'localize' + '-checkbox'}
          role="checkbox"
          aria-checked={isChecked}
        >
          <FontAwesomeIcon
            icon={checkmark === 'check' ? faCheck : faMinus}
            className={'localize' + '-checkmark'}
          />
        </button>
        <span className={cn('localize' + '-checkbox-label-text')}>
          {label}
        </span>
      </label>
      {icon && (
        <Icon
          type={icon}
          className={cn('localize' + '-checkbox-icon', {
            ['localize' + '-checkbox-icon-primary']:
              iconColor === 'primary',
            ['localize' + '-checkbox-icon-secondary']:
              iconColor === 'secondary',
          })}
        />
      )}
    </div>
  )
}
