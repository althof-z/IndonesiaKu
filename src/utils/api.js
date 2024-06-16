const api = (() => {
  function putAccessToken(accessToken) {
    localStorage.setItem('accessToken', accessToken);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  function saveDestinationToLocalStorage(destination) {
    const destinations = JSON.parse(localStorage.getItem('destinations')) || [];
    destinations.push(destination);
    localStorage.setItem('destinations', JSON.stringify(destinations));
  }

  function getDestinationsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('destinations')) || [];
  }

  function isDestinationInLocalStorage(id) {
    const destinations = getDestinationsFromLocalStorage();
    return destinations.some((destination) => destination.id === id);
  }

  function removeDestinationFromLocalStorage(id) {
    let destinations = getDestinationsFromLocalStorage();
    destinations = destinations.filter((destination) => destination.id !== id);
    localStorage.setItem('destinations', JSON.stringify(destinations));
  }

  return {
    putAccessToken,
    getAccessToken,
    saveDestinationToLocalStorage,
    getDestinationsFromLocalStorage,
    isDestinationInLocalStorage,
    removeDestinationFromLocalStorage,
  };
})();

export default api;
