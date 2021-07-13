function isTouching(obj, obj2)
{
  if(obj.x - obj2.x < obj.width/2 + obj2.width/2
    && obj2.x - obj.x < obj.width/2 + obj2.width/2
    && obj.y - obj2.y < obj.width/2 + obj2.width/2
    && obj2.y - obj.y < obj.width/2 + obj2.width/2)

    {
      return true;
    }
    else
    {
      return false; 
    }
}

function bounceOff(obj, obj2)
{
  if(obj.x - obj2.x < obj.width/2 + obj2.width/2
    && obj2.x - obj.x < obj.width/2 + obj2.width/2)

    {
      obj.velocityX = obj.velocityX* -1
      obj2.velocityX = obj2.velocityX* -1
    }

    if(obj.y - obj2.y < obj.height/2 + obj2.height/2
    && obj2.y - obj.y < obj.height/2 + obj2.height/2)

    {
      obj.velocityY = obj.velocityY* -1
      obj2.velocityY = obj.velocityY* -1
    }

}