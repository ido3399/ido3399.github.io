	 function selectTabMenu(i){
            switch(i){
               case 1:     
                document.getElementById("TabMenuCon71").style.display="block";
                document.getElementById("TabMenuCon72").style.display="none";
                document.getElementById("TabMenuCon73").style.display="none";
                break;
            case 2:
                document.getElementById("TabMenuCon71").style.display="none";
                document.getElementById("TabMenuCon72").style.display="block";
                document.getElementById("TabMenuCon73").style.display="none";
                break;
            case 3:    
                document.getElementById("TabMenuCon71").style.display="none";
                document.getElementById("TabMenuCon72").style.display="none";
                document.getElementById("TabMenuCon73").style.display="block";
                break;
            default:
                document.getElementById("TabMenuCon71").style.display="none";
                document.getElementById("TabMenuCon72").style.display="none";
                document.getElementById("TabMenuCon73").style.display="none";
                break;
            }
        }