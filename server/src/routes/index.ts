import { Router } from 'express';
import authRoutes from './auth';

const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Auth routes
router.use('/auth', authRoutes);

// Future routes will be added here:
// router.use('/institutions', institutionRoutes);
// router.use('/courses', courseRoutes);
// router.use('/subjects', subjectRoutes);
// router.use('/materials', materialRoutes);

export default router;
