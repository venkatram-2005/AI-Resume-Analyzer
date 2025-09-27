import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { Link } from "react-router-dom";
import { FaGithub, FaCircle, FaInfoCircle } from "react-icons/fa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Job Sphere Resume Analyzer" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}

      <section className="main-section">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mx-auto">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white text-center rounded-xl py-12 sm:py-16 px-4">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
              Upload Your Resume for AI-Powered Feedback
            </p>
            <p className="mb-6 sm:mb-8 max-w-xl mx-auto text-base sm:text-lg md:text-xl font-light px-2 sm:px-3">
              Get instant analysis and tips to improve your resume.
            </p>

            <div className="flex flex-col items-center justify-center mt-3 gap-3 sm:gap-4">
              <Link
                to="/upload"
                className="primary-button w-fit text-lg sm:text-xl font-semibold"
              >
                Upload Resume
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Snapshot Section */}
      <div className="w-full mx-auto mt-6 sm:mt-8 text-center md:w-10/12 px-4">
        <div className="relative z-0 w-full mt-6 sm:mt-8">
          <div className="relative overflow-hidden shadow-2xl rounded-lg">
            <div className="flex items-center justify-between px-3 sm:px-4 bg-gradient-to-r from-blue-800 to-blue-900 h-10 sm:h-11 rounded-t-lg">
              <div className="flex space-x-1 sm:space-x-1.5">
                <FaCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                <FaCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                <FaCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
              </div>
              <FaInfoCircle className="text-white hover:text-gray-300 transition duration-300 transform hover:rotate-45 text-sm sm:text-base" />
            </div>
            <img
              className="object-contain sm:object-cover w-full h-auto rounded-b-lg transition duration-300 transform hover:scale-105"
              src="/hero-SnapShot.png"
              alt="Dashboard"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12 sm:mt-16 lg:mt-20" aria-labelledby="footer-heading">
        <div className="border-t border-gray-900/10 pt-6 sm:pt-8 px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs sm:text-sm leading-5 text-gray-500 text-center sm:text-left">
            &copy; 2025 JobSphere. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
