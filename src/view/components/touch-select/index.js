/**
 * Created by hasee on 2017/5/12.
 */
  const citys=require('./data.js');



function touch_select_dom(xx){
	return document.querySelectorAll(xx)
}

function touch_select() {

 // return new touch_select.prototype.init(xx)
}


touch_select.prototype={
    city_data:citys,
    select_arr:[],
    nextFn:function(){

     var tha=this;

      tha.set_inits();
      if(touch_select_dom('#'+tha.ob.click_id)[0]){
      touch_select_dom('#'+tha.ob.click_id)[0].addEventListener('click',function(event){
        if(touch_select_dom("#touch_select_set_self"+tha.ob.click_id+"").length>0){
          if(typeof tha.ob.opened ==='function'){
            tha.ob.opened(tha.show_time.bind(tha))
          }else {
            tha.show_time()
          }
        }
        // tha.ob.render();
      });  }
    },
  set_init:function (ob) {
        var old_select=document.querySelector('#show_id'+ob.click_id);
    if(old_select){
        var  parent=document.getElementsByTagName('body')[0];
        parent.removeChild(old_select);
    }
    var tha=this;
      tha.ob=ob;
      tha.arr=[];
      tha.move_arry='';
      this.show_li=7; //必须为单数
      this.ban_li=Math.ceil(this.show_li/2);

        tha.nextFn(tha);



   //  tha.set_inits()
  },
  set_inits:function(){
    var tha=this;
    var setdom=document.createElement('div');

    setdom.id='select_tc_out'+tha.ob.click_id;
   // console.log(setdom.id)
    setdom.style.opacity='0';
    setdom.className='select_tc_out';
    var showbox=document.createElement('div');
    showbox.setAttribute('id','show_id'+tha.ob.click_id);

    showbox.appendChild(setdom);

    document.getElementsByTagName('body')[0].appendChild(showbox);
    touch_select_dom('#select_tc_out'+tha.ob.click_id)[0].innerHTML='<div   class="touch_select_set_self"><div id="touch_select_set_self'+tha.ob.click_id+'"> <div id="touch_select_foot'+tha.ob.click_id+'"></div> <div id="touch_select_head'+tha.ob.click_id+'"></div>  <div id="touch-select'+tha.ob.click_id+'" class="touch-select" ><div class="select_set" > </div> <div class="select_set2" > </div> <div style="width: 90%;height: 100%;position: relative;z-index:22" class="ul_out flex" id="ul_out'+tha.ob.click_id+'"> </div></div>   </div></div>';
    tha.ob.render();

    //插入底部按钮节点
    var footers='';

    var select_name=tha.ob.title;  /*tha.ob.click_id=='select_touch_start1' ? '取车时间' : '还车时间';*/
    footers='<div  class="select_footers"><div style="text-align: left;padding-left: .1rem" class="cancel">取消</div><div>'+select_name+'</div><div style="text-align: right;padding-right: .1rem;color: #FACB36" class="ok_'+tha.ob.click_id+'">确定</div></div>';
    touch_select_dom('#touch_select_foot'+tha.ob.click_id)[0].innerHTML=footers;

    tha.li_height=24; //touch_select_dom('#touch-select'+tha.ob.click_id+' li')[0].offsetHeight;
    

    touch_select_dom('#touch-select'+tha.ob.click_id+'')[0].style.height=tha.li_height*tha.show_li+'px';


    tha.refish(tha.select_arr);

    touch_select_dom('#select_tc_out'+tha.ob.click_id)[0].addEventListener('click',ends,false);
    function ends(event) {


      if(event.target.id==='select_tc_out'+tha.ob.click_id){

        tha.close();
        return;
      }

    }
    touch_select_dom('#touch_select_foot'+tha.ob.click_id)[0].addEventListener('click',selects,false);
    function selects(event){
      if(event.target.className==='cancel'){
        tha.close()
      }
      if(event.target.className==='ok_'+tha.ob.click_id){
        if(typeof tha.ob.select_val === 'function'){
          tha.ob.select_val()
        }

      }
    }

    touch_select_dom('#touch-select'+tha.ob.click_id)[0].addEventListener('touchstart',stat,false);
    function stat(event) {
      event.preventDefault();
      if(event.target.parentNode.className.indexOf('touch-select-ul') !==-1 || event.target.className.indexOf('touch-select-ul') !==-1){

      /*  if(tha.sint_inter){
          if(tha.mmevent&& tha.mmevent==event.target.parentNode){ tha.sint_inter=clearInterval(tha.sint_inter);}
          tha.sint_interss=true;
        }*/
        var evdom=event.target.parentNode.className.indexOf('touch-select-ul') !==-1 ? event.target.parentNode : event.target;
        tha.evdom=evdom;
        //event.target.parentNode.className='touch-select-ul';
        tha.dome_li= evdom.children ;
        tha.list_lenght=evdom.children.length;

        tha.dom_now_num=evdom.style.webkitTransform.replace(/translate3d|px|\(|\)/g,'').split(',')[1]  || event.target.parentNode.style.transform.replace(/translate3d|px|\(|\)/g,'').split(',')[1] || 0;
        // event.target.parentNode.setAttribute('style','transform:translate3d(0,'+-((event.target.getAttribute('data-index')-2)*tha.li_height)+'px,0)');


        tha.doms_height=evdom.childNodes.length*tha.li_height;
      //  tha.dom_now_num=evdom.style.webkitTransform.replace(/translate3d|px|\(|\)/g,'').split(',')[1]  || event.target.parentNode.style.transform.replace(/translate3d|px|\(|\)/g,'').split(',')[1] || 0;
        tha.dom_go_num=-((0)-tha.dom_now_num);
        tha.starty=event.touches[0].clientY;

        tha.starty_2=event.touches[0].clientY;


        tha.time=0;
        tha.inter=clearInterval(tha.inter);
        tha.inter=setInterval(function(){
          tha.time+=60;
          tha.arr.push(tha.move_arry);
          if(tha.arr.length>=10){
            tha.arr.splice(0,8)
          }

          if(tha.arr[tha.arr.length-2]===tha.move_arry){

            tha.stop_going()

          }else {

            tha.start_going()
          }
        },60);

        moves(event)
      }


    };

    touch_select_dom('#touch-select'+tha.ob.click_id)[0].addEventListener('touchmove',moves,false);
    function moves(event) {
      event.preventDefault();
      if(event.target.parentNode.className.indexOf('touch-select-ul')!==-1  || event.target.className.indexOf('touch-select-ul') !==-1){

        var evdom=event.target.parentNode.className.indexOf('touch-select-ul') !==-1 ? event.target.parentNode : event.target;
        var touch_one = event.touches[0];
        tha.touch_ones=event.touches[0];

        tha.touch_dom=evdom;
        tha.move_arry=event.touches[0].clientY;

        tha.set_transfrom(tha.touch_dom,touch_one);
        //设置3d属性
        tha.set_solt();



        if(typeof tha.ob.touch_move_fn ==='function'){

          tha.ob.touch_move_fn.call(event.target.parentNode)

        }
      }

    }

    touch_select_dom('#touch-select'+tha.ob.click_id)[0].addEventListener('touchend',function (event) {
      event.preventDefault();
      tha.ends(event)
    },false);
    if(typeof tha.ob.created==='function'){
      tha.ob.created()
    }
    setdom.style.display='none';
    setdom.style.opacity='1'
  },
  set_solt:function(){
      var tha=this;
      tha.move_now_select_num=(-(tha.dom_go_num-(tha.li_height*((tha.show_li-1)/2) )))/tha.li_height;

      tha.now_index=Math.round(tha.move_now_select_num) ? Math.round(tha.move_now_select_num) :0;


      if(tha.now_index<0){
          tha.now_index=0
      }

      if(tha.now_index>tha.list_lenght-1){
          tha.now_index=tha.list_lenght-1
      }

      for(var xx=0 ;xx<tha.dome_li.length;xx++){

          if(xx<=tha.now_index+tha.ban_li && xx >= tha.now_index-tha.ban_li){
              var seting=Math.abs(tha.dom_go_num-(tha.li_height*((tha.show_li-1)/2))+tha.li_height*xx);
              var setings=1-seting/200;
              var setingr=xx<tha.now_index ? (seting*0.6) : -(seting*0.6);

              tha.dome_li[xx].setAttribute('style','transform: scale('+setings+')  rotateX('+setingr+'deg);-webkit-transform: scale('+setings+')  rotateX('+setingr+'deg)');
          }
      }
  },
  refish_3d:function (event) {
      var tha=this;
      tha.dom_now_num=tha.evdom.style.webkitTransform.replace(/translate3d|px|\(|\)/g,'').split(',')[1]  || event.target.parentNode.style.transform.replace(/translate3d|px|\(|\)/g,'').split(',')[1] || 0;
      tha.dom_go_num=-((0)-tha.dom_now_num);
      tha.set_solt();

  },
  refish:function(set_arr,getindex=false){
  	var tha=this;
    tha.li_height=touch_select_dom('#touch-select'+tha.ob.click_id+' li')[0].offsetHeight;
  	var arr=set_arr ? set_arr : [] ;
  	var dom_arr=touch_select_dom('#touch-select'+tha.ob.click_id+' .touch-select-ul');
      if(getindex===0 || getindex ===1 || getindex===2){
          dom_arr=[dom_arr[getindex]]
      }
    for(var icha=0 ;icha<dom_arr.length;icha++){
    	var li_index_set= arr[icha] ? arr[icha] : 0;
    	var dom_go_num=(-li_index_set+tha.ban_li-1)*tha.li_height;
      dom_arr[icha].setAttribute('style','transform:translate3d(0,'+dom_go_num+'px,0);-webkit-transform:translate3d(0,'+dom_go_num+'px,0)');
      for(var xx=0 ;xx<dom_arr[icha].childNodes.length;xx++){

        if(xx<=li_index_set+tha.ban_li && xx >= li_index_set-tha.ban_li){

          var seting=Math.abs(dom_go_num-(tha.li_height*((tha.show_li-1)/2))+tha.li_height*xx);

          var setings=1-seting/200;

          var setingr=xx<li_index_set ? (seting*0.6) : -(seting*0.6);

          dom_arr[icha].childNodes[xx].setAttribute('style','transform: scale('+setings+')  rotateX('+setingr+'deg);-webkit-transform: scale('+setings+')  rotateX('+setingr+'deg);');
        }

      }
      //
      dom_arr[icha].style.height=(dom_arr[icha].childNodes.length*tha.li_height)+'px'

    }
  },
  show_time:function(){
  var tha=this;
    //this.ob.render();
    touch_select_dom('#select_tc_out'+tha.ob.click_id)[0].style.display='block';
    // tha.refish(tha.select_arr);
  },
  close:function(){
    var tha=this;
    touch_select_dom('#select_tc_out'+tha.ob.click_id)[0].style.display='none';
  	//touch_select_dom('#select_tc_out')[0].remove();
  },
  set_transfrom:function (doms,touch_one){
    var tha=this;

    tha.dom_go_num=-((tha.starty-touch_one.clientY)-tha.dom_now_num);

    doms.setAttribute('style','transform:translate3d(0,'+tha.dom_go_num+'px,0);-webkit-transform:translate3d(0,'+tha.dom_go_num+'px,0)')
  },
  stop_going:function () {
    var tha=this;
       tha.time=0;
       tha.distance=0;
       this.stop_to=true
  },
  start_going:function(){
      this.stop_to=false
  },
  ends:function(event) {
    var tha=this;

    if(event.target.parentNode.className.indexOf('touch-select-ul')!==-1 || event.target.className.indexOf('touch-select-ul')!==-1){
      var evdom=event.target.parentNode.className.indexOf('touch-select-ul') !==-1 ? event.target.parentNode : event.target;

        if(!this.stop_to){
            tha.distance=tha.starty_2-tha.move_arry;
            //cubic-bezier(.17,.66,.74,.91)

        }else {

        }

      tha.this_select_num=((-(tha.dom_go_num-(tha.li_height*2)))/tha.li_height);

      tha.set_num=(-Math.round(tha.this_select_num)*tha.li_height)+(tha.li_height*2);

      tha.inter=clearInterval(tha.inter);



      if(tha.set_num>tha.li_height*(tha.ban_li-1)){

        tha.set_num=tha.li_height*(tha.ban_li-1)
      }
      if(tha.set_num<-(tha.doms_height-tha.li_height*tha.ban_li)){
        tha.set_num=-(tha.doms_height-tha.li_height*tha.ban_li)
      }

      for(var xx=0 ;xx<tha.dome_li.length;xx++){

        if(xx<=tha.now_index+tha.ban_li && xx >= tha.now_index-tha.ban_li){
          var seting=Math.abs(tha.set_num-(tha.li_height*((tha.show_li-1)/2))+tha.li_height*xx);

          var setings=1-seting/200;
          var setingr=xx<tha.now_index ? (seting*0.6) : -(seting*0.6);
          tha.dome_li[xx].setAttribute('style','transform: scale('+setings+')  rotateX('+setingr+'deg) ;transition:0.5s;-webkit-transform: scale('+setings+')  rotateX('+setingr+'deg) ;-webkit-transition:0.5s');
        }
      }
/*      var sudu=Math.abs(addli/4),mrsudu= sudu>0 ? sudu : 0.5;
        tha.mmevent=event.target.parentNode;

        if(false){
          var end3d=  evdom.style.webkitTransform.replace(/translate3d|px|\(|\)/g,'').split(',')[1]  || event.target.parentNode.style.transform.replace(/translate3d|px|\(|\)/g,'').split(',')[1] || 0;
           console.log(end3d); //-112  -300

           var ids=parseFloat(end3d);
           console.log(tha.set_num); //48  -400

            tha.sint_inter=  setInterval(function () {
                ids > tha.set_num ?  ids-=1 : ids+=1;
                console.log(ids);
                evdom.setAttribute('style','transform:translate3d(0,'+ids+'px,0); -webkit-transform:translate3d(0,'+ids+'px,0);');
                tha.refish_3d();
                if(tha.sint_interss && ids%24==0){
                    tha.sint_inter=clearInterval(tha.sint_inter);
                    tha.sint_interss=false;
                }
                if(ids==tha.set_num){ tha.sint_inter=clearInterval(tha.sint_inter) }
                /!*tha.set_transfrom(tha.touch_dom,tha.touch_ones);
                tha.set_solt();*!/

            },3);
        }else {
        }*/
        evdom.setAttribute('style','transform:translate3d(0,'+tha.set_num+'px,0);transition:0.5s;cubic-bezier(.17,.66,.74,.91); -webkit-transform:translate3d(0,'+tha.set_num+'px,0);-webkit-transition:0.5s');

      tha.index_li=-(tha.set_num-(tha.li_height*(tha.ban_li-1)))/tha.li_height;
      for(var setdata in evdom.childNodes[tha.index_li].dataset){
        evdom.setAttribute('data-'+setdata,evdom.childNodes[tha.index_li].dataset[setdata]);
      }

      if(typeof tha.ob.touch_end_fn ==='function'){

        tha.ob.touch_end_fn.call(evdom)

      }
    }
  },
  set_city:function (city) {
      var tha=this;
      touch_select_dom('#city_t')[0].setAttribute('style','transform:translate3d(0,'+(tha.li_height*3)+'px,0);-webkit-transform:translate3d(0,'+(tha.li_height*3)+'px,0)');
      touch_select_dom('#city_t')[0].innerHTML=city;
      touch_select_dom('#area_t')[0].innerHTML=''
      //设置3d属性
       tha.refish(tha.select_arr,1);



  },set_arr:function(arr){
      var tha=this;
      touch_select_dom('#area_t')[0].setAttribute('style','transform:translate3d(0,'+(tha.li_height*3)+'px,0);-webkit-transform:translate3d(0,'+(tha.li_height*3)+'px,0)');
      touch_select_dom('#area_t')[0].innerHTML=arr
      //设置3d属性
      tha.refish(tha.select_arr,2);
  },
  get_all_value:function(){
      var tha=this;

      var stdom_ttt=document.querySelectorAll('#touch_select_set_self'+tha.ob.click_id+' .touch-select-ul');

      var arrs=[];
      for(var xxs=0;xxs<stdom_ttt.length;xxs++){

          var select_height=stdom_ttt[xxs].style.webkitTransform.replace(/translate3d|px|\(|\)/g,'').split(',')[1]  || stdom_ttt[xxs].style.transform.replace(/translate3d|px|\(|\)/g,'').split(',')[1] || 0;
          var index=((Math.abs(select_height-(tha.li_height*(tha.ban_li-1)))/tha.li_height));

          var li_dom=stdom_ttt[xxs].childNodes;
          var obj={};
          if(li_dom[index] && li_dom[index].dataset)  {
              for(var ixs in li_dom[index].dataset){
                  obj[ixs]=li_dom[index].dataset[ixs]
              }
              arrs.push(obj);
          }


      }
      return arrs
  }
};
module.exports=touch_select;


