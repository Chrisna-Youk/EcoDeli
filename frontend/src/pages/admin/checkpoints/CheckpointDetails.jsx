import useAuth from "../../../hooks/useAuth";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const CheckpointDetails = () => {
  const params = useParams();
  const http = useAuth();

  const { data: checkpointSteps } = useQuery({
    queryKey: ["CheckpointSteps"],
    queryFn: async () => {
      const response = await http.get(
        `/step/read/checkpoint/${params.checkpointId}`
      );
      return response.data.data;
    },
  });

  const mutationConfirmCheckpoint = useMutation({
    mutationKey: ["ConfirmCheckpoint"],
    mutationFn: async (formData) => {
      const response = await http.put(`/step/status/update`, formData);
      return response.data.data;
    },
  });

  const handleConfirmCheckpoint = (e, stepUuid, announcementId, count) => {
    e.preventDefault();
    mutationConfirmCheckpoint.mutate(
      {
        status: "Livré",
        stepUuid: stepUuid,
        announcementId: announcementId,
        count: count,
      },
      {
        onError: (error) => {
          alert(error.response.data.data.message);
        },
        onSuccess: (data) => {
          alert(data.message);
        },
      }
    );
  };

  console.log(checkpointSteps);
  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-72 py-10 w-full overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[80vw] md:w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Etapes à confirmer
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Prénom
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Nom
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Code à fournir au livreur
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {checkpointSteps?.map((cpStep) => (
                <tr key={cpStep.id} className="hover:bg-zinc-100">
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {cpStep.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {cpStep.provider.firstName}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {cpStep.provider.lastName}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {cpStep.code}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={(e) =>
                        handleConfirmCheckpoint(
                          e,
                          cpStep.uuid,
                          cpStep.announcementId,
                          cpStep.count
                        )
                      }
                      className="text-green-600 hover:underline text-sm cursor-pointer"
                    >
                      Confirmer
                    </button>
                  </td>
                </tr>
              ))}
              {checkpointSteps?.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    Aucune étapes à confirmer pour le moment
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckpointDetails;
