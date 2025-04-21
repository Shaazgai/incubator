"use client"

import { DialogContent as ShadcnDialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Button } from "./button"

interface DialogContentProps {
  children: React.ReactNode
  className?: string
  onClose?: () => void
}

export function DialogContent({ children, className = "", onClose }: DialogContentProps) {
  return (
    <ShadcnDialogContent className={className}>
      {onClose && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
      {children}
    </ShadcnDialogContent>
  )
}