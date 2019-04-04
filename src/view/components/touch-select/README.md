# touch-select
通用 react vue 原生JavaScript
html<br>
```html
  
		<div>
		  <button id="select_touch_start1">时间选择</button>
		  <button id="select_touch_start2">城市选择</button>
		</div>

  ```
<br>

js<br>
```javascript
    import touch_select from 'touch-select';
	  import city_data from 'touch-select/data.js'; //这是插件内置的省市区数据 data.js 修改 或者自行调用接口获取
	  import "touch-select/touch-css.css";

          /**
           *@生成选择时间
           *@param {string}时间戳字符串
           *@return JSON
           *@author 应进兵
           */
          function get_show_time(server_time){
              var time_data={
                  mo_day_m:[],
                  time:[]
              };
              var temp=server_time ? new Date(server_time) : new Date();

              var temp2=new Date(temp.getFullYear()+'/'+parseFloat(temp.getMonth()+1)+'/'+parseFloat(temp.getDate())+' '+temp.getHours()+':00:00');
              var temp_hour=parseFloat(Date.parse(temp2)+(3600*(temp.getMinutes()>30 ? 1 : 0.5)*1000));

              var now_hour=new Date(temp_hour);

              time_data.now_hour=now_hour.getHours();
              time_data.now_min=now_hour.getMinutes();
              for(var hours=0;hours<48;hours++){
                  time_data.now_min+=30;
                  if(time_data.now_min===60){
                      if(time_data.now_hour<23){
                          time_data.now_hour+=1;
                      }else {
                          time_data.now_hour=0
                      }
                      time_data.now_min=0
                  }
                  time_data.time.push({hour:(time_data.now_hour<10 ? '0'+time_data.now_hour : time_data.now_hour),min:(time_data.now_min < 10 ? '0'+time_data.now_min : time_data.now_min)});
              }

              var shijian=Date.parse(temp2);
              for(var time_day=0;time_day<99;time_day++){
                  var temp3=new Date(shijian);
                  time_data.mo_day_m.push({year:temp3.getFullYear(),month:(parseFloat(temp3.getMonth()+1)< 10 ? '0'+parseFloat(temp3.getMonth()+1) : parseFloat(temp3.getMonth()+1) ),day:(temp3.getDate() < 10 ? '0'+temp3.getDate() : temp3.getDate()),date:temp3.getDay()});
                  shijian+=(3600*24*1000)
              }

              return  time_data
          };
          //返回中文星期几
          function get_date(val){
              switch (val)
              {
                  case 0:
                      return '星期日';

                  case 1:
                      return '星期一';

                  case 2:
                      return '星期二';

                  case 3:
                      return '星期三';

                  case 4:
                      return '星期四';

                  case 5:
                      return '星期五';

                  case 6:
                      return '星期六';

                  default :
                      return '星期一'
              }
          };
          function times(){
                  var touchSelect_ob={
                      time1:null,
                  };
                  function touch_select_dom(xx){
                      return document.querySelectorAll(xx)
                  }

                  //获取时间对象
                  var time_data=this.get_show_time(new Date());

                  //拼接年月日html
                  var dat={
                      time:'',
                      day:''
                  };
                  for(var wws=0;wws<time_data.mo_day_m.length;wws++){
                      var conts_time=wws===0 ? '今天' :(time_data.mo_day_m[wws].month) +'月'+(time_data.mo_day_m[wws].day)+' '+ this.get_date(time_data.mo_day_m[wws].date);
                      dat.day+='<li data-name="day" data-auto="data-自定义参数" data-value='+time_data.mo_day_m[wws].year+'/'+time_data.mo_day_m[wws].month+'/'+time_data.mo_day_m[wws].day+'>'+conts_time+'</li>'
                  }
                  for(var wwss=0;wwss<time_data.time.length ;wwss++){
                      dat.time+='<li data-name="time" data-auto="data-自定义参数" data-value='+time_data.time[wwss].hour+':'+time_data.time[wwss].min+'>'+(time_data.time[wwss].hour)+':'+(time_data.time[wwss].min)+'</li>'
                  }
                  /**
                   * 调用时间选择插件
                   * param {
                   * click_id:'string' 触发id
                   * render:function(){}  添加节点函数
                   * touch_end_fn:function(){} 触摸结束钩子
                   * select_val:function(){} 确认按钮点击事件
                   * }
                   * touchSelect_ob.time1.get_all_value() //获取所选值
                   * @author 应进兵
                   * */
                  //新建实例
                  touchSelect_ob.time1 = new touch_select();
                  //设置默认选中项
                  touchSelect_ob.time1.select_arr=[0,1];
                  //初始化实例
                  touchSelect_ob.time1.set_init({
                      title:'时间选择',
                      click_id:'select_touch_start1',
                      render:function (){
                          var tha=this;
                          touch_select_dom('#ul_out'+tha.click_id)[0].innerHTML='<div><ul class="touch-select-ul">'+dat.day+'</ul></div><div><ul class="touch-select-ul">'+dat.time+'</ul></div>';
                      },
                      touch_end_fn:function () {
                          //触摸结束事件
                      },
                      select_val:function(){
                          //点击确认获得选定值
                          var times=touchSelect_ob.time1.get_all_value();
                          touchSelect_ob.time1.close();
                          console.log(times)
                      },
                      created:function () {
                          //创建完毕执行
                      },
                      opened:function(next){
                          //设置选择器打开条件 如果定义了opened函数 必须执行next才会打开选择器
                          if(true){
                              next()
                          }
                      }
                  })


          };

          function citys(){
              var touchSelect_ob={};
              var ct=city_data.data;
              function touch_select_dom(xx){
                  return document.querySelectorAll(xx)
              }

              //新建实例
              touchSelect_ob.time2 = new touch_select();
              //设置默认位置
              touchSelect_ob.time2.select_arr=[0,0,0];
              //初始化
              touchSelect_ob.time2.set_init({
                  title:'城市选择',
                  click_id:'select_touch_start2',
                  render:function (){
                      var tha=this;
                      //content节点
                      var dat={
                          privce:'',
                          city:'',
                          arr:''
                      };
                      //请根据 默认位置 渲染城市 否则将出现 初始化省市区不一致问题
                      for(var uy in ct.province){
                          dat.privce+='<li  data-name='+ct.province[uy]+' data-auto="data-自定义参数" data-value='+uy+'>'+ct.province[uy]+'</li>';
                      }
                      for(var uyx in ct.city[1]){
                          dat.city+='<li  data-name='+ct.city[1][uyx].area_name+' data-value='+ct.city[1][uyx].area_id+'>'+ct.city[1][uyx].area_name+'</li>';
                      }
                      for(var uyxx in ct.city[35]){
                          dat.arr+='<li  data-name='+ct.city[35][uyxx].area_name+' data-value='+ct.city[35][uyxx].area_id+' >'+ct.city[35][uyxx].area_name+'</li>';
                      }

                      touch_select_dom('#ul_out'+tha.click_id)[0].innerHTML='<div><ul id="province_t" class="touch-select-ul">'+dat.privce+'</ul></div><div><ul id="city_t" class="touch-select-ul">'+dat.city+'</ul></div><div><ul id="area_t" class="touch-select-ul">'+dat.arr+'</ul></div>';

                  },
                  select_val:function(){
                      //点击确认获得选定值
                      var times=touchSelect_ob.time2.get_all_value();
                      touchSelect_ob.time2.close();
                      console.log(times)
                  },
                  touch_end_fn:function (data) {
                      //设置联动渲染节点
                      var dat={
                          city:'',
                          arr:''
                      };
                      var value=this.getAttribute('data-value');
                      if(this.id=='province_t'){
                          for(var ts in ct.city[value]){
                              dat.city+='<li  data-name='+ct.city[value][ts].area_name+' data-value='+ct.city[value][ts].area_id+' >'+ct.city[value][ts].area_name+'</li>';
                          }
                          touchSelect_ob.time2.set_city(dat.city);
                          //渲染区
                          if(ct.city[value] && ct.city[value][0]){
                              setcitys(ct.city[value][0].area_id);
                          }

                      }
                      function setcitys(value){
                          if(!value){return}
                          for(var ts in ct.city[value]){
                              dat.arr+='<li  data-name='+ct.city[value][ts].area_name+' data-value='+ct.city[value][ts].area_id+' >'+ct.city[value][ts].area_name+'</li>';
                          }
                          touchSelect_ob.time2.set_arr(dat.arr);
                      }
                      if(this.id=='city_t'){
                          setcitys(value)
                      }
                  }
              });
          };
          times()
          citys()
```
     


<br><br><br>

     


