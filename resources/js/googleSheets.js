function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyxS1fzUy949PL6cqcy6k99IWqZHHzA1kkeOHiLa3DL708GqHhtl5nQB9CB26G5-dbc/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = false
      btn.innerHTML = "Sending..."

      // let fd = getData("tsv");
      // for (const [key, value] of fd) {
      //   console.log(`${key}: ${value}\n`);
      // }

      let fd = getData("json");           // returns object
      fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: 'no-cors',
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
