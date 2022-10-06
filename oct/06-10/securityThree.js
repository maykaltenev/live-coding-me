import bcrypt from 'bcrypt';

const plainTextPassword = "Wt$2Rce";

const compareItems = () => {
    console.time(`RESPONSE TIME`)
    const isCorrect = bcrypt.compareSync(plainTextPassword, "$2b$18$syCAw3IAtPIx85z.hfsiXeIA6ebenlvgQZrSqDORqKNY7WYEdoBt2")
    console.timeEnd(`RESPONSE TIME`)

    console.log("the passwords is correct: ", isCorrect);
}

compareItems();