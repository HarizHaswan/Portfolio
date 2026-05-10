import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center text-center">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Internship • Aug 2026 – Dec 2026
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
            >
                Hariz Haswan
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl opacity-80 max-w-2xl mb-10"
            >
                Software Engineering Student & Full Stack Developer.
                Building scalable, modern, and user-friendly web applications using the MERN Stack.
            </motion.p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
            >
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25">
                    View Projects
                </button>
                <button className="px-8 py-3 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-neutral-800 transition-all">
                    <FileText size={18} /> Resume
                </button>
            </motion.div>
        </section>
    );
};

export default Hero;