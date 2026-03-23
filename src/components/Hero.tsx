import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Play } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/90 z-10"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] z-0"></div>
        {/* Orange glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] z-0"></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6 flex justify-center">
            <img 
              src="/logo-d.png" 
              alt="Dominus Logo" 
              className="h-16 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,102,0,0.5)]" 
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            O método completo de anúncios online para imobiliárias que querem <span className="text-primary relative inline-block">resultado<div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/40 rounded-full"></div></span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Em 52 aulas, você aprende a estruturar Meta Ads, Google Ads e Social Media para imobiliária — <span className="text-white font-semibold">do zero a venda.</span>
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="w-full md:w-auto md:min-w-[400px] text-lg uppercase tracking-wide group">
              Quero acesso ao Método Ads Imobiliário
            </Button>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400 mt-4 font-medium">
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-primary" />
                <span>Clientes nos 4 cantos do Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <Play size={16} className="text-primary" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}