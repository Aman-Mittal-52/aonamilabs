import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, TypingAnimation, AnimatedSpan } from './ui/terminal';
import { FlickeringGrid } from './ui/flickering-grid';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';


export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Motion Gradient Background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-linear-to-tr from-primary/20 via-primary/5 to-muted/30 dark:from-primary/10 dark:via-primary/5 dark:to-muted/10 bg-size-[200%_200%] -z-20 blur-3xl opacity-70"
      />
      
      {/* Flickering Grid Overlay */}
      <div className="absolute inset-0 -z-10">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full mask-[radial-gradient(ellipse_at_center,white,transparent_80%)]"
          squareSize={4}
          gridGap={6}
          color="#888888"
          maxOpacity={0.15}
          flickerChance={0.1}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-12 z-10 pt-10 lg:pt-0 pb-20">
        
        {/* Left Side: Copy */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl mx-auto">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-clash font-semibold tracking-tight leading-[1.1]"
          >
            Open code for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">real builders.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Real tools for real developers — built while shipping Aonami, then released free. No SaaS tax. No data lock-in. Just open code you can run today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-6"
          >
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full text-base font-medium">
             View all repos
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full text-base font-medium group text-muted-foreground hover:text-foreground">
              Explore tools 
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Terminal */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.7, delay: 0.4 }}
           className="flex-1 w-full max-w-lg lg:max-w-xl relative group mx-auto"
        >
          {/* Subtle glow behind the terminal window */}
          <div className="absolute -inset-1 rounded-2xl bg-linear-to-tr from-primary/30 to-muted/20 opacity-50 blur-2xl group-hover:opacity-75 transition duration-500"></div>

          <Terminal className="shadow-2xl border  bg-secondary  relative rounded-xl overflow-hidden">
            <AnimatedSpan className="text-zinc-500 font-mono text-sm mb-1 mt-2">
              <span># Clone the repo</span>
            </AnimatedSpan>
            <TypingAnimation className="text-cyan-400 font-mono text-sm sm:text-base mb-4">
              git clone https://github.com/Aonami-labs/founder-agent
            </TypingAnimation>

            <AnimatedSpan delay={1500} className="text-zinc-500 font-mono text-sm mb-1">
              <span># Configure your LLM key</span>
            </AnimatedSpan>
            <TypingAnimation delay={1500} className="text-pink-400 font-mono text-sm sm:text-base mb-4">
              OPENAI_API_KEY="sk-..."
            </TypingAnimation>

            <AnimatedSpan delay={2500} className="text-zinc-500 font-mono text-sm mb-1">
              <span># Start the agent</span>
            </AnimatedSpan>
            <TypingAnimation delay={2500} className="text-cyan-400 font-mono text-sm sm:text-base mb-4">
              python agent.py --mode daily-brief
            </TypingAnimation>

            <AnimatedSpan delay={4000} className="text-emerald-400 font-mono text-sm">
              <span>✓ Founder Agent running on localhost:3000</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4500} className="text-emerald-400 font-mono text-sm">
              <span>✓ Connected to your inbox & calendar</span>
            </AnimatedSpan>
            <AnimatedSpan delay={5000} className="text-emerald-400 font-mono text-sm">
              <span>✓ Daily brief ready at 8:00 AM</span>
            </AnimatedSpan>
          </Terminal>
        </motion.div>
      </div>
    </div>
  );
}
