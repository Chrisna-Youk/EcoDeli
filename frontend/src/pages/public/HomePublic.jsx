import { useTranslation } from "react-i18next";

const HomePublic = () => {
  const { t } = useTranslation();
  return (
    <div className="font-[Poppins] text-white bg-green-950 overflow-y-hidden">
      <div className="w-screen h-100 bg-[url(truck-background.jpg)] bg-cover bg-center">

      </div>
      <div className="p-30 bg-green-950">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-amber-200">EcoDeli, la livraison collaborative et solidaire.</h3>
          <p className="text-lg mt-5 text-center">"EcoDeli propose une nouvelle façon d’envoyer et de recevoir des colis en s’appuyant sur le crowdshipping : 
            des particuliers livrent pour d'autres, lors de leurs trajets. 
            Une solution économique, écologique et humaine qui favorise le lien social et le pouvoir d’achat. 
            Au-delà des colis, EcoDeli permet aussi d’accéder à des services du quotidien : 
            courses, trajets, transferts, aides ponctuelles… Une plateforme pensée pour simplifier la vie, ensemble."</p>
        </div>
      </div>
      <div className="flex flex-row p-10">
        <div className="h-70 w-[50vw] bg-[url(handshake-bg.jpg)] bg-cover bg-center rounded-2xl"></div>
        <div className="bg-green-950 text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-amber-200">Particuliers</h3>
          <p className="text-lg mt-5 text-center p-3">Faites livrer vos colis ou rendez service pendant vos trajets. Économique, solidaire et écoresponsable.</p>
        </div>
      </div>
       <div className="flex flex-row-reverse p-10">
        <div className="h-70 w-[50vw] bg-[url(delivery-bg.jpg)] bg-cover bg-center rounded-2xl"></div>
        <div className="bg-green-950 text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-amber-200">Livreurs</h3>
          <p className="text-lg mt-5 text-center p-3">Optimisez vos trajets en livrant des colis ou en rendant des services. Simple, flexible et rémunérateur.</p>
        </div>
      </div>
      <div className="flex flex-row p-10">
        <div className="h-70 w-[50vw] bg-[url(provider-bg.jpg)] bg-cover bg-center rounded-2xl"></div>
        <div className="bg-green-950 text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-amber-200">Prestataires</h3>
          <p className="text-lg mt-5 text-center p-3">Proposez vos services du quotidien à une communauté locale. Visibilité, proximité et complément de revenus garantis.</p>
        </div>
      </div>
      <div className="flex flex-row-reverse p-10">
        <div className="h-70 w-[50vw] bg-[url(commercant-bg.jpg)] bg-cover bg-center rounded-2xl"></div>
        <div className="bg-green-950 text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-amber-200">Commerçants</h3>
          <p className="text-lg mt-5 text-center p-3">Offrez la livraison à vos clients sans logistique complexe. Gagnez en visibilité, fidélisez, et boostez vos ventes localement.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePublic;
