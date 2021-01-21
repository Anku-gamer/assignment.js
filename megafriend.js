function megaFriend()
{
    
var friendsName = ["jojo","pyet","rango","toky"];

var maximum = friendsName[0];

    for(var i = 0; i < friendsName.length;i++)
{
    
    if (friendsName[i].length> maximum.length)

    {
      maximum = friendsName[i];
    }  
} 
 return maximum;
}
