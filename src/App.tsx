import React, { useState } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import { motion } from 'framer-motion';

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        <Experience />
                        <Contact />
                    </motion.div>
                </main>

                <footer className="py-10 text-center border-t border-slate-200 dark:border-neutral-800">
                    <p className="text-sm opacity-60">
                        © 2026 Hariz Haswan.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default App;