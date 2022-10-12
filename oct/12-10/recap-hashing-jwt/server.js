
const payload = {
    sub: '1234'
}
const token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: '1h'
})

console.log('token is: ', token);

