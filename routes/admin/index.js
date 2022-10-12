const router = require('express').Router();
const {
  getAllAdmin,
  getAdmin,
  createAdmin,
  deleteAdmin,
  updateAdmin,
  loginAdmin,
} = require('../../controllers/admin');

router.get('/get-all-admin', getAllAdmin);
router.get('/get-admin/:id', getAdmin);
router.post('/create-admin', createAdmin);
router.post('/login-admin', loginAdmin);

router.delete('/delete-admin', deleteAdmin);
router.patch('/update-admin/:id', updateAdmin);

module.exports = router;

