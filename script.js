var money=100

function draw(){
    money=localStorage.getItem("p")
    document.getElementById("money").innerHTML= "$$$Moneh$$$ -> " + money
}


function FeedMe(){
    
    if (money >= 50){
        
        money= money - 50
        localStorage.setItem("p", money)
        document.getElementById("airplanemode").src="assets/eating.gif"
  
        document.getElementById("cattalk").innerHTML="Yum...but I think I gained too much weight..."
        // use settimeloop and make the image src gp back tp its original
        setTimeout(()=>{
            document.getElementById("airplanemode").src="assets/cat_happy.gif"
            
            document.getElementById("cattalk").innerHTML="Meaawwww Happyyy"
        
        },4000)

        setTimeout(()=>{
            document.getElementById("airplanemode").src="assets/cat.gif"
            document.getElementById("cattalk").innerHTML="What now?"
        },8000)
    }   
   
}

function EarnPoints(){
    document.getElementById("airplanemode").src="assets/cat-lick.gif"
    window.location.href="another.html"
}

function DressMeUp(){

    if (money >= 100){
        money= money - 100   
        document.getElementById("prop1").hidden= false
        document.getElementById("prop2").hidden= false
        document.getElementById("prop3").hidden= false
    
    }
}

function wings(){
    document.getElementById("airplanemode").src="assets/fairytransformation.gif"

    setTimeout( () => {
        document.getElementById("airplanemode").src="assets/cat.gif"

    }, 6000 )
}

function bow(){
    document.getElementById("airplanemode").src="assets/preppy.gif"

    setTimeout( () => {
        document.getElementById("airplanemode").src="assets/cat.gif"

    }, 3000 )
}

function hat(){
    document.getElementById("airplanemode").src="assets/hat.gif"

    setTimeout(() => {
    document.getElementById("airplanemode").src="assets/cat.gif"

    }, 6000);

}
function WatchThis(){

    if (money >= 20){
        money= money - 20   
        document.getElementById("airplanemode").src="assets/slay.gif"
  
        document.getElementById("cattalk").innerHTML="oh yeahhhhhhhh"
        setTimeout(()=>{
            document.getElementById("airplanemode").src="assets/queen.gif"
            
            document.getElementById("cattalk").innerHTML="im a slay queennnnn"  
            
            
        },7000)
    
        setTimeout(()=>{
            document.getElementById("airplanemode").src="assets/cat.gif"
            document.getElementById("cattalk").innerHTML="What now?"
        },12000)
        
  
    }
}

function WaterMe(){
    if (money >= 40){
        money= money - 40   
        document.getElementById("airplanemode").src="assets/eatingwaterbelike.gif"
  
        document.getElementById("cattalk").innerHTML="*drinks*"
        setTimeout(()=>{
            document.getElementById("airplanemode").src="assets/afterwater.gif"
            
            document.getElementById("cattalk").innerHTML="water tastes good i tink"  
            
        
        },7000)

        setTimeout(()=>{
            document.getElementById("airplanemode").src="assets/cat.gif"
            document.getElementById("cattalk").innerHTML="what now?"
        },11000)

    
    }
}



   
function sleepytime(){

    if (money >= 100){
        money = money - 100   

        document.getElementById("airplanemode").src="assets/sleepy.png"
  
        document.getElementById("cattalk").innerHTML="tap the screen to try and wake the cat"
        setTimeout(()=>{
            
            document.getElementById("cattalk").innerHTML="how DARE YOU!"  
            
            document.getElementById("airplanemode").src="assets/angry.gif"
        },4500)

        setTimeout(() => {
                document.getElementById("airplanemode").src="assets/afterwaking.gif"
        }, 3000);

        setTimeout(()=>{
            document.getElementById("airplanemode").src="assets/cat.gif"
            document.getElementById("cattalk").innerHTML="what now?im bored"
        },8000)

    
    }
}

function bathtime(){

    if (money => 367){
        money =  money-367 
    
        document.getElementById("airplanemode").src="assets/bath.gif"
        document.getElementById("cattalk").innerHTML="KeEp ScRuBBING"
        setTimeout(()=>{
        
                document.getElementById("airplanemode").src="assets/drying.gif"
            
                document.getElementById("cattalk").innerHTML="iM cold!!!"  
            
                document.getElementById("airplanemode").src="assets/drying.gif"
        },4000)

        setTimeout(()=>{
            document.getElementById("airplanemode").src="assets/cat.gif"
            document.getElementById("cattalk").innerHTML="what now? im so bored"
        },9000)

    
    }



}


