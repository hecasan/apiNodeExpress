const responseModel = {
  success: false,
  data: [],
  errors: [],
};

module.exports = {
  async login(req, res) {
    const response = { ...responseModel };

    return res.json(response);
  },
};
