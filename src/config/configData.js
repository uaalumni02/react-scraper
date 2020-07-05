const settings = {
    development: {
      api_key: "local",
      apiBaseUrl: "https://ez0rksfmi0.execute-api.us-east-1.amazonaws.com",
    },
  };
  
  const env = process.env.NODE_ENV || "local";
  
  export default settings[env];