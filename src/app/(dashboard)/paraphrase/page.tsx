"use client"

import { useState, useEffect } from "react"
import { Clipboard, Copy, Trash2, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function ParaphraseTool() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [showScrollButton, setShowScrollButton] = useState(false)

  const handleDelete = () => {
    setInputText("")
    setOutputText("")
  }

  const handleParaphrase = () => {
    // Simulate paraphrasing logic (reverse the text for demonstration)
    const paraphrasedText = inputText.split("").reverse().join("")
    setOutputText(paraphrasedText)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText)
  }

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener("scroll", handleScrollVisibility)
    return () => window.removeEventListener("scroll", handleScrollVisibility)
  }, [])

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        {/* Subtitle */}
        <h2 className="text-center text-gray-300 text-lg mb-8">
          Paraphrase your essay to help reduce the risk of plagiarism and better convey the topic.
        </h2>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-4 border rounded-lg p-4 bg-white shadow-sm">
          {/* Input Section */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <h3 className="font-medium text-gray-500">Before paraphrase</h3>
            </div>
            <div className="relative min-h-[400px]">
              {!inputText && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                  <Clipboard className="h-8 w-8 mb-2" />
                  <span>Paste text</span>
                </div>
              )}
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste the text you want to paraphrase here"
                className="min-h-[400px] resize-none"
              />
            </div>
            <div className="flex justify-between">
              <Button variant="ghost" className="text-gray-500" onClick={handleDelete}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete text
              </Button>
              <span className="text-gray-500 text-sm">{inputText.length}/10,000</span>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-500">After paraphrase</h3>
            <Textarea
              value={outputText}
              readOnly
              placeholder="The paraphrased text will be displayed here"
              className="min-h-[400px] resize-none"
            />
            <div className="flex justify-end">
              <Button variant="ghost" className="text-gray-500 mx-2" onClick={handleCopy}>
                <Copy />
              </Button>
              <Button
                onClick={handleParaphrase}
                className="bg-[#F37547] hover:bg-[#E56436] text-white px-8"
                size="lg"
                disabled={!inputText}
              >
                Paraphrase
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <Button
          onClick={handleScroll}
          className="fixed bottom-4 right-4 p-2 rounded-full shadow-lg bg-[#F37547] hover:bg-[#E56436]"
          size="icon"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}