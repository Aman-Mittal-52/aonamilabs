import { Button } from '@/components/ui/button'
import { HandCoins, User, UserRound } from 'lucide-react'
import { GiMoneyStack } from "react-icons/gi";

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaCalculator } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { ThemeToggleButton } from '@/components/theme-toogle';

const projects = [
  {
    title: "Founder's Office Agent",
    href: "#founders-office-agent",
    description: "An AI-powered daily operations agent for developers. Triages your inbox, preps meeting briefs, tracks follow-ups, and surfaces blockers",
  },
  {
    title: "Deal Memo AI",
    href: "#deal-memo-ai",
    description: "Drop in a pitch deck or data dump and get a structured investment deal memo out. Built for operators doing due diligence at speed.",
  },
  {
    title: "Customer Voice",
    href: "#customer-voice",
    description: "Aggregate feedback from calls, forms, and reviews. AI tags themes, surfaces patterns, and generates a weekly report.",
  },
]


function Navbar() {

  const navigate = useNavigate();
  return (
    <div className='flex sticky top-4 mt-4 z-50  max-w-7xl  mx-auto justify-between items-center m-2'>

      <div onClick={() => navigate('/')} className=' backdrop-blur-md rounded px-2 flex items-center gap-2'>
        <div className='w-10 h-10  flex items-center justify-center'>
          <img src="/logo/logo.svg" alt="Logo" className='w-full h-full dark:invert invert-0 object-cover' />
        </div>
        <p className='font-clash font-medium text-xl bg-linear-to-r from-primary to-foreground bg-clip-text text-transparent'>Aonami Labs</p>
      </div>

      <div className='flex items-center gap-2 bg-primary/10 border rounded-2xl p-2 backdrop-blur-md'>
        <div className='flex items-center gap-2'>
          <NavigationMenuDemo />
        </div>

        <div className='flex items-center gap-2'>
          <Button variant="outline" onClick={() => navigate('/auth')} className={cn(
            'group relative z-0 overflow-hidden bg-background ring-1 ring-primary/60 transition-colors duration-500 hover:bg-transparent hover:text-primary-foreground border-none',
            'after:absolute after:inset-x-0 after:bottom-0 after:-z-10 after:h-full after:translate-y-full after:rounded-t-[50%] after:bg-primary after:transition-all after:duration-500 hover:after:translate-y-0 hover:after:rounded-none'
          )}>
            <UserRound className="h-5 w-5" /> Github
          </Button>
          <ThemeToggleButton variant='rectangle' start='bottom-up' />
        </div>
      </div>

    </div>
  )
}

export default Navbar;




export function NavigationMenuDemo() {
  const [hovered, setHovered] = React.useState(null);

  return (
    <NavigationMenu onMouseLeave={() => setHovered(null)}>
      <NavigationMenuList>
        <NavigationMenuItem
          className="relative"
          onMouseEnter={() => setHovered("projects")}
        >
          {hovered === "projects" && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-nav-hover rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent flex items-center gap-2">Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid md:grid-cols-1 w-[400px]">
              {projects.map((proj) => (
                <ListItem
                  key={proj.title}
                  title={proj.title}
                  href={proj.href}
                  hovered={hovered}
                  setHovered={setHovered}
                  parentId="projects"
                >
                  {proj.description}
                </ListItem>
              ))}
            </ul>

          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem
          className="relative"
          onMouseEnter={() => setHovered("how-it-works")}
        >
          {hovered === "how-it-works" && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-nav-hover rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer`}>
            <a href="#how-it-works">How it works</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem
          className="relative"
          onMouseEnter={() => setHovered("contribute")}
        >
          {hovered === "contribute" && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-nav-hover rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer`}>
            <a href="#contribute">Contribute</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  hovered,
  setHovered,
  parentId,
  ...props
}) {
  return (
    <li
      {...props}
      className={`relative z-10 ${props.className || ""}`}
      onMouseEnter={() => setHovered && title && setHovered(title)}
      onMouseLeave={() => setHovered && parentId && setHovered(parentId)}
    >
      {hovered === title && (
        <motion.div
          layoutId="nav-bg"
          className="absolute inset-0 bg-muted/50 rounded-md -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <NavigationMenuLink asChild className="bg-transparent hover:bg-transparent focus:bg-transparent focus:outline-none">
        <a href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
