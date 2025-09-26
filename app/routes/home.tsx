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
  return <main>
    {/* <Navbar /> */}

    <section className="main-section">
      <div className='container 2xl:px-20 mx-auto'>
        <div className='bg-gradient-to-r from-blue-800 to-blue-900 text-white text-center mx-2 rounded-xl py-16'>
          <p className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-white'>Upload Your Resume for AI-Powered Feedback</p>
          <p className='mb-8 max-w-xl mx-auto text-xl font-light px-3 py-3'>
              Get instant analysis and tips to improve your resume.</p>

          <div className="flex flex-col items-center justify-center mt-3 gap-4">
            <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
              Upload Resume
            </Link>
          </div>
        </div>
    </div>
      
    </section>


          <div className="w-full mx-auto mt-5 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 bg-gradient-to-r from-blue-800 to-blue-900 h-11 rounded-t-xl">
                  <div className="flex space-x-1.5">
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                  </div>
                  <FaInfoCircle className="text-white hover:text-gray-300 transition duration-300 transform hover:rotate-45" />
                </div>
                <img
                  className="object-cover py-2 px-4 rounded-b-lg transition duration-300 transform hover:scale-105"
                  src="/hero-SnapShot.png"
                  alt="Dashboard"
                />
              </div>
            </div>
          </div>
          <footer className="bg-white" aria-labelledby="footer-heading">
              <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 p-5 flex justify-between">
                <p className="text-xs leading-5 text-gray-500">
                   &copy; 2025 JobSphere. All rights reserved.
                </p>
              </div>
           </footer>
          
  </main>
}
