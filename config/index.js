require('dotenv').config();

export default {
  phto_cloudName: process.env.CLOUDINARY_CLOUDNAME,
  photo_secret: process.env.CLOUDINARY_API_SECRET,
  photo_apiKey: process.env.CLOUDINARY_API_KEY,
  upload_url: process.env.CLOUDINARY_URL,
};
