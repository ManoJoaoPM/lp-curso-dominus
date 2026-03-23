import { motion } from 'framer-motion';
import { TrendingDown, Users, Clock, ArrowRight, CheckCircle2, Check } from 'lucide-react';

export function Anchoring() {
  const badInvestments = [
    {
      icon: <TrendingDown className="text-red-500" size={24} />,
      title: "Campanha Mal Configurada",
      desc: "Consome R$197 no Meta Ads em menos de 4 dias, sem gerar nenhum retorno real.",
    },
    {
      icon: <Clock className="text-red-500" size={24} />,
      title: "Consultoria Avulsa",
      desc: "Uma única hora com um especialista em tráfego custa entre R$500 e R$1000.",
    },
    {
      icon: <Users className="text-red-500" size={24} />,
      title: "Freelancer de Tráfego",
      desc: "Cobra, em média, R$800 por mês e muitas vezes sem garantia de método ou resultado.",
    }
  ];

  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/5 via-dark-lighter to-dark-lighter"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
            Para efeito de <span className="text-primary text-opacity-80">comparação...</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Bad Investments Column */}
          <div className="space-y-6">
            {badInvestments.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark p-6 rounded-2xl border border-red-500/10 flex gap-5 items-start"
              >
                <div className="p-3 bg-red-500/10 rounded-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Good Investment Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary/10 border border-primary/30 p-8 md:p-12 rounded-3xl relative"
          >
            <div className="absolute -top-4 -right-4 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center">
              <Check size={24} />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 leading-tight">
              Por apenas <span className="text-primary">R$197</span>, você:
            </h3>
            
            <ul className="space-y-5">
              {[
                "Aprende o método completo validado.",
                "Entende o que está sendo feito (ou deixando de ser feito) na sua imobiliária.",
                "Nunca mais toma decisão de anúncio no escuro ou depende 100% de terceiros."
              ].map((benefit, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
