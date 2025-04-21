"use client"

import { useState } from "react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { DialogContent } from "@/components/ui/dialog-content"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, Loader2 } from "lucide-react"

export function BecomeAMentorDialog() {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Become a Mentor
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px]" onClose={() => setOpen(false)}>
        <div className="px-2">
          <h2 className="text-2xl font-bold tracking-tight">Become a Mentor</h2>
          <p className="text-muted-foreground mt-2">
            Share your expertise and help shape the next generation of Mongolian startups.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input required placeholder="Enter your full name" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input required type="email" placeholder="Enter your email" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">LinkedIn Profile</label>
              <Input required type="url" placeholder="https://linkedin.com/in/your-profile" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Areas of Expertise</label>
              <Input required placeholder="e.g., Product Strategy, Growth Marketing" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Brief Introduction</label>
              <Textarea 
                required
                placeholder="Tell us about your experience and how you can help startups"
                className="min-h-[100px]"
              />
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}