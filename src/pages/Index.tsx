import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { WaterStatCard } from "@/components/WaterStatCard";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ShareButtons } from "@/components/ShareButtons";
import { WaveTransition } from "@/components/WaveTransition";
import droughtImage from "@/assets/drought-portugal.jpg";
import wasteImage from "@/assets/water-waste-car.jpg";
import hopeImage from "@/assets/hope-planting.jpg";
import dropImage from "@/assets/drop-earth.jpg";
import { ArrowDown, Droplet } from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Cena 1 - O Silêncio da Seca */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${droughtImage})`,
              filter: 'grayscale(30%) brightness(0.7)',
            }}
          />
        </ParallaxSection>
        
        <div className="absolute inset-0 bg-gradient-to-b from-drought-dark/70 via-drought/50 to-drought-dark/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-up drop-shadow-2xl">
            A Vida em Cor de Azul
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl md:text-3xl text-white/90 font-light leading-relaxed animate-fade-up delay-200 drop-shadow-lg">
              Mais de <span className="font-bold text-destructive-foreground">2 bilhões de pessoas</span> no mundo vivem com escassez de água.
            </p>
            
            <p className="text-xl md:text-3xl text-white/90 font-light leading-relaxed animate-fade-up delay-300 drop-shadow-lg">
              Em Portugal, <span className="font-bold text-destructive-foreground">70% do território</span> já enfrenta risco elevado de seca prolongada.
            </p>
            
            <p className="text-2xl md:text-4xl text-white font-medium animate-fade-up delay-500 drop-shadow-lg mt-12">
              E, mesmo assim… a gente continua desperdiçando.
            </p>
          </div>

          <div className="mt-16 animate-fade-up delay-700">
            <ArrowDown className="w-8 h-8 md:w-12 md:h-12 text-white/70 mx-auto animate-bounce" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 text-xs md:text-sm text-white/50 p-4 text-center z-20">
          Fontes: ONU Água 2024, Agência Portuguesa do Ambiente 2025
        </div>
        
        <WaveTransition color="hsl(30 15% 25%)" position="bottom" />
      </section>

      {/* Cena 2 - O Desperdício Invisível */}
<section className="relative py-20 md:py-32 bg-gradient-to-b from-drought-dark to-drought overflow-hidden">
  <WaveTransition color="hsl(200 95% 45%)" position="bottom" />
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
        O Desperdício Invisível
      </h2>
      <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
        Parece pouco… Mas quando milhões fazem o mesmo, o planeta sente.<br />
        <span className="font-semibold text-destructive-foreground">
          Cada gota perdida é uma vida em risco.
        </span>
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
      <WaterStatCard
        icon="/chuveiro.png"
        title="Banho de 15 minutos"
        value="135"
        unit="litros"
        description="Água potável desperdiçada em um único banho demorado"
        delay={0}
      />
      <WaterStatCard
        icon="/torneira.png"
        title="Torneira aberta"
        value="12"
        unit="litros/min"
        description="Escovar dentes com a torneira ligada desperdiça esta quantidade por minuto"
        delay={200}
      />
      <WaterStatCard
        icon="/maquina.png"
        title="Máquina de lavar"
        value="200"
        unit="litros"
        description="Consumo médio de água em um único ciclo de lavagem"
        delay={400}
      />
    </div>

    <div className="relative rounded-2xl overflow-hidden shadow-dramatic mb-12 max-w-5xl mx-auto">
      <img 
        src={wasteImage} 
        alt="Desperdício de água lavando carro"
        className="w-full h-64 md:h-96 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-drought-dark/90 via-transparent to-transparent flex items-end">
        <div className="p-6 md:p-8 text-white">
          <p className="text-2xl md:text-3xl font-bold mb-2">30% desperdiçado</p>
          <p className="text-base md:text-lg">Portugal perde quase um terço da água potável distribuída nas redes públicas</p>
        </div>
      </div>
    </div>

    <div className="text-center text-sm md:text-base text-white/60">
      Fontes: PORDATA, ERSAR, Instituto Nacional de Estatística (INE, 2024)
    </div>
  </div>
</section>


      {/* Cena 3 - O Poder da Mudança */}
      <section className="relative py-20 md:py-32 bg-gradient-water overflow-hidden">
        <WaveTransition color="hsl(200 85% 75%)" position="bottom" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-water-glow rounded-full blur-3xl animate-ripple" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hope rounded-full blur-3xl animate-ripple delay-500" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              O Poder da Mudança
            </h2>
            <div className="space-y-6 text-xl md:text-2xl text-white/90 leading-relaxed">
              <p>Poupar não é deixar de viver.</p>
              <p className="text-2xl md:text-3xl font-semibold">
                É cuidar do que nos mantém vivos.
              </p>
              <p>É fazer do azul — a cor da vida — algo que nunca desapareça.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-glow group">
              <img 
                src={hopeImage} 
                alt="Plantando esperança"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hope-light/90 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-xl md:text-2xl font-bold">Pequenas ações, grande impacto</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-glow border border-white/20">
              <Droplet className="w-12 h-12 md:w-16 md:h-16 text-water-light mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Como você pode ajudar:</h3>
              <ul className="space-y-4 text-base md:text-lg text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-water-light text-xl">✓</span>
                  <span>Feche a torneira ao escovar os dentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-water-light text-xl">✓</span>
                  <span>Reduza o tempo de banho para 5-7 minutos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-water-light text-xl">✓</span>
                  <span>Use regador em vez de mangueira</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-water-light text-xl">✓</span>
                  <span>Recolha água da chuva</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-water-light text-xl">✓</span>
                  <span>Conserte torneiras que pingam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cena 4 - A Cor da Vida */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-sky overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full">
            <img 
              src={dropImage} 
              alt="Gota refletindo a Terra"
              className="w-full h-full object-contain animate-drop opacity-90"
            />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl animate-fade-in">
              A cor da vida começa<br />em tons de azul
            </h2>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center text-xl md:text-2xl font-medium animate-fade-in delay-500">
              <span className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-white border border-white/30">
                #PoupeÁgua
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-white border border-white/30">
                #AVidaEmCorDeAzul
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-white border border-white/30">
                #CadaGotaConta
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-white border border-white/30">
                #PortugalSustentável
              </span>
            </div>

            <div className="pt-8 animate-fade-in delay-700">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Compartilhe esta mensagem
              </h3>
              <ShareButtons />
            </div>

            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in delay-1000">
              Juntos podemos fazer a diferença. Cada gota conta, cada ação importa.<br />
              O futuro do planeta está em nossas mãos — e em cada gota que poupamos hoje.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-drought-dark text-white/70 py-8 text-center text-sm">
        <p>© 2025 A Vida em Cor de Azul - Campanha de Conscientização</p>
        <p className="mt-2">Dados baseados em fontes oficiais: ONU, ERSAR, INE, Agência Portuguesa do Ambiente</p>
      </footer>
    </div>
  );
};

export default Index;
