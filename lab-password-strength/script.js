function isStrongPassword(pass="") {
    if (pass.length < 8) return false;
    if (pass.toLowerCase() == pass) return false; 
    if (pass.indexOf("password") >= 0) return false;
    return true;
}