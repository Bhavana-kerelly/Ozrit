"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

export default function OfficeInfrastructureFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-black text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/M1.jpg"
            alt="Office Infrastructure Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Build Smarter Workspaces. <br />Finance Every Corner.
          </h2>
          <p className="text-base mb-6">
            Whether you're setting up your first office or upgrading an existing space, Nihal Finserv provides flexible financing for furniture, IT systems, AV gear, and interiors — all while preserving your capital.
          </p>
          <p className="text-base">
            From 5-seat coworking layouts to 500-seat corporate offices, we help you fund modern, high-functioning work environments.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Images/Mortgage.png"
                alt="Office Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What We Finance
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Modular Furniture & Workstations</li>
              <li>Computers, Laptops, Printers & IT Systems</li>
              <li>AV & Conference Room Equipment</li>
              <li>Office Fit-outs & Interior Design Costs</li>
              <li>Security Cameras & Access Control Systems</li>
              <li>Networking & Cabling Infrastructure</li>
              <li>Reception, Pantry, and Collaboration Areas</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-[#1C1C1C] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Benefits
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Your Partner</span> <br />
              <span className="text-red-500">for Office Infrastructure Finance</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Design, furnish, and equip your workspace without compromising your cash flow. We simplify infrastructure funding.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">No Heavy Upfront Costs</h3>
              <p className="text-gray-400">Create a professional space without large capital expenditure.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tailored Tenures & EMIs</h3>
              <p className="text-gray-400">Repayment plans that fit your cash flow and comfort.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">100% Financing Options</h3>
              <p className="text-gray-400">No margin money required — we finance the full setup.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tax Efficiency</h3>
              <p className="text-gray-400">Deductible under operational expenses for tax savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Replacing Documents with “Who Should Apply” */}
      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Who Should Apply?
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              Our flexible infrastructure finance is suitable for all professional environments.
            </p>
            <ul className="space-y-4 text-gray-800 text-base md:text-lg">
              <li>✅ Startups & Coworking Spaces</li>
              <li>✅ Corporate Offices & MNC Branches</li>
              <li>✅ Consulting Firms & Creative Agencies</li>
              <li>✅ Clinics, Labs & Healthcare Offices</li>
              <li>✅ Educational Institutes & Training Centers</li>
              <li>✅ Retail Chains & Franchise Offices</li>
              <li>✅ Government & NGO Workspaces</li>
            </ul>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/Document1.jpg"
              alt="Office Setup"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Us & Testimonial */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-gray-900 text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Office Infrastructure Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Create inspiring workspaces — affordably and efficiently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Why Nihal Finserv",
                points: [
                  "Speedy documentation & approvals",
                  "Vendor tie-ups with trusted furniture & IT suppliers",
                  "Custom leasing or loan structuring",
                  "No hidden fees — full transparency",
                  "Support across planning to execution",
                ],
              },
              {
                city: "Client Testimonial",
                text: "With Nihal Finserv, we were able to fully furnish and digitize our 3-floor office with zero upfront cost. Their vendor coordination and financing terms were spot on.",
              },
            ].map(({ city, text, points }) => (
              <div key={city} className="border border-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">{city}</h3>
                {points ? (
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    {points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-relaxed">{text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <ServiceSection />
    </>
  );
}