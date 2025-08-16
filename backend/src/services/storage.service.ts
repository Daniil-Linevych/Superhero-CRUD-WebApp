import multer from 'multer';
import {createUniqueFileName} from "./upload.service"

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, (process.env.UPLOAD_FILES_DIR || 'uploads') + '/');
  },
  filename: (_, file, cb) => {
    cb(null, createUniqueFileName(file));
  }
});


export const upload = multer({
  storage: storage,
  limits: { fileSize: parseInt(process.env.MAX_FILE_SIZE_MB || '5') * 1024 * 1024 }
});