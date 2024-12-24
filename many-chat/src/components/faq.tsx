"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "How does Tezy's automation work?",
    answer: "Tezy uses advanced algorithms to analyze incoming comments and messages, then responds with pre-configured templates that you can customize. This ensures responses feel natural and aligned with your brand voice."
  },
  {
    question: "Is it safe to use with my Instagram account?",
    answer: "Yes, absolutely! Tezy follows all of Instagram's guidelines and uses official APIs. We prioritize account safety and maintain strict security protocols to protect your account."
  },
  {
    question: "Can I customize the automated responses?",
    answer: "Yes! You can create custom response templates, set specific triggers, and even use AI to generate variations of your responses to keep them feeling fresh and authentic."
  },
  {
    question: "What's included in the free plan?",
    answer: "The free plan includes 50 automated comments and 25 automated DMs per month, along with basic customization options and email support. It's a great way to get started with tezy and see how it can benefit your Instagram presence."
  },
  {
    question: "How quickly can I get started with tezy?",
    answer: "Most users are up and running in under 5 minutes. Our setup wizard guides you through the process, and our support team is always available to help, regardless of your plan."
  }
]

export function FAQ() {
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
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Everything you need to know about Tezy
        </p>
      </motion.div>
      <motion.div 
        className="max-w-[800px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}

