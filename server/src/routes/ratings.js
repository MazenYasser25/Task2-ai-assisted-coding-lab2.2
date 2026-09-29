import express from 'express';
import {
  getAllRatings,
  getRating,
  createRating,
  getRatingSummary,
} from '../controllers/ratingController.js';

const router = express.Router();

// Summary must be before :id to avoid collision
router.get('/summary', getRatingSummary);

router.get('/', getAllRatings);
router.post('/', createRating);
router.get('/:id', getRating);

export default router;
