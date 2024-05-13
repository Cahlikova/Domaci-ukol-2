let jmeno = prompt("Zadej jméno bez diakritiky")
let prijmeni = prompt("Zadej příjmení bez diakritiky")


jmeno = jmeno.trim()
prijmeni = prijmeni.trim()
jmeno = jmeno.slice(0, 3)
prijmeni = prijmeni.slice(0, 5)
let email = `${prijmeni}${jmeno}@fit.cvut.cz`
email = email.toLowerCase()


document.body.innerHTML += "<p>" + email + "</p>"



//*document.body.innerHTML += "<p>" + prijmeni.trim() + "</p>"//*
//*document.body.innerHTML += "<p>" + jmeno.trim() + "</p>"//*
//*document.body.innerHTML += "<p>" + prijmeni.slice(0, 5) + "</p>"//*
//*document.body.innerHTML += "<p>" + jmeno.slice(0, 3) + "</p>"//*
//*document.body.innerHTML += "<p>" + prijmeni.padEnd(20, "@fit.cvut.cz") + "</p>"//*
//*document.body.innerHTML += "<p>" + jmeno.padEnd(20, "@fit.cvut.cz") + "</p>"//*
//*document.body.innerHTML += "<p>" + jmeno.toLowerCase() + "</p>"//*
//*document.body.innerHTML += "<p>" + prijmeni.toLowerCase() + "</p>"//*

/*document.body.innerHTML += `
    <p>${jmeno.trim()}</p>
    <p>${prijmeni.trim()}<p>
    <p>${jmeno.slice(0, 3)}</p>
    <p>${prijmeni.slice(0, 5)}</p>
    <p>${jmeno.padEnd(20, "@fit.cvut.cz")}</p>
    <p>${prijmeni.padEnd(20, "@fit.cvut.cz")}</p>
    <p>${jmeno.toLowerCase()}</p>
    <p>${prijmeni.toLowerCase()}</p>`*/




/*let email = prijmeni.trim().slice(0, 5)
email += jmeno.trim().slice(0, 3)
email += "@fit.cvut.cz"
email = email.toLowerCase()

document.body.innerHTML += "<p>" + email + "</p>"*/

