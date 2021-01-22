$(function(){
 $('#sec5 .tabSet').each(function(){
        var anchor_all = $(this).find('.tabs a'); //anchor는 a의 풀네임 모든 .tabs안에 있는 a
        var panels_all = $(this).find('.panel'); //모든 panel(div)
        var anchor_active = $(this).find('.tabs a.active'); //a에 active 만 있는것을 검색
        var panels_active = anchor_active.attr('href'); // a.active의 href 값을 기억함 = 패널 id
        $(panels_active).show();

        anchor_all.each(function(){
            var panels_active = $(this).attr('href');

    $(this).click(function(event){ //.tabs a를 클릭하면 
      event.preventDefault(); //a태그를 단 모든 이벤트화면을 고정시켜준다. 중요하다 위에 function(event)반드시추가바람
                panels_all.hide(); //모든 div를 닫으시오
                anchor_all.removeClass('active'); //active도 닫으시오
                $(this).addClass('active'); //선택한 .tabs a의 active를 켜시오(새로운 탭)
                $(panels_active).show(); // 선택한 .tabs a의 패널(내용글)도 켜시오
            })
        })
    })


  //tab   
  $('#sec3 .tabs li').each(function(){     
    var a_href = $('#sec3 .tabs li.on a').attr('href');
    $(a_href).show();
    $(this).click(function(event){    
      a_href = $(this).find(' > a').attr('href');      
      event.preventDefault();
      $('#sec3 .panel').hide();
      $(a_href).fadeIn();
      $('#sec3 .tabs li').removeClass('on');
      $(this).addClass('on');
      })  
    })//tab end

    //settime tab
  var push = 0;
  var slide = setInterval(function(){ 
     $("#sec3 .tabs li").click(function(){clearInterval(slide);})

      var li_on = $('#sec3 .tabs li').filter('.on');
      $('#sec3 .tabs li').removeClass('on');
      if(!$("#sec3 .tabs li").last().is(".on")){
        li_on = li_on.next()
        setgo(li_on);
      }
      if($("#sec3 .tabs li").last().is(".on")){           
        //clearInterval(interval);
        setTimeout(function(){
          li_on = $("#sec3 .tabs li").first();
          setgo(li_on);
        },4000)
      }     
    },4000);  //settime end
    function setgo(li_on){
      li_on.addClass('on');  
      a_href = li_on.find(' > a').attr('href');      
      $('#sec3 .panel').hide();
      $(a_href).fadeIn();
      $('#sec3 .tabs li').removeClass('on');
      li_on.addClass('on');
    }  
    

    $('.all_nav').click(function(){
        $('#nav_pop').fadeIn()
    })
    $('.nav_close').click(function(){
        $('#nav_pop').fadeOut()
    }) 

      
}) //jq end