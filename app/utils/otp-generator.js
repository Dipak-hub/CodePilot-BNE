const otpGenerator = length => {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * digits.length)];
    }
    return OTP;
  };
  
  export default otpGenerator;
  