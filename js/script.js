/*
-   website-2 "trade fair"
-   CopyRight https://github.com/MayankDevil
-   Designed | Developed By Mayank
-   JavaScript : css/script
*/
try
{
    /*
        =================================================================
        } MENU FUNCTION : onclick menu open else close
        =================================================================
    */ 
    let menu_btn = document.getElementById('menu_btn')

    let menu = document.getElementById('menu')

    var isActive = false    // default menu status

    /*
        [ isActive is false function set menu open ]---------------------
    */ 
    
    function menu_enable()
    {
        menu_btn.innerHTML = `&#9776;`
        menu.style.top = `-200vh`
        isActive = false
    }
    
    /*
        [ isActive is true function set menu close ]---------------------
    */ 
    
    function menu_disable()
    {
        menu_btn.innerHTML = `&#8942;`
        menu.style.top = `15vh`
        isActive = true
    }

    /*
        -----------------------------------------------------------------
        | menu button on click if is active so enable else disable      |
        -----------------------------------------------------------------
    */ 
    
    menu_btn.onclick = function()
    {
        if(isActive)
        {
            menu_enable()    
        }
        else
        {
            menu_disable()
        }
    }
   
    /*
        -----------------------------------------------------------------
         links on click menu disable                                    |
        -----------------------------------------------------------------
    */

    let links = document.querySelectorAll("#menu a");

    for(let i = 0; i < links.length; i++)
    {    
        links[i].onclick = function()
        {
            menu_enable()
            // console.log('done')
        }
    }

    /*
        -----------------------------------------------------------------
        | window on scroll enable scroll up button else disable         |
        -----------------------------------------------------------------
    */

    let scrl_up = document.getElementById('scrl_up')

    window.addEventListener('scroll',function()
    {
        if (window.scrollY < 150)
        {
            scrl_up.style.display = `none`
        }
        else
        {
            scrl_up.style.display = `inline-block`
        }
    })

    /* ================================================================ */ 
}
catch(error)
{
    console.log(error);
}
// the end