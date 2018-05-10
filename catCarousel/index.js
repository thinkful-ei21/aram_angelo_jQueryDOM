//when a user selects one of the thumbnail images using the mouse or keyboard
//that image should be displayed in the full-size image container at the top. 
//Updating the image should also update its alt attribute. 
//To test keyboard interactivity, you can Tab to one of the thumbnails and press the Enter key.



$(function() {

    $('.thumbnails a img').on('click', function(el){
        setImg(this.src, this.alt); 
    });

    function setImg(image, alt) {
        return $('.hero img').attr('src', image).attr('alt', alt);
    }

});