import React from 'react';

const ChatCustomer = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 h-150 flex flex-col">
      {/* Chat header */}
      <div className="text-lg font-semibold mb-4">Chat between User A and User B</div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-gray-100 rounded-md">
        {/* Message from User A */}
        <div className="flex justify-start">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg max-w-xs">
            Hello, how can I help you?
          </div>
        </div>

        {/* Message from User B */}
        <div className="flex justify-end">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg max-w-xs">
            I have a question about my order.
          </div>
        </div>

        {/* More messages... */}
      </div>

      {/* Chat input */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatCustomer;
