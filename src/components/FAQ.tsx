import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

const faqs = [
  {
    question: "Preciso ter conhecimento prévio em tráfego?",
    answer: "Não. O curso começa do zero e constrói o método passo a passo."
  },
  {
    question: "Funciona para imobiliária pequena?",
    answer: "Sim. Principalmente. Imobiliárias pequenas têm mais a ganhar com método do que com orçamento."
  },
  {
    question: "Vou conseguir aplicar sozinho?",
    answer: "Sim, para o básico. Para escalar com suporte especializado, a Dominus oferece assessoria completa."
  },
  {
    question: "O acesso expira?",
    answer: "Não. Acesso vitalício com todas as atualizações."
  },
  {
    question: "É diferente de outros cursos de tráfego?",
    answer: "É o único desenvolvido exclusivamente para o mercado imobiliário, com métricas, exemplos e estratégias do setor."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-dark-lighter relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "border rounded-xl overflow-hidden transition-colors duration-300",
                  isOpen ? "border-primary bg-dark" : "border-gray-800 bg-dark/50 hover:border-gray-700"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-heading font-semibold text-lg text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={cn(
                      "text-primary shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180" : ""
                    )} 
                    size={24} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-300 text-lg border-t border-gray-800/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}