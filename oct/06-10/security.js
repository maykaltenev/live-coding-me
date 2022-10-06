import bcrypt from "bcrypt";

const hashPassword = async () => {
    const salt = await bcrypt.genSalt(10);
    const hashedValue = await bcrypt.hash("MySecretPassword", salt);
    const salt2 = await bcrypt.genSalt(10);
    const hashedValueTwo = await bcrypt.hash("MySecretPassword", salt2);

}
const comparePassword = async (password, hash) => {
    const checkPassword = await bcrypt.compare(password, hash);
    console.log("These are matching: ", checkPassword);
}
comparePassword("MySecretPassword", "$2b$10$tk9nkZglXlDvlzllveVaP.ErUY9JFEvge62ZoX11EKl8UK5RERB5y")
hashPassword()