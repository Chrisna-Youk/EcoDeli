import { useTranslation } from "react-i18next";

const HomeDelivrer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white pt-0 h-screen ml-72 py-10 w-screen overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md over"></div>
      <div className="flex flex-col sm:ml-20">
        <div className="">
          <p className="text-black text-xl font-semibold">Welcome Enzo</p>
          <p>You can access to all your informations via this dashboard</p>
        </div>
          <div className="flex flex-row mt-12 gap-8 flex-wrap">
            <div className="text-black rounded-2xl shadow-xl p-8 2xl:w-140 md:w-140 xl:w-90 h-80 bg-[url(https://img.freepik.com/free-vector/happy-family-travelling-by-car-with-camping-equipment-top_74855-10751.jpg?uid=R200608619&ga=GA1.1.1825997693.1745525756&semt=ais_hybrid&w=740)] bg-cover">
              <div className="text-xl font-bold">🚚 1337</div>
              <div className="text-md">Total Deliveries</div>
            </div>
            <div className="flex flex-row gap-8 flex-wrap">
              <div className="flex flex-col gap-6">
                <a
                  href="#"
                  className="p-8 bg-blue-300 hover:bg-blue-400 hover:bg-opacity-80 h-37 w-68 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <h2 className="text-sm font-semibold text-white">📦 Orders of the Day</h2>
                  <p className="text-white mt-2">You have 12 deliveries scheduled for today.</p>
                </a>
                <a
                  href="#"
                  className="p-8 bg-emerald-300 hover:bg-emerald-400 hover:bg-opacity-80 h-37 w-68 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <h2 className="text-sm font-semibold text-white">✅ Deliveries Completed</h2>
                  <p className="text-white mt-2">8 orders already delivered.</p>
                </a>
              </div>
              <div className="flex flex-col gap-6 flex-wrap">
                <a
                  href="#"
                  className="p-8 bg-blue-500 hover:bg-blue-600 hover:bg-opacity-80 h-37 w-68 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <h2 className="text-sm font-semibold text-white">🕒 Next Delivery</h2>
                  <p className="text-white mt-2">Rue de Paris, 2:30 PM</p>
                </a>
                <a
                  href="#"
                  className="p-8 bg-yellow-500 hover:bg-yellow-600 hover:bg-opacity-80 h-37 w-68 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <h2 className="text-sm font-semibold text-white">💰 Earnings of the Day</h2>
                  <p className="text-white mt-2">You earned €72.50 today.</p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex xl:flex-row mt-12 gap-8 flex-wrap md:flex-col">
            <div class="bg-white p-6 rounded-2xl shadow-md xl:w-[30vw] md:w-full">
              <h2 class="text-xl font-semibold text-gray-800 mb-4">Derniers Encaissements</h2>
              <div class="overflow-x-auto">
                <table class="min-w-full">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="px-4 py-2 text-left text-sm text-gray-600">Client</th>
                      <th class="px-4 py-2 text-left text-sm text-gray-600">Montant</th>
                      <th class="px-4 py-2 text-left text-sm text-gray-600">Méthode</th>
                      <th class="px-4 py-2 text-left text-sm text-gray-600">Statut</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    <tr className="hover:bg-zinc-300">
                      <td class="px-4 py-3 text-sm text-gray-800">Jean Dupont</td>
                      <td class="px-4 py-3 text-sm text-gray-800">€18,50</td>
                      <td class="px-4 py-3 text-sm text-gray-800">Carte</td>
                      <td class="px-4 py-3 text-sm">
                        <span class="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Payé</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-300">
                      <td class="px-4 py-3 text-sm text-gray-800">Marie Lefèvre</td>
                      <td class="px-4 py-3 text-sm text-gray-800">€12,00</td>
                      <td class="px-4 py-3 text-sm text-gray-800">Espèces</td>
                      <td class="px-4 py-3 text-sm">
                        <span class="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">En attente</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-300">
                      <td class="px-4 py-3 text-sm text-gray-800">Marie Lefèvre</td>
                      <td class="px-4 py-3 text-sm text-gray-800">€12,00</td>
                      <td class="px-4 py-3 text-sm text-gray-800">Espèces</td>
                      <td class="px-4 py-3 text-sm">
                        <span class="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">En attente</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-300">
                      <td class="px-4 py-3 text-sm text-gray-800">Marie Lefèvre</td>
                      <td class="px-4 py-3 text-sm text-gray-800">€12,00</td>
                      <td class="px-4 py-3 text-sm text-gray-800">Espèces</td>
                      <td class="px-4 py-3 text-sm">
                        <span class="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">En attente</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-300">
                      <td class="px-4 py-3 text-sm text-gray-800">Marie Lefèvre</td>
                      <td class="px-4 py-3 text-sm text-gray-800">€12,00</td>
                      <td class="px-4 py-3 text-sm text-gray-800">Espèces</td>
                      <td class="px-4 py-3 text-sm">
                        <span class="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">En attente</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            
            <div class="bg-white p-6 rounded-2xl shadow-md xl:w-[30vw] md:w-full">
              <h2 class="text-xl font-semibold text-gray-800 mb-4">Dernières Livraisons</h2>
              <div class="overflow-x-auto">
                <table class="min-w-full">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="px-4 py-2 text-left text-sm text-gray-600">Client</th>
                      <th class="px-4 py-2 text-left text-sm text-gray-600">Lieu</th>
                      <th class="px-4 py-2 text-left text-sm text-gray-600">Heure</th>
                      <th class="px-4 py-2 text-left text-sm text-gray-600">Statut</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    <tr className="hover:bg-zinc-300">
                      <td class="px-4 py-3 text-sm text-gray-800">Calo</td>
                      <td class="px-4 py-3 text-sm text-gray-800">Paris</td>
                      <td class="px-4 py-3 text-sm text-gray-800">19:30</td>
                      <td class="px-4 py-3 text-sm">
                        <span class="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Livré</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-300">
                      <td class="px-4 py-3 text-sm text-gray-800">Jean</td>
                      <td class="px-4 py-3 text-sm text-gray-800">Fresne</td>
                      <td class="px-4 py-3 text-sm text-gray-800">16:30</td>
                      <td class="px-4 py-3 text-sm">
                        <span class="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Livré</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-300">
                      <td class="px-4 py-3 text-sm text-gray-800">Chris</td>
                      <td class="px-4 py-3 text-sm text-gray-800">Paris</td>
                      <td class="px-4 py-3 text-sm text-gray-800">14:15</td>
                      <td class="px-4 py-3 text-sm">
                        <span class="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Livré</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-300">
                      <td class="px-4 py-3 text-sm text-gray-800">Enzo</td>
                      <td class="px-4 py-3 text-sm text-gray-800">Taverny</td>
                      <td class="px-4 py-3 text-sm text-gray-800">11:00</td>
                      <td class="px-4 py-3 text-sm">
                        <span class="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Livré</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HomeDelivrer;
