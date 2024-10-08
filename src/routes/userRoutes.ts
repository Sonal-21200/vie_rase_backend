import express from 'express';
import { getUserDetailsEmail,getUserDetailsId } from '../controllers/userController';

const router = express.Router();

router.get('/getuser:email', getUserDetailsEmail);
router.get('/api/getuser:id', getUserDetailsId);

export default router;
