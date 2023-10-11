//  fetch("https://picsum.photos/v2/list?page=3&limit=300")
//  .then((Response)=>Response.json())
//  .then((data)=>console.log(data))
//  .catch((err)=>console.log(err));
  

function getAllDatas() {
    fetch('https://picsum.photos/v2/list?page=3&limit=300')
        .then(response => response.json())
        .then(data => { console.log(data)
            data.forEach(pics => {
                createPhotoCard(pics);
            });
        })
        .catch(error => console.error('Error:', error));
  }
  
  function createPhotoCard(data) {
    const createcard = document.createElement('div');
    createcard.classList.add('card', 'border-secondary');
    
    const cardhead = document.createElement('div');
    cardhead.classList.add('card-header');
    cardhead.textContent = "Photo Details";

    const pic = document.createElement('img');
    pic.classList.add('picture');
    pic.src =data.download_url;    ; 
    pic.alt = ` Flag`;
  
    const cardbody = document.createElement('div');
    cardbody.classList.add('card-body', 'text-secondary');
    
    const id = document.createElement('p');
    id.classList.add('card-text');
    id.textContent = `ID : ${data.id}`;
    
    const authorName = document.createElement('p');
    authorName.classList.add('card-text');
    authorName.textContent = `Author: ${data.author}`;
  
    const  picWidth= document.createElement('p');
    picWidth.classList.add('card-text');
    picWidth.textContent = `Width  : ${data.width} `;

    const  picHeight= document.createElement('p');
    picHeight.classList.add('card-text');
    picHeight.textContent = `Height : ${data.height} `;

     
  
createcard.appendChild(cardhead);
createcard.appendChild(pic);
createcard.appendChild(cardbody);
cardbody.appendChild(id);
cardbody.appendChild(authorName);
cardbody.appendChild(picWidth);
cardbody.appendChild(picHeight);
  document.getElementById('card-container').appendChild(createcard);
  }
  
getAllDatas();
  
  
