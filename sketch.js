//Create variables here
var dog,dogImg,happyDogImg,database,foodS,foodStack;
var feed,addFood;
var fedTime,lastFed;
var foodObj

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")

	//load images here
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database(firebase,mater.js,firebase.ref);
  foodStock=database.ref("food")
  foodStock.on("value",readStock)
  foodStock.set(20)
  foodObj=new Food();
  dog=createSprite(250,350,10,60);
  dog.addImage(dogImg)
  dog.scale=0.2;

  feed=createButton("feed the dog");
  feed.position(700,95)
  feed.mousePressed(feedDog)
  addFood=createButton("ADD FOOD")
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}
function draw(){
bakckground("green")
fedTime=database.ref("Feed Time")
fedTime.on("value",function(data){

  lastFed=data.val();
})




  textSize(20)
  fill(255)
  if(lastFed>=12){
    text("last FEED:"+lastFed%12+"PM",350,30);
  }else if(lastFed==0){
text("Last Feed: 12 AM",350,30);
  }else{
    text("Last Feed"+ LastFed+"AM",350,30)
    
  }

  
  text("press Up Arrow to feed milk",50,50)
  text("food remaining:"+foodS,50,50);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImg);
  }
if(keyWentUp(UP_ARROW)){
  dog.addImage(happyDogImg)

}
if(foodS===0){
  foodS=20;
  
}


drawSprites();

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref("/").update({
  Food:x

  })
}
function readStock(data){
  foodS=data.val();
}

}







