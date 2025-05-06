console.log('append js')

const placeList=document.getElementById('place-list');
const li =document.createElement('li');
li.innerText='RangaMati';
placeList.appendChild(li);

const mainContainer=document.getElementById('main-container');
const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My Food List';
section.appendChild(h1);

const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='Biriyani'
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='Cake'
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='Rice'
ul.appendChild(li3);

section.appendChild(ul)
mainContainer.appendChild(section);

const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>My Awesome DOM de baba</h1>
    <ul>
        <li>Jalali set</li>
        <li>Shafayet</li>
        <li>Bonobash</li> 
    </ul>

`

mainContainer.appendChild(sectionDress);
