// Reusable Input Field for Name and Email
const InputField = ({ label, type, placeholder }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
    />
  </div>
);

// Reusable Textarea Field for Message
const MessageField = ({ label, placeholder }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <textarea
      rows="5"
      placeholder={placeholder}
      className="w-full p-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition duration-300 resize-none"
    />
  </div>
);

// Note: You would place these helpers outside the main component or in a separate file.