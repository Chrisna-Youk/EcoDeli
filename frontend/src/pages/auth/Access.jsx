import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutate } from "../../hooks/useMutate";

const Access = () => {
  const [error, setError] = useState("");

  const params = useParams();
  const accessMutation = useMutate("/auth/access", ["Access"]);

  const confirmationHandler = (e) => {
    e.preventDefault();

    const data = {
      verifyToken: params.verifyToken,
      code: e.target.code.value,
    };

    setError("");
    const body = JSON.stringify(data);

    accessMutation.mutate(body, {
      onError: (error) => {
        const message = error?.response?.data?.message;
        setError(message);
      },
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };
  return (
    <div className="bg-white w-screen h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <div className="p-10 bg-gray-100 rounded-lg shadow-xl mb-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Un email vous a été envoyé
        </h2>
        <form onSubmit={(e) => confirmationHandler(e)}>
          <div className="mb-4">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              Code
            </label>
            <input
              type="text"
              id="code"
              name="code"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Code de vérification"
            />
          </div>
          {error && (
            <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 cursor-pointer"
          >
            Confirmer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Access;
