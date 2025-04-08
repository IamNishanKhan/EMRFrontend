import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  GraduationCap,
  Award,
  Clock,
  Calendar,
  Bell,
  FileText,
  CreditCard,
} from "lucide-react";
import Footer from "../components/Footer";
import userPhoto from "../assets/student/user.jpg";

export default function Dashboard() {
  const [isActivityOpen, setIsActivityOpen] = useState(true);

  const activityData = [
    {
      activity: "Faculty Evaluation",
      semester: "Spring 2025",
      status: "Pending",
      dueDate: "2025-04-15",
    },
    {
      activity: "Course Registration",
      semester: "Summer 2025",
      status: "Upcoming",
      dueDate: "2025-05-01",
    },
    {
      activity: "Midterm Examination",
      semester: "Spring 2025",
      status: "Completed",
      dueDate: "2025-03-15",
    },
    {
      activity: "Tuition Payment",
      semester: "Spring 2025",
      status: "Due",
      dueDate: "2025-03-30",
    },
    {
      activity: "Research Submission",
      semester: "Spring 2025",
      status: "Pending",
      dueDate: "2025-04-20",
    },
  ];

  const academicInfo = {
    student: {
      name: "Md. Nishan Khan",
      id: "2121356642",
      email: "nishan.khan@northsouth.edu",
      program: "Bachelor of Science in Computer Science & Engineering",
      batch: "212",
      admissionYear: "2021",
      status: "Regular",
      cgpa: "3.92",
    },
    currentSemester: {
      name: "Spring 2025",
      credits: "12",
      courses: "4",
      attendance: "95%",
    },
    advisor: {
      name: "Dr. M Abdul Matin",
      designation: "Professor",
      department: "Department of Computer Science & Engineering",
      email: "mohammad.matin@northsouth.edu",
      office: "SAC-915",
      consultationHours: "Sun/Tue 2:00 PM - 4:00 PM",
    },
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="flex-1 p-3 md:p-6 space-y-4 md:space-y-6">
        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-3 md:p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm font-medium opacity-80">
                  Current CGPA
                </p>
                <h3 className="text-lg md:text-2xl font-bold mt-1">
                  {academicInfo.student.cgpa}
                </h3>
              </div>
              <Award className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg p-3 md:p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm font-medium opacity-80">
                  Credits Completed
                </p>
                <h3 className="text-lg md:text-2xl font-bold mt-1">87/130</h3>
              </div>
              <BookOpen className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg shadow-lg p-3 md:p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm font-medium opacity-80">
                  Current Semester
                </p>
                <h3 className="text-lg md:text-2xl font-bold mt-1">
                  {academicInfo.currentSemester.name}
                </h3>
              </div>
              <Calendar className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-lg p-3 md:p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm font-medium opacity-80">
                  Attendance Rate
                </p>
                <h3 className="text-lg md:text-2xl font-bold mt-1">
                  {academicInfo.currentSemester.attendance}
                </h3>
              </div>
              <Clock className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Student Profile */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-2">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                    Student Profile
                  </h2>
                  <span className="px-3 py-1 text-sm font-medium text-emerald-700 bg-emerald-100 rounded-full dark:bg-emerald-900/30 dark:text-emerald-400 w-fit">
                    {academicInfo.student.status}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex justify-center md:block md:w-1/3">
                    <div className="w-32 h-32 md:w-40 md:h-40">
                      <img
                        src={userPhoto}
                        alt="Student"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Full Name
                        </p>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          {academicInfo.student.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Student ID
                        </p>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          {academicInfo.student.id}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Program
                        </p>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          {academicInfo.student.program}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Batch
                        </p>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          {academicInfo.student.batch}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Email
                        </p>
                        <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                          {academicInfo.student.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Admission Year
                        </p>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          {academicInfo.student.admissionYear}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Links Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 md:p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                <a
                  href="#"
                  className="flex items-center p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <FileText className="w-4 h-4 text-blue-500 mr-2" />
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      Course Materials
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      Access lecture notes and resources
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <GraduationCap className="w-4 h-4 text-green-500 mr-2" />
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      Academic Calendar
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      View important academic dates
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <Bell className="w-4 h-4 text-amber-500 mr-2" />
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      Notifications
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      Check important announcements
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <CreditCard className="w-4 h-4 text-violet-500 mr-2" />
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      Payment Portal
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      Manage tuition and fees
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Academic Advisor */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Academic Advisor
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Name
                  </p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    {academicInfo.advisor.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Designation
                  </p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    {academicInfo.advisor.designation}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Department
                  </p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    {academicInfo.advisor.department}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Office
                  </p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    {academicInfo.advisor.office}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Consultation Hours
                  </p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    {academicInfo.advisor.consultationHours}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                    {academicInfo.advisor.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 md:p-6">
            <button
              onClick={() => setIsActivityOpen(!isActivityOpen)}
              className="flex items-center justify-between w-full"
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Recent Activities
              </h2>
              {isActivityOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {isActivityOpen && (
              <div className="mt-4 md:mt-6 -mx-4 md:mx-0 overflow-x-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Activity
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Semester
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Due Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {activityData.map((item, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                          >
                            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                              {item.activity}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                              {item.semester}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                              {item.dueDate}
                            </td>
                            <td className="px-6 py-4 text-sm">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  item.status === "Completed"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                    : item.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                    : item.status === "Due"
                                    ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                }`}
                              >
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
