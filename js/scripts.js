$(function() {
        /*the main object*/
   var Priceblock = {
       flag: 'center',
       hidd_position: 'col-lg-4 col-md-4 col-sm-4  hidden-xs chevron_center',
       show_position: 'col-lg-4 col-md-4 col-sm-4 col-xs-10 chevron_center'
   }
    /*change the background of the active button*/
    Priceblock.button_bg = function(){
        if(this.flag === 'left'){
            $('#price_left').css('background-color', 'gray');
                $('#price_center').css('background-color', '#ffffff');
                    $('#price_right').css('background-color', '#ffffff');
        }
        if(this.flag === 'center'){
            $('#price_left').css('background-color', '#ffffff');
                $('#price_center').css('background-color', 'gray');
                    $('#price_right').css('background-color', '#ffffff');
        }
        if(this.flag === 'right'){
            $('#price_left').css('background-color', '#ffffff');
                $('#price_center').css('background-color', '#ffffff');
                    $('#price_right').css('background-color', 'gray');
        }
    }
        /*change the attributes of the bloks*/
    Priceblock.Change = function(_id1, _value1, _id2, _value2){
        $(_id1).attr('class', _value1);
        $(_id2).attr('class', _value2);
        }
        /*change the blocks with the arrows*/
    Priceblock.move_left = function(){
        this.flag === 'right' ? 
            this.Change('#center_price', this.show_position, '#right_price', this.hidd_position): 
        this.flag === 'center' ? 
            this.Change('#left_price', this.show_position, '#center_price', this.hidd_position): 
        this.flag === 'left';
                    this.flag === 'right' ? this.flag = 'center': 
                        this.flag === 'center' ? this.flag = 'left' : 
                            this.flag === 'left';
                Priceblock.button_bg();
    };
    Priceblock.move_right = function(){
        this.flag === 'left' ? 
            this.Change('#center_price', this.show_position, '#left_price', this.hidd_position): 
        this.flag === 'center' ? 
            this.Change('#right_price', this.show_position, '#center_price', this.hidd_position): 
        this.flag === 'right';
                    this.flag === 'left' ? this.flag = 'center': 
                        this.flag === 'center' ? this.flag = 'right' : 
                            this.flag === 'right';
                 Priceblock.button_bg();
    };
    $('img[alt="chevron_right"]').click(function(){ Priceblock.move_left(); });   
    $('img[alt="chevron_left"]').click(function(){ Priceblock.move_right(); });
        /*change the position of the block with the buttons*/
    $('#price_left').click(function(){ 
        Priceblock.flag === 'right' ?
        Priceblock.Change('#left_price', Priceblock.show_position, '#right_price', Priceblock.hidd_position):
        Priceblock.Change('#left_price', Priceblock.show_position, '#center_price', Priceblock.hidd_position);
        Priceblock.flag = 'left';
        Priceblock.button_bg();
    });
    $('#price_center').click(function(){
        Priceblock.flag === 'right' ?
        Priceblock.Change('#center_price', Priceblock.show_position, '#right_price', Priceblock.hidd_position):
        Priceblock.Change('#center_price', Priceblock.show_position, '#left_price', Priceblock.hidd_position);
        Priceblock.flag = 'center';
        Priceblock.button_bg();
    });
    $('#price_right').click(function(){ 
        Priceblock.flag === 'left' ?
        Priceblock.Change('#right_price', Priceblock.show_position, '#left_price', Priceblock.hidd_position):
        Priceblock.Change('#right_price', Priceblock.show_position, '#center_price', Priceblock.hidd_position);
        Priceblock.flag = 'right';
        Priceblock.button_bg();
    });
/*hide of header menu in mobile size*/
    var Mobile = {
     flag_header: 'closed',
     monitor: $(document).width()
    }
    Mobile.openClose = function(){
        if(this.flag_header === 'closed' ){
            $('.pop-up').css('display', 'block'); this.flag_header = 'opened';
            $(".hide-pop-up").attr('class', 'fa fa-chevron-right fa-2x fa-rotate-270 hide-pop-up');
          }
          else{
              $('.pop-up').css('display', 'none'); this.flag_header = 'closed';
              $(".hide-pop-up").attr('class', 'fa fa-chevron-right fa-2x fa-rotate-90 hide-pop-up');
          }
    }
$('.hide-pop-up').click(function(){
        this.monitor >= 641 ? this.flag_header = 'closed' : this.flag_header;
          Mobile.openClose();
});

});









