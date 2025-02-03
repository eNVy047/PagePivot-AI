"use client"
import * as React from "react"
import { Check, BookOpenText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

interface Step {
  title: string
  description: string
}

const steps: Step[] = [
  { title: "Prompt & Settings", description: "Enter your book details" },
  { title: "Outline", description: "Review generated outline" },
  { title: "Finalize", description: "Name your book and options" },
]

export function CreateBookPromptDialog() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [currentStep, setCurrentStep] = React.useState(0)
  const [prompt, setPrompt] = React.useState("")
  const [wordCount, setWordCount] = React.useState(5000)
  const [referenceLevel, setReferenceLevel] = React.useState(3)
  const [bookName, setBookName] = React.useState("")
  const [includeImages, setIncludeImages] = React.useState(false)
  const [outlineContent] = React.useState(`Sample Outline:
1. Introduction
2. Main Content Chapters
3. Conclusion`)

  const totalSteps = steps.length

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setOpen(false)
      setCurrentStep(0)
      router.push("/doc/1")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button><BookOpenText className="mr-2 h-4 w-4" /> Write Book</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        
        {/* Progress Steps */}
        <div className="relative mt-6">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center w-1/3">
                <div className={cn(
                  "w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mb-2",
                  currentStep >= index ? "border-primary bg-primary text-primary-foreground" 
                    : "border-muted bg-background text-muted-foreground"
                )}>
                  {currentStep > index ? <Check className="h-5 w-5" /> : index + 1}
                </div>
                <span className="text-sm text-center font-medium">{step.title}</span>
                <span className="text-xs text-center text-muted-foreground">
                  {step.description}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute top-5 left-0 right-0 h-1 bg-muted -z-10">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="mt-8 space-y-6">
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Book Prompt</label>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the book you want to create..."
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Word Count: {wordCount.toLocaleString()}
                  </label>
                  <Slider
                    value={[wordCount]}
                    onValueChange={(value) => setWordCount(value[0])}
                    min={1000}
                    max={10000}
                    step={500}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Reference Level: {referenceLevel}
                  </label>
                  <Slider
                    value={[referenceLevel]}
                    onValueChange={(value) => setReferenceLevel(value[0])}
                    min={1}
                    max={5}
                    step={1}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="bg-muted rounded-lg p-4">
              <pre className="whitespace-pre-wrap font-sans">{outlineContent}</pre>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Book Name</label>
                <Input
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  placeholder="Enter your book name"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="include-images"
                    checked={includeImages}
                    onCheckedChange={(checked) => setIncludeImages(!!checked)}
                  />
                  <label htmlFor="include-images" className="text-sm">
                    Include AI-generated images
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button onClick={handleNext} className="w-full sm:w-auto">
            {currentStep === totalSteps - 1 ? "Generate Book" : "Next Step"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}