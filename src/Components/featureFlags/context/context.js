import { createContext, useEffect, useState } from "react";
import dummyApiCall from "./data";

export const FeatureFlagContext = createContext(null);

export function FeatureFlagProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFeatures, setEnabledFeatures] = useState({});
  async function fetchFeatureFlag() {
    setLoading(true);
    try {
      const response = await dummyApiCall();
      setEnabledFeatures(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => fetchFeatureFlag, []);

  return (
    <FeatureFlagContext.Provider value={{ enabledFeatures }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
