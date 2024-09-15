const ContactComponent = () => (
  <div className="p-7 font-[cursive]">
    <h1 className="text-3xl font-bold text-center mb-4 text-gray-600">
      Contact Us
    </h1>
    <form className="flex flex-col items-center">
      <input
        className="border border-gray-600 rounded-md p-2 m-2"
        type="text"
        placeholder="Name"
      />
      <textarea
        className="border border-gray-600 rounded-md py-2 px-5 m-2"
        type="text"
        placeholder="Your message"
      />
      <button className="bg-orange-500 rounded-lg text-white p-2 hover:bg-orange-600">
        Submit
      </button>
    </form>
  </div>
);

export default ContactComponent;
