import React from 'react';

const TaskFilter = ({ filter, onFilterChange }) => {
  const tabs = [
    { id: 'all', label: 'Todas' },
    { id: 'completed', label: 'Completadas' },
    { id: 'pending', label: 'Pendientes' },
  ];

  return (
    <div className="flex justify-center space-x-4 border-b">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onFilterChange(tab.id)}
          className={`px-4 py-2 ${
            filter === tab.id ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-blue-600'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;



// import React from 'react';

// const TaskFilter = ({ filter, onFilterChange }) => {
//   const tabs = [
//     { id: 'all', label: 'Todas' },
//     { id: 'completed', label: 'Completadas' },
//     { id: 'pending', label: 'Pendientes' },
//   ];

//   return (
//     <div className="flex justify-center items-center space-x-4">
//       {tabs.map((tab) => (
//         <button
//           key={tab.id}
//           onClick={() => onFilterChange(tab.id)}
//           className={`px-4 py-2 text-sm font-semibold rounded-lg transition duration-300 
//             ${
//               filter === tab.id
//                 ? 'bg-blue-600 text-white shadow-md'
//                 : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
//             }`}
//         >
//           {tab.label}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default TaskFilter;


