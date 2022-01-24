var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/J4X3jf3F/SIS.jpg", "https://i.postimg.cc/RZX69LxM/MOM.jpg" , "https://i.postimg.cc/DfrznP1t/ME.jpg", "https://i.postimg.cc/zGsmy9rp/DAD.jpg"];
var names = ["Fmaily Book","Aarika Anand", "Sumathy Anand", "Sahana Anand", "Anand Dakshina"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
