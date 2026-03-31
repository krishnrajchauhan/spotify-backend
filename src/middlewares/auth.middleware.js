const jwt = require("jsonwebtoken");


async function authArtist(req, res, next) {

    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({ message: "Unauthorized user."})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role !== "artist") {
            return res.status(403). json({ message: "User access denied. (Artist role required!)"})
        }

        req.user = decoded;

        next();
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({ message: "Unauthorized"});
    }
}

async function authUser(req, res, next) {

    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({ message: "Unauthorized User!"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role !== "user") {
            return res.status(401).json({ message: "Access denied."});
        }

        req.user = decoded;

        next()
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({ message: "Unauthorized"});
    }
}

module.exports = { authArtist, authUser }