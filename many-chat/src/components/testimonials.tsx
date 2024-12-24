"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Social Media Manager",
    company: "Creative Studios",
    content: "Tezy has transformed how we handle our Instagram presence. The automation is seamless and feels completely natural.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "E-commerce Owner",
    company: "Urban Styles",
    content: "The ROI we've seen since using Tezy is incredible. Our engagement rates have increased by 300%.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Emma Davis",
    role: "Influencer",
    company: "Lifestyle & Travel",
    content: "Finally, an automation tool that doesn't feel robotic. Tezy helps me maintain authentic connections with my followers.",
    avatar: "/placeholder.svg",
  },
]

export function Testimonials() {
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
          Loved by Creators
        </h2>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Join thousands of satisfied customers who've transformed their Instagram game
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

