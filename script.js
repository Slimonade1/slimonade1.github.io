
// No clue hvorfor arrayLike ikke er et array
const arrayLike = document.getElementsByTagName('section')
const sections = Array.from(arrayLike)

sections.forEach((section, index) =>{
    section.style.backgroundColor = `rgba(${102 + index*50}, 142, 220, 0.45)`
})