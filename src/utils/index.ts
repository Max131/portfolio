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

export { isURL };
