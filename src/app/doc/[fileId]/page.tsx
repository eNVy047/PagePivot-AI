import EditorWrapper from '@/components/doc-editor/page'
import DocNavBar from '@/components/doc-navbar'
import React from 'react'

const DocPage = () => {
  return (
    <div>
      <div>
      <DocNavBar />
      </div>
      <div>
        <EditorWrapper />
      </div>
    </div>
  )
}

export default DocPage