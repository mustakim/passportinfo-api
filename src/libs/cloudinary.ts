import * as multer from 'multer';
import * as _cloudinary from 'cloudinary';

const UPLOAD_PATH = 'uploads';

_cloudinary.config({
    cloud_name: 'eribd',
    api_key: '624525163519674',
    api_secret: 'wmgvZgIudxmYb1V24g3SBZ8ExU4'
  });
//
export const cloudinaryUpload = _cloudinary.v2.uploader.upload;

export const upload = multer({ dest: `${UPLOAD_PATH}/` }); // multer configurationY
