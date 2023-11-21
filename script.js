// No clue hvorfor arrayLike ikke er et array
const arrayLike = document.getElementsByTagName('section')
const sections = Array.from(arrayLike)

sections.forEach((section, index) =>{
    section.style.backgroundColor = `rgba(${52 + index * 40}, 142, 220, 0.45)`
    section.style.borderColor = `rgb(${41 + index * 20}, 20, 176)`
})