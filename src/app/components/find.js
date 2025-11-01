'use client';
import { useState } from 'react';
import { Search as SearchIcon, ArrowLeftCircle } from 'lucide-react';
import languageData from "../locales/languages.json";


export default function Search({ language = 'en' }) {
  const t = languageData[language].search; // all UI strings for this component
  const schemes = languageData[language].schemes; // localized schemes

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
    <div className="flex flex-col items-center bg-white/60 backdrop-blur-lg min-h-[75vh] p-6 rounded-2xl border border-[#B3E6FA]/60 shadow-xl text-[#043042]">
      {showSearch ? (
        <div className="flex flex-col items-center w-full max-w-md bg-[#EAF6FB]/70 backdrop-blur-md border border-[#B3E6FA] rounded-2xl p-6 shadow-md">
          <div className="flex items-center w-full gap-2 mb-4">
            <input
              type="text"
              placeholder={t.placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border border-[#B3E6FA] rounded-full p-2 px-4 text-[#043042] placeholder-gray-500 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0074D8]"
            />
            <button
              onClick={handleSearch}
              className="bg-[#0074D8] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#005fa8] transition"
            >
              {t.searchButton}
            </button>
          </div>
        </div>
      ) : selectedScheme ? (
        <div className="bg-white/80 backdrop-blur-md text-[#043042] shadow-lg border border-[#B3E6FA] rounded-2xl p-6 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-[#0074D8] mb-2">
            {selectedScheme.name}
          </h2>
          <p className="mb-3 text-[#043042]/80">{selectedScheme.details}</p>

          <h3 className="text-lg font-semibold text-[#0074D8] mb-1">
            {t.benefits}
          </h3>
          <ul className="list-disc pl-5 mb-3 text-[#043042]/80">
            {selectedScheme.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <p><strong>{t.eligibility}</strong> {selectedScheme.eligibility}</p>
          <p><strong>{t.application}</strong> {selectedScheme.application}</p>
          <p><strong>{t.documents}</strong> {selectedScheme.documents.join(', ')}</p>
          <p><strong>{t.level}</strong> {selectedScheme.level}</p>
          <p><strong>{t.category}</strong> {selectedScheme.scheme_category}</p>
          <p><strong>{t.tags}</strong> {selectedScheme.tags.join(', ')}</p>

          <button
            onClick={handleBackToSearch}
            className="mt-5 flex items-center gap-2 bg-[#0074D8] text-white px-4 py-2 rounded-full hover:bg-[#005fa8] transition"
          >
            <ArrowLeftCircle className="w-4 h-4" />
            {t.backToSearch}
          </button>
        </div>
      ) : (
        <div className="text-center bg-[#EAF6FB]/70 backdrop-blur-md border border-[#B3E6FA] p-6 rounded-2xl shadow-md">
          <p className="text-[#043042] mb-3">
            {t.noSchemeFound.replace('{term}', searchTerm)}
          </p>
          <button
            onClick={handleBackToSearch}
            className="bg-[#0074D8] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#005fa8] transition"
          >
            {t.tryAgain}
          </button>
        </div>
      )}
    </div>
  );
}
