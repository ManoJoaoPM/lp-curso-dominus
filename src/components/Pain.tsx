import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export function Pain() {
  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="space-y-8 text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-12">
            <p>
              Você já investiu em anúncio e ficou olhando para eles pensando <span className="text-white italic">"por que não está funcionando?"</span>
            </p>
            <p>
              Já pausou campanha que estava gerando lead porque <span className="text-primary">os corretores não conseguiam converter.</span>
            </p>
            <p>
              Já contratou alguém para fazer tráfego e, no final do mês, não sabia dizer se valeu a pena.
            </p>
            <div className="w-24 h-1 bg-primary/30 mx-auto my-8 rounded-full"></div>
            <p className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
              O problema raramente é o anúncio. <br className="hidden md:block" />
              <span className="text-primary">O problema é que ninguém te ensinou o sistema inteiro.</span>
            </p>
          </div>

          <Button variant="outline" size="lg" className="w-full md:w-auto md:min-w-[350px]">
            Quero aprender o método completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}