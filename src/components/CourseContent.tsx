import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { Button } from './ui/Button';

const modules = [
  {
    title: "Fundamentos",
    classes: "8 aulas",
    description: "Por que a maioria perde dinheiro e como não ser a maioria."
  },
  {
    title: "Meta Ads",
    classes: "14 aulas",
    description: "Estrutura, segmentação, criativos e orçamento no mercado imobiliário."
  },
  {
    title: "Google Ads",
    classes: "9 aulas",
    description: "Pesquisa, palavras-chave, GMN e remarketing para imobiliária."
  },
  {
    title: "Do Lead ao Resultado",
    classes: "9 aulas",
    description: "Vamos mostrar onde o dinheiro é perdido na maioria dos casos."
  },
  {
    title: "Social Media (Bônus)",
    classes: "7 aulas",
    description: "O básico de social que potencializa seus anúncios."
  }
];

export function CourseContent() {
  return (
    <section className="py-24 bg-dark relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Um sistema completo de <span className="text-primary">52 aulas.</span>
          </h2>
          <p className="text-xl text-gray-400">O que você vai aprender na prática.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-4 mb-12">
          {modules.map((mod, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-lighter border border-gray-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-4 md:w-1/3 shrink-0">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <PlayCircle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-white">{mod.title}</h4>
                  <span className="text-primary text-sm font-semibold">{mod.classes}</span>
                </div>
              </div>
              <div className="md:w-2/3 border-t border-gray-800 md:border-t-0 md:border-l md:pl-8 pt-4 md:pt-0">
                <p className="text-gray-300 text-lg">{mod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Button size="lg" className="w-full md:w-auto md:min-w-[400px] text-lg">
            Quero acesso completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}