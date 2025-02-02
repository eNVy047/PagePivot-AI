import { Plus } from 'lucide-react'
import React from 'react'

const MyDocument = () => {
  return (
    <div>
      <div>
      <main className="flex-1 p-8">
          

          <h2 className="text-2xl font-semibold mb-8">My Documents</h2>

          <div className="w-72 h-48 bg-zinc-500 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-200 transition-colors">
            <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center mb-4">
              <Plus className="h-6 w-6 text-zinc-400" />
            </div>
            <h3 className="font-medium mb-1 text-black">New document</h3>
            <p className="text-sm text-zinc-500">You can manually create files</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MyDocument