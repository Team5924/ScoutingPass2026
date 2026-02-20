function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwgfnOEqzmmNpA-L2fn3TWzAJtRFPqEANOaqPCgyip0A6IdxemXQ8hQVohQCg-802ECvA/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = false
      btn.innerHTML = "Sending..."

      let fd = getData("tsv");
      // for (const [key, value] of fd) {
      //   console.log(`${key}: ${value}\n`);
      // }

      // let fd = getData("tsv");           // returns object
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
