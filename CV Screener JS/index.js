

const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 20,
        city: 'Banglore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/72.jpg'
    },

    {
        name: 'Bhagwan Das',
        age: 21,
        city: 'Mumbai',
        language: 'Python',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/men/73.jpg'
    },

    {
        name: 'Benchor Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },

    {
        name: 'Bhuvan Bam',
        age: 23,
        city: 'Agra',
        language: 'React',
        framework: 'Go FrameWork',
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    }
]

const next = document.querySelector('#next');


function cvIterator(profile) {
    let nextIndex = 0;
    return {
        next() {
            return nextIndex < profile.length ?
            { value: profile[nextIndex++], done: false } :
            { done: true }
        }
    }
}
const candidates = cvIterator(data) ;
nextCV() ;

next.addEventListener('click', nextCV);
    
    
function nextCV() {
    const currentCandidate = candidates.next().value ;

    let image = document.getElementById('image') ; 
    let profile = document.getElementById('profile') ;

    if(currentCandidate != undefined){image.innerHTML = `<img src="${currentCandidate.image}"  />`;
    profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name : ${currentCandidate.name}</li>
                            <li class="list-group-item">${currentCandidate.age} Years Old</li>
                            <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                            <li class="list-group-item">Primarity works on ${currentCandidate.language}</li>
                            <li class="list-group-item">With ${currentCandidate.framework} framework</li>
                        </ul>`
}else{
    alert('End of Applications') ;
    window.location.reload() ;
}
}