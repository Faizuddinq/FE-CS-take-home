import React from "react";

const Download = ({ data, columns }) => {
  const handleDownload = () => {
    if (!data || !data.length) {
      alert("No data available to download!");
      return;
    }

    const csvContent = [
      columns.join(","), 
      ...data.map((row) => 
        columns.map((col) => row[col.toLowerCase()] || "").join(",")
      ), 
    ].join("\n");

    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.csv";

    link.click();

    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-violet-300 text-gray-900 font-semibold rounded hover:bg-violet-400"
      >
        Download
      </button>
    </div>
  );
};

export default Download;
