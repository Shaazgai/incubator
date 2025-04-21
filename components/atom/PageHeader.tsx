import { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  icon?: ReactNode
  action?: ReactNode
}

export default function PageHeader({ title, description, icon, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
      <div className="flex items-center gap-4">
        {icon && (
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground mt-1 max-w-2xl">{description}</p>
          )}
        </div>
      </div>
      
      {action && (
        <div className="mt-4 lg:mt-0 w-full lg:w-auto flex justify-start">
          {action}
        </div>
      )}
    </div>
  )
}