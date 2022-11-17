const router = require('express').Router();
const {
  getAllRequestForm,
  getRequestForm,
  createRequestForm,
  deleteRequestForm,
  updateRequestForm,
  checkRequestForm,
  getRequestFormById,
} = require('../../controllers/requestForm');

router.post('/createRequestForm', createRequestForm);
router.post('/checkRequestForm', checkRequestForm);
router.get('/get-all-request-form', getAllRequestForm);
router.get('/get-request-form/:id', getRequestForm);
router.get('/get-request-form-by-id/:id', getRequestFormById);
router.get('/hello', (req, res) => {
  res.send('das');
});

router.delete('/delete-request-form', deleteRequestForm);
router.patch('/update-request-form/:id', updateRequestForm);

module.exports = router;

