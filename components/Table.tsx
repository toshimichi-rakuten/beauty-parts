import React from 'react';

interface Column {
  key: string;
  header: string;
  width?: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} style={{ width: col.width }}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .table-container {
          width: 100%;
          overflow-x: auto;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
        }
        .data-table th {
          background: #f5f5f5;
          padding: 12px;
          text-align: left;
          font-weight: bold;
          border-bottom: 2px solid #ddd;
        }
        .data-table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }
        .data-table tr:hover {
          background: #f9f9f9;
        }
      `}</style>
    </>
  );
};

export default Table;
