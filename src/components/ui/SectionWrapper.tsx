import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  bg?: 'white' | 'gray';
  id?: string;
}

export default function SectionWrapper({
  children,
  className = '',
  bg = 'white',
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 ${bg === 'gray' ? 'bg-secondary-50' : 'bg-white'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
