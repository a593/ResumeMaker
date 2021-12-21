function addexperienceField(){
    let newNode = document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.setAttribute("row", "5")
    newNode.classList.add('workField');
    newNode.setAttribute('placeholder', 'Add your work experience');
    let workObject = document.getElementById('work_container');
    let workAddButtonOject = document.getElementById('add_experience');

    workObject.insertBefore(newNode, workAddButtonOject);
}

function addskillsField(){
    let newNode = document.createElement('input');

    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.setAttribute("row", "5")
    newNode.classList.add('skillField');
    newNode.setAttribute('placeholder', 'Add your skills');
    let skillObject = document.getElementById('skill_container');
    let skillAddButtonOject = document.getElementById('add_skills');

    skillObject.insertBefore(newNode, skillAddButtonOject);
}

function addinterestField(){
    let newNode = document.createElement('input');

    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.setAttribute("row", "5")
    newNode.classList.add('interestField');
    newNode.setAttribute('placeholder', 'Add your hobbies');
    let interestObject = document.getElementById('interest_container');
    let interestAddButtonOject = document.getElementById('add_interest');

    interestObject.insertBefore(newNode, interestAddButtonOject);
}

function addEdButton(){
    let newNode = document.createElement('input');

    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.setAttribute("row", "5")
    newNode.classList.add('edField');
    newNode.setAttribute('placeholder', 'Add your education detail');
    let educationObject = document.getElementById('edu_container');
    let educationAddButtonOject = document.getElementById('add_education');

    educationObject.insertBefore(newNode, educationAddButtonOject);
}

function addlangButton(){
    let newNode = document.createElement('input');

    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.setAttribute("row", "5")
    newNode.classList.add('langField');
    newNode.setAttribute('placeholder', 'Add your languages');
    let langObject = document.getElementById('lang_container');
    let langAddButtonOject = document.getElementById('add_lang');

    langObject.insertBefore(newNode, langAddButtonOject);
}

function generateButton(){
    document.getElementById("nameT1").innerHTML = document.getElementById("nameField").value;
    document.getElementById("dobT").innerHTML = document.getElementById("dobField").value;
    document.getElementById("dpT").innerHTML = document.getElementById("dpField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("numT").innerHTML = document.getElementById("numField").value;
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
    document.getElementById("githubT").innerHTML = document.getElementById("githubField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedinField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById('summaryT').innerHTML = document.getElementById('summaryField').value;


    //!language

    const lgs = document.getElementsByClassName('langField');
    var str1 = "";
    for (var j of lgs) {
        str1 += `<li>${j.value}</li>`;
    }
    document.getElementById('langT').innerHTML = str1;


    //! education

    const edAdding = document.getElementsByClassName('edField');
    let str2 = "";
    for (let a of edAdding) {
        str2 += `<li>${a.value}</li>`
    }
    document.getElementById('eduT').innerHTML = str2;



    //! work experience

    const wes = document.getElementsByClassName('workField');
    var str3 = "";
    for (var j of wes) {
        str3 += `<li>${j.value}</li>`;
    }
    document.getElementById('weT').innerHTML = str3;


    //! skill 

    let skillField = document.getElementsByClassName('skillField');
    let str4 = "";
    for (let e of skillField) {
        str4 = str4 + `<li> ${e.value} </li>`;
    }
    document.getElementById('skillT').innerHTML = str4;

    //! hobbies

    const hobbiesAdding = document.getElementsByClassName('interestField');
    let str5 = '';
    for (let m of hobbiesAdding) {
        str5 += `<li>${m.value}</li>`;
    }
    document.getElementById('hobbiesT').innerHTML = str5;


//! profile photo    
    let file = document.getElementById('dpField').files[0];
    // console.log(file);
    
    let reader = new FileReader();
    reader.readAsDataURL(file);
    // console.log(reader.result);
    
    
    //* set image to the template
    reader.onloadend = function () {
        document.getElementById('dpT').src = reader.result;
    }



    document.getElementById("section-form").style.display = 'none';
    document.getElementById("section-template").style.display = 'flex'
} 
//! print

function print_resume() {
    window.print();
}
