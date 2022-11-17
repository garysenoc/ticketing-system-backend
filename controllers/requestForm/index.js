const RequestForm = require('../../models/RequestForm');

const getAllRequestForm = async (req, res) => {
  try {
    const requestForm = await RequestForm.find();

    let openNumber = 0;
    let resolveNumber = 0;
    let voidedNumber = 0;
    let reopenedNumber = 0;

    for (let i = 0; i < requestForm?.length; i++) {
      if (requestForm[i].status == 'In Progress') {
        openNumber++;
      }
      if (requestForm[i].status == 'Resolved') {
        resolveNumber++;
      }
      if (requestForm[i].status == 'Voided') {
        voidedNumber++;
      }
      if (requestForm[i].status == 'Reopened') {
        reopenedNumber++;
      }
    }

    res.status(200).json({
      status: 'success',
      results: requestForm.length,
      data: {
        requestForm,
        openNumber,
        resolveNumber,
        voidedNumber,
        reopenedNumber,
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
    const requestForm = await RequestForm.findOne({
      referenceId: req.params.id,
    });
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

const getRequestFormById = async (req, res) => {
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

const checkRequestForm = async (req, res) => {
  // done
  const { referenceId } = req.body;
  try {
    const requestForm = await RequestForm.find({ referenceId: referenceId });
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
    const requestForm = await RequestForm.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        requestForm,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err + 'hello',
    });
  }
};

const deleteRequestForm = async (req, res) => {
  try {
    const requestForm = await RequestForm.findById(req.params.id);

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
    const requestForm = await RequestForm.findByIdAndUpdate(
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
  checkRequestForm,
  getRequestFormById,
};

