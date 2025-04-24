// "use client"

// import { useState } from "react"
// import { Dialog, DialogTrigger } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { PlusCircle, Loader2 } from "lucide-react"
// import { DialogContent } from "../ui/dialog-content"

// export function RequestIntroductionDialog() {
//   const [open, setOpen] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000))
    
//     setIsSubmitting(false)
//     setOpen(false)
//   }

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button className="flex items-center gap-2">
//           <PlusCircle className="h-4 w-4" />
//           Request Introduction
//         </Button>
//       </DialogTrigger>
      
//       <DialogContent className="sm:max-w-[500px]" onClose={() => setOpen(false)}>
//         <div className="px-2">
//           <h2 className="text-2xl font-bold tracking-tight">Request an Introduction</h2>
//           <p className="text-muted-foreground mt-2">
//             Tell us about your startup and what kind of investor you are looking to connect with.
//           </p>
          
//           <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//             <div className="space-y-2">
//               <label className="text-sm font-medium">Company Name</label>
//               <Input required placeholder="Enter your company name" />
//             </div>
            
//             <div className="space-y-2">
//               <label className="text-sm font-medium">Your Name</label>
//               <Input required placeholder="Enter your full name" />
//             </div>
            
//             <div className="space-y-2">
//               <label className="text-sm font-medium">Email</label>
//               <Input required type="email" placeholder="Enter your email" />
//             </div>
            
//             <div className="space-y-2">
//               <label className="text-sm font-medium">Investment Stage</label>
//               <Input required placeholder="e.g., Pre-seed, Seed, Series A" />
//             </div>
            
//             <div className="space-y-2">
//               <label className="text-sm font-medium">Investment Amount</label>
//               <Input required type="number" placeholder="Amount in USD" />
//             </div>
            
//             <div className="space-y-2">
//               <label className="text-sm font-medium">Pitch Description</label>
//               <Textarea 
//                 required
//                 placeholder="Briefly describe your startup and what makes it unique"
//                 className="min-h-[100px]"
//               />
//             </div>
            
//             <div className="pt-4">
//               <Button 
//                 type="submit" 
//                 className="w-full"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Submitting...
//                   </>
//                 ) : (
//                   'Submit Request'
//                 )}
//               </Button>
//             </div>
//           </form>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }



"use client"

import { useState } from "react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, Loader2 } from "lucide-react"
import { DialogContent } from "../ui/dialog-content"

export function RequestIntroductionDialog() {
  const [neegdsen, setNeegdsen] = useState(false)
  const [ilgeejBaina, setIlgeejBaina] = useState(false)

  const huseltIlgeeh = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIlgeejBaina(true)
    
    // API duudlagiin zagvar
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIlgeejBaina(false)
    setNeegdsen(false)
  }

  return (
    <Dialog open={neegdsen} onOpenChange={setNeegdsen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Танилцуулах Хүсэлт
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px]" onClose={() => setNeegdsen(false)}>
        <div className="px-2">
          <h2 className="text-2xl font-bold tracking-tight">Танилцуулах Хүсэлт</h2>
          <p className="text-muted-foreground mt-2">
            Гарааны бизнесийнхээ талаар болон ямар хөрөнгө оруулагчтай холбогдохыг хүсч байгаагаа бидэнд хэлнэ үү.
          </p>
          
          <form onSubmit={huseltIlgeeh} className="mt-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Компанийн нэр</label>
              <Input required placeholder="Компанийн нэрээ оруулна уу" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Таны нэр</label>
              <Input required placeholder="Бүтэн нэрээ оруулна уу" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Имэйл</label>
              <Input required type="email" placeholder="Имэйл хаягаа оруулна уу" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Хөрөнгө оруулалтын үе шат</label>
              <Input required placeholder="ж.нь., Урьдчилсан үр, Үр, А цуврал" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Хөрөнгө оруулалтын хэмжээ</label>
              <Input required type="number" placeholder="USD-аар хэмжээ" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Танилцуулгын тайлбар</label>
              <Textarea 
                required
                placeholder="Гарааны бизнесийнхээ талаар товч тайлбарлаж, түүнийг онцгой болгож буй зүйлийг дурдана уу"
                className="min-h-[100px]"
              />
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full"
                disabled={ilgeejBaina}
              >
                {ilgeejBaina ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Илгээж байна...
                  </>
                ) : (
                  'Хүсэлт илгээх'
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
