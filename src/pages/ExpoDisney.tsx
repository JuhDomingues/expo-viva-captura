import { HeroSection } from "@/components/disney/HeroSection";
import { FormSection } from "@/components/disney/FormSection";
import { RegulamentSection } from "@/components/disney/RegulamentSection";
import { Footer } from "@/components/disney/Footer";
import { CountdownTimer } from "@/components/disney/CountdownTimer";

const ExpoDisney = () => {
  return (
    <div className="min-h-screen">
      <CountdownTimer />
      <HeroSection />
      <div id="form-section">
        <FormSection />
      </div>
      <RegulamentSection />
      <Footer />
    </div>
  );
};

export default ExpoDisney;
