import React from 'react';

const PublicCustomers = () => {
  return (
    <div className="w-screen min-h-screen bg-green-950 text-white p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-center mt-20">
          <h1 className="text-4xl font-bold text-white">Bienvenue chez EcoDeli</h1>
          <p className="text-lg text-white mt-4">
            La plateforme collaborative qui révolutionne la livraison et les services du quotidien
          </p>
        </header>

        <section className="bg-yellow-500 rounded-2xl p-6 shadow-lg">
            <svg style={{ width: '80px', height: '80px' }} viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" 
            fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                </g><g id="SVGRepo_iconCarrier"><path d="M425.176 123.4h554.432v424.992H425.176z" fill="#066100">
                </path><path d="M893.832 809.152c47.384 0 85.784-38.392 85.784-85.784V543.624H425.976V241.288l-234.064-0.768L40.92 
                492.192V723.36c0 47.392 38.392 85.784 85.752 85.784h767.16z" fill="#F6B246">
                </path><path d="M893.832 809.152c47.384 0 85.784-38.392 85.784-85.784V603.832H40.92V723.36c0
                 47.392 38.392 85.784 85.752 85.784h767.16z" fill="#ECD4BE">
                </path><path d="M853.728 824.552c0 56.152-45.504 101.592-101.6 
                101.592-56.152 0-101.592-45.448-101.592-101.592 0-56.096 45.448-101.6 101.592-101.6 56.088 0 101.6 45.512 101.6 101.6zM379.584 824.552c0 56.152-45.48 101.592-101.6 101.592s-101.6-45.448-101.6-101.592c0-56.096 45.48-101.6 101.6-101.6s101.6 45.512 101.6 101.6z" fill="#d1ae00">
                </path><path d="M264.192 454.568H62.848l109.128-178.736h92.216z" fill="#E09431">
                </path></g></svg>
          <h2 className="text-2xl font-semibold text-white mb-4">Services de Livraison</h2>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Livraison participative par des particuliers ou des voyageurs</li>
            <li>Prise en charge complète ou partielle du trajet</li>
            <li>Suivi des colis en temps réel</li>
            <li>Assurances et sécurité assurées par EcoDeli</li>
            <li>Service “lâcher de chariot” pour les achats chez nos commerçants partenaires</li>
          </ul>
        </section>

        <section className="bg-yellow-500 rounded-2xl p-6 shadow-lg">
            <svg style={{ width: '80px', height: '80px' }}
            viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" 
            fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
            </g><g id="SVGRepo_iconCarrier">
            <path d="M581.2 191.048V69.168C581.2 30.944 550.128 0 511.968 0a69.176 69.176 0 0 0-69.168 69.168v121.88h138.4z"
            fill="#0f4700"></path>
            <path d="M511.968 191.048h69.24V69.168C581.2 30.944 550.128 0 511.968 0" fill="#305700">
            </path><path d="M910.2 850.056s-32.872-54.68-45.696-93.224c-12.816-38.496-46.096-292.928-46.096-292.928-22.552-166.272-137.288-306.416-306.376-306.416-169.224 0-286.192 144.08-306.384 306.416 0 0-39.736 
            258.768-47.928 292.928-8.192 34.216-43.928 93.224-43.928 93.224h796.408z" fill="#F4A832">
            </path><path d="M511.968 850.056h398.24s-32.872-54.68-45.696-93.224c-12.816-38.496-46.096-292.928-46.096-292.928-22.552-166.272-137.288-306.416-306.376-306.416h-0.072v692.568z" fill="#F39D00">
            </path><path d="M658.376 888.216C658.376 963.216 592.872 1024 512 1024s-146.376-60.784-146.376-135.784" fill="#d1b500">
            </path><path d="M733.968 850.056s-18.328-54.68-25.48-93.224c-7.144-38.496-25.696-292.928-25.696-292.928-12.552-166.272-76.512-306.416-170.76-306.416-94.344
            0-159.552 144.08-170.8 306.416 0 0-22.16 258.768-26.72 292.928-4.56 34.216-24.488 93.224-24.488 93.224h443.944z" fill="#F5B617">
            </path><path d="M511.968 157.48v692.576h222s-18.328-54.68-25.48-93.224c-7.144-38.496-25.696-292.928-25.696-292.928-12.552-166.272-76.512-306.416-170.76-306.416l-0.064-0.008z" fill="#F4A832">
            </path><path d="M511.968 888.216V1024H512c80.872 0 146.376-60.784 146.376-135.784H511.968z" fill="#d1b500">
            </path></g></svg>
          <h2 className="text-2xl font-semibold text-white mb-4">Services à la Personne</h2>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Transport de personnes : rendez-vous, gare, travail, etc.</li>
            <li>Transferts aéroport</li>
            <li>Courses personnalisées livrées à domicile</li>
            <li>Achat de produits spécifiques depuis l’étranger</li>
            <li>Garde d’animaux à domicile</li>
            <li>Petits travaux ménagers et de jardinage</li>
          </ul>
        </section>

        <section className="bg-yellow-500 rounded-2xl p-6 shadow-lg">
            <svg style={{ width: '80px', height: '80px' }}
            viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><path d="M0 0.008h1024v1023.984H0z" fill="#F4F4F4"></path>
                <path d="M978.84 907.376a69.976 69.976 0 0 1-69.968 69.96h-789.52a69.976 69.976 0 0 1-69.968-69.96V210.408a69.984 69.984 0 0 1 69.968-69.968h789.52a69.984 69.984 0 0 1 69.968 69.968v696.968z" fill="#F4A417"></path>
                <path d="M49.384 270.616v636.76a69.976 69.976 0 0 0 69.968 69.96h458.392c76.84-184.088 280.688-706.72 280.688-706.72H49.384z" fill="#F4A417"></path>
                <path d="M49.384 305.304V210.408a69.984 69.984 0 0 1 69.968-69.968h789.52a69.984 69.984 0 0 1 69.968 69.968v94.896H49.384z" fill="#e1b619"></path>
                <path d="M362.12 281.64a60.208 60.208 0 0 1-60.208-60.2V60.216a60.216 60.216 0 0 1 120.416 0v161.216a60.216 60.216 0 0 1-60.208 60.208zM666.112 
                281.64a60.232 60.232 0 0 1-60.208-60.2V60.216A60.24 60.24 0 0 1 666.112 0.008c33.28 0 60.2 26.96 60.2 
                60.208v161.216a60.184 60.184 0 0 1-60.2 60.208z" fill="#005706"></path>
                <path d="M362.12 0.008a60.216 60.216 0 0 1 60.208 60.208v161.216a60.208 60.208 0 0 1-60.208 
                60.2M666.112 0.008c33.28 0 60.2 26.96 60.2 60.208v161.216a60.176 60.176 0 0 1-60.2 60.2" fill="#255c00"></path>
                <path d="M782.52 480.928H221.864a30.08 30.08 0 0 1-30.104-30.104 30.08 30.08 0 0 1 30.104-30.104h560.664a30.08 
                30.08 0 0 1 30.104 30.104 30.096 30.096 0 0 1-30.112 30.104zM507.904 672.832H221.864c-16.64 0-30.104-13.464-30.104-30.104s13.464-30.112 
                30.104-30.112h286.04c16.64 0 30.104 13.472 30.104 30.112s-13.464 30.104-30.104 30.104z" fill="#D98D1B">
                    </path></g></svg>
          <h2 className="text-2xl font-semibold text-white mb-4">Espace Client Personnel</h2>
          <p className="text-white">
            Grâce à votre compte EcoDeli, vous pouvez :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white mt-2">
            <li>Poster une annonce pour un colis ou un service</li>
            <li>Réserver un transport ou une livraison</li>
            <li>Suivre vos commandes et paiements</li>
            <li>Communiquer avec vos prestataires</li>
          </ul>
        </section>

        <footer className="text-center text-white mt-10">
          <p>Rejoignez la communauté EcoDeli et facilitez-vous la vie, tout en aidant les autres !</p>
        </footer>
      </div>
    </div>
  );
};

export default PublicCustomers;
