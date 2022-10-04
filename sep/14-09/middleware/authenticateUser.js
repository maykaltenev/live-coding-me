export const authenticate = (req, res, next) => {
    if (req.body.secret == null) {
        return res.status(401).json({ responsecode: 401, responsemessage: 'Unautorized' });
    }
    console.log("You have permission to access this route");
    next();
}