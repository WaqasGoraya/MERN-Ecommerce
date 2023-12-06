import bcrypt from 'bcrypt';

export default hashPassword = (password) => {
    try {
            bcrypt.hash(password,10)
    } catch (error) {
        console.log(error);
    }
}