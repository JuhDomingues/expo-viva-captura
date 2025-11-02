import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Sparkles, ArrowRight } from "lucide-react";

const ThankYouPage = () => {
  const handleVipClick = () => {
    // In a real app, this would redirect to the sales page or WhatsApp group
    window.open("https://chat.whatsapp.com/Ht5EAHR66dm6TQKSusmUDR", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Parabéns! 🎉
          </h1>
          
          <p className="text-xl text-muted-foreground mb-2">
            Você garantiu seu desconto de <span className="font-bold text-primary">60%</span>!
          </p>
          
          <p className="text-muted-foreground">
            Em breve você receberá todas as informações no seu e-mail.
          </p>
        </div>

        {/* VIP Offer Card */}
        <Card className="p-8 md:p-10 border-4 border-primary/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary to-accent opacity-10 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="font-bold text-accent-foreground">Oferta Especial VIP</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Entre para o Grupo VIP Exclusivo!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Tenha acesso antecipado a conteúdos exclusivos, bônus especiais e uma comunidade engajada de líderes cristãos transformando suas plataformas digitais.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Acesso Prioritário</p>
                  <p className="text-sm text-muted-foreground">Seja o primeiro a conhecer novos cursos e materiais</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">Comunidade Exclusiva</p>
                  <p className="text-sm text-muted-foreground">Network com outros líderes e criadores de conteúdo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Bônus Especiais</p>
                  <p className="text-sm text-muted-foreground">Materiais extras e lives exclusivas para membros VIP</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={handleVipClick}
              className="w-full h-16 text-lg font-bold bg-gradient-to-r from-primary via-secondary to-primary hover:opacity-90 transition-opacity shadow-xl group"
            >
              <span>QUERO ENTRAR NO GRUPO VIP</span>
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Você receberá o link da página de vendas e todos os detalhes no grupo VIP
            </p>
          </div>
        </Card>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Dúvidas? Entre em contato conosco pelo WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
