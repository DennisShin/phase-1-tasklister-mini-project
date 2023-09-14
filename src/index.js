document.addEventListener("DOMContentLoaded", () => {
  //form identity
  let form = document.querySelector('form');

  //Form submission handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(e.target["new-task-description"].value === ""){
      alert('Enter something!')
      e.preventDefault();
    }else{
        addItems(e.target["new-task-description"].value);
        
      //addItems(e.target["new-task-description"].value);
    // console.log(form.text.value);
      form.reset();

  }});
});


//function that creates text items and button
function addItems(text){
  let p = document.createElement('li');
  let btn = document.createElement('button');
  let prio = document.getElementById("prio");
  // let form2 = document.createElement('form');
  // form2.setAttribute('type', 'text');
  // form2.setAttribute('name', 'Edit');
  // form2.setAttribute('placeholder', 'edit here');

  //Creating list item with button
  btn.textContent = 'X';
  btn.addEventListener('click', function(){
    this.parentNode.remove();
  })
  p.textContent = `${text}`;
  // p.appendChild(form2);
  p.appendChild(btn);



  //Priority color selector
  if(prio.value == 1){
    p.style.color = "green"
    document.getElementById('low').appendChild(p);

  }else if (prio.value == 2){
    p.style.color = 'orange'
    document.getElementById('mid').appendChild(p);

  }else{
    p.style.color = 'red'
    document.getElementById('high').appendChild(p);

  }
  
  //Attaching list item to HTML
  // document.getElementById('tasks').appendChild(p);

}


//editing functionality
//  Want:
//    -When I double click a list item, a input form shows
//    -typing into the form and submitting updates that list item
//    -


//additional info input sections

