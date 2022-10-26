const { Router } = require('express');
const multer = require('multer');
const {S3Client, PutObjectCommand} = require("@aws-sdk/client-s3");
const dotEnv = require('dotenv');
const crypto = require('crypto');
// const User = require("../../models/user");

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
    const command = new PutObjectCommand(params);

    await s3.send(command);
    res.send('photo successfully added on S3');

    // const postToDb = await 

    // try {
    //     const updateUser = await User.updateOne(
    //         { _id: userId },
    //         {
    //             $set: {
    //                 s3PhotoName: imageName
    //             },
    //         }
    //     );
    //     User.findOne({ _id: id })
    //         .then(() => {
    //             return res.status(200).send('ok');
    //         })
    //         .catch(() => res.send(updateUser));
    // } catch (err) {
    //     console.log(err);
    // }
})

router.get('/photo', (req, res) => {
    console.log('ruta para traer una foto guardada en S3');
    res.send('ruta para traer una foto guardada en S3')
});

router.delete('/photo', (req, res) => {
    console.log('ruta para borrar una foto existente');
    res.send('ruta para borrar una foto existente');
})

module.exports = router;