'use client';
import { useState } from 'react';

const schemes = [
  {
    name: 'Pradhan Mantri Jan Dhan Yojana',
    slug: 'pm-jan-dhan-yojana',
    details: 'A financial inclusion program to provide affordable access to financial services like banking, savings, and insurance.',
    benefits: [
      'Free zero-balance savings account',
      'RuPay debit card with insurance coverage',
      'Access to overdraft facility',
    ],
    eligibility: 'All Indian citizens above 10 years of age.',
    application: 'Visit the nearest bank branch or open online through official bank portals.',
    documents: ['Aadhaar card', 'PAN card or Voter ID', 'Passport-size photo'],
    level: 'National',
    scheme_category: 'Financial Inclusion',
    tags: ['banking', 'finance', 'government'],
  },
  {
    name: 'Ayushman Bharat Yojana',
    slug: 'ayushman-bharat-yojana',
    details: 'Health insurance scheme providing ₹5 lakh coverage per family per year for secondary and tertiary hospitalization.',
    benefits: [
      'Free hospitalization up to ₹5 lakh per family per year',
      'Covers pre- and post-hospitalization expenses',
      'Cashless and paperless service at empaneled hospitals',
    ],
    eligibility: 'Economically weaker families identified under SECC 2011 data.',
    application: 'Check eligibility on pmjay.gov.in and apply through CSC centers.',
    documents: ['Aadhaar card', 'Ration card', 'Income certificate'],
    level: 'National',
    scheme_category: 'Healthcare',
    tags: ['health', 'insurance', 'medical'],
  },
  {
    name: 'PM Kisan Samman Nidhi',
    slug: 'pm-kisan-samman-nidhi',
    details: 'Provides income support of ₹6,000 per year to all landholding farmer families.',
    benefits: [
      '₹6,000 per year in three equal installments',
      'Direct benefit transfer to farmers’ bank accounts',
    ],
    eligibility: 'All landholding farmer families in India.',
    application: 'Apply online through pmkisan.gov.in or visit local CSC centers.',
    documents: ['Aadhaar card', 'Land ownership documents', 'Bank passbook'],
    level: 'National',
    scheme_category: 'Agriculture',
    tags: ['farmers', 'income', 'agriculture'],
  },
  {
    name: 'Swachh Bharat Mission',
    slug: 'swachh-bharat-mission',
    details: 'National mission to clean streets, roads, and infrastructure of India’s cities and rural areas.',
    benefits: [
      'Improved sanitation and hygiene facilities',
      'Financial assistance for household toilets',
    ],
    eligibility: 'All households without access to toilets.',
    application: 'Apply through local Panchayat or Urban Local Body offices.',
    documents: ['Aadhaar card', 'Address proof', 'Photograph of house'],
    level: 'National',
    scheme_category: 'Sanitation',
    tags: ['cleanliness', 'sanitation', 'public health'],
  },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [showSearch, setShowSearch] = useState(true);

  const handleSearch = () => {
    const foundScheme = schemes.find((scheme) =>
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSelectedScheme(foundScheme || null);
    setShowSearch(false);
  };

  const handleBackToSearch = () => {
    setSelectedScheme(null);
    setSearchTerm('');
    setShowSearch(true);
  };

  return (
    <div className="p-6 flex flex-col items-center bg-[#1A2A5A] min-h-[75vh] rounded-xl shadow-lg text-[#F4EDE4]">
      {showSearch ? (
        <div className="flex flex-col items-center w-full max-w-md bg-[#2E3F70] rounded-xl p-6 shadow-md">
                <input
          type="text"
          placeholder="Search for a scheme..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mb-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[#243C64]"
          />

          <button
            onClick={handleSearch}
            className="bg-[#F79D65] text-[#1A2A5A] px-4 py-2 rounded-lg hover:bg-[#f78b47] transition font-semibold"
          >
            Search
          </button>
        </div>
      ) : selectedScheme ? (
        <div className="bg-[#F4EDE4] text-[#1A2A5A] shadow-md rounded-xl p-6 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-[#F79D65] mb-2">
            {selectedScheme.name}
          </h2>
          <p className="mb-3 text-[#2E3F70]">{selectedScheme.details}</p>
          <h3 className="text-lg font-semibold text-[#1A2A5A] mb-1">
            Benefits:
          </h3>
          <ul className="list-disc pl-5 mb-3 text-[#2E3F70]">
            {selectedScheme.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <p><strong>Eligibility:</strong> {selectedScheme.eligibility}</p>
          <p><strong>Application:</strong> {selectedScheme.application}</p>
          <p><strong>Documents:</strong> {selectedScheme.documents.join(', ')}</p>
          <p><strong>Level:</strong> {selectedScheme.level}</p>
          <p><strong>Category:</strong> {selectedScheme.scheme_category}</p>
          <p><strong>Tags:</strong> {selectedScheme.tags.join(', ')}</p>

          <button
            onClick={handleBackToSearch}
            className="mt-4 bg-[#2E3F70] text-[#F4EDE4] px-4 py-2 rounded-lg hover:bg-[#1A2A5A] transition"
          >
            Back to Search
          </button>
        </div>
      ) : (
        <div className="text-center bg-[#2E3F70] p-6 rounded-xl shadow-md">
          <p className="text-[#F4EDE4] mb-3">
            No scheme found for "{searchTerm}".
          </p>
          <button
            onClick={handleBackToSearch}
            className="bg-[#F79D65] text-[#1A2A5A] px-4 py-2 rounded-lg hover:bg-[#f78b47] transition font-semibold"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
