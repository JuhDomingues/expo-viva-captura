import balaioLogo from "@/assets/Logo Balaio.png";

export const BalaioOffer = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 sm:py-3 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src={balaioLogo}
            alt="Logo Podcast do Balaio"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
          />
          <div className="text-center">
            <p className="font-semibold text-sm sm:text-base lg:text-lg">
              OFERTA ESPECIAL em parceria com o <span className="font-bold">Podcast do Balaio</span>
            </p>
          </div>
        </div>
      </div>

      {/* Subtle animation background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
    </div>
  );
};