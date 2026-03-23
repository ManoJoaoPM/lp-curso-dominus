import { motion } from 'framer-motion';

export function Guarantee() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img 
              src="/garantia-7dias.png" 
              alt="Selo de Garantia de 7 Dias" 
              className="w-full max-w-[350px]"
            />
          </motion.div>

          {/* Right Side: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Zero risco da sua parte.
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 font-light">
              Você tem <strong className="text-white">7 dias</strong> para assistir as primeiras aulas e decidir se vale a pena. 
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              Se não for o que esperava, devolvemos 100% do valor. Sem burocracia, sem pergunta.
            </p>

            <div className="inline-block bg-primary/10 border border-primary/20 px-8 py-4 rounded-xl">
              <span className="text-xl md:text-2xl font-bold text-primary tracking-wide">
                O risco é nosso. O método é seu.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
