/**
 * Check if a string is a valid URL
 * @param url
 * @returns True if the string is a valid URL, false otherwise
 */
const isURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Debounce a function
 * @param func
 * @param wait
 * @returns A debounced version of the function
 */
const debounce = (func: Function, wait: number = 300) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export { isURL, debounce };
