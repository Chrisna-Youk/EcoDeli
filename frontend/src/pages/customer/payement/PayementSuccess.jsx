import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const http = useAuth();
  const [error, setError] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const session_id = queryParams.get("session_id");

  const hasExecutedRef = useRef(false);

  const mutationCreateDelivery = useMutation({
    mutationKey: ["CreateDeliveryCustomer"],
    mutationFn: async (formData) => {
      const response = await http.post(`/announcement/create`, formData);
      return response.data;
    },
  });

  useEffect(() => {
    if (session_id && !hasExecutedRef.current) {
      hasExecutedRef.current = true;

      mutationCreateDelivery.mutate(
        { session_id },
        {
          onError: (err) => {
            const msg = err?.response?.data?.message || "Erreur inconnue";
            setError(msg);
          },
          onSuccess: () => {
            setTimeout(() => {
              navigate("/customer/announcements");
            }, 5000);
          },
        }
      );
    }
  }, [session_id, mutationCreateDelivery, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
      <h1 className="text-3xl font-semibold text-green-600 mb-4">
        Merci pour votre paiement !
      </h1>
      <p className="text-lg mb-8">
        {error ? (
          <span className="text-red-600">{error}</span>
        ) : (
          <>
            Votre annonce a bien été créée.
            <br />
            Vous allez être redirigé automatiquement.
          </>
        )}
      </p>
      <button
        onClick={() => navigate("/customer/announcements")}
        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Aller à mes annonces maintenant
      </button>
    </div>
  );
}
