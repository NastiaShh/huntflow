const addCandidateForm = document.querySelector('#addCandidateForm')

addCandidateForm.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const {pic,name,phone,email,telegram,cv} = event.target;
    // console.log(name);
  const response = await fetch('/api/candidates',{
    method:'POST',
    headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        pic: pic.value,
        name: name.value,
        phone: phone.value,
        email: email.value,
        telegram: telegram.value,
        cv: cv.value
        
  }),
});
const data = await response.json();

})