//var set
var root = '';
var rent = '';
var recent = '';
amscroll = 0;
alock = false;
slock = false;
var rdb = firebase.database();
//end var set
document.getElementById('body').classList.add('bg-dark')
document.getElementById('root').style.display = 'none';
document.getElementById('loading').style.display = 'block';
setTimeout(()=>{
  document.getElementById('body').classList.remove('bg-dark')
  document.getElementById('root').style.display = 'block';
  document.getElementById('loading').style.display = 'none';
  document.getElementById('about').style.opacity = '0';
  document.getElementById('skills').style.opacity = '0';
  document.getElementById('project').style.opacity = '0';
  document.getElementById('bg').style.opacity = '0';
},2500)

// //check update
// rdb.goOnline();
// rdb.ref('script/update').on('value', (up)=>{
//   var message = up.val().message;
//   var cyes = up.val().msgyes;
//   var cno = up.val().msgno;
//   var yscript = up.val().yscript;
//   var nscript = up.val().nscript;
//   var type = up.val().type;
//   console.log(type)
//   if (up.val().onact == true){
//     Notipin.Confirm({
//       msg: `${message}`, // DEFAULT KOSONG
//       yes: `${cyes}`, // TULISAN DI TOMBOL YES
//       no: `${cno}`, // TULISAN DI TOMBOL NO
//       onYes: () => { yscript },
//       onNo: () => { nscript },
//       type: `${type}`, // NORMAL, DANGER, INFO, & BLUE -- DEFAULT NORMAL
//       mode: "LIGHT", // LIGHT/DARK -- DEFAULT LIGHT
//     })
//   }
// })
// //end check update

//page
const act = {
  "clear": ()=>{
    root = '';
  },
  "reload": ()=>{
    recent = root;
    root = '<center><div class="chaotic-orbit normal-load"></div></center>';
    setTimeout(()=>{
      root = recent;
    }, 1000)
  }
}

const Home = {
  "nav": ()=>{
    root += `
    <nav class="navbar navbar-dark bg-dark"  style="position: fixed; width: 100%;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Syeif Portofolio</a>
      </div>
    </nav>
    `;
  },
  "home": ()=>{
    root += `<section id="cbs">
    oaowkkaokwoak
    <input type="checkbox" id="cb">
    <label for="cb">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-xmark" id="cancel"></i>
    </label>
    <div class="menu">
      <header>Shorcut</header>
      <ul>
        <li onclick="document.getElementById('cbs').scrollTop = 0;"><a><i class="fa fa-house"></i> Home</a></li>
        <li onclick="document.getElementById('cbs').scrollTop = 300;"><a><i class="fa fa-user"></i> About Me</a></li>
        <li onclick="document.getElementById('cbs').scrollTop = 600;"><a><i class="fa fa-brain"></i> Skills</a></li>
        <li onclick="document.getElementById('cbs').scrollTop = 1000;"><a><i class="fa fa-pen-ruler"></i> Project</a></li>
        <li onclick="document.getElementById('cbs').scrollTop = 1400;"><a><i class="fa fa-address-card"></i> Contact</a></li>
      </ul>
    </div>
    <div class="anim text-light" id="home" style="margin-top: 100px;">
    <center><img height="80" width="80" src="global/sources/people.png" class="profile">
    <h3 style="margin-top: 10px;">Hello <span style="color: blue;">Im</span></h3>
    <h2>Syeif Sultoni Akbar</h2>
    <i id="arrow" style="font-size: 30px; margin-top: 35px" class="fa fa-arrow-down arrow anim"></i>
    </center>
    </div>
    <canvas height="100"></canvas>
    <div id="bg" class="bg-dark anim">
    <div id="about" style="margin-top: -50px" class="anim bg-dark">
      <h3 class="text-light" style="text-align: center;">About Me</h3>
      <p class="text-light" style="text-align: center;">
      Halo Perkenalkan Nama Saya Syeif Sultoni Akbar, Terserah lu mau panggil gw apa, nama gw multiple say:/.
      Gw masih kelas 1 SMP, awal gw tau coding dari kegabutan gw di 2019 Tiba tiba keluar aja diberanda"buat game dalam 1 jam",
      btw awal nya gw lebih suka ke <a href="https://www.google.com/search?q=elektronika&rlz=1C1JJTC_idID1011ID1011&oq=elektronika&aqs=chrome..69i57j0i512j0i131i433i512j0i512l7.4314j0j1&sourceid=chrome&ie=UTF-8&dlnr=1&sei=TPW-YovMIMONseMPj-uIgAU">elektronika</a>, pas nemu tu video gw kepo dan gw liat tu video meski gw ga paham.
      setelah gw liat gw merasa tertarik, di situ gw mulai searching searching dan belajar, bahasa yang pertamakali gw pelajari adalah <a href="https://www.google.com/search?q=c%2B%2B&rlz=1C1JJTC_idID1011ID1011&sxsrf=ALiCzsaH1qHMzMHtIEIihtWN_zCppsQmbw%3A1656681813403&ei=VfW-Yt6dGJCQseMPsKmBsAk&ved=0ahUKEwienPnX5Nf4AhUQSGwGHbBUAJYQ4dUDCA0&uact=5&oq=c%2B%2B&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggIABCABBCxAzILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOgQIIxAnOgYIIxAnEBM6CAgAELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoHCAAQsQMQQzoECAAQQzoKCAAQsQMQgwEQQzoLCC4QgAQQxwEQrwFKBAhBGABKBAhGGAFQoBNYwENgj1xoA3ABeACAAaoCiAGVB5IBBTEuMi4ymAEAoAEByAERwAEB2gEGCAEQARgJ&sclient=gws-wiz">cpp</a> dan lu tau kelanjutanya?,
      ya... gw ngestuck di cpp, dan di sini gw berhenti sampai tahun 2021, di 2021 gw nemu video nya bg <a href="https://www.youtube.com/c/DeaAfrizal/videos">Dea</a> waktu buat portofolio di Fyp TikTok.
      dan gw mulai tertarik lagi dengan coding, gw belajar <a href="https://www.google.com/search?q=html&rlz=1C1JJTC_idID1011ID1011&oq=html&aqs=chrome..69i57j0i131i433i512l2j0i433i512l2j69i60l3.3050j0j1&sourceid=chrome&ie=UTF-8">HTML"</a>, tapi cuma sebentar, yaa.. ngumpulin niat dan mood ga mudah, beberapa bulan kemudian
      gw mencoba belajar bahasa lain, yaitu <a href="https://www.google.com/search?q=python&rlz=1C1JJTC_idID1011ID1011&oq=python&aqs=chrome..69i57j0i433i512l2j0i131i433i512l2j0i433i512j0i512l3.2260j0j9&sourceid=chrome&ie=UTF-8">Python</a>, ini bahasa yang mudah banget buat dipelajari, pernah buat beberapa tools dengan python ini,
      ga kerasa udah 2 bulan bersama python, rasanya bosan, tidak ada hal lain yang harus dipelajari, dan di sini gw mulai belajar <a href="https://www.google.com/search?q=html&rlz=1C1JJTC_idID1011ID1011&oq=html&aqs=chrome..69i57j0i131i433i512l2j0i433i512l2j69i60l3.3050j0j1&sourceid=chrome&ie=UTF-8>HTML">HTML</a>, <a href="https://www.google.com/search?q=css&rlz=1C1JJTC_idID1011ID1011&oq=css&aqs=chrome..69i57j0i433i512l2j0i131i433i512l3j0i433i512j69i61.1388j0j9&sourceid=chrome&ie=UTF-8">CSS</a>, dan <a href="https://www.google.com/search?q=javascript&rlz=1C1JJTC_idID1011ID1011&oq=javascript&aqs=chrome..69i57j0i131i433i512l2j0i512j0i131i433i512j69i60j69i65j69i61.3876j0j4&sourceid=chrome&ie=UTF-8">JS</a> sampai sekarang....
      yaa, kaya nya ini bukan about Me lgi malahan udah jadi About My Life, Trimakasih buat yang sudah baca sampe ahir ;)</p>
    </div>
    <canvas height="100"></canvas>
    <div id="skills" class="anim">
      <h3 class="text-light" style="text-align: center;">Skills</h3>
      <center id="skill-list"></center>
    </div>
    <div id="project" class="anim">
      <h3 class="text-light" style="text-align: center;">Project</h3>
      <Table>
        <tr>
          <td class="project">
          <div class="card pshadow" style="width: 18rem;">
            <img src="global/sources/Riverz.png" class="card-img-top" alt="riverz">
            <div class="card-body">
              <h5 class="card-title">Riverz-Project</h5>
              <p class="card-text">Simple Chat With Firebase, Bootstrap, and Vanilla JS</p>
              <a href="https://riverzgm.netlify.app" class="btn btn-primary">See Demo</a>
            </div>
          </div>
          </td>
          <td class="project">
          <div class="card pshadow" style="width: 18rem;">
            <img src="global/sources/RivFood.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Riv Food</h5>
              <p class="card-text">Website for sell the food from my friends, use React Js and Bootstrap</p>
              <a href="https://rivfood.netlify.app" class="btn btn-primary">Go Beta</a>
            </div>
          </div>
          </td>
        </tr>
      </Table>
    </div>
    <canvas height="100"></canvas>
    <div id="contact">
    <h3 class="text-light" style="text-align: center;">Contact</h3>
    <center>
    <img class="animl contact" onclick="my.git()" src="https://download.logo.wine/logo/GitHub/GitHub-Logo.wine.png" height="50">
    <img class="animl contact" onclick="my.yt()" src="https://download.logo.wine/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.png" height="50">
    <img class="animl contact" onclick="my.wa()" src="https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png" height="60">
    </center>
    </div>
    <canvas height="150"></canvas>
    <center class="bg-dark"><h5 class="text-light">Made By <span class="text-primary">Syeif Sultoni Akbar</span></h5><canvas height="50"></canvas></center>
    </div>
    
    </section>`;
  }
}
//endpage
//set home
act.clear();
Home.nav();
Home.home();
//end set home

const my = {
  "yt": ()=>{
    open("https://www.youtube.com/channel/UCXVCPVRbNHM_-iHZel4DOgQ");
  },
  "wa": ()=>{
    open("https://wa.me/6281228020195")
  },
  "git": ()=>{
    open("https://github.com/Goldn7799")
  }
}

function tscroll(top) {
  document.getElementById('cbs').scrollTop = top;
}


//update
const update = window.setInterval(()=>{
  if (rent != root){
    rent = root;
    document.getElementById('root').innerHTML = root;
  };
  if (alock == false){
    alock = true;
    document.getElementById('arrow').style.marginTop = '35px';
  }else {
    alock = false;
    document.getElementById('arrow').style.marginTop = '0px';
  }
}, 250)
//end update

  //scroll
const scrl = window.setInterval(()=>{
  amscroll = document.getElementById('cbs').scrollTop;
  if (amscroll > 299 || amscroll < 0){
    document.getElementById('arrow').style.display = 'none';
    document.getElementById('home').style.opacity = '0';
  }else {
    document.getElementById('arrow').style.display = 'block';
    document.getElementById('home').style.opacity = '100';
  }
  if (amscroll < 299 || amscroll > 599){
    // document.getElementById('about').style.opacity = '0';
  }else {
    document.getElementById('about').style.opacity = '100';
  }
  if (amscroll < 499 || amscroll > 999){
    // document.getElementById('skills').style.opacity = '0';
  }else {
    document.getElementById('skills').style.opacity = '100';
    if (slock == false) {
      slock = true;
      document.getElementById('skill-list').innerHTML = `<iframe width="400" height="400" src="https://github-readme-stats.vercel.app/api?username=Goldn7799&show_icons=true"></iframe>
      <iframe width="250" height="250" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Goldn7799"></iframe>`;
    };
  }
  if (amscroll < 899 || amscroll > 1499){
    // document.getElementById('project').style.opacity = '0';
  }else {
    document.getElementById('project').style.opacity = '100';
  }
  if (amscroll < 299){
    document.getElementById('bg').style.opacity = '0';
  }else {
    document.getElementById('bg').style.opacity = '100';
  }
}, 500)

  //end scroll