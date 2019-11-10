
 let myForm = document.getElementById('myForm');
 let formData = new FormData(myForm);
 let results = document.querySelector(".results")

myForm.addEventListener('submit', e => {
    e.preventDefault();

    //oddly if you console.log an instance of the FormData object you get the FormData objet itself
    console.log(formData);

    console.log("")
    console.log("-----------")
    console.log("")

    //equally oddly if you console.log formData entries you get an empty array
    console.log(Object.entries(formData))

    console.log("")
    console.log("-----------")
    console.log("")

    // yet if you interate of formData with 'of' it will show you the keys as though you've called the entries obnect on it
    for (let key of formData) {
        console.log("key ", key)
    }

    console.log("")
    console.log("-----------")
    console.log("")

    //meanwhile iterating over it as an object just gives you the methods of the object class
    for (let key in formData) {
        console.log(`${key}) ${formData[key]}`)
    }
})


