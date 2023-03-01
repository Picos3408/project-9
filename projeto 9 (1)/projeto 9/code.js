var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f0324290-47cb-412c-a5fd-9ea326cb4baa","bb3ab340-4b5d-43fc-87bf-327c56a19169","45944b2d-36d5-4a3d-8963-b0ca06d132ce","7d211c16-4237-4d98-9e68-98a114917601","f345bb2f-3647-47dc-8d09-2f8a1a345d7f","4dea2426-6b96-4e01-a905-1763143c252e","2f075a19-7ed0-425e-bcb9-b25964332d11","9fa991b3-d70d-4664-9301-e78ca3efc24e"],"propsByKey":{"f0324290-47cb-412c-a5fd-9ea326cb4baa":{"name":"spacebattle_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sZXDivr1nRzdU0a28__uOlYYxOk_Hjun/category_retro/spacebattle_08.png","frameSize":{"x":226,"y":156},"frameCount":1,"looping":true,"frameDelay":2,"version":"sZXDivr1nRzdU0a28__uOlYYxOk_Hjun","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":226,"y":156},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sZXDivr1nRzdU0a28__uOlYYxOk_Hjun/category_retro/spacebattle_08.png"},"bb3ab340-4b5d-43fc-87bf-327c56a19169":{"name":"spacebattle_09_1","sourceUrl":null,"frameSize":{"x":304,"y":226},"frameCount":1,"looping":true,"frameDelay":12,"version":"r7CQ7TDuHwZrwVxdnA3S4h8p.2bRf5gQ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":226},"rootRelativePath":"assets/bb3ab340-4b5d-43fc-87bf-327c56a19169.png"},"45944b2d-36d5-4a3d-8963-b0ca06d132ce":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"7d211c16-4237-4d98-9e68-98a114917601":{"name":"retroship_01_1","sourceUrl":null,"frameSize":{"x":357,"y":386},"frameCount":1,"looping":true,"frameDelay":12,"version":".S2UGOZi_kSYJeUrrBFZNDwafVne7Hce","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":357,"y":386},"rootRelativePath":"assets/7d211c16-4237-4d98-9e68-98a114917601.png"},"f345bb2f-3647-47dc-8d09-2f8a1a345d7f":{"name":"retroship_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/twtcBp43qsyZISjiP4HFTWNElSePIlob/category_retro/retroship_17.png","frameSize":{"x":334,"y":334},"frameCount":1,"looping":true,"frameDelay":10,"version":"twtcBp43qsyZISjiP4HFTWNElSePIlob","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":334,"y":334},"rootRelativePath":"assets/api/v1/animation-library/gamelab/twtcBp43qsyZISjiP4HFTWNElSePIlob/category_retro/retroship_17.png"},"4dea2426-6b96-4e01-a905-1763143c252e":{"name":"retroship_18_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0m28jis_YQRUHJM9HVaX.F.fl8EFCp97/category_retro/retroship_18.png","frameSize":{"x":334,"y":283},"frameCount":1,"looping":true,"frameDelay":2,"version":"0m28jis_YQRUHJM9HVaX.F.fl8EFCp97","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":334,"y":283},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0m28jis_YQRUHJM9HVaX.F.fl8EFCp97/category_retro/retroship_18.png"},"2f075a19-7ed0-425e-bcb9-b25964332d11":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"XuOU9Lq419uFGs6Sj58vxjxuT8TzPYyL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2f075a19-7ed0-425e-bcb9-b25964332d11.png"},"9fa991b3-d70d-4664-9301-e78ca3efc24e":{"name":"retroship_21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1V75Vfoe.RrGZRMPR7RJKGTzrbR4gG_4/category_retro/retroship_21.png","frameSize":{"x":283,"y":308},"frameCount":1,"looping":true,"frameDelay":2,"version":"1V75Vfoe.RrGZRMPR7RJKGTzrbR4gG_4","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":308},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1V75Vfoe.RrGZRMPR7RJKGTzrbR4gG_4/category_retro/retroship_21.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----





var score = 0; 

var gameState = "serve";




var alien = createSprite(130,120,20,20);
alien.setAnimation('retroship_01_1');
alien.scale = 0.2; 

var alien2 = createSprite(200,120,20,20);
alien2.setAnimation('retroship_17_1');
alien2.scale = 0.2;

var alien3 = createSprite(270,120,20,20);
alien3.setAnimation('retroship_18_1');
alien3.scale = 0.2;


var nave;

nave = createSprite(200,300,20,20);

nave.setAnimation('spacebattle_09_1');
nave.scale = 0.2;


var projetil;
projetil =createSprite(200,300,2,2);
projetil.setAnimation('animation_1');
projetil.scale = 0.2;

var chefao;
chefao = createSprite(200,115,20,20);
chefao.setAnimation('retroship_21_1');

chefao.scale = 0.2;

chefao.visible = false;



























function draw() 
{

  
background('black');
 createEdgeSprites(); 
projetil.bounceOff(edges);
projetil.bounceOff(nave);  
nave.bounceOff(edges);
 alien.bounceOff(edges);
 alien2.bounceOff(edges);
 alien3.bounceOff(edges);
 chefao.bounceOff(edges);
 
 
 
 
 
 textSize(15);
      stroke("white");
      text("Pontos: " + score, 280, 20);
 
 if(gameState == "serve"){
        textSize(20);
        text("PRESSIONE X PARA INICIAR",60,250);
   text("aperte h para atirar",188,268);
 }
 if (keyDown("X"))
       {
         
         gameState = "play";
       }
 
 
 if(gameState == "play"){
 
  if(keyDown('RIGHT_ARROW')){

nave.x = nave.x+4;


}

if(keyDown('LEFT_ARROW')){

nave.x = nave.x-4;


}
  
 if(keyDown('UP_ARROW')){
nave.y = nave.y-4;
}
if(keyDown('DOWN_ARROW')){
nave.y = nave.y+4;

}

if(keyDown('h')){
 alien.velocityX = -3;
 alien2.velocityX = 1;
 alien3.velocityX = 8;
 alien.velocityY = -3;
 alien2.velocityY = -3;
 alien3.velocityY = -3;
projetil.setVelocity(3,4);
}

if(projetil.isTouching(alien)){
alien.destroy();
score = score+1;
}

if(projetil.isTouching(alien2)){
alien2.destroy();
score = score+1;
}

if(projetil.isTouching(alien3)){
alien3.destroy();
score = score+1;
}

if(score== 3){
gameState = "end";
}
 
if(nave.isTouching(alien)){ 
 gameState = "bad end";
}
 if(nave.isTouching(alien2)){ 
 gameState = "bad end";
}
 if(nave.isTouching(alien3)){ 
 gameState = "bad end";
}


 }
 
 
if(gameState == "end"){ 
projetil.velocityX = 0; 
projetil.velocityY = 0; 
 text("Você ganhou", 140, 200); 
//gameState = "fase 2"; 
nave.y = 300;
nave.x = 200;
projetil.x = 200;
projetil.y = 300;
  
} 
 
  if(gameState == "bad end"){ 
 projetil.velocityX = 0; 
projetil.velocityY = 0; 
alien.velocityX = 0;
alien2.velocityX = 0;
alien3.velocityX = 0;
alien.velocityY = 0;
alien2.velocityY = 0;
alien3.velocityY = 0;
text("VOCÊ PERDEU",140,200);

} 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 drawSprites(); 
} 
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
