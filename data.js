function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}
getfile("data.json",function(text){
  var data =JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.CareerObjective);
})
var child = document.querySelector(".childone")


function details(det){
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);

  var name = document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);

  var phoneno = document.createElement("h3");
  phoneno.textContent = det.phoneno;
  child.appendChild(phoneno);


  var  mail = document.createElement("a");
  mail.href =  "mailto:saisandeep4545@gmail.com";
  mail.textContent = det.email;
  child.appendChild(mail);

  var address = document.createElement("h3");
  address.textContent = "Address";
  child.appendChild(address);

  var address = document.createElement("h2");
  address.textContent = det.address;
  child.appendChild(address);

  var hr = document.createElement("h2");
  child.appendChild(hr);

}
var child2=document.querySelector(".childtwo")
function career(careerinfo){
  var add = document.createElement("h3");
  add.textContent = "Career Objective";
  child2.appendChild(add);

  var address= document.createElement("hr");
  child2.appendChild(address);

  var info = document.createElement("p");
  info.textContent = careerinfo.info;
  child2.appendChild(info);
}
