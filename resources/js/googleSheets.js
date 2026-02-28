function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxYpArzIdDBCy3ZZmjH2KZTErAfJWl0OsqWO_46VfBQaPsyqC0CuW3rL8fK_Qp80zE/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = false
      btn.innerHTML = "Sending..."

      let fd = getData("tsv");
      if (pitScouting) {
        fd = "PIT\t" + fd;
      }
      alert("First 20 chars: " + JSON.stringify(fd.substring(0, 20)));
      fetch(scriptURL, {
        method: "POST",
        mode: 'no-cors',
        body: fd
      })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
