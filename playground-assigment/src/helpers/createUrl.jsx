const createUrl = (url, params) => {
    const searchParams = new URLSearchParams();
  
    if (Object.keys(params).length) {
      Object.keys(params).forEach((key) => {
        if (Array.isArray(params[key]) && params[key].length) {
          searchParams.append(key, params[key].join());
        } else {
          searchParams.append(key, params[key]);
        }
      });
  
      return `${url}?${searchParams.toString()}`;
    }
  
    return url;
  };
  
  export { createUrl };
  