import React from 'react';

const PublicMerchants = () => {
  return (
    <div className="w-screen min-h-screen bg-green-950 text-white p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-center mt-20">
          <h1 className="text-4xl font-bold text-white">Espace Commerçants EcoDeli</h1>
          <p className="text-lg text-white mt-4">
            Simplifiez vos livraisons et optimisez vos opérations grâce à notre plateforme dédiée.
          </p>
        </header>

        <section className="bg-yellow-500 rounded-2xl p-6 shadow-lg">
            <svg style={{ width: '80px', height: '80px' }}
            viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><path d="M908.056 171.944c-1.512 40.128-35.696 72.24-77.88
                 72.24-42.192 0-76.456-32.112-77.88-72.24H597.024c-1.512 40.128-35.64 72.24-77.88 
                 72.24-42.192 0-76.344-32.112-77.784-72.24H284.584c-1.408 40.128-35.656 72.24-77.848 
                 72.24-42.264 0-76.384-32.112-77.856-72.24H0v680.104h128.88c1.472-40.136 35.592-72.24 
                 77.856-72.24 42.2 0 76.44 32.112 77.848 72.24h156.768c1.44-40.136 35.592-72.24 77.784-72.24
                  42.24 0 76.368 32.112 77.88 72.24h155.264c1.432-40.136 35.688-72.24 77.88-72.24 42.184 
                  0 76.368 32.112 77.88 72.24H1024V171.944h-115.944z" fill="#F5B146"></path>
                  <path d="M173.96 519.384h640.424v131.328H173.96z" fill="#134700"></path>
                  <path d="M173.96 379.704h279.168v65.68H173.96z" fill="#d18400"></path>
                  <path d="M174.36 408.184h278.296v37.192H174.36z" fill="#e69d00"></path>
                  <path d="M174.36 583.48h640.896v67.232H174.36z" fill="#255c00"></path></g>
                  </svg>
          <h2 className="text-2xl font-semibold text-white mb-4">Gestion du Contrat</h2>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Accédez à votre contrat avec EcoDeli à tout moment</li>
            <li>Suivez les conditions, mises à jour et renouvellements</li>
            <li>Recevez des notifications en cas de modifications importantes</li>
          </ul>
        </section>

        <section className="bg-yellow-500 rounded-2xl p-6 shadow-lg">
            <svg style={{ width: '80px', height: '80px' }}
            viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><path d="M377.024 55.68c40.424 40.368 127 169.416 100.72
                195.664-26.088 26.24-155.24-60.424-195.592-100.76-40.368-40.328-51.816-94.352-25.6-120.536C282.696
                 3.848 336.72 15.352 377.024 55.68zM646.952 55.68c-40.368 40.368-126.928 169.416-100.728
                  195.664 26.16 26.24 155.304-60.424 195.664-100.76 40.36-40.328 51.808-94.352 25.592-120.536C741.336
                   3.848 687.312 15.352 646.952 55.68z" fill="#295200"></path>
                   <path d="M477.744 251.344c-26.088 26.24-155.24-60.424-195.592-100.76-40.368-40.328-51.816-94.352-25.6-120.536M546.224 
                   251.344c26.16 26.24 155.304-60.424 195.664-100.76 40.36-40.328 51.808-94.352
                    25.592-120.536" fill="#1d6100"></path>
                    <path d="M952.656 927.456c0 44.496-36.056 80.544-80.544
                     80.544H151.856c-44.456 0-80.512-36.056-80.512-80.544V319.984c0-44.512
                      36.056-80.568 80.512-80.568h720.256c44.496 0 80.544 36.056 80.544 80.568v607.472z" fill="#EDA02F"></path>
                      <path d="M840.608 239.408H151.856c-44.456 0-80.512 36.056-80.512 80.568v607.472c0 
                      44.496 36.056 80.544 80.512 80.544h153.208l535.544-768.584z" fill="#F5B146"></path>
                      <path d="M544.264 1007.84l-0.752-761.016c0-17.408-14.088-31.504-31.504-31.504s-31.504 
                      14.096-31.504 31.504l0.736 761.016h63.024z" fill="#d1ca00"></path>
                      <path d="M512.016 1007.84h32.248V247.592a31.496 31.496 0 0 0-31.504-31.504" fill="#dbc900"></path></g>
                      </svg>
          <h2 className="text-2xl font-semibold text-white mb-4">Gestion des Annonces</h2>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Créez et publiez des annonces de livraison ou de transport</li>
            <li>Suivez leur statut et visualisez les réponses des livreurs</li>
            <li>Modifiez ou désactivez vos annonces à tout moment</li>
          </ul>
        </section>

        <section className="bg-yellow-500 rounded-2xl p-6 shadow-lg">
             <svg style={{ width: '80px', height: '80px' }}
          viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path d="M54.296 225.944h841.8v670.336H54.296z" fill="#F6AB20"></path>
            <path d="M812.904 225.944H54.296v670.328h330.472z" fill="#F5A517"></path>
            <path d="M984.52 940.952H76.544a31.472 31.472 0 0 1-31.488-31.488V123.288c0-17.4 
            14.08-31.488 31.488-31.488s31.488 14.08 31.488 31.488v754.696h876.496a31.472 31.472 
            0 0 1 31.48 31.488 31.472 31.472 0 0 1-31.488 31.48z" fill="#2b5700"></path>
            <path d="M260.632 692.352a22.896 22.896 0 0 1-14.872-40.304l116.176-111.912a22.704
             22.704 0 0 1 21.256-4.584l193.424 56.232 154.808-241.2a22.896 22.896 0 1 1 38.568 
             24.728L605.92 630.936a22.888 22.888 0 0 1-25.664 9.616L382.272 582.96 275.504
             686.848a22.768 22.768 0 0 1-14.872 5.504z" fill="#e6bf00"></path></g>
             </svg>
          <h2 className="text-2xl font-semibold text-white mb-4">Facturation des Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Consultez les prestations facturées par EcoDeli</li>
            <li>Recevez automatiquement vos factures mensuelles</li>
            <li>Historique complet disponible depuis votre tableau de bord</li>
          </ul>
        </section>

        <section className="bg-yellow-500 rounded-2xl p-6 shadow-lg">
            <svg style={{ width: '80px', height: '80px' }}
            viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><path d="M908.056 171.944c-1.512 40.128-35.696 72.24-77.88
                 72.24-42.192 0-76.456-32.112-77.88-72.24H597.024c-1.512 40.128-35.64 72.24-77.88 
                 72.24-42.192 0-76.344-32.112-77.784-72.24H284.584c-1.408 40.128-35.656 72.24-77.848 
                 72.24-42.264 0-76.384-32.112-77.856-72.24H0v680.104h128.88c1.472-40.136 35.592-72.24 
                 77.856-72.24 42.2 0 76.44 32.112 77.848 72.24h156.768c1.44-40.136 35.592-72.24 77.784-72.24
                  42.24 0 76.368 32.112 77.88 72.24h155.264c1.432-40.136 35.688-72.24 77.88-72.24 42.184 
                  0 76.368 32.112 77.88 72.24H1024V171.944h-115.944z" fill="#F5B146"></path>
                  <path d="M173.96 519.384h640.424v131.328H173.96z" fill="#134700"></path>
                  <path d="M173.96 379.704h279.168v65.68H173.96z" fill="#d18400"></path>
                  <path d="M174.36 408.184h278.296v37.192H174.36z" fill="#e69d00"></path>
                  <path d="M174.36 583.48h640.896v67.232H174.36z" fill="#255c00"></path></g>
                  </svg>
          <h2 className="text-2xl font-semibold text-white mb-4">Paiements</h2>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Suivi des paiements effectués pour les services reçus</li>
            <li>Visualisation des échéances et paiements en attente</li>
            <li>Justificatifs de paiement disponibles au téléchargement</li>
          </ul>
        </section>

        <footer className="text-center text-white mt-10">
          <p>EcoDeli accompagne les commerçants dans une logistique plus simple, locale et responsable.</p>
        </footer>
      </div>
    </div>
  );
};

export default PublicMerchants;
