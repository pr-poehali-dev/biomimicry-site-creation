import Hero from "@/components/Hero";
import FeaturedExamples from "@/components/FeaturedExamples";
import BiomimicryCategories from "@/components/BiomimicryCategories";
import NatureGallery from "@/components/NatureGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="container mx-auto py-16 px-4 space-y-20">
        <BiomimicryCategories />
        
        <FeaturedExamples />
        
        <NatureGallery />
      </div>
    </div>
  );
};

export default Index;
