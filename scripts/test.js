// Functions for each action-command.

function help(){
    return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
    <tr>\
      <td>all</td>\
      <td>Give me the complete picture</td>\
    </tr>\
    <tr>\
      <td>about</td>\
      <td>about me</td>\
    </tr>\
    <tr>\
      <td>contact</td>\
      <td>how to contact me</td>\
    </tr>\
    <tr>\
      <td>links</td>\
      <td>Alert I have hidden spiders here</td>\
    </tr>\
    <tr>\
      <td>skills</td>\
      <td>Languages Im comfortable with</td>\
    </tr>\
    <tr>\
      <td>certificates</td>\
      <td>Something idk</td>\
    </tr>\
    <tr>\
      <td>hireme</td>\
      <td>CV</td>\
    </tr>\
  </table>";
  }
  
  function contact(){
    return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
    <tr>\
      <td>Email :</td>\
      <td><a href=\"mailto:sakthikumarajay@gmail.com\">sakthikumarajay@gmail.com</a></td>\
    </tr></table>";
  }
  
  function skills(){
    return "<h2><span style=\"color:#81b2be;\">Skills:</span></h2><ul><li>Add it on your own bish</li></ul>";
  }
  
  function about(){
    return "<h2><span style=\"color:#bbc690;\">About:</span><p>Im a bish and I code</p>";
  }
  
  function cv(){
    return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"assets/PDF/Resume/Resume_27_08_2020.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
  }
  function cert(){
    return "<span style=\"color:#aefeb7;\"><h2>Certificates:</h2></span><p>\t<ul><li><a href=\"assets/PDF/Certificates/Coursera 66QP5WT6TJ5Z.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a></li><li><a href=\"assets/PDF/Certificates/Coursera GEFPPACR3SCL.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a></li><li><a href=\"assets/PDF/Certificates/Coursera JLABFR2P2832.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a></li><li><a href=\"assets/PDF/Certificates/Coursera Z8XU9ELJ8B2U.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">Give names from test.js</a></li></ul>";
  }
  
  function links(){
    //change the corresponding stuff
    return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
    <li><a href=\"https://www.linkedin.com/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
    <li><a href=\"https://www.github.com/\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
    <li><a href=\"https://www.twitter.com/\" target=\"_blank\"><i class=\"fab fa-twitter\"></i> Twitter</a></li>\
    </ul>";
  }
  
  
  function commandProcessor(e){
  
    //Check if the enter key is pressed
    if(e.keyCode == 13){
  
      //Clear the area where info will be printed
      document.getElementById('injected').innerHTML= "";
  
      //Get user input
      var txtInput = document.getElementById('txtBox').value;
  
      //Select what info to print according to command
      if(txtInput == "help"){
        document.getElementById('injected').innerHTML=help();
      }else if (txtInput=="all") {
        document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cert() + "\n\n\n" + cv();
      }else if (txtInput == "about") {
        document.getElementById('injected').innerHTML=about();
      }else if (txtInput == "contact") {
        document.getElementById('injected').innerHTML=contact();
      }else if (txtInput == "hireme") {
        document.getElementById('injected').innerHTML=cv();
      }else if (txtInput=="skills") {
        document.getElementById('injected').innerHTML=skills();
      }else if (txtInput=="certificates") {
        document.getElementById('injected').innerHTML=cert();
      }else if (txtInput=="links") {
        document.getElementById('injected').innerHTML=links();
      }else{
        document.getElementById('injected').innerHTML = help();
      }
  
      //Clear input text box
      document.getElementById('txtBox').value= "";
    }
  }
  