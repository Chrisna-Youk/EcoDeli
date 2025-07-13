import { useQuery } from '@tanstack/react-query';
import useAuth from "../../hooks/useAuth";

const HomeAdmin = () => {
  const http = useAuth();

  const { data: users = []} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await http.get(`/user/read/`);
      return response.data.data;
    },
  });

  const totalUsers = users.length;

  const providersUsers = users.filter((user) => user.role === 'provider').length;
  const delivrerUsers = users.filter((user) => user.role === 'delivrer').length;
  const customersUsers = users.filter((user) => user.role === 'customer').length;
  const merchantsUsers = users.filter((user) => user.role === 'merchant').length;

  const lastUsers = [...users].slice(-5).reverse();

  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-72 py-10 w-screen overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>

      <div className="flex flex-col sm:ml-20">
        <div>
          <p className="text-black text-xl font-semibold">Welcome</p>
          <p>You can access to all EcoDeli's informations via this dashboard</p>
        </div>

        <div className="flex flex-row mt-12 gap-25 flex-wrap">
          <div className="text-black rounded-2xl shadow-xl p-8 2xl:w-140 md:w-140 xl:w-90 h-80 bg-[url(https://img.freepik.com/free-photo/delivery-truck-with-location-pin-tracking-shipping-fast-delivery-car-deliver-express-delivery-transportation-logistics-concept-background-3d-rendering-illustration_56104-2063.jpg?t=st=1752068677~exp=1752072277~hmac=99a519b68c4919d2b70d36b9882904446d2f611b3d7d7779472eb9a1a981880f&w=900)] bg-cover">
            <div className="text-4xl font-bold">🧾 {totalUsers}</div>
            <div className="text-xl mt-3">Comptes créés</div>
          </div>

          <div className="flex flex-row gap-8 flex-wrap">
            <div className="flex flex-col gap-6">
              <div className="p-8 bg-yellow-400 hover:bg-yellow-600 hover:bg-opacity-80 h-37 2xl:w-68 md:w-68 xl:w-55 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <h2 className="text-sm font-semibold text-white">🧍‍♂️ Clients</h2>
                <p className="text-white mt-2 text-4xl">{customersUsers}</p>
              </div>
              <div className="p-8 bg-yellow-400 hover:bg-yellow-600 hover:bg-opacity-80 h-37 2xl:w-68 md:w-68 xl:w-55 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <h2 className="text-sm font-semibold text-white">📦 Livreurs</h2>
                <p className="text-white mt-2 text-4xl">{delivrerUsers}</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="p-8 bg-yellow-400 hover:bg-yellow-600 hover:bg-opacity-80 h-37 2xl:w-68 md:w-68 xl:w-55 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <h2 className="text-sm font-semibold text-white">🛠️ Prestataires</h2>
                <p className="text-white mt-2 text-4xl">{providersUsers}</p>
              </div>
              <div className="p-8 bg-yellow-400 hover:bg-yellow-600 hover:bg-opacity-80 h-37 2xl:w-68 md:w-68 xl:w-55 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <h2 className="text-sm font-semibold text-white">🏪 Commerçants</h2>
                <p className="text-white mt-2 text-4xl">{merchantsUsers}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row mt-12 gap-8 flex-wrap md:flex-col">
          <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[70vw] md:w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Derniers comptes créés
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm text-gray-600">Nom</th>
                    <th className="px-4 py-2 text-left text-sm text-gray-600">Email</th>
                    <th className="px-4 py-2 text-left text-sm text-gray-600">Role</th>
                    <th className="px-4 py-2 text-left text-sm text-gray-600">Statut</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {lastUsers.map((user, index) => (
                    <tr key={index} className="hover:bg-yellow-100 cursor-grab">
                      <td className="px-4 py-3 text-sm text-gray-800 rounded-l-2xl">{user.firstName} {user.lastName}</td>
                      <td className="px-4 py-3 text-sm text-gray-800">{user.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-800">{user.role}</td>
                      <td className="px-4 py-3 text-sm rounded-r-2xl">
                        <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        user.active == 1
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                    >
                        {user.active == 1
                        ? 'Actif' 
                        :'Inactif'
                        }

                    </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
