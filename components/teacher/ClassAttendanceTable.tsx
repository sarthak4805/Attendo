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
    <div className="flex flex-col gap-4">
      {classAttendance.map((item, index) => (
        <div 
          key={index}
          className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
              {item.section}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 leading-tight">{item.class}</h4>
              <p className="text-xs text-slate-500 font-medium">{item.year} • {item.totalStudents} Students</p>
            </div>
          </div>
          <div className="text-right">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
              parseInt(item.avgAttendance) > 90 ? 'bg-emerald-100 text-emerald-600' : 
              parseInt(item.avgAttendance) > 85 ? 'bg-indigo-100 text-indigo-600' : 
              'bg-amber-100 text-amber-600'
            }`}>
              {item.avgAttendance}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
