class Storage {
  setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getStorage = (key) => {
    return localStorage.getItem(key);
  };
}

export default new Storage();
