'use client';

import {ReactNode} from "react";
import {motion} from "framer-motion";
import useScrollProgress from "@/hooks/useScrollProgress";

interface ITemplate {
    children: ReactNode
}

const variants = {
    hidden: {opacity: 0},
    enter: {opacity: 1}
}

export default function Template({children}: ITemplate) {
    const completion = useScrollProgress();

    return <>
        <motion.main
            variants={variants}
            initial="hidden"
            animate={"enter"}
            transition={{type: 'liner', delay: 0.2, duration: 0.4}}
        >
            {children}
        </motion.main>
        Adding a scrollbar        <span style={{transform: `translateY(${completion - 100}%)`}} className={"fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"}></span>
        <div className={'h-[4000px]'}></div>
    </>
}