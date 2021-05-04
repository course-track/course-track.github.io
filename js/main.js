var video = document.getElementById('background-video');
video.addEventListener('ended',function(){
    document.getElementById('landing-text').show();
});
$( document ).ready(function() {
    $('.file-upload').file_upload();
});

function readUrl(input) {
  
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let imgData = e.target.result;
        let imgName = input.files[0].name;
        input.setAttribute("data-title", imgName);
        console.log(e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  
  }

function clicked() {
   alert("Submission Successful!");
   window.location.href='https://course-track.github.io/';
}
