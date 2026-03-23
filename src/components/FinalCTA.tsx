import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary pt-24 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-dark p-10 md:p-16 rounded-[2.5rem] shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Você pode continuar investindo em anúncio sem método. <br className="hidden md:block" />
            <span className="text-primary">Ou pode aprender a fazer certo.</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            A concorrência não está esperando. Enquanto você adia, ela estrutura. Enquanto você testa sem método, <strong className="text-white">ela vende.</strong>
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="w-full md:w-auto md:min-w-[400px] text-lg uppercase tracking-wide">
              Quero acesso agora
            </Button>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 font-medium">
              <span>Acesso imediato</span>
              <span className="hidden sm:inline">•</span>
              <span>Único voltado para mercado Imobiliário</span>
              <span className="hidden sm:inline">•</span>
              <span>Garantia 7 dias</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/80 text-sm border-t border-white/20 pt-8">
          <div>
            &copy; {new Date().getFullYear()} Dominus. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="https://dominusmkt.com/termos-e-condicoes/" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="https://dominusmkt.com/politica-de-privacidade/" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </section>
  );
}