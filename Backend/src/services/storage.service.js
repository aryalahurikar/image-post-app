
const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(buffer) {
    const base64 = buffer.toString("base64");

    const result = await imagekit.files.upload({
        file: base64,
        fileName: "image.jpg"
    });

    return result;
}
module.exports = uploadFile;




