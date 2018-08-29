$(document).ready(function(){
    //$('.modal').modal();
    $('.fixed-action-btn').floatingActionButton({direction: 'bottom'});
  });

function fillModal(element){
  let nameModalHeader = element.getAttribute("data-modal-header");
  let contentSectionModal = document.getElementsByClassName('.modal-content').innerHTML;
  $(contentSectionModal).removeClass('hide');
  
  //let modal = createModal(nameModalHeader, contentSectionModal);
  return $('#modal-container').append(modal);
}


function showModal(element) {
  let section = element.getAttribute("data-modal-header");
  let modalName = "";

  switch(section) {
    case "About Me":
      let modalAboutMe = document.getElementById('modal-About-Me');
      modalName = modalAboutMe; 
    break;
    case "Projects":
    let modalProject = document.getElementById('modal-Projects');
    modalName = modalProject; 
    break;
    case "Tech Skills":
      let modaldTechSkills = document.getElementById('modal-Tech-Skills');
    modalName = modaldTechSkills;
    break;
    case "Contact":
      let modalContact = document.getElementById('modal-Contact');
      modalName = modalContact; 
    break;
    case "Hobbies":
    let modalHobbies = document.getElementById('modal-Hobbies');
    modalName = modalHobbies; 
    break;
  }
  return modalName.style.display="block";
}

function closeModal(){
  let modalBase = document.getElementsByClassName("modal-shadow");
  
  return $(modalBase).hide();
}

/*function createModal(header,content){
  //let section = header;
  
  switch(section){
    /*case "About Me":
      return  `<div id="modal-aboutMe" class="modal-shadow">
                  <div class="modal white-bg">          
                    <div class="modal-header white-bg">
                      <h4 class="center purple-text"> ${header} </h4>
                      <span class="close">&times</span>
                    </div>
                      <div class="modal-content white-bg">
                        <p> Example text </p>
                      </div>
                  </div>
              </div>`
    break; 
    case "Projects":
      return 
    break; 
  }

  return `<diV class="modal-shadow">
            <div class="modal white-bg">
              <div class="modal-header white-bg">
                <h4 class="center purple-text"> ${header} </h4>
                <span class="close">&times</span>
              </div>
              <div class="modal-content white-bg"> ${content} </div>
          </div>`

}*/