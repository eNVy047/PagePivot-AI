import ChatComponent from '@/components/chat-component/page'
import Navbar from '@/components/navbar'
import PDFViewer from '@/components/pdf-viewer/page'
import React from 'react'

const ChatPage = () => {
  return (
    <div>
      
      <div className="flex max-h-screen overflow-scroll">
      <div className="flex w-full max-h-screen overflow-scroll">
        {/* chat sidebar */}
       
        <div className="max-h-screen p-4 oveflow-scroll flex-[5]">
          <PDFViewer pdf_url={"https://morth.nic.in/sites/default/files/dd12-13_0.pdf"} />
        </div>
        {/* chat component */}
        <div className="flex-[3] border-l-4 border-l-slate-200">
          <ChatComponent />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ChatPage