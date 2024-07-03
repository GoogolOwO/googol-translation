/**
 * Translate from English to Googolish
 * @param {string} str Original string
 * @returns Result (To Googolish)
 */
function translation(str){
    return str.replace("are ", "is ").replace(" are", " is")
              .replace("am ", "is ").replace(" am", " is")
              .replace("github ", "GitHub ").replace(" github", " GitHub")
              .replace("WikiDot ", "Wikidot ").replace(" WikiDot", " Wikidot")
}
