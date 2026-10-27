const sampleController = {
  getAll: (req, res) => {
    res.status(200).json({
      status: "success",
      result: 1,
      data: {
        sample: [{}],
      },
    });
  },
};

export default sampleController;
