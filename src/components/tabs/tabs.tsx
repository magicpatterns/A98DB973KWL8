import './tabs.css';
import cn from 'classnames'
import React from 'react'

export function Tabs({
  activeTabIndex,
  onChange,
  tabs,
  border = 'left',
  size = 'sm',
  className,
  style,
  ref,
}: {
  activeTabIndex: number
  onChange: (index: number) => void
  tabs: string[]
  border?: 'left' | 'bottom'
  size?: 'sm' | 'lg'
  className?: string
  style?: React.CSSProperties
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <div
      className={cn(
        'localize' + '-tabs',
        'localize' + '-tabs-' + border,
        'localize' + '-tabs-' + size,
        className
      )}
      style={style}
      ref={ref}
    >
      {tabs.map((tab, index) => (
        <div
          key={tab}
          className={cn('localize' + '-tab', {
            ['localize' + '-tab-active']:
              index === activeTabIndex,
          })}
          role="button"
          tabIndex={0}
          onClick={() => onChange(index)}
        >
          <span>{tab}</span>
        </div>
      ))}
    </div>
  )
}
