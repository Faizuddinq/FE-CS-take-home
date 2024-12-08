import Pagination from "./Pagination";


const TableComponent = ({ columns, data, totalPages, currentPage, onPageChange }) => {
    return (
      <div className="overflow-x-auto rounded-lg shadow w-full bg-white p-4 space-y-2">
        <p className=' p-2 font-semibold text-left '>Displaying Content</p>
        <table className="w-full border">
          <thead className="bg-gray-100 text-left">
            <tr>
              {columns.map((col) => (
                <th key={col} className="p-2 border">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id} className={`hover:bg-gray-200 h-12 ${index%2==0?'bg-gray-50':'bg-gray-100'}`}>
                {columns.map((col) => (
                  <td key={col} className="p-2 border">{row[col.toLowerCase()]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      </div>
    );
  };
  
  export default TableComponent;
  