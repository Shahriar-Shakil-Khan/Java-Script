const sections =document.querySelectorAll('section');
// console.log(sections)

for (const section of sections){
    // console.log(section)
    section.style.border = '2px solid steelblue';
    section.style.margin='5px';
    section.style.borderRadius='10px'
}