import './radioitem.css';
import cn from 'classnames'
import React, {
  ChangeEventHandler,
  createContext,
  CSSProperties,
  useContext,
} from 'react'

import { Icon, IconType } from '../icon/icon'

type TRadioItemContext = {
  name: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioItemContext = createContext<TRadioItemContext>({
  name: '',
})

export function RadioItemGroup({
  name,
  value,
  onChange,
  className,
  style,
  children,
}: {
  name: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  style?: CSSProperties
  children: React.ReactNode
}) {
  return (
    <RadioItemContext.Provider value={{ name, value, onChange }}>
      <div onChange={onChange} className={className} style={style}>
        {children}
      </div>
    </RadioItemContext.Provider>
  )
}

export function RadioItem({
  onClick,
  checked,
  label,
  labelSize = 'md',
  icon,
  iconColor,
  disabled,
  className,
  style,
  inputRef,
  value,
  ...props
}: {
  onClick?: ChangeEventHandler<HTMLInputElement>
  checked?: boolean
  label?: string
  labelSize?: 'sm' | 'md'
  icon?: IconType
  iconColor?: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  value?: string
  inputRef?: React.Ref<HTMLInputElement>
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'>) {
  const radioItemContext = useContext(RadioItemContext)
  const radioItemName = radioItemContext?.name ?? ''
  const isChecked = radioItemContext?.value === value || checked

  return (
    <div
      className={cn(
        'localize' + '-radioItem-container',
        className
      )}
      style={style}
    >
      <label className={cn('localize' + '-radioItem-label')}>
        <input
          className={cn('localize' + '-radioItem-input')}
          type="radio"
          checked={isChecked}
          onChange={onClick}
          disabled={disabled}
          name={radioItemName}
          ref={inputRef}
          value={value}
          {...props}
        />
        <span
          className={'localize' + '-radioItem'}
          role="radio"
          aria-checked={isChecked}
        >
          <span className={'localize' + '-inner-circle'}></span>
        </span>
        <span
          className={cn(
            'localize' + '-radioItem-label-text',
            'localize' + '-radioItem-label-text-' + labelSize
          )}
        >
          {label}
        </span>
      </label>
      {icon && (
        <Icon
          type={icon}
          className={cn('localize' + '-radioItem-icon', {
            ['localize' + '-radioItem-icon-primary']:
              iconColor === 'primary',
            ['localize' + '-radioItem-icon-secondary']:
              iconColor === 'secondary',
          })}
        />
      )}
    </div>
  )
}
