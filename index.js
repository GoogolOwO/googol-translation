function translation(str){
    return str.replace("are ", "is ").replace(" are", " is")
              .replace("am ", "is ").replace(" am", " is")
              .replace("github ", "GitHub ").replace(" github", " GitHub")
              .replace("WikiDot ", "Wikidot ").replace(" WikiDot", " Wikidot")
}
