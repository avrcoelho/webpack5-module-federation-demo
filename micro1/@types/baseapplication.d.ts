/// <reference types="react" />

declare module "baseapplication/AppProvider" {
  const response: {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
  };

  function useApp(): typeof response;

  export { useApp };
}
