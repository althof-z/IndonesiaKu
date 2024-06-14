const api = (() => {
  function putAccessToken(accessToken) {
    localStorage.setItem('accessToken', accessToken);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
    }
    
    

  return {
    putAccessToken,
    getAccessToken,
  };
})();

export default api;