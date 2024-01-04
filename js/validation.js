// /*
// -   website 2 "trade fair"
// -   CopyRight By Mayank
// -   Designed & Developed By Mayank
// -   JavaScript : css/formValidation
// */
// try
// {
//     /*
//         ======================================================
//         | FORM VALIDATION | onclick add else remove menu
//         ======================================================
//     */ 
//     let menu_btn = document.getElementById('menu_btn');

//     let menu = document.getElementById('menu');

//     let nav = document.getElementById('nav');

//     var n = 0;
    
//     menu_btn.onclick = function()
//     {
//         if(n == 0)
//         {
//             this.innerHTML = "&#8942;";
//             menu.style.display = "grid";
//             nav.classList.add('nav_open')
//             n = 1;
//         }
//         else
//         {
//             this.innerHTML = "&#9776;";
//             menu.style.display = "";
//             nav.classList.remove('nav_open')
//             n = 0;
//         }
//     }
//     /*
//         -------------------------------------------------------
//          anchor function  : onclikc anchor close menu
//         -------------------------------------------------------
//     */ 
//     let links = document.querySelectorAll("#menu a");

//     for(let i = 0; i < links.length; i++)
//     {    
//         links[i].onclick = function()
//         {
//             menu_btn.innerHTML = "&#9776;";
//             menu.style.display = "";
//             nav.classList.remove('nav_open')
//             n = 0;
//         }
//     }
//     /*
//         ========================================================
//     */ 
    
// }
// catch(error)
// {
//     console.log(error);
// }
// // the end