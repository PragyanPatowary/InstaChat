"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Zap, Shield, Clock, Target } from 'lucide-react'
import { motion } from "framer-motion"

const features = [
  {
    title: "Smart Comment Automation",
    description: "Engage authentically with your audience through AI-powered comment responses.",
    icon: MessageSquare,
  },
  {
    title: "DM Automation",
    description: "Never miss a message with automated responses to common inquiries.",
    icon: Users,
  },
  {
    title: "Quick Setup",
    description: "Get started in under 5 minutes with our user-friendly interface.",
    icon: Zap,
  },
  {
    title: "Safe & Secure",
    description: "Industry-standard security to protect your Instagram account.",
    icon: Shield,
  },
  {
    title: "24/7 Operation",
    description: "Your automation works round the clock, even while you sleep.",
    icon: Clock,
  },
  {
    title: "Targeted Engagement",
    description: "Reach your ideal audience with smart targeting features.",
    icon: Target,
  },
]

export function Features() {
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
          Features You'll Love
        </h2>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Everything you need to automate your Instagram presence, wrapped in a beautiful interface
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="relative group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-bg p-2.5 mb-4">
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

