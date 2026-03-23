import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const isFor = [
  "Você é dono ou gestor de imobiliária e quer entender como anúncio funciona de verdade",
  "Você investe em tráfego mas não sabe se está gerando resultado real",
  "Você quer parar de depender 100% de terceiros para tomar decisão sobre suas campanhas",
  "Você quer estruturar o digital antes de escalar o investimento"
];

const isNotFor = [
  "Quem quer atalho sem processo",
  "Quem busca \"fórmula mágica\" de leads infinitos",
  "Quem não está disposto a implementar o que aprender"
];

export function TargetAudience() {
  return (
    <section className="py-24 bg-dark-lighter relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Esse curso foi feito <span className="text-primary">para você se...</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* É para você */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-dark border-t-4 border-t-primary p-8 md:p-10 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-primary" size={32} />
              É PARA VOCÊ
            </h3>
            <ul className="space-y-6">
              {isFor.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 text-lg">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NÃO é para você */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark/50 border border-gray-800 p-8 md:p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-heading font-bold text-gray-400 mb-8 flex items-center gap-3">
              <XCircle className="text-red-500/70" size={32} />
              NÃO É PARA VOCÊ
            </h3>
            <ul className="space-y-6">
              {isNotFor.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-500 text-lg">
                  <XCircle className="text-red-500/50 shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}