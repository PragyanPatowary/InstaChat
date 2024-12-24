"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-8 py-16 md:py-24">
      <motion.div 
        className="flex flex-col justify-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      > 
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
            Instagram Automation Made Easy
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Simplify your social media management with intelligent automation. Perfect for small creators and businesses ready to scale their Instagram presence.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gradient-bg text-white hover:opacity-90">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-100">
            Learn More
          </Button>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full gradient-bg" />
            ))}
          </div>
          <p>Trusted by 10,000+ Instagram creators</p>
        </div>
      </motion.div>
      <motion.div 
        className="relative lg:h-[600px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl transform rotate-3" />
        <Image
          src="/placeholder.svg" 
          alt="tezy Dashboard Preview"
          width={600}
          height={400}
          className="relative rounded-2xl shadow-2xl border transform -rotate-3 hover:rotate-0 transition-transform duration-300"
        />
      </motion.div>
    </section>
  )
}

  