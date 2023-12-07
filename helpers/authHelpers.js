import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const hasedPassword = await bcrypt.hash(password, 10);
    return hasedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, compare) => {
  try {
    const isMatch = await bcrypt.compare(password, compare);
    return isMatch;
  } catch (error) {
    console.log(error);
  }
};
