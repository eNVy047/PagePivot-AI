
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"


interface PricingFeature {
  text: string
  included: boolean
}

interface PricingTier {
  name: string
  description: string
  price: string
  period: string
  originalPrice?: string
  savePercentage?: string
  features: PricingFeature[]
  variant: "default" | "primary" | "secondary"
  popular?: boolean
}

const pricingData: PricingTier[] = [
  {
    name: "Experience",
    description: "Perfect for getting started with our premium features",
    price: "$1.09",
    period: "/day",
    variant: "primary",
    features: [
      { text: "Up to 20k words per essay x 2", included: true },
      { text: "Up to 40 real citations per essay", included: true },
      { text: "10 paraphrases(10k words each)", included: true },
      { text: "100% Undetectable", included: true },
      { text: "100% Plagiarism-Free", included: true },
    ],
  },
  {
    name: "Pro",
    description: "Most popular choice for professionals",
    price: "$5.99",
    period: "/week",
    originalPrice: "$15.99",
    savePercentage: "34%",
    variant: "primary",
    popular: true,
    features: [
      { text: "Up to 20k words per essay x 5", included: true },
      { text: "Up to 40 real citations per essay", included: true },
      { text: "20 paraphrases(10k words each)", included: true },
      { text: "100% Undetectable", included: true },
      { text: "100% Plagiarism-Free", included: true },
    ],
  },
  {
    name: "Max",
    description: "Ultimate features for power users",
    price: "$19.99",
    period: "/month",
    originalPrice: "$29.99",
    savePercentage: "41%",
    variant: "secondary",
    features: [
      { text: "Up to 20k words per essay x 20", included: true },
      { text: "Up to 40 real citations per essay", included: true },
      { text: "50 Paraphrases(10k words each)", included: true },
      { text: "100% Undetectable", included: true },
      { text: "100% Plagiarism-Free", included: true },
    ],
  },
]

const MotionButton = motion(Button)

const SubscriptionCard = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const Content = () => (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pricingData.map((tier) => (
          <motion.div
            key={tier.name}
            className={cn(
              "rounded-xl p-4 relative transition-all",
              tier.popular 
                ? "border-2 border-primary bg-primary/10 shadow-lg"
                : "border border-muted bg-background hover:border-primary/30"
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg text-xs">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold">{tier.name}</h3>
            <p className="text-muted-foreground text-sm mt-2">{tier.description}</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-bold">{tier.price}</span>
              <span className="text-muted-foreground">{tier.period}</span>
            </div>
            <MotionButton
              className="w-full mt-4"
              variant={tier.popular ? "default" : "outline"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Upgrade now
            </MotionButton>
            <ul className="mt-4 space-y-2">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-sm">
        You can cancel your subscription at any time.
      </p>
    </div>
  )

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Upgrade Membership</DialogTitle>
          </DialogHeader>
          <Content />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-xl">Upgrade Membership</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4 overflow-y-auto">
          <Content />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SubscriptionCard
