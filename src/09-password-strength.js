/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  let criteriaCount = 0
  if(/[A-Z]/.test(password)){
    criteriaCount = criteriaCount + 1
    console.log('capital letter check', /[A-Z]/.test(password))
    console.log(criteriaCount)
  }
  if(/[a-z]/.test(password)){
    criteriaCount = criteriaCount + 1
    console.log('small letter check', /[a-z]/.test(password))
    console.log(criteriaCount)
  }
  if(/[0-9]/.test(password)){
    criteriaCount = criteriaCount + 1
    console.log('number check ', /[0-9]/.test(password))
    console.log(criteriaCount)
  }
  if(password && password.length >= 8){
    criteriaCount = criteriaCount + 1
    console.log('password lenght ', password.length)
    console.log(criteriaCount)
  }
  if(/[^A-Za-z0-9]/.test(password)){
    criteriaCount = criteriaCount + 1
    console.log('special characters ', /[^A-Za-z0-9]/.test(password))
    console.log(criteriaCount)
  }
  console.log(criteriaCount)
  if (criteriaCount <= 1){
    return "weak"
  }
  else if (criteriaCount <=3){
    return "medium"
  }
  else if (criteriaCount === 4){
    console.log(criteriaCount)
    return "strong"
  }
  else{
    return "very strong"
  }


}

console.log(checkPasswordStrength('C0mpl3x#Pwd'))
