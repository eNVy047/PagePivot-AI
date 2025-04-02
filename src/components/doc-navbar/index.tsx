
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { Check, Download, Gem, Plus } from "lucide-react"

import Link from "next/link"

export default function DocNavBar() {
  return (
    <nav className="flex items-center justify-between px-4 h-14 border-b">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
        <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="font-bold">PagePivot AI</span>
          </Link>
        </div>  
        <div className="mx-2 text-gray-500">
            <p>|</p>
        </div>
        <Button variant="ghost" size="icon" className="mx-4 h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">untitled</span>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Check className="h-4 w-4" />
          <span>saved 09:05</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Download className="h-4 w-4" />
        </Button>
        <Button className="bg-zinc-900 text-white hover:bg-zinc-800"><Gem />   Upgrade now</Button>
        <div className="h-8 w-8 rounded-full overflow-hidden">
          <UserButton />
        </div>
      </div>
    </nav>
  )
}

