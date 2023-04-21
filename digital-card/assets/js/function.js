var saveBtn = document.getElementById("add-btn");
saveBtn.addEventListener("click", function () {
  // Get the contact information from the website
  try{gMobile = document.getElementById('mobile').href.split(':')[1]} catch(err){ gMobile = ''}
  try{gWork = document.getElementById('work').href.split(':')[1]} catch(err) {gWork = ''}
  try{gEmail = document.getElementById('email').href.split(':')[1]} catch(err) {gEmail = ''}

  var contact = {
    name: document.getElementById('name').innerHTML,
    work: gWork,
    mobile: gMobile,
    email: gEmail
  };


  // create a vcard file
  var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.work + "\nTEL;TYPE=mobile,voice:" + contact.mobile + "\nEMAIL:" + contact.email + "\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);
  
  const newLink = document.createElement('a');
  newLink.download = contact.name + ".vcf";
  newLink.textContent = contact.name;
  newLink.href = url;
  
  newLink.click();
});