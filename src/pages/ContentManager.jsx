import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import TableComponent from "../components/TableComponent";
import Pagination from "../components/Pagination";
import Download from "../components/Download";
import { FaSpinner } from "react-icons/fa";
import Header from "../components/Header";

const ContentManager = () => {
  const [contentType, setContentType] = useState("posts");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const rowsPerPage = 10;
  const columns = contentType === "posts" ? ["ID", "Title"] : ["ID", "Name"];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${contentType}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
       
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    setCurrentPage(1);
  }, [contentType]);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const lastIndex = currentPage * rowsPerPage;

  const displayedData = data.slice(startIndex , lastIndex);

 
  return (
    <div className="p-6  flex justify-center flex-col gap-x-8">
      <Header/>
      <Dropdown onSelect={setContentType} />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
            <FaSpinner className="animate-spin w-20 h-20 text-violet-700" />
        </div>
        ) :
        <TableComponent columns={columns} data={displayedData}
        totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
           />
      }
      
      <Download data={displayedData} columns={columns} />
    </div>
  );
};

export default ContentManager;
