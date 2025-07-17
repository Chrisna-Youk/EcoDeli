import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const CheckpointList = () => {
  const http = useAuth();

  const { data: checkpoints } = useQuery({
    queryKey: ["Checkpoints"],
    queryFn: async () => {
      const response = await http.get(`/checkpoint/read`);
      return response.data.data;
    },
  });

  console.log(checkpoints);
  const handleDeleteCheckpoint = (e) => {
    e.preventDefault();
    alert("CP removed");
  };
  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-72 py-10 w-full overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[80vw] md:w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Checkpoints disponible
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Adresse
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Action
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {checkpoints?.map((checkpoint) => (
                <tr key={checkpoint.id} className="hover:bg-zinc-100">
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {checkpoint.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {checkpoint.address}
                  </td>

                  <td className="px-4 py-3">
                    <Link
                      to={`/admin/checkpoint/${checkpoint.id}`}
                      className="text-blue-600 hover:underline text-sm cursor-pointer"
                    >
                      Consulter
                    </Link>
                  </td>

                  <td className="px-4 py-3">
                    <button
                      onClick={(e) => handleDeleteCheckpoint(e)}
                      className="text-red-600 hover:underline text-sm cursor-pointer"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckpointList;
