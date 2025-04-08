import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  KeyRound,
  Mail,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Shield,
  AlertCircle,
} from "lucide-react";
import Footer from "../components/Footer";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [verificationMethod, setVerificationMethod] = useState<
    "email" | "phone"
  >("email");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  // Mock user data (in real app, this would come from your auth context/API)
  const userEmail = "nishan.khan@northsouth.edu";
  const userPhone = "01748815225";

  const validatePasswords = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.oldPassword) {
      newErrors.oldPassword = "Current password is required";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePasswords()) return;

    setLoading(true);
    // Simulate API call to verify old password
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate password verification (in real app, this would be an API call)
    const currentPassword = "pass"; // This would come from your backend
    if (formData.oldPassword !== currentPassword) {
      setErrors({ oldPassword: "Current password is incorrect" });
      setLoading(false);
      return;
    }

    setLoading(false);
    // Move to verification method selection
    setStep(2);
  };

  const handleSendOTP = async () => {
    setLoading(true);
    // Simulate API call to send OTP
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setStep(3);
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      setErrors({ otp: "Please enter the OTP" });
      return;
    }

    setLoading(true);
    // Simulate API call to verify OTP and change password
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setStep(4);
  };

  const handleFinish = () => {
    navigate("/dashboard");
  };

  const maskEmail = (email: string) => {
    const [username, domain] = email.split("@");
    return `${username.charAt(0)}${"*".repeat(
      username.length - 2
    )}${username.charAt(username.length - 1)}@${domain}`;
  };

  const maskPhone = (phone: string) => {
    return `+880 ${phone.slice(-4).padStart(phone.length, "*")}`;
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="flex-1">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto p-3 md:p-6 space-y-4 md:space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="p-4 md:p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Section - Progress */}
                <div className="lg:w-1/4">
                  <div className="sticky top-24">
                    <div className="space-y-4">
                      {[
                        { number: 1, title: "Password Details" },
                        { number: 2, title: "Verification Method" },
                        { number: 3, title: "OTP Verification" },
                        { number: 4, title: "Confirmation" },
                      ].map((item) => (
                        <div
                          key={item.number}
                          className={`flex items-center space-x-3 ${
                            step >= item.number
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-400 dark:text-gray-600"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              step >= item.number
                                ? "bg-blue-100 dark:bg-blue-900/30"
                                : "bg-gray-100 dark:bg-gray-800"
                            }`}
                          >
                            {step > item.number ? "✓" : item.number}
                          </div>
                          <span className="font-medium">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Section - Forms */}
                <div className="lg:w-3/4">
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-yellow-800 dark:text-yellow-300">
                            Password Requirements
                          </h3>
                          <ul className="mt-2 text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                            <li>• At least 8 characters long</li>
                            <li>• Contains at least one uppercase letter</li>
                            <li>• Contains at least one number</li>
                            <li>• Contains at least one special character</li>
                          </ul>
                        </div>
                      </div>

                      <form
                        onSubmit={handlePasswordSubmit}
                        className="space-y-6"
                      >
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label
                              htmlFor="oldPassword"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                              Current Password
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                              </div>
                              <input
                                type="password"
                                id="oldPassword"
                                value={formData.oldPassword}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    oldPassword: e.target.value,
                                  })
                                }
                                className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                                  errors.oldPassword
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                                    : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                                } dark:bg-gray-700 dark:text-white`}
                              />
                            </div>
                            {errors.oldPassword && (
                              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                {errors.oldPassword}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label
                              htmlFor="newPassword"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                              New Password
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <KeyRound className="h-5 w-5 text-gray-400" />
                              </div>
                              <input
                                type="password"
                                id="newPassword"
                                value={formData.newPassword}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    newPassword: e.target.value,
                                  })
                                }
                                className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                                  errors.newPassword
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                                    : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                                } dark:bg-gray-700 dark:text-white`}
                              />
                            </div>
                            {errors.newPassword && (
                              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                {errors.newPassword}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="confirmPassword"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                              Confirm New Password
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Shield className="h-5 w-5 text-gray-400" />
                              </div>
                              <input
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    confirmPassword: e.target.value,
                                  })
                                }
                                className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                                  errors.confirmPassword
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                                    : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                                } dark:bg-gray-700 dark:text-white`}
                              />
                            </div>
                            {errors.confirmPassword && (
                              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                {errors.confirmPassword}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full sm:w-auto flex justify-center items-center px-6 py-2.5 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                          >
                            {loading
                              ? "Verifying..."
                              : "Continue to Verification"}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-gray-800 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="pb-4">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Choose Verification Method
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Select how you would like to receive your
                            verification code
                          </p>
                        </div>

                        <div className="pt-4">
                          <div className="space-y-4">
                            <button
                              onClick={() => {
                                setVerificationMethod("email");
                                handleSendOTP();
                              }}
                              className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                            >
                              <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="ml-4 text-left">
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    Email Verification
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {maskEmail(userEmail)}
                                  </p>
                                </div>
                              </div>
                              <ArrowLeft className="h-5 w-5 text-gray-400" />
                            </button>

                            <button
                              onClick={() => {
                                setVerificationMethod("phone");
                                handleSendOTP();
                              }}
                              className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                            >
                              <div className="flex items-center">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                  <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div className="ml-4 text-left">
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    SMS Verification
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {maskPhone(userPhone)}
                                  </p>
                                </div>
                              </div>
                              <ArrowLeft className="h-5 w-5 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="max-w-md mx-auto">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Enter Verification Code
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          We've sent a code to your{" "}
                          {verificationMethod === "email" ? "email" : "phone"}
                        </p>
                        <p className="text-sm text-gray-900 dark:text-white font-medium mt-1">
                          {verificationMethod === "email"
                            ? maskEmail(userEmail)
                            : maskPhone(userPhone)}
                        </p>
                      </div>

                      <form onSubmit={handleVerifyOTP} className="space-y-6">
                        <div>
                          <label htmlFor="otp" className="sr-only">
                            Verification Code
                          </label>
                          <input
                            type="text"
                            id="otp"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => {
                              const value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              setOtp(value);
                              if (errors.otp) setErrors({});
                            }}
                            className={`block w-full px-3 py-3 text-center text-3xl tracking-widest border rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                              errors.otp
                                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                                : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                            } dark:bg-gray-700 dark:text-white`}
                            placeholder="000000"
                          />
                          {errors.otp && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                              {errors.otp}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col space-y-4">
                          <button
                            type="submit"
                            disabled={loading || otp.length !== 6}
                            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                          >
                            {loading
                              ? "Verifying..."
                              : "Verify and Change Password"}
                          </button>

                          <button
                            type="button"
                            onClick={handleSendOTP}
                            disabled={loading}
                            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Didn't receive the code? Send again
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="max-w-md mx-auto text-center">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Password Changed Successfully
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Your password has been changed successfully. Please use
                        your new password the next time you log in.
                      </p>

                      <button
                        onClick={handleFinish}
                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        Return to Dashboard
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
