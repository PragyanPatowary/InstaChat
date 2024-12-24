"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'
import { motion } from "framer-motion"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals just starting out",
    features: [
      "50 automated comments per month",
      "25 automated DMs per month",
      "Basic customization",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    description: "For growing creators",
    features: [
      "200 automated comments per month",
      "100 automated DMs per month",
      "Advanced customization",
      "AI-assisted chat responses",
      "Priority email support",
    ],
  },
  {
    name: "Business",
    price: "$29",
    description: "For serious creators and small businesses",
    features: [
      "Unlimited automated comments",
      "Unlimited automated DMs",
      "Full customization",
      "Advanced AI-assisted responses",
      "24/7 priority support",
      "API access",
    ],
  },
]

export function Pricing() {
  return (
    <section className="container py-16 space-y-16">
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
          Simple, Affordable Pricing
        </h2>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Choose the plan that's right for your growth
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-xl font-normal">/mo</span></div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-gray-700" /> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gradient-bg text-white hover:opacity-90">
                  {plan.name === "Free" ? "Get Started" : "Upgrade Now"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

