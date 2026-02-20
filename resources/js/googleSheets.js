function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyxS1fzUy949PL6cqcy6k99IWqZHHzA1kkeOHiLa3DL708GqHhtl5nQB9CB26G5-dbc/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = false
      btn.innerHTML = "Sending..."

      let fd = Object.fromEntries(getData(false));
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(fd) 
      })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
