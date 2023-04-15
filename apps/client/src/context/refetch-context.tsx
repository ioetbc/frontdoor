import {createContext, useContext, useState} from "react";

type RefetchContextType = {
  shouldRefetch: boolean;
  setShouldRefetch: (value: boolean) => void;
};

const RefetchContext = createContext<RefetchContextType>({
  shouldRefetch: false,
  setShouldRefetch: () => {},
});

export const useRefetch = () => useContext(RefetchContext);

interface RefetchProviderProps {
  children: React.ReactNode;
}

export const RefetchProvider: React.FC<RefetchProviderProps> = ({children}) => {
  const [shouldRefetch, setShouldRefetch] = useState(false);

  return (
    <RefetchContext.Provider value={{shouldRefetch, setShouldRefetch}}>
      {children}
    </RefetchContext.Provider>
  );
};
