import { Router } from 'express';
import { getInstitutions, getInstitutionById, createInstitution } from '../controllers/institutionController';
import { adminMiddleware } from '../middleware/auth'; // Assuming you have this or will implement it

const router = Router();

router.get('/', getInstitutions);
router.get('/:id', getInstitutionById);
router.post('/', adminMiddleware, createInstitution); // Protected route

export default router;
