import { Button } from '@/components/ui/button'
import {  BookOpenText, BookUp2 } from 'lucide-react'
import React from 'react'

const dashboard = () => {
  return (
    <div className=''>
      <div>
      <div className='flex space-x-3'>
        <Button><BookOpenText />  Write Book</Button>
        <Button><BookUp2 />  Chat with PDF</Button>
      </div>
      </div>
    </div>
  )
}

export default dashboard