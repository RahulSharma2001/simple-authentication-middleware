const loginMiddleware = (req, res, next) => {
  const startTime = new Date();
  console.log("Rahul Sharma Computer");
  console.log(
    `${startTime.toISOString()} Method:${req.method} URL: ${req.url} `
  );

  const duration = Date.now() - startTime;
  console.log("Processing Time In ms: ", duration);

  next();
};

module.exports = loginMiddleware;
