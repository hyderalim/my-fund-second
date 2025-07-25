document.querySelector('.payments-section').addEventListener('change', (event)=>{
    if(event.target.attributes.getNamedItem('type').value === 'radio'){
        const selectedId = event.target.attributes.getNamedItem('id').value;
        const dynamicSpan = document.querySelector('#payment-info .dynamic');

        if(selectedId === 'card-collection'){
            dynamicSpan.innerHTML = '';
            const img = document.createElement('img');
            img.src = 'Image/cardgroup.png';
            img.alt = selectedId;
            img.style.maxWidth = '100%';
            dynamicSpan.appendChild(img);
        }else {
            dynamicSpan.innerHTML = selectedId.toUpperCase();
        }        
    }

})
 const countryCodeBtn = document.getElementById('countryCodeBtn');
  const countryItems = document.querySelectorAll('.dropdown-item');

  countryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const code = item.getAttribute('data-code');
      countryCodeBtn.textContent = code;
    });
  });

const notesBtn = document.getElementById('notes-btn');
const notesAreaWrapper = document.querySelector('.notes-area');
const notesSave = document.getElementById('notes-save');
const notesCancel = document.getElementById('notes-cancel');

notesBtn.addEventListener('click', () => {
  notesAreaWrapper.classList.remove('d-none');
});

notesSave.addEventListener('click', () => {
  notesAreaWrapper.classList.add('d-none');
});

notesCancel.addEventListener('click', () => {
  notesAreaWrapper.classList.add('d-none');
});

    const collapseTwo = document.getElementById('collapseTwo');

    collapseTwo.addEventListener('shown.bs.collapse', function () {     
      const header = document.getElementById('headingTwo');
      header.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });