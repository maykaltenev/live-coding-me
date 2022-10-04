export const checkValidId = (req, res, next) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).json({ message: "Bad request. Please provide a valid ID" })
    }
    next();
}