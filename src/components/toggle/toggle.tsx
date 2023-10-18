import './toggle.css';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import React from 'react'

export function Toggle({
  disabled = false,
  size = 'md',
  label,
  showIcons,
  isChecked,
  onChange,
  className,
  style,
  inputRef,
}: {
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  showIcons?: boolean
  isChecked?: boolean
  onChange?: (e: boolean) => void
  label?: string
  className?: string
  style?: React.CSSProperties
  inputRef?: React.RefObject<HTMLInputElement>
}) {
  return (
    <div
      className={cn(
        'localize' + '-toggle',
        'localize' + '-toggle-size-' + size,
        className
      )}
      style={style}
    >
      {label && (
        <span className={cn('localize' + '-switch-label')}>
          {label}
        </span>
      )}
      <label className={cn('localize' + '-switch')}>
        <input
          ref={inputRef}
          disabled={disabled}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.checked)
            }
          }}
        />
        <span
          className={cn('localize' + '-toggle-slider', {
            ['localize' + '-toggle-slider-disabled']: disabled,
          })}
        />
        {showIcons && (
          <>
            <span
              className={cn('localize' + '-switch-enabled-icon')}
            >
              <FontAwesomeIcon
                icon={faCheck}
                className={cn('localize' + '-toggle-icon')}
              />
            </span>
            <span
              className={cn('localize' + '-switch-disabled-icon')}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className={cn('localize' + '-toggle-icon')}
              />
            </span>
          </>
        )}
      </label>
    </div>
  )
}
