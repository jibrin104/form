
document.addEventListener("DOMContentLoaded", Function)(){const feedbackform 
    = document.getElementById("feedbackForm"),
}
 
feedbackform.addEventListener("submit", function (event)) {Event.preventDefault ()}

// get from elements
const nameinput = document.getElementById("name")
const mailinput = document.getElementById("email ")
const commentinput = document.getElementById("comment")

// get values from the inputs and trim
const name = nameinput.value.trim()
const email =emailinput.value.trim()
const comment = commentinput.value.trim()



//validation and breaking the process if any of the fields in not filled 
if(!name || !email || !comment){alert('please fill out all fields')
return

}

//collect the data variables into a single javascript object 
const feedbackData = {
    name: name,
     email: email,
    comment: comment
}


// clear from fieds after submission
nameinput.value =''
emailinput.value =''
commentinput.value =''

//alert the collected data as JSON object 
alert(JSON.stringify(feedbackData))
}
)

} )







