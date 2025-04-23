import Hero from "@/components/Hero";
import BiomimicryCategories from "@/components/BiomimicryCategories";
import FeaturedExamples from "@/components/FeaturedExamples";
import NatureGallery from "@/components/NatureGallery";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Что такое биомимикрия?</h2>
            <p className="text-lg text-gray-700">
              Биомимикрия — это подход к инновациям, который стремится устойчиво решать человеческие проблемы, 
              подражая проверенным временем шаблонам и стратегиям природы. 
              Это наука, изучающая природные модели и затем имитирующая эти конструкции и процессы 
              для решения человеческих проблем.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8">Ключевые категории</h3>
          <BiomimicryCategories />
        </div>
      </section>
      
      <Separator />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FeaturedExamples />
        </div>
      </section>
      
      <Separator />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <NatureGallery />
        </div>
      </section>
      
      <section className="py-12 bg-biomimicry-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Исследуйте мир биомимикрии</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нам в исследовании удивительных инноваций, вдохновленных природой, 
            и узнайте, как биомимикрия меняет наш подход к дизайну и технологиям.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
