const RequestForm = require('../../models/RequestForm');

const getAllRequestForm = async (req, res) => {
  try {
    const requestForm = await Request.find();

    res.status(200).json({
      status: 'success',
      results: requestForm.length,
      data: {
        requestForm,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const getRequestForm = async (req, res) => {
  // done
  try {
    const requestForm = await RequestForm.findById(req.params.id);
    //Tour.findOne({_id=req.params.id})
    res.status(200).json({
      status: 'success',
      data: {
        requestForm,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const createRequestForm = async (req, res) => {
  try {
    const requestForm = await Request.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        requestForm,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const deleteRequestForm = async (req, res) => {
  try {
    const requestForm = await Request.findById(req.params.id);

    await Feature.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      message: `Successfully deleted`,
      dataDeleted: requestForm,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const updateRequestForm = async (req, res) => {
  try {
    const requestForm = await Request.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      status: 'success',
      data: {
        requestForm,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = {
  getAllRequestForm,
  getRequestForm,
  createRequestForm,
  deleteRequestForm,
  updateRequestForm,
};

