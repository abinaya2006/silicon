var drop

function preload(){
    b=loadImage('back.png')
    ba=loadImage('Background.png')
    aut=loadImage('au bu.jpg')
    es=loadImage('empty star.png')
    s=loadImage('spring.png')
    w=loadImage('winter.jpg')

    //level1
    bac=loadImage('Background.png')
    tile1=loadImage('atile (3).png')
    tile3=loadImage('atile (5).png')
    t=loadImage('tree1.png')
    tile2=loadImage('atile (11).png')
    //smileys
    em=loadImage('sm.png')

    //plates
    pl1=loadImage('plate1.png')
    //thorns
    th=loadImage('thorns1.png')
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    button=createButton('PLAY!')
    button.position(740, 410);
    button.style('font-size','50px')
    button.style('background-color','#2173A5')

    //button play
    pla=createButton('PLAY!')
    pla.position(735, 500);
    pla.style('font-size','50px')
    pla.style('background-color','#63F700')
    pla.hide()

backg=createSprite(750,345)
    backg.addImage(b)
    backg.scale=1.2

    
back=createSprite(750,345)
back.addImage(bac)
back.scale=0.22988
back.visible=false
    
    //level1
    autu=createSprite(250,260)
        autu.addImage(aut)
        autu.scale=0.4
        autu.visible=false
    //obs
    rect1=createSprite(1900,-1000,70,1000)
    rect1.velocityY=4
    rect1.shapeColor='green'
    // rect1.visible=false
    rect2=createSprite(2400,1500,70,1000)
    rect2.velocityY=-4
    rect2.shapeColor='green'
    // rect2.visible=false

        //tiles
        
        at=createSprite(350,900)
        at.addImage(tile1)
        at.scale=1.5
        at.visible=false
        at2=createSprite(1140,925)
        at2.addImage(tile1)
        at2.scale=1.6
        at2.visible=false
        at3=createSprite(1940,925)
        at3.addImage(tile1)
        at3.scale=1.6
         at3.visible=false
         at4=createSprite(2740,925)
         at4.addImage(tile1)
         at4.scale=1.6
          at4.visible=false
      
           at22=createSprite(3530,310)
           at22.addImage(tile2)
           at22.scale=0.6
           at23=createSprite(3835,310)
           at23.addImage(tile3)
           at23.scale=0.6
      
        //trees
        atr1=createSprite(800,320)
        atr1.addImage(t)
        atr1.scale=0.5
        atr1.visible=false

        //smiley
        emoj1=createSprite(200,450)
        emoj1.addImage(em)
        emoj1.scale=1.6
        emoj1.visible=false
        
        //invisible land
        il=createSprite(500,570,2100,10)
        il.visible=false
        il1=createSprite(1500,320,250,20)
        il1.visible=false
        
        il2=createSprite(3530,200,300,20)
        // il2.visible=false
       il3=createSprite(3835,330,400,20)
        il3.rotation=45
        // il3.visible=false
    
        //plates
        pla1=createSprite(1500,300)
        pla1.addImage(pl1)
        pla1.scale=0.5
        pla1.visible=false

        //throns
        th1=createSprite(2700,500)
        th1.addImage(th)
        th1.scale=0.5
        // th1.visible=false

        //level2
        spr=createSprite(750,270)
        spr.addImage(s)
        spr.scale=1.4
        spr.visible=false

      
        //level3
        wi=createSprite(1300,270)
        wi.addImage(w)
        wi.scale=0.6
        wi.visible=false


}

function draw(){
    background(rgb(300, 1, 59))
   emoj1.velocityX=0;
    emoj1.collide(il)

   if( (emoj1.collide(il2)|| emoj1.collide(il3)||emoj1.collide(il1))&&keyDown('space')){
       emoj1.velocityY=-14
   }
  

  



   
    button.mousePressed(changeBG);
    
     function changeBG(){
        button.hide()
        
        l=createElement('h1',["LEVELS"])
        l.position(650,40)
        l.style('font-size','50px')
        
        backg.visible=false
        back.visible=false

        //level1
        autu.visible=true
        //level2
        spr.visible=true
     
         //level3
         wi.visible=true

         pla.show()
         pla.mousePressed(le1)
         
    }
 	
      at.velocityX=0
      atr1.velocityX=0
      at2.velocityX=0
      at3.velocityX=0
      at4.velocityX=0
      at22.velocityX=0
      at23.velocityX=0
      th1.velocityX=0
      rect1.velocityX=0
      rect2.velocityX=0
      il1.velocityX=0
     il2.velocityX=0
     il3.velocityX=0
      pla1.velocityX=0

            if(emoj1.visible==true&&keyDown('right')){
                emoj1.velocityX=5
                emoj1.rotation+=6
                at.velocityX-=10
                rect1.velocityX-=10
                rect2.velocityX-=10
                atr1.velocityX-=10
                at2.velocityX-=10
                at4.velocityX-=10
                at3.velocityX-=10
                at22.velocityX-=10
                at23.velocityX-=10
                pla1.velocityX-=10
                il1.velocityX-=10
                il2.velocityX-=10
                il3.velocityX-=10
                th1.velocityX-=10
       
            }
            if(emoj1.visible==true&&keyDown('left')){
               emoj1.velocityX=-5
               emoj1.rotation-=6
               at.velocityX+=10
               atr1.velocityX+=10
               at2.velocityX+=10
               at3.velocityX+=10
               at22.velocityX+=10
               at23.velocityX+=10
               pla1.velocityX+=10
               il1.velocityX+=10
               il2.velocityX+=10
               il3.velocityX+=10
               th1.velocityX+=10
               at4.velocityX+=10
               rect1.velocityX+=10
               rect2.velocityX+=10
           }
if (keyDown("space")&&emoj1.y>=450) {
    emoj1.velocityY=-25
}
emoj1.velocityY = emoj1.velocityY + 0.8

  if(rect1.y>400) {rect1.y=-500}
  if(rect2.y<10) {rect2.y=1500}

    
    drawSprites()
}

function le1()
{
    background(bac)
    spr.visible=false;
    autu.visible=false;
    wi.visible=false
    pla.hide()
    at.visible=true
    at2.visible=true
    at3.visible=true
    at4.visible=true
    atr1.visible=true
    emoj1.visible=true
    back.visible=true
    pla1.visible=true
     at21.visible=true
    l.hide()
    rect1.visible=true
    rect2.visible=true
    th1.visible=true
}
console.log(rect1.x)


function aphase2(){
}
 

