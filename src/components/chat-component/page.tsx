import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

const ChatComponent = () => {
    return (
      <div className="flex flex-col h-screen bg-gray-50">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4 flex justify-between">
        <Link href="/dashboard" className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-800">PagePivot AI</span>
            </Link>
            <UserButton />
            
        </div>
  
        {/* Message List Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Received Message */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
              AI
            </div>
            <div className="max-w-[70%] bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-800">Hello! How can I help you today?</p>
              <span className="text-xs text-gray-400 mt-1 block">10:42 AM</span>
            </div>
          </div>
  
          {/* Sent Message */}
          <div className="flex items-start gap-2 justify-end">
            <div className="max-w-[70%] bg-blue-600 p-3 rounded-lg shadow-sm">
              <p className="text-white">Can you explain how this works?</p>
              <span className="text-xs text-blue-100 mt-1 block">10:43 AM</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm">
            <UserButton />
            </div>
          </div>
  
          {/* Typing Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
              AI
            </div>
            <div className="flex items-center space-x-1 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
  
        {/* Input Area */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <input
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l7-1.5a1 1 0 00.434-1.41L8.56 12.24H16a1 1 0 000-2H8.56l1.929-3.242a1 1 0 00-.434-1.41l-7 1.5a1 1 0 001.17 1.408l7-14z" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">ChatGPT may produce inaccurate information</p>
        </div>
      </div>
    );
  };
  
  export default ChatComponent;