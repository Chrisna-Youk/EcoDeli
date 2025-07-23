import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAuthContext from "../../../contexts/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const ChatListProvider = () => {
  const http = useAuth();
  const authContext = useAuthContext().auth;
  const { id: providerId } = jwtDecode(authContext);

  const { data: chats } = useQuery({
    queryKey: ["Chats", providerId],
    queryFn: async () => {
      const response = await http.get(`/chat/provider/read/${providerId}`);
      return response.data.data;
    },
  });

  console.log(chats);
  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-80 py-10 w-full overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="bg-white p-6 rounded-2xl shadow-md xl:w-[80vw] md:w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Mes discussions
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Client
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Service
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Heure
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {chats?.map((chat) => {
                const date = new Date(chat.createdAt);
                const formattedDate = date.toLocaleDateString("fr-FR");
                const formattedTime = date.toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                });

                return (
                  <tr key={chat.id} className="hover:bg-zinc-300">
                    <td className="px-4 py-3 text-sm text-gray-800">
                      {chat?.customer?.firstName && chat?.customer?.lastName
                        ? chat.customer.firstName + " " + chat.customer.lastName
                        : "Client inconnu"}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800">
                      {chat.service.title ?? "Service inconnu"}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800">
                      {formattedDate}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800">
                      {formattedTime}
                    </td>
                    <td className="px-4 py-3 flex gap-3">
                      <Link
                        to={`/provider/chat/${chat?.customer.id}/${providerId}/${chat?.serviceId}`}
                        className="text-blue-600 hover:underline text-sm cursor-pointer"
                      >
                        Consulter
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChatListProvider;
