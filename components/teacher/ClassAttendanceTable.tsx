const classAttendance = [
  {
    class: 'B.Tech CSE',
    year: '1st Year',
    section: 'A',
    totalStudents: 60,
    avgAttendance: '82%',
  },
  {
    class: 'B.Tech CSE',
    year: '2nd Year',
    section: 'B',
    totalStudents: 58,
    avgAttendance: '88%',
  },
  {
    class: 'B.Tech CSE',
    year: '3rd Year',
    section: 'A',
    totalStudents: 55,
    avgAttendance: '91%',
  },
  {
    class: 'B.Tech CSE',
    year: '4th Year',
    section: 'A',
    totalStudents: 52,
    avgAttendance: '85%',
  },
];

export default function ClassAttendanceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold">Class</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Year</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Section</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Students
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Avg Attendance
            </th>
          </tr>
        </thead>

        <tbody>
          {classAttendance.map((item, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-4 py-2">{item.class}</td>
              <td className="px-4 py-2">{item.year}</td>
              <td className="px-4 py-2">{item.section}</td>
              <td className="px-4 py-2">{item.totalStudents}</td>
              <td className="px-4 py-2 font-semibold text-indigo-600">
                {item.avgAttendance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
