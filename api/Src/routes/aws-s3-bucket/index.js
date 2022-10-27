const { Router } = require('express');
const multer = require('multer');
const {S3Client, PutObjectCommand, GetObjectCommand} = require("@aws-sdk/client-s3");
const {getSignedUrl} = require("@aws-sdk/s3-request-presigner");
const dotEnv = require('dotenv');
const crypto = require('crypto');
const User = require('../../../models/user');

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
dotEnv.config();

const randomImageName = (bytes = 32) => {
    return crypto.randomBytes(bytes).toString('hex');
}

// S3 configuration
const bucketName=process.env.BUCKET_NAME;
const bucketRegion=process.env.BUCKET_REGION;
const accessKey=process.env.ACCESS_KEY;
const secretAccessKey=process.env.SECRET_ACCESS_KEY;

// new instance of S3
const s3 = new S3Client({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey
    },
    region: bucketRegion
})

// routes
router.post('/photo', upload.single('S3image'), async (req, res) => {

    const { userId } = req.body;

    const imageName = randomImageName();    
    const params = {
        Bucket: bucketName,
        Key: imageName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype
    }
    const putCommand = new PutObjectCommand(params);
    await s3.send(putCommand);

    const getObjectParams = {
        Bucket: bucketName,
        Key: imageName,
    }
    
    const getCommand = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, getCommand, { expiresIn: 3600 });
    res.send(url);

    try {
        const updateUser = await User.updateOne(
            { _id: userId },
            {
                $set: {
                    s3PhotoName: imageName,
                    photo: url
                },
            }
        )
        // updateUser.save();
    } catch (err) {
        console.log(err);
    }
})


router.delete('/photo', (req, res) => {
    console.log('ruta para borrar una foto existente');
    res.send('ruta para borrar una foto existente');
})

module.exports = router;