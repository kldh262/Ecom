import React, { createContext, useContext } from 'react';

const SearchDetailsContext = createContext();

function SearchDetailsProvider({children, search, setSearch}) {
  return <SearchDetailsContext.Provider value={{
    search,
    setSearch
  }}>
    {children}
  </SearchDetailsContext.Provider>
}

const useSearchDetails = () => useContext(SearchDetailsContext);

export { SearchDetailsProvider, useSearchDetails };