document.getElementById('button').addEventListener('click',function(){
    //console.log('button already clicked');
    const textArea =document.getElementById('text-area');
    // console.log(textArea);
    const newText=textArea.value;
    // console.log(newText);
    const commentContainer =document.getElementById('comment-container');
    // console.log(commentContainer);
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment')
    commentElement.innerText=newText;
    commentContainer.appendChild(commentElement);
    textArea.value = ' ';

    
})