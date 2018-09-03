var Enemy=function()
{
  var o={
    x:0,
    y:0,
    w:100,
    h:100,
    kill:1,
    image:"enemy.png",
    state:1,
    stateimg:["boom1.png","boom2.png","boom3.png"],
    boom:function()
    {
          this.state++;
          if(this.state==1)
          {
              this.image=this.image;
          }
          else if(this.state>1&&this.state<=2)
          {
            this.image=this.stateimg[0];
          }
          else if(this.state>2&&this.state<=4)
          {
            this.image=this.stateimg[1];
          }
          else if(this.state>4&&this.state<=6)
          {
            this.image=this.stateimg[2];
          }


      }
    }


  return o;

}
