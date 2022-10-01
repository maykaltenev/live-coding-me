export const logging = (req, res, next) => {
    console.log("Hello I am in the middle");
    console.log("The request method is in this request is", req.method)
    next();
}

export const loggingtime = (req, res, next) => {
    console.log("The time of this request is", new Date().toLocaleString());
    next();
}