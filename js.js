function myFlexmenu(el){
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display = 'block';
        document.getElementById(el).style.height = '150px';

    }else{
        document.getElementById(el).style.display = 'none';
        document.getElementById(el).style.height = '0px';
    }
}
