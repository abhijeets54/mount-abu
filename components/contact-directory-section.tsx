"use client"

const officers = [
  { name: "श्री आयुष्वत आचार्य", post: "आयुक्त", department: "Department" },
  { name: "श्री नवदीप सिंह राजपुरोहित", post: "सहायक अभियंता", department: "Department" },
  { name: "श्री ललित कुमार माथुर", post: "सहायक अभियंता", department: "Department" },
  { name: "श्री लक्ष्मण कुमार", post: "कनिष्ठ अभियंता (सिविल)", department: "Department" },
  { name: "श्री गजेन्द्र सिंह", post: "कनिष्ठ अभियंता (विद्युत)", department: "Department" },
  { name: "श्री महेन्द्र कुमार बंजारा", post: "राजस्व निरीक्षक", department: "Department" },
  { name: "श्री प्रमोद चन्देल", post: "सहायक राजस्व निरीक्षक", department: "Department" },
  { name: "श्री रमेश चन्द्र रोहिण", post: "वरिष्ठ सहायक", department: "Department" },
]

const officersRight = [
  { name: "श्री पंकज माथुर", post: "कनिष्ठ सहायक", department: "Department" },
  { name: "श्रीमती नीता राणा", post: "कनिष्ठ सहायक", department: "Department" },
  { name: "श्री धीरजमल कुमावत", post: "कनिष्ठ सहायक", department: "Department" },
  { name: "सुश्री शिल्पा बिष्ट", post: "कनिष्ठ सहायक", department: "Department" },
  { name: "श्री आदिमान", post: "कनिष्ठ सहायक", department: "Department" },
  { name: "सुश्री आशा कंवर", post: "कनिष्ठ सहायक", department: "Department" },
  { name: "श्री कुशल", post: "कनिष्ठ सहायक", department: "Department" },
  { name: "श्री राजकिशोर शर्मा", post: "नाकेवर", department: "Department" },
]

export default function ContactDirectorySection() {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(92,82,70,0.8), rgba(92,82,70,0.85)), url('/mount-abu-rocky-hills-sunset-golden-hour.jpg')`,
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-yellow-400 uppercase tracking-[0.2em] text-sm font-medium">CONTACT DIARY</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal text-white mt-3 max-w-4xl mx-auto leading-tight">
            Find The Right Municipal Officer And Contact Number In One Place.
          </h2>
        </div>

        {/* Tables */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Table */}
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-yellow-400 text-black">
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Post</th>
                  <th className="px-4 py-3 text-left font-semibold">Department</th>
                </tr>
              </thead>
              <tbody>
                {officers.map((officer, index) => (
                  <tr
                    key={index}
                    className={`border-b border-white/10 ${index % 2 === 0 ? "bg-black/20" : "bg-transparent"}`}
                  >
                    <td className="px-4 py-3 text-white text-sm">{officer.name}</td>
                    <td className="px-4 py-3 text-white/80 text-sm">{officer.post}</td>
                    <td className="px-4 py-3 text-white/60 text-sm">{officer.department}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-yellow-400 text-black">
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Post</th>
                  <th className="px-4 py-3 text-left font-semibold">Department</th>
                </tr>
              </thead>
              <tbody>
                {officersRight.map((officer, index) => (
                  <tr
                    key={index}
                    className={`border-b border-white/10 ${index % 2 === 0 ? "bg-black/20" : "bg-transparent"}`}
                  >
                    <td className="px-4 py-3 text-white text-sm">{officer.name}</td>
                    <td className="px-4 py-3 text-white/80 text-sm">{officer.post}</td>
                    <td className="px-4 py-3 text-white/60 text-sm">{officer.department}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
