import { useState, useEffect } from 'react';
import { csv2json } from 'csv-parser';

/**
 * @returns {[IState, import('react').Dispatch<import('react').SetStateAction<string>>]}
 */
export function useCsvUsages(initialUrl, initialUsages) {
  const [usages, updateUsages] = useState(initialUsages);
  const [csvUrl, setCsvUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setError(undefined);
      setIsLoading(true);

      try {
        const response = await fetch(csvUrl);
        const usagesCsv = await response.text();
        const usagesJson = csv2json(usagesCsv);
        updateUsages(usagesJson);
      } catch (ex) {
        console.error('Failed to get usage.', ex.message);
        setError(ex);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [csvUrl]);

  return [{ usages, isLoading, error }, setCsvUrl];
}

/**
 * @typedef IState
 * @property {any[]} usages
 * @property {boolean} isLoading
 * @property {Error} error
 */
