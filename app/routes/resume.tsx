import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Summary from "~/components/Summary";
import ATS from "~/components/ATS";
import Details from "~/components/Details";
import { convertPdfToImage } from "~/lib/pdf2img";

export const meta = () => ([
  { title: 'JobSphere Resume Analyzer | Review ' },
  { name: 'description', content: 'Detailed overview of your resume' },
])

const Resume = () => {
  const location = useLocation();
  const { feedback, companyName, jobTitle, file } = location.state || {};
  const [imageUrl, setImageUrl] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (file) {
      const resumeUrl = URL.createObjectURL(file);
      setResumeUrl(resumeUrl);

      convertPdfToImage(file).then(result => {
        if (result.imageUrl) {
          setImageUrl(result.imageUrl);
        }
      });
    }
  }, [file]);

  return (
    <main className="!pt-0">
      <nav className="resume-nav">
        <Link to="/" className="back-button">
          <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
          <span className="text-gray-800 text-sm font-semibold">Back to Homepage</span>
        </Link>
      </nav>
      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        {/* PDF Preview (hidden on mobile) */}
        <section className="hidden md:flex feedback-section bg-[url('/images/bg-small.svg')] bg-cover h-[100vh] sticky top-0 items-center justify-center">
          {resumeUrl ? (
            <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-full">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <embed
                  src={resumeUrl}
                  type="application/pdf"
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
              <p>Loading PDF...</p>
            </div>
          )}
        </section>

        <section className="feedback-section">
          <h2 className="text-4xl !text-black font-bold">Resume Review</h2>
          {isClient && feedback ? (
            <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
              <Summary feedback={feedback} />
              <ATS score={feedback.ATS.score || 0} suggestions={feedback.ATS.tips || []} />
              <Details feedback={feedback} />
            </div>
          ) : (
            <img src="/images/resume-scan-2.gif" className="w-full" />
          )}
        </section>
      </div>
    </main>
  )
}

export default Resume;
