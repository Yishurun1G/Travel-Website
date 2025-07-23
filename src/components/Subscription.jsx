const SubscriptionForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-md p-6 bg-white bg-opacity-80 rounded-xl shadow-lg">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9-7-9-7-9 7 9 7z"></path>
          </svg>
        </div>
        <p className="text-center text-gray-700 mb-4">Subscribe to get information, latest news and other interesting offers about Jadoo</p>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="youremail"
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            Subscribe
          </button>
        </div>
        <div className="absolute bottom-0 right-0 mb-4 mr-4">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;