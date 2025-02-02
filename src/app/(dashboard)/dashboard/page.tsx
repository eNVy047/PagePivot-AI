import CreateBookPromptDialog from '@/components/Dialogs/CreateBookPromptDialog'
import UploadPdfDialog from '@/components/Dialogs/UploadPdfDialog'

import React from 'react'

const dashboard = () => {
  return (
    <div className=''>
      <div>
      <div className='flex space-x-3'>
        <CreateBookPromptDialog />
        <UploadPdfDialog />
      
      </div>
      </div>
    </div>
  )
}

export default dashboard