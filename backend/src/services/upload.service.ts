import fs from 'fs'
import path from 'path'

export const ensureUploadsDirectoryExists = (): void => {
    const uploadDir = path.join(process.cwd(), process.env.UPLOAD_FILES_DIR || 'uploads');

    if (!fs.existsSync(uploadDir)){
        fs.mkdirSync(uploadDir, {recursive: true})
    }
}

export const createUniqueFileName = (file:Express.Multer.File) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    return file.fieldname + uniqueSuffix + path.extname(file.originalname);
}