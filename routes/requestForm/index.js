const router = require('express').Router();
const {
  getAllRequestForm,
  getRequestForm,
  createRequestForm,
  deleteRequestForm,
  updateRequestForm,
} = require('../../controllers/requestForm');

router.get('/get-all-request-form', getAllRequestForm);
router.get('/get-request-form/:id', getRequestForm);
router.post('/create-request-form', createRequestForm);

router.delete('/delete-request-form', deleteRequestForm);
router.patch('/update-request-form/:id', updateRequestForm);

module.exports = router;

