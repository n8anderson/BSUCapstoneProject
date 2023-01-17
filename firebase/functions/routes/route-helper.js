const functions = require('firebase-functions');

const handleSuccess = (res, data) => {
  let responseData = {
    status: true,
    message: 'Success'
  };
  if (data) {
    responseData = {
      ...responseData,
      ...data
    };
  }
  res.status(200).send(responseData);
};

const registerEndpoint = (router, path, method, func) => {
  const callback = (req, res) => func(req)
    .then((result) => handleSuccess(res, result))
    .catch((err) => handleError(res, err));
    router[method](path, callback);
};

module.exports = {
  registerEndpoint
};