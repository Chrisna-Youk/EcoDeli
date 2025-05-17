import { useTranslation } from "react-i18next";

const HomeDelivrer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white pt-0 h-screen w-[100vw-18rem] ml-72 py-10">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="flex flex-col sm:ml-20">
        <div className="">
          <p className="text-black text-xl font-semibold">Welcome Enzo</p>
          <p>You can access to all your informations via this dashboard</p>
        </div>
          <div className="flex flex-row mt-12 gap-8 flex-wrap">
            <div className="text-black rounded-2xl shadow-xl p-8 max-w-140 min-w-140 h-80 bg-[url(https://img.freepik.com/free-vector/happy-family-travelling-by-car-with-camping-equipment-top_74855-10751.jpg?uid=R200608619&ga=GA1.1.1825997693.1745525756&semt=ais_hybrid&w=740)] bg-cover">
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
      </div>
    </div>
  );
};

export default HomeDelivrer;
