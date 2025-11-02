import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import balaioLogo from "@/assets/Logo Balaio.png";
import vivaLogo from "@/assets/Logo Viva Academy.png";
import bgHeroImage from "@/assets/BG pc expo crista.png";
import { Sparkles, Gift, Users, CheckCircle2, Star } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for Mautic form success
    const checkFormSuccess = setInterval(() => {
      const successMessage = document.getElementById('mauticform_formbalaioexpo_message');
      if (successMessage && successMessage.textContent?.trim()) {
        clearInterval(checkFormSuccess);
        setTimeout(() => {
          navigate("/obrigado");
        }, 1500);
      }
    }, 500);

    return () => clearInterval(checkFormSuccess);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgHeroImage})` }}
        />

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* USA Flag themed decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-[#B22234]/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-20 h-20 bg-[#3C3B6E]/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-[#B22234]/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-[#3C3B6E]/20 rounded-full blur-xl animate-pulse" />

        <div className="container relative mx-auto px-4 py-12 md:py-20">
          {/* Logos */}
          <div className="flex flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            <img
              src={vivaLogo}
              alt="Viva Academy"
              className="h-12 md:h-24 w-auto object-contain max-w-[120px] md:max-w-[280px]"
            />
            <span className="text-lg md:text-2xl font-bold text-muted-foreground">+</span>
            <img
              src={balaioLogo}
              alt="Podcast Balaio"
              className="h-12 md:h-24 w-auto object-contain max-w-[120px] md:max-w-[280px]"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/90 rounded-full mb-6 animate-bounce">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="font-bold text-white">Oferta Exclusiva</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-2xl">
              Seu Caminho para os EUA 🇺🇸 Começa Aqui!
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto drop-shadow-lg">
              Aprenda tudo sobre imigração para os Estados Unidos com 60% de desconto na Viva Academy!
            </p>

            {/* USA Stars decoration */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Star className="w-5 h-5 text-[#B22234] fill-[#B22234]" />
              <Star className="w-5 h-5 text-[#3C3B6E] fill-[#3C3B6E]" />
              <Star className="w-5 h-5 text-[#B22234] fill-[#B22234]" />
              <Star className="w-5 h-5 text-[#3C3B6E] fill-[#3C3B6E]" />
              <Star className="w-5 h-5 text-[#B22234] fill-[#B22234]" />
            </div>

            {/* Discount Badge */}
            <div className="relative inline-block mb-12">
              <div className="absolute inset-0 bg-primary blur-2xl opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-r from-primary to-secondary p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
                <Gift className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                <div className="text-6xl md:text-8xl font-black text-primary-foreground mb-2">60%</div>
                <div className="text-2xl font-bold text-primary-foreground">DE DESCONTO</div>
                <div className="text-sm text-primary-foreground/90 mt-2">Na assinatura da Viva Academy</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-colors">
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Cursos Exclusivos</h3>
                <p className="text-muted-foreground text-sm">Acesso a todo conteúdo premium da plataforma</p>
              </Card>
              
              <Card className="p-6 border-2 border-secondary/20 hover:border-secondary transition-colors">
                <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Comunidade Ativa</h3>
                <p className="text-muted-foreground text-sm">Conecte-se com outros líderes e criadores</p>
              </Card>
              
              <Card className="p-6 border-2 border-accent/20 hover:border-accent transition-colors">
                <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Suporte Especial</h3>
                <p className="text-muted-foreground text-sm">Mentoria e acompanhamento personalizado</p>
              </Card>
            </div>
          </div>

          {/* Form Section */}
          <Card className="max-w-md mx-auto p-8 shadow-2xl border-2 border-primary/20">
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Garanta Seu Desconto Agora!
            </h2>

            <style dangerouslySetInnerHTML={{__html: `
              .mauticform-field-hidden { display:none }
              #mauticform_wrapper_formbalaioexpo .mauticform_wrapper { max-width: 100%; margin: 0 auto; }
              #mauticform_wrapper_formbalaioexpo .mauticform-row { margin-bottom: 20px; }
              #mauticform_wrapper_formbalaioexpo .mauticform-label { font-size: 0.9em; font-weight: 600; margin-bottom: 8px; display: block; }
              #mauticform_wrapper_formbalaioexpo .mauticform-input { width: 100%; padding: 0.75rem; border: 1px solid hsl(var(--border)); background: hsl(var(--background)); border-radius: 0.375rem; box-sizing: border-box; font-size: 0.9rem; }
              #mauticform_wrapper_formbalaioexpo .mauticform-input:focus { outline: none; ring: 2px; ring-color: hsl(var(--ring)); }
              #mauticform_wrapper_formbalaioexpo .mauticform-button { width: 100%; height: 3.5rem; font-size: 1.125rem; font-weight: 700; background: linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary))); color: hsl(var(--primary-foreground)); border: none; border-radius: 0.375rem; cursor: pointer; transition: opacity 0.3s; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); }
              #mauticform_wrapper_formbalaioexpo .mauticform-button:hover { opacity: 0.9; }
              #mauticform_wrapper_formbalaioexpo .mauticform-errormsg { color: hsl(var(--destructive)); font-size: 0.875rem; margin-top: 4px; }
              #mauticform_wrapper_formbalaioexpo .mauticform-message { color: hsl(var(--primary)); margin-bottom: 10px; font-weight: 600; text-align: center; }
              #mauticform_wrapper_formbalaioexpo .mauticform-error { color: hsl(var(--destructive)); margin-bottom: 10px; text-align: center; }
            `}} />

            <div id="mauticform_wrapper_formbalaioexpo" className="mauticform_wrapper">
              <form autoComplete="false" role="form" method="post" action="https://mkt.vivaacademy.co/form/submit?formId=2" id="mauticform_formbalaioexpo" data-mautic-form="formbalaioexpo" encType="multipart/form-data">
                <div className="mauticform-error" id="mauticform_formbalaioexpo_error"></div>
                <div className="mauticform-message" id="mauticform_formbalaioexpo_message"></div>
                <div className="mauticform-innerform">
                  <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">

                    <div id="mauticform_formbalaioexpo_nome" className="mauticform-row mauticform-text mauticform-field-1 mauticform-required" data-validate="nome" data-validation-type="text">
                      <label id="mauticform_label_formbalaioexpo_nome" htmlFor="mauticform_input_formbalaioexpo_nome" className="mauticform-label">Nome Completo</label>
                      <input type="text" name="mauticform[nome]" defaultValue="" id="mauticform_input_formbalaioexpo_nome" className="mauticform-input" />
                      <span className="mauticform-errormsg" style={{display:'none'}}>Esse campo é obrigatório!</span>
                    </div>

                    <div id="mauticform_formbalaioexpo_email" className="mauticform-row mauticform-email mauticform-field-2 mauticform-required" data-validate="email" data-validation-type="email">
                      <label id="mauticform_label_formbalaioexpo_email" htmlFor="mauticform_input_formbalaioexpo_email" className="mauticform-label">E-mail</label>
                      <input type="email" name="mauticform[email]" defaultValue="" id="mauticform_input_formbalaioexpo_email" className="mauticform-input" />
                      <span className="mauticform-errormsg" style={{display:'none'}}>Esse campo é obrigatório!</span>
                    </div>

                    <div id="mauticform_formbalaioexpo_telefone" className="mauticform-row mauticform-tel mauticform-field-3 mauticform-required" data-validate="telefone" data-validation-type="tel">
                      <label id="mauticform_label_formbalaioexpo_telefone" htmlFor="mauticform_input_formbalaioexpo_telefone" className="mauticform-label">WhatsApp</label>
                      <input type="tel" name="mauticform[telefone]" defaultValue="" id="mauticform_input_formbalaioexpo_telefone" className="mauticform-input" />
                      <span className="mauticform-errormsg" style={{display:'none'}}>Esse campo é obrigatório!</span>
                    </div>

                    <div id="mauticform_formbalaioexpo_submit" className="mauticform-row mauticform-button-wrapper mauticform-field-4">
                      <button className="mauticform-button" name="mauticform[submit]" value="1" id="mauticform_input_formbalaioexpo_submit" type="submit">QUERO MEU DESCONTO DE 60%</button>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="mauticform[formId]" id="mauticform_formbalaioexpo_id" value="2" />
                <input type="hidden" name="mauticform[return]" id="mauticform_formbalaioexpo_return" value="" />
                <input type="hidden" name="mauticform[formName]" id="mauticform_formbalaioexpo_name" value="formbalaioexpo" />
              </form>
            </div>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Ao se cadastrar, você concorda em receber comunicações sobre ofertas especiais.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
