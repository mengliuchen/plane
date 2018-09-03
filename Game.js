var Game=function()
{
  var canvas=document.getElementById("id-canvas")
  var ctx=canvas.getContext('2d')
  var g={
    actions:{},
    keydown:{},
    bs:[],
    es:[],
    score:0,
    pause:1,
    shine:0,
  }
  g.canvas=canvas;
  g.ctx=ctx;
  window.addEventListener('keydown',function(event){
    // console.log(event)
    g.keydown[event.key]=true
  })
  window.addEventListener('keyup',function(event){
      g.keydown[event.key]=false
    })
    g.registerAction=function(key,callback)
    {
      g.actions[key]=callback
    }
    g.drawImage=function(image)
    {
      var img=new Image()
      //图像需要预先加载才能画
      img.src=image.image

      img.onload=function()
      {

      }
        g.ctx.drawImage(img,image.x,image.y,image.w,image.h)
    }
      var s=setInterval(function(){
        var actions=Object.keys(g.actions)
        for(var i=0;i<actions.length;i++)
        {
          var key=actions[i]
          if(g.keydown[key])
          {
            g.actions[key]()
          }
        }
        g.update()
        g.draw()
      },1000/30)
      var s2=setInterval(function(){
        g.newEnemy();
      }, 800)
      g.shiney=function()
      {
        if(!g.pause&&g.shine>0&&g.shine<=5)
        {
          g.ctx.save()
          g.ctx.font='35px serif'
          g.ctx.fillText("Click P to continue",30,400)
          g.ctx.restore()
          g.shine++;
        }
        else if(g.shine<10){
          g.shine++
        }
        else {
          g.shine=0;
        }
      }
    return g;
}
