import { motion } from 'framer-motion';
import { Plus, Check } from 'lucide-react';
import { Button } from './ui/Button';

export function Pricing() {
  const stack = [
    {
      title: "Método Ads Imobiliário - Curso Completo",
      desc: "Meta Ads, Google Ads, Google Meu Negócio, rastreamento, funil e remarketing. +40 aulas específicas para o mercado imobiliário.",
      value: 497
    },
    {
      title: "Módulo Bônus: Social Media para Imobiliária",
      desc: "Aulas sobre como o conteúdo orgânico potencializa seus anúncios e o que publicar quando você não tem equipe de marketing.",
      value: 197
    },
    {
      title: "Acesso Vitalício com Atualizações Gratuitas",
      desc: "O mercado de anúncios muda. Meta atualiza. Google muda algoritmo. Você não paga nada por isso, as atualizações do curso chegam para você automaticamente.",
      value: 97
    }
  ];

  return (
    <section className="py-24 bg-dark relative">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto flex flex-col gap-12 items-center">
          
          {/* Value Stack */}
          <div className="space-y-6 w-full px-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl text-center md:text-4xl font-heading font-bold text-white mb-8"
            >
              Tudo que você vai receber <span className="text-primary">hoje:</span>
            </motion.h2>

            <div className="space-y-4 relative">
              {/* Connector Line */}
              <div className="absolute left-[30px] top-10 bottom-10 w-0.5 bg-primary/20 hidden md:block"></div>

              {stack.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-lighter p-6 rounded-2xl border border-white/5 relative z-10 md:pl-20"
                >
                  <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(255,102,0,0.4)]">
                    <Plus size={16} strokeWidth={3} />
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <div className="mb-2">
                        {index === 1 && (
                          <span className="inline-block bg-primary/20 text-primary text-xs px-2 py-1 rounded uppercase tracking-wider mb-2">
                            Bônus
                          </span>
                        )}
                        <h4 className="text-xl font-bold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="shrink-0 md:text-right mt-2 md:mt-0">
                      <span className="text-gray-500 line-through block">De R$ {item.value}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-6 mt-6 border-t border-white/10 flex justify-between items-center px-2 md:px-20"
            >
              <span className="text-xl text-white font-medium">Valor Total:</span>
              <span className="text-2xl text-red-500 font-bold line-through">R$ 791</span>
            </motion.div>
          </div>

          {/* Price Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-dark-lighter border border-primary/30 p-8 md:p-12 rounded-3xl mt-12 relative shadow-[0_0_40px_rgba(255,102,0,0.1)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-8 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg">
              Oferta Exclusiva
            </div>
            
            <div className="text-center mb-10 mt-4">
              <p className="text-gray-400 mb-4 text-lg">Leve tudo isso hoje por apenas:</p>
              <div className="flex items-end justify-center gap-2 text-white mb-4">
                <span className="text-3xl font-bold mb-2 text-primary">12x</span>
                <span className="text-7xl md:text-8xl font-heading font-bold text-white tracking-tight">R$20</span>
              </div>
              <p className="text-gray-400 mt-2">ou R$197 à vista</p>
            </div>

            <Button size="lg" fullWidth className="text-lg md:text-xl py-5">
              Quero acesso ao Método Ads Imobiliário
            </Button>
            {/*
            <ul className="space-y-3 mt-6 text-sm text-gray-400 justify-center flex flex-col items-center">
              <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Acesso imediato via Hotmart</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Pagamento 100% seguro</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Acesso vitalício às aulas</li>
            </ul>
            */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
