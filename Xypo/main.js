// const menuBtn = document.getElementById("menuBtn");
// const sideNav = document.getElementById("sideNav");

// // in css change position on #sideNav


// sideNav.style.right ="-250px"
//   menuBtn.onclick = () => {
//       if( sideNav.style.right ="-250px") 
//       {
//           sideNav.style.right = 0;
//       }else if (sideNav.style.right = 0){
//           sideNav.style.right ="-250px"
//      }
    
//     }
function openNav() {
    document.getElementById("sideNav").style.display = "block";
    document.getElementById("menuBtn").style.display = "none"
  }

  function closeNav() {
    document.getElementById("sideNav").style.display = "none";
    document.getElementById("menuBtn").style.display = "block";
  }