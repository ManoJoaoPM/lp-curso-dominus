import { motion } from 'framer-motion';
import { ShoppingCart, MonitorPlay, Rocket } from 'lucide-react';

const steps = [
  {
    icon: ShoppingCart,
    title: "Compre e acesse agora",
    description: "Acesso imediato pela plataforma Hotmart."
  },
  {
    icon: MonitorPlay,
    title: "Assista no seu ritmo",
    description: "52 aulas que encaixam na sua rotina."
  },
  {
    icon: Rocket,
    title: "Implemente com método",
    description: "Cada módulo tem aplicação direta na sua imobiliária."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Comece <span className="text-primary">aqui</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-800 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-dark border-4 border-dark-lighter shadow-[0_0_20px_rgba(255,102,0,0.15)] flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full border border-primary/30"></div>
                <step.icon size={40} className="text-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}