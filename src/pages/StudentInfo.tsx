import React, { useState } from "react";
import Footer from "../components/Footer";
import { Pencil } from "lucide-react";

export default function StudentInfo() {
  const [activeTab, setActiveTab] = useState("general");

  const studentData = {
    general: {
      fullName: "Md. Nishan Khan",
      studentId: "2121356642",
      enrolledIn: "Bachelor of Science in Computer Science and Engineering",
      curriculumName: "BS in CSE - 130 Credit Curriculum",
      entryItem: "Summer 2021",
      testPasNo: "2460",
      currentStatus: "Enrolled",
      currentCGPA: "3.45",
      creditPassed: "100.00",
      probation: "0",
      major1: "N/A",
      major2: "N/A",
      minor: "N/A",
    },
    personal: {
      cellPhone: "01748815225",
      personalEmail: "iamnishankhan@gmail.com",
      nid: "3762016768",
      birthRegNo: "20022919039113097",
      dateOfBirth: "2002-01-08",
      sex: "M",
      citizenship: "Bangladeshi",
      bloodGroup: "O+",
      maritalStatus: "",
      mailingAddress:
        "PORCHIM MORHAT, SALTHA, SALTHA BAZAR - 7801, FARIDPUR\nSaltha, Faridpur - 7801",
    },
    parent: {
      fatherName: "Md. Abul Bashar Khan",
      motherName: "Nasima Begum",
      guardianName: "",
      parentAddress: "",
      phone: "01718360476",
      mobileNo: "01718360476",
    },
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="flex-1 p-3 md:p-6 flex flex-col justify-center">
        {/* Tabs */}
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setActiveTab("general")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeTab === "general"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            General Information
          </button>
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeTab === "personal"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            Personal & Parent Information
          </button>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-4 md:mt-6">
          {activeTab === "general" ? (
            <div className="p-4 md:p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                General Information
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Full Name
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {studentData.general.fullName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Student ID
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {studentData.general.studentId}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Enrolled In
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {studentData.general.enrolledIn}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Curriculum Name
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {studentData.general.curriculumName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Entry Item
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {studentData.general.entryItem}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Test Pas #
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {studentData.general.testPasNo}
                    </p>
                  </div>
                </div>

                <div className="border-t dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Tentative Academic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Current Status
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.general.currentStatus}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Current CGPA
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.general.currentCGPA}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Credit Passed
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.general.creditPassed}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Probation
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.general.probation}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Major 1
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.general.major1}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Major 2
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.general.major2}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Minor
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.general.minor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  Personal & Parent Information
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Pencil className="w-4 h-4" />
                  Edit Personal Information
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Cell Phone
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.personal.cellPhone}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Personal Email
                      </p>
                      <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                        {studentData.personal.personalEmail}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        NID
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.personal.nid}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Birth Reg No
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.personal.birthRegNo}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Date of Birth
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.personal.dateOfBirth}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Sex
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.personal.sex}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Citizenship
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.personal.citizenship}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Blood Group
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.personal.bloodGroup}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Mailing Address
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white whitespace-pre-line">
                        {studentData.personal.mailingAddress}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Parent Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Father Name
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.parent.fatherName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Mother Name
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.parent.motherName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Phone
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.parent.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Mobile No
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {studentData.parent.mobileNo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
