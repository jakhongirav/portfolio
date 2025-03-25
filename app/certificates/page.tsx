import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

const certificates = [
  {
    title: "IOS App Development with Swift",
    issuer: "Frontend Masters",
    date: "Nov 2024",
    link: "https://drive.google.com/file/d/1zVYmyFfXO9afFIKMjGvurNGilJWIE2mg/view?usp=sharing",
  },
  {
    title: "Introduction to Node.js, v3",
    issuer: "Frontend Masters",
    date: "Feb 2025",
    link: "https://drive.google.com/file/d/18V___pg5aOgygazGPlpOxBX69k1jxzxN/view?usp=sharing",
  },
  {
    title: "API Design in Node.js, v4",
    issuer: "Frontend Masters",
    date: "Mar 2025",
    link: "https://drive.google.com/file/d/1oKqhChQZ-5s9imOPehHJwLAn0TVkV_7Z/view?usp=sharing",
  },

  // Add more certificates here
];

export default function CertificatesPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container px-6 mx-auto py-20 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-8">
          Certificates
        </h2>
        <p className="text-zinc-400 mb-6">
          A collection of certifications showcasing my expertise and learning
          journey.
        </p>
        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <Card key={index}>
              <div className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
                <Link
                  href={cert.link}
                  target="_blank"
                  className="mt-4 md:mt-0 text-zinc-200 hover:text-zinc-50 border border-zinc-500 px-4 py-2 rounded-lg text-sm hover:bg-zinc-900 transition-all"
                >
                  View Certificate
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
