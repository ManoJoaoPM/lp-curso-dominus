import { motion } from 'framer-motion';
import { TrendingUp, Target, Trophy } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: "+50%",
    label: "Leads qualificados",
    company: "Eleven Brokers"
  },
  {
    icon: Target,
    value: "30 dias",
    label: "Negócio fechado do zero",
    company: "Áquilas (Inauguração)"
  },
  {
    icon: Trophy,
    value: "Top #1 nas pesquisas",
    label: "Superou portais imobiliários",
    company: "Império Nobre"
  }
];

export function Authority() {
  return (
    <section className="py-24 bg-dark relative">
      <div className="container mx-auto px-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Quem criou esse curso trabalha <span className="text-primary">dentro de imobiliárias</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                A <strong className="text-white">Dominus</strong> é uma assessoria de crescimento para imobiliárias. Não vendemos pacote, não vendemos promessa. Trabalhamos dentro da operação: <span className="text-white">do anúncio ao atendimento, do lead à venda.</span>
              </p>
              <p>
                O Método Ads Imobiliário é o resultado de anos de gestão real de campanhas para de diferentes portes e regiões do Brasil.
              </p>
            </div>
            <div className="mt-8">
               <img 
                src="/logo-institucional-white.png" 
                alt="Dominus Institucional" 
                className="h-12 object-contain opacity-80" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-dark-lighter border border-gray-800 p-6 rounded-2xl flex items-center gap-6 shadow-lg hover:border-primary/50 transition-colors"
              >
                <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                  <stat.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                  <p className="text-primary text-sm font-semibold mt-1">— {stat.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}