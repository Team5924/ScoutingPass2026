function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxYpArzIdDBCy3ZZmjH2KZTErAfJWl0OsqWO_46VfBQaPsyqC0CuW3rL8fK_Qp80zE/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')

    if (!form || !btn) return;

    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData("tsv");
      if (pitScouting) {
          fd = "PIT\t" + fd;
      } else if (typeof qualCollectData === 'function') {
          fd = "QUAL\t" + qualCollectData();
      }
      fetch(scriptURL, {
        method: "POST",
        mode: 'no-cors',
        body: fd
      })
        .then(response => { 
              alert('Yippee!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}


