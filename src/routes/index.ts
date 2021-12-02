import { Router } from 'express'
const router = Router();

import upload from '../libs/multer'
import { getPhotos, createPhoto, deletePhoto, getPhoto, updatePhoto } from '../controllers/photo.controller'

// middleware
// router.use(upload.single('image'));

// routes
router.route('/paciente')
    .get(getPhotos)
    .post(upload.single('image'), createPhoto);

router.route('/paciente/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto);

export default router;