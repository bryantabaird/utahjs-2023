import React from 'react';

const currentlySupportedLanguages = ['English', 'Spanish'];

function App() {
  return (
    <div>
      {currentlySupportedLanguages.map((lang) => {
        return (
          <div key={lang} className="bg-slate-800 h-screen flex w-100 gap-4 p-4">
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">{lang}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
