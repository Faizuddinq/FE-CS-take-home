const Dropdown = ({ onSelect }) => {
  return (
    <div className="mb-4 lg:w-1/6 bg-white p-2 mt-4 shadow rounded-lg ">
     
      <select
        id="content-type"
        className="p-2 border bg-gray-100 rounded-lg w-full "
        onChange={(e) => onSelect(e.target.value)}
        defaultValue="posts"
      >
        <option value="" className="bg-gray-100" disabled>Select content type</option>
        <option value="posts" className="bg-gray-100 rounded-full p-4">Posts</option>
        <option value="comments" className="bg-gray-100 hover:bg-purple-100 ">Comments</option>
      </select>
    </div>
  );
};

export default Dropdown;



