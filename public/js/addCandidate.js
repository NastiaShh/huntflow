const addCandidateForm = document.querySelector('#addCandidateForm')

addCandidateForm.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const {name,contacts,pic} = event.target;
    // console.log(name);
  const response = await fetch('/api/candidates',{
    method:'POST',
    headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        contacts: contacts.value,
        pic: pic.value,
  }),
});
const data = await response.json();

})