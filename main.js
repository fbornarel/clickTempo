'use strict';
import Click from './Click';
/*
--Si pas de page dédiée à la classe Click--
class Click{
    constructor(id,beatsParMinute,beatsParBar){
        this.id= Number;
        this.beatsParMinute = Number[-1];
        console.log(this.beatsParMinute);
        this.beatsParBar = Number;
    }
}*/

var play = 1;

//Fonction qui vérifie l'existance d'une clé Click dans le localStorage et qui modifie le HTML en fonction
function clickExist(){
    var clickGet = localStorage.getItem('Click');
    var clickParse = JSON.parse(clickGet);//désérialisation
    if(clickGet){
        document.getElementById('beatsParMinute').value = clickParse.beatsParMinute;
        document.getElementById('beatsParBar').value = clickParse.beatsParBar;
    }
}
clickExist();


//Fonction qui:
//              - enregistre le Click demandé par l'utilisateur dans le localStorage
//              - calcul les beats par ms
//              - transforme Play en Stop à chaque click

window.registerClick = function registerClick(){

    var beatsParMinuteHtml = document.getElementById('beatsParMinute').value;
    var beatsParBarHtml = document.getElementById('beatsParBar').value;
    var click = new Click(beatsParMinuteHtml,beatsParBarHtml);
    var clickStringify =JSON.stringify(click);//sérialisation
    //Enregistrement dans le localStorage de la Classe Click
    localStorage.setItem('Click', clickStringify);

    var beepBeatsParMinute = new Audio;
    //Fonction qui génère un beep
    function beep(){                  
        beepBeatsParMinute.src = './audio/beepMinute.mp3'; 
        beepBeatsParMinute.play();     
    }

    var playButton = document.getElementById('play');
    var a = beatsParMinuteHtml/60;
    var totalMS = 1000/a;//Calcul du beatsParMinute en ms
    var x = setInterval(beep,totalMS);
    
    if( play === 1){
        playButton.innerHTML = 'Stop';
        play=0;  
        x;
        console.log(x) ;            
    }
    else{
        playButton.innerHTML='Play';
        play = 1;
        clearInterval(x);   
    }    
}





