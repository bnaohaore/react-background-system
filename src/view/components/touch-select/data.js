/**
 * Created by hasee on 2017/5/12.
 */







  var ctdata= {
  "code": 200,
  "message": "查询成功",
  "data": {
    "province": {
      "1": "北京市",
      "2": "天津市",
      "3": "河北省",
      "4": "山西省",
      "5": "内蒙古自治区",
      "6": "辽宁省",
      "7": "吉林省",
      "8": "黑龙江省",
      "9": "上海市",
      "10": "江苏省",
      "11": "浙江省",
      "12": "安徽省",
      "13": "福建省",
      "14": "江西省",
      "15": "山东省",
      "16": "河南省",
      "17": "湖北省",
      "18": "湖南省",
      "19": "广东省",
      "20": "广西壮族自治区",
      "21": "海南省",
      "22": "重庆市",
      "23": "四川省",
      "24": "贵州省",
      "25": "云南省",
      "26": "西藏自治区",
      "27": "陕西省",
      "28": "甘肃省",
      "29": "青海省",
      "30": "宁夏回族自治区",
      "31": "新疆维吾尔自治区",
      "32": "台湾省",
      "33": "香港特别行政区",
      "34": "澳门特别行政区"
    },
    "city": {
      "1": [{"area_id": "35", "area_name": "市辖区"}, {"area_id": "36", "area_name": "县"}],
      "2": [{"area_id": "37", "area_name": "市辖区"}, {"area_id": "38", "area_name": "县"}],
      "3": [{"area_id": "39", "area_name": "石家庄市"}, {"area_id": "40", "area_name": "唐山市"}, {
        "area_id": "41",
        "area_name": "秦皇岛市"
      }, {"area_id": "42", "area_name": "邯郸市"}, {"area_id": "43", "area_name": "邢台市"}, {
        "area_id": "44",
        "area_name": "保定市"
      }, {"area_id": "45", "area_name": "张家口市"}, {"area_id": "46", "area_name": "承德市"}, {
        "area_id": "47",
        "area_name": "沧州市"
      }, {"area_id": "48", "area_name": "廊坊市"}, {"area_id": "49", "area_name": "衡水市"}, {
        "area_id": "50",
        "area_name": "省直辖县级行政区划"
      }],
      "4": [{"area_id": "51", "area_name": "太原市"}, {"area_id": "52", "area_name": "大同市"}, {
        "area_id": "53",
        "area_name": "阳泉市"
      }, {"area_id": "54", "area_name": "长治市"}, {"area_id": "55", "area_name": "晋城市"}, {
        "area_id": "56",
        "area_name": "朔州市"
      }, {"area_id": "57", "area_name": "晋中市"}, {"area_id": "58", "area_name": "运城市"}, {
        "area_id": "59",
        "area_name": "忻州市"
      }, {"area_id": "60", "area_name": "临汾市"}, {"area_id": "61", "area_name": "吕梁市"}],
      "5": [{"area_id": "62", "area_name": "呼和浩特市"}, {"area_id": "63", "area_name": "包头市"}, {
        "area_id": "64",
        "area_name": "乌海市"
      }, {"area_id": "65", "area_name": "赤峰市"}, {"area_id": "66", "area_name": "通辽市"}, {
        "area_id": "67",
        "area_name": "鄂尔多斯市"
      }, {"area_id": "68", "area_name": "呼伦贝尔市"}, {"area_id": "69", "area_name": "巴彦淖尔市"}, {
        "area_id": "70",
        "area_name": "乌兰察布市"
      }, {"area_id": "71", "area_name": "兴安盟"}, {"area_id": "72", "area_name": "锡林郭勒盟"}, {
        "area_id": "73",
        "area_name": "阿拉善盟"
      }],
      "6": [{"area_id": "74", "area_name": "沈阳市"}, {"area_id": "75", "area_name": "大连市"}, {
        "area_id": "76",
        "area_name": "鞍山市"
      }, {"area_id": "77", "area_name": "抚顺市"}, {"area_id": "78", "area_name": "本溪市"}, {
        "area_id": "79",
        "area_name": "丹东市"
      }, {"area_id": "80", "area_name": "锦州市"}, {"area_id": "81", "area_name": "营口市"}, {
        "area_id": "82",
        "area_name": "阜新市"
      }, {"area_id": "83", "area_name": "辽阳市"}, {"area_id": "84", "area_name": "盘锦市"}, {
        "area_id": "85",
        "area_name": "铁岭市"
      }, {"area_id": "86", "area_name": "朝阳市"}, {"area_id": "87", "area_name": "葫芦岛市"}],
      "7": [{"area_id": "88", "area_name": "长春市"}, {"area_id": "89", "area_name": "吉林市"}, {
        "area_id": "90",
        "area_name": "四平市"
      }, {"area_id": "91", "area_name": "辽源市"}, {"area_id": "92", "area_name": "通化市"}, {
        "area_id": "93",
        "area_name": "白山市"
      }, {"area_id": "94", "area_name": "松原市"}, {"area_id": "95", "area_name": "白城市"}, {
        "area_id": "96",
        "area_name": "延边朝鲜族自治州"
      }],
      "8": [{"area_id": "97", "area_name": "哈尔滨市"}, {"area_id": "98", "area_name": "齐齐哈尔市"}, {
        "area_id": "99",
        "area_name": "鸡西市"
      }, {"area_id": "100", "area_name": "鹤岗市"}, {"area_id": "101", "area_name": "双鸭山市"}, {
        "area_id": "102",
        "area_name": "大庆市"
      }, {"area_id": "103", "area_name": "伊春市"}, {"area_id": "104", "area_name": "佳木斯市"}, {
        "area_id": "105",
        "area_name": "七台河市"
      }, {"area_id": "106", "area_name": "牡丹江市"}, {"area_id": "107", "area_name": "黑河市"}, {
        "area_id": "108",
        "area_name": "绥化市"
      }, {"area_id": "109", "area_name": "大兴安岭地区"}],
      "9": [{"area_id": "110", "area_name": "市辖区"}, {"area_id": "111", "area_name": "县"}],
      "10": [{"area_id": "112", "area_name": "南京市"}, {"area_id": "113", "area_name": "无锡市"}, {
        "area_id": "114",
        "area_name": "徐州市"
      }, {"area_id": "115", "area_name": "常州市"}, {"area_id": "116", "area_name": "苏州市"}, {
        "area_id": "117",
        "area_name": "南通市"
      }, {"area_id": "118", "area_name": "连云港市"}, {"area_id": "119", "area_name": "淮安市"}, {
        "area_id": "120",
        "area_name": "盐城市"
      }, {"area_id": "121", "area_name": "扬州市"}, {"area_id": "122", "area_name": "镇江市"}, {
        "area_id": "123",
        "area_name": "泰州市"
      }, {"area_id": "124", "area_name": "宿迁市"}],
      "11": [{"area_id": "125", "area_name": "杭州市"}, {"area_id": "126", "area_name": "宁波市"}, {
        "area_id": "127",
        "area_name": "温州市"
      }, {"area_id": "128", "area_name": "嘉兴市"}, {"area_id": "129", "area_name": "湖州市"}, {
        "area_id": "130",
        "area_name": "绍兴市"
      }, {"area_id": "131", "area_name": "金华市"}, {"area_id": "132", "area_name": "衢州市"}, {
        "area_id": "133",
        "area_name": "舟山市"
      }, {"area_id": "134", "area_name": "台州市"}, {"area_id": "135", "area_name": "丽水市"}],
      "12": [{"area_id": "136", "area_name": "合肥市"}, {"area_id": "137", "area_name": "芜湖市"}, {
        "area_id": "138",
        "area_name": "蚌埠市"
      }, {"area_id": "139", "area_name": "淮南市"}, {"area_id": "140", "area_name": "马鞍山市"}, {
        "area_id": "141",
        "area_name": "淮北市"
      }, {"area_id": "142", "area_name": "铜陵市"}, {"area_id": "143", "area_name": "安庆市"}, {
        "area_id": "144",
        "area_name": "黄山市"
      }, {"area_id": "145", "area_name": "滁州市"}, {"area_id": "146", "area_name": "阜阳市"}, {
        "area_id": "147",
        "area_name": "宿州市"
      }, {"area_id": "148", "area_name": "六安市"}, {"area_id": "149", "area_name": "亳州市"}, {
        "area_id": "150",
        "area_name": "池州市"
      }, {"area_id": "151", "area_name": "宣城市"}],
      "13": [{"area_id": "152", "area_name": "福州市"}, {"area_id": "153", "area_name": "厦门市"}, {
        "area_id": "154",
        "area_name": "莆田市"
      }, {"area_id": "155", "area_name": "三明市"}, {"area_id": "156", "area_name": "泉州市"}, {
        "area_id": "157",
        "area_name": "漳州市"
      }, {"area_id": "158", "area_name": "南平市"}, {"area_id": "159", "area_name": "龙岩市"}, {
        "area_id": "160",
        "area_name": "宁德市"
      }],
      "14": [{"area_id": "161", "area_name": "南昌市"}, {"area_id": "162", "area_name": "景德镇市"}, {
        "area_id": "163",
        "area_name": "萍乡市"
      }, {"area_id": "164", "area_name": "九江市"}, {"area_id": "165", "area_name": "新余市"}, {
        "area_id": "166",
        "area_name": "鹰潭市"
      }, {"area_id": "167", "area_name": "赣州市"}, {"area_id": "168", "area_name": "吉安市"}, {
        "area_id": "169",
        "area_name": "宜春市"
      }, {"area_id": "170", "area_name": "抚州市"}, {"area_id": "171", "area_name": "上饶市"}],
      "15": [{"area_id": "172", "area_name": "济南市"}, {"area_id": "173", "area_name": "青岛市"}, {
        "area_id": "174",
        "area_name": "淄博市"
      }, {"area_id": "175", "area_name": "枣庄市"}, {"area_id": "176", "area_name": "东营市"}, {
        "area_id": "177",
        "area_name": "烟台市"
      }, {"area_id": "178", "area_name": "潍坊市"}, {"area_id": "179", "area_name": "济宁市"}, {
        "area_id": "180",
        "area_name": "泰安市"
      }, {"area_id": "181", "area_name": "威海市"}, {"area_id": "182", "area_name": "日照市"}, {
        "area_id": "183",
        "area_name": "莱芜市"
      }, {"area_id": "184", "area_name": "临沂市"}, {"area_id": "185", "area_name": "德州市"}, {
        "area_id": "186",
        "area_name": "聊城市"
      }, {"area_id": "187", "area_name": "滨州市"}, {"area_id": "188", "area_name": "菏泽市"}],
      "16": [{"area_id": "189", "area_name": "郑州市"}, {"area_id": "190", "area_name": "开封市"}, {
        "area_id": "191",
        "area_name": "洛阳市"
      }, {"area_id": "192", "area_name": "平顶山市"}, {"area_id": "193", "area_name": "安阳市"}, {
        "area_id": "194",
        "area_name": "鹤壁市"
      }, {"area_id": "195", "area_name": "新乡市"}, {"area_id": "196", "area_name": "焦作市"}, {
        "area_id": "197",
        "area_name": "濮阳市"
      }, {"area_id": "198", "area_name": "许昌市"}, {"area_id": "199", "area_name": "漯河市"}, {
        "area_id": "200",
        "area_name": "三门峡市"
      }, {"area_id": "201", "area_name": "南阳市"}, {"area_id": "202", "area_name": "商丘市"}, {
        "area_id": "203",
        "area_name": "信阳市"
      }, {"area_id": "204", "area_name": "周口市"}, {"area_id": "205", "area_name": "驻马店市"}, {
        "area_id": "206",
        "area_name": "省直辖县级行政区划"
      }],
      "17": [{"area_id": "207", "area_name": "武汉市"}, {"area_id": "208", "area_name": "黄石市"}, {
        "area_id": "209",
        "area_name": "十堰市"
      }, {"area_id": "210", "area_name": "宜昌市"}, {"area_id": "211", "area_name": "襄阳市"}, {
        "area_id": "212",
        "area_name": "鄂州市"
      }, {"area_id": "213", "area_name": "荆门市"}, {"area_id": "214", "area_name": "孝感市"}, {
        "area_id": "215",
        "area_name": "荆州市"
      }, {"area_id": "216", "area_name": "黄冈市"}, {"area_id": "217", "area_name": "咸宁市"}, {
        "area_id": "218",
        "area_name": "随州市"
      }, {"area_id": "219", "area_name": "恩施土家族苗族自治州"}, {"area_id": "220", "area_name": "省直辖县级行政区划"}],
      "18": [{"area_id": "221", "area_name": "长沙市"}, {"area_id": "222", "area_name": "株洲市"}, {
        "area_id": "223",
        "area_name": "湘潭市"
      }, {"area_id": "224", "area_name": "衡阳市"}, {"area_id": "225", "area_name": "邵阳市"}, {
        "area_id": "226",
        "area_name": "岳阳市"
      }, {"area_id": "227", "area_name": "常德市"}, {"area_id": "228", "area_name": "张家界市"}, {
        "area_id": "229",
        "area_name": "益阳市"
      }, {"area_id": "230", "area_name": "郴州市"}, {"area_id": "231", "area_name": "永州市"}, {
        "area_id": "232",
        "area_name": "怀化市"
      }, {"area_id": "233", "area_name": "娄底市"}, {"area_id": "234", "area_name": "湘西土家族苗族自治州"}],
      "19": [{"area_id": "235", "area_name": "广州市"}, {"area_id": "236", "area_name": "韶关市"}, {
        "area_id": "237",
        "area_name": "深圳市"
      }, {"area_id": "238", "area_name": "珠海市"}, {"area_id": "239", "area_name": "汕头市"}, {
        "area_id": "240",
        "area_name": "佛山市"
      }, {"area_id": "241", "area_name": "江门市"}, {"area_id": "242", "area_name": "湛江市"}, {
        "area_id": "243",
        "area_name": "茂名市"
      }, {"area_id": "244", "area_name": "肇庆市"}, {"area_id": "245", "area_name": "惠州市"}, {
        "area_id": "246",
        "area_name": "梅州市"
      }, {"area_id": "247", "area_name": "汕尾市"}, {"area_id": "248", "area_name": "河源市"}, {
        "area_id": "249",
        "area_name": "阳江市"
      }, {"area_id": "250", "area_name": "清远市"}, {"area_id": "251", "area_name": "东莞市"}, {
        "area_id": "252",
        "area_name": "中山市"
      }, {"area_id": "253", "area_name": "潮州市"}, {"area_id": "254", "area_name": "揭阳市"}, {
        "area_id": "255",
        "area_name": "云浮市"
      }],
      "20": [{"area_id": "256", "area_name": "南宁市"}, {"area_id": "257", "area_name": "柳州市"}, {
        "area_id": "258",
        "area_name": "桂林市"
      }, {"area_id": "259", "area_name": "梧州市"}, {"area_id": "260", "area_name": "北海市"}, {
        "area_id": "261",
        "area_name": "防城港市"
      }, {"area_id": "262", "area_name": "钦州市"}, {"area_id": "263", "area_name": "贵港市"}, {
        "area_id": "264",
        "area_name": "玉林市"
      }, {"area_id": "265", "area_name": "百色市"}, {"area_id": "266", "area_name": "贺州市"}, {
        "area_id": "267",
        "area_name": "河池市"
      }, {"area_id": "268", "area_name": "来宾市"}, {"area_id": "269", "area_name": "崇左市"}],
      "21": [{"area_id": "270", "area_name": "海口市"}, {"area_id": "271", "area_name": "三亚市"}, {
        "area_id": "272",
        "area_name": "三沙市"
      }, {"area_id": "273", "area_name": "省直辖县级行政区划"}],
      "22": [{"area_id": "274", "area_name": "市辖区"}, {"area_id": "275", "area_name": "县"}],
      "23": [{"area_id": "276", "area_name": "成都市"}, {"area_id": "277", "area_name": "自贡市"}, {
        "area_id": "278",
        "area_name": "攀枝花市"
      }, {"area_id": "279", "area_name": "泸州市"}, {"area_id": "280", "area_name": "德阳市"}, {
        "area_id": "281",
        "area_name": "绵阳市"
      }, {"area_id": "282", "area_name": "广元市"}, {"area_id": "283", "area_name": "遂宁市"}, {
        "area_id": "284",
        "area_name": "内江市"
      }, {"area_id": "285", "area_name": "乐山市"}, {"area_id": "286", "area_name": "南充市"}, {
        "area_id": "287",
        "area_name": "眉山市"
      }, {"area_id": "288", "area_name": "宜宾市"}, {"area_id": "289", "area_name": "广安市"}, {
        "area_id": "290",
        "area_name": "达州市"
      }, {"area_id": "291", "area_name": "雅安市"}, {"area_id": "292", "area_name": "巴中市"}, {
        "area_id": "293",
        "area_name": "资阳市"
      }, {"area_id": "294", "area_name": "阿坝藏族羌族自治州"}, {"area_id": "295", "area_name": "甘孜藏族自治州"}, {
        "area_id": "296",
        "area_name": "凉山彝族自治州"
      }],
      "24": [{"area_id": "297", "area_name": "贵阳市"}, {"area_id": "298", "area_name": "六盘水市"}, {
        "area_id": "299",
        "area_name": "遵义市"
      }, {"area_id": "300", "area_name": "安顺市"}, {"area_id": "301", "area_name": "毕节市"}, {
        "area_id": "302",
        "area_name": "铜仁市"
      }, {"area_id": "303", "area_name": "黔西南布依族苗族自治州"}, {
        "area_id": "304",
        "area_name": "黔东南苗族侗族自治州"
      }, {"area_id": "305", "area_name": "黔南布依族苗族自治州"}],
      "25": [{"area_id": "306", "area_name": "昆明市"}, {"area_id": "307", "area_name": "曲靖市"}, {
        "area_id": "308",
        "area_name": "玉溪市"
      }, {"area_id": "309", "area_name": "保山市"}, {"area_id": "310", "area_name": "昭通市"}, {
        "area_id": "311",
        "area_name": "丽江市"
      }, {"area_id": "312", "area_name": "普洱市"}, {"area_id": "313", "area_name": "临沧市"}, {
        "area_id": "314",
        "area_name": "楚雄彝族自治州"
      }, {"area_id": "315", "area_name": "红河哈尼族彝族自治州"}, {"area_id": "316", "area_name": "文山壮族苗族自治州"}, {
        "area_id": "317",
        "area_name": "西双版纳傣族自治州"
      }, {"area_id": "318", "area_name": "大理白族自治州"}, {"area_id": "319", "area_name": "德宏傣族景颇族自治州"}, {
        "area_id": "320",
        "area_name": "怒江傈僳族自治州"
      }, {"area_id": "321", "area_name": "迪庆藏族自治州"}],
      "26": [{"area_id": "322", "area_name": "拉萨市"}, {"area_id": "323", "area_name": "日喀则市"}, {
        "area_id": "324",
        "area_name": "昌都市"
      }, {"area_id": "325", "area_name": "林芝市"}, {"area_id": "326", "area_name": "山南地区"}, {
        "area_id": "327",
        "area_name": "那曲地区"
      }, {"area_id": "328", "area_name": "阿里地区"}],
      "27": [{"area_id": "329", "area_name": "西安市"}, {"area_id": "330", "area_name": "铜川市"}, {
        "area_id": "331",
        "area_name": "宝鸡市"
      }, {"area_id": "332", "area_name": "咸阳市"}, {"area_id": "333", "area_name": "渭南市"}, {
        "area_id": "334",
        "area_name": "延安市"
      }, {"area_id": "335", "area_name": "汉中市"}, {"area_id": "336", "area_name": "榆林市"}, {
        "area_id": "337",
        "area_name": "安康市"
      }, {"area_id": "338", "area_name": "商洛市"}],
      "28": [{"area_id": "339", "area_name": "兰州市"}, {"area_id": "340", "area_name": "嘉峪关市"}, {
        "area_id": "341",
        "area_name": "金昌市"
      }, {"area_id": "342", "area_name": "白银市"}, {"area_id": "343", "area_name": "天水市"}, {
        "area_id": "344",
        "area_name": "武威市"
      }, {"area_id": "345", "area_name": "张掖市"}, {"area_id": "346", "area_name": "平凉市"}, {
        "area_id": "347",
        "area_name": "酒泉市"
      }, {"area_id": "348", "area_name": "庆阳市"}, {"area_id": "349", "area_name": "定西市"}, {
        "area_id": "350",
        "area_name": "陇南市"
      }, {"area_id": "351", "area_name": "临夏回族自治州"}, {"area_id": "352", "area_name": "甘南藏族自治州"}],
      "29": [{"area_id": "353", "area_name": "西宁市"}, {"area_id": "354", "area_name": "海东市"}, {
        "area_id": "355",
        "area_name": "海北藏族自治州"
      }, {"area_id": "356", "area_name": "黄南藏族自治州"}, {"area_id": "357", "area_name": "海南藏族自治州"}, {
        "area_id": "358",
        "area_name": "果洛藏族自治州"
      }, {"area_id": "359", "area_name": "玉树藏族自治州"}, {"area_id": "360", "area_name": "海西蒙古族藏族自治州"}],
      "30": [{"area_id": "361", "area_name": "银川市"}, {"area_id": "362", "area_name": "石嘴山市"}, {
        "area_id": "363",
        "area_name": "吴忠市"
      }, {"area_id": "364", "area_name": "固原市"}, {"area_id": "365", "area_name": "中卫市"}],
      "31": [{"area_id": "366", "area_name": "乌鲁木齐市"}, {"area_id": "367", "area_name": "克拉玛依市"}, {
        "area_id": "368",
        "area_name": "吐鲁番市"
      }, {"area_id": "369", "area_name": "哈密地区"}, {"area_id": "370", "area_name": "昌吉回族自治州"}, {
        "area_id": "371",
        "area_name": "博尔塔拉蒙古自治州"
      }, {"area_id": "372", "area_name": "巴音郭楞蒙古自治州"}, {"area_id": "373", "area_name": "阿克苏地区"}, {
        "area_id": "374",
        "area_name": "克孜勒苏柯尔克孜自治州"
      }, {"area_id": "375", "area_name": "喀什地区"}, {"area_id": "376", "area_name": "和田地区"}, {
        "area_id": "377",
        "area_name": "伊犁哈萨克自治州"
      }, {"area_id": "378", "area_name": "塔城地区"}, {"area_id": "379", "area_name": "阿勒泰地区"}, {
        "area_id": "380",
        "area_name": "自治区直辖县级行政区划"
      }],
      "35": [{"area_id": "381", "area_name": "东城区"}, {"area_id": "382", "area_name": "西城区"}, {
        "area_id": "383",
        "area_name": "朝阳区"
      }, {"area_id": "384", "area_name": "丰台区"}, {"area_id": "385", "area_name": "石景山区"}, {
        "area_id": "386",
        "area_name": "海淀区"
      }, {"area_id": "387", "area_name": "门头沟区"}, {"area_id": "388", "area_name": "房山区"}, {
        "area_id": "389",
        "area_name": "通州区"
      }, {"area_id": "390", "area_name": "顺义区"}, {"area_id": "391", "area_name": "昌平区"}, {
        "area_id": "392",
        "area_name": "大兴区"
      }, {"area_id": "393", "area_name": "怀柔区"}, {"area_id": "394", "area_name": "平谷区"}],
      "36": [{"area_id": "395", "area_name": "密云县"}, {"area_id": "396", "area_name": "延庆县"}],
      "37": [{"area_id": "397", "area_name": "和平区"}, {"area_id": "398", "area_name": "河东区"}, {
        "area_id": "399",
        "area_name": "河西区"
      }, {"area_id": "400", "area_name": "南开区"}, {"area_id": "401", "area_name": "河北区"}, {
        "area_id": "402",
        "area_name": "红桥区"
      }, {"area_id": "403", "area_name": "东丽区"}, {"area_id": "404", "area_name": "西青区"}, {
        "area_id": "405",
        "area_name": "津南区"
      }, {"area_id": "406", "area_name": "北辰区"}, {"area_id": "407", "area_name": "武清区"}, {
        "area_id": "408",
        "area_name": "宝坻区"
      }, {"area_id": "409", "area_name": "滨海新区"}, {"area_id": "410", "area_name": "宁河区"}, {
        "area_id": "411",
        "area_name": "静海区"
      }],
      "38": [{"area_id": "412", "area_name": "蓟县"}],
      "39": [{"area_id": "413", "area_name": "市辖区"}, {"area_id": "414", "area_name": "长安区"}, {
        "area_id": "415",
        "area_name": "桥西区"
      }, {"area_id": "416", "area_name": "新华区"}, {"area_id": "417", "area_name": "井陉矿区"}, {
        "area_id": "418",
        "area_name": "裕华区"
      }, {"area_id": "419", "area_name": "藁城区"}, {"area_id": "420", "area_name": "鹿泉区"}, {
        "area_id": "421",
        "area_name": "栾城区"
      }, {"area_id": "422", "area_name": "井陉县"}, {"area_id": "423", "area_name": "正定县"}, {
        "area_id": "424",
        "area_name": "行唐县"
      }, {"area_id": "425", "area_name": "灵寿县"}, {"area_id": "426", "area_name": "高邑县"}, {
        "area_id": "427",
        "area_name": "深泽县"
      }, {"area_id": "428", "area_name": "赞皇县"}, {"area_id": "429", "area_name": "无极县"}, {
        "area_id": "430",
        "area_name": "平山县"
      }, {"area_id": "431", "area_name": "元氏县"}, {"area_id": "432", "area_name": "赵县"}, {
        "area_id": "433",
        "area_name": "晋州市"
      }, {"area_id": "434", "area_name": "新乐市"}],
      "40": [{"area_id": "435", "area_name": "市辖区"}, {"area_id": "436", "area_name": "路南区"}, {
        "area_id": "437",
        "area_name": "路北区"
      }, {"area_id": "438", "area_name": "古冶区"}, {"area_id": "439", "area_name": "开平区"}, {
        "area_id": "440",
        "area_name": "丰南区"
      }, {"area_id": "441", "area_name": "丰润区"}, {"area_id": "442", "area_name": "曹妃甸区"}, {
        "area_id": "443",
        "area_name": "滦县"
      }, {"area_id": "444", "area_name": "滦南县"}, {"area_id": "445", "area_name": "乐亭县"}, {
        "area_id": "446",
        "area_name": "迁西县"
      }, {"area_id": "447", "area_name": "玉田县"}, {"area_id": "448", "area_name": "遵化市"}, {
        "area_id": "449",
        "area_name": "迁安市"
      }],
      "41": [{"area_id": "450", "area_name": "市辖区"}, {"area_id": "451", "area_name": "海港区"}, {
        "area_id": "452",
        "area_name": "山海关区"
      }, {"area_id": "453", "area_name": "北戴河区"}, {"area_id": "454", "area_name": "抚宁区"}, {
        "area_id": "455",
        "area_name": "青龙满族自治县"
      }, {"area_id": "456", "area_name": "昌黎县"}, {"area_id": "457", "area_name": "卢龙县"}],
      "42": [{"area_id": "458", "area_name": "市辖区"}, {"area_id": "459", "area_name": "邯山区"}, {
        "area_id": "460",
        "area_name": "丛台区"
      }, {"area_id": "461", "area_name": "复兴区"}, {"area_id": "462", "area_name": "峰峰矿区"}, {
        "area_id": "463",
        "area_name": "邯郸县"
      }, {"area_id": "464", "area_name": "临漳县"}, {"area_id": "465", "area_name": "成安县"}, {
        "area_id": "466",
        "area_name": "大名县"
      }, {"area_id": "467", "area_name": "涉县"}, {"area_id": "468", "area_name": "磁县"}, {
        "area_id": "469",
        "area_name": "肥乡县"
      }, {"area_id": "470", "area_name": "永年县"}, {"area_id": "471", "area_name": "邱县"}, {
        "area_id": "472",
        "area_name": "鸡泽县"
      }, {"area_id": "473", "area_name": "广平县"}, {"area_id": "474", "area_name": "馆陶县"}, {
        "area_id": "475",
        "area_name": "魏县"
      }, {"area_id": "476", "area_name": "曲周县"}, {"area_id": "477", "area_name": "武安市"}],
      "43": [{"area_id": "478", "area_name": "市辖区"}, {"area_id": "479", "area_name": "桥东区"}, {
        "area_id": "480",
        "area_name": "桥西区"
      }, {"area_id": "481", "area_name": "邢台县"}, {"area_id": "482", "area_name": "临城县"}, {
        "area_id": "483",
        "area_name": "内丘县"
      }, {"area_id": "484", "area_name": "柏乡县"}, {"area_id": "485", "area_name": "隆尧县"}, {
        "area_id": "486",
        "area_name": "任县"
      }, {"area_id": "487", "area_name": "南和县"}, {"area_id": "488", "area_name": "宁晋县"}, {
        "area_id": "489",
        "area_name": "巨鹿县"
      }, {"area_id": "490", "area_name": "新河县"}, {"area_id": "491", "area_name": "广宗县"}, {
        "area_id": "492",
        "area_name": "平乡县"
      }, {"area_id": "493", "area_name": "威县"}, {"area_id": "494", "area_name": "清河县"}, {
        "area_id": "495",
        "area_name": "临西县"
      }, {"area_id": "496", "area_name": "南宫市"}, {"area_id": "497", "area_name": "沙河市"}],
      "44": [{"area_id": "498", "area_name": "市辖区"}, {"area_id": "499", "area_name": "竞秀区"}, {
        "area_id": "500",
        "area_name": "莲池区"
      }, {"area_id": "501", "area_name": "满城区"}, {"area_id": "502", "area_name": "清苑区"}, {
        "area_id": "503",
        "area_name": "徐水区"
      }, {"area_id": "504", "area_name": "涞水县"}, {"area_id": "505", "area_name": "阜平县"}, {
        "area_id": "506",
        "area_name": "定兴县"
      }, {"area_id": "507", "area_name": "唐县"}, {"area_id": "508", "area_name": "高阳县"}, {
        "area_id": "509",
        "area_name": "容城县"
      }, {"area_id": "510", "area_name": "涞源县"}, {"area_id": "511", "area_name": "望都县"}, {
        "area_id": "512",
        "area_name": "安新县"
      }, {"area_id": "513", "area_name": "易县"}, {"area_id": "514", "area_name": "曲阳县"}, {
        "area_id": "515",
        "area_name": "蠡县"
      }, {"area_id": "516", "area_name": "顺平县"}, {"area_id": "517", "area_name": "博野县"}, {
        "area_id": "518",
        "area_name": "雄县"
      }, {"area_id": "519", "area_name": "涿州市"}, {"area_id": "520", "area_name": "安国市"}, {
        "area_id": "521",
        "area_name": "高碑店市"
      }],
      "45": [{"area_id": "522", "area_name": "市辖区"}, {"area_id": "523", "area_name": "桥东区"}, {
        "area_id": "524",
        "area_name": "桥西区"
      }, {"area_id": "525", "area_name": "宣化区"}, {"area_id": "526", "area_name": "下花园区"}, {
        "area_id": "527",
        "area_name": "宣化县"
      }, {"area_id": "528", "area_name": "张北县"}, {"area_id": "529", "area_name": "康保县"}, {
        "area_id": "530",
        "area_name": "沽源县"
      }, {"area_id": "531", "area_name": "尚义县"}, {"area_id": "532", "area_name": "蔚县"}, {
        "area_id": "533",
        "area_name": "阳原县"
      }, {"area_id": "534", "area_name": "怀安县"}, {"area_id": "535", "area_name": "万全县"}, {
        "area_id": "536",
        "area_name": "怀来县"
      }, {"area_id": "537", "area_name": "涿鹿县"}, {"area_id": "538", "area_name": "赤城县"}, {
        "area_id": "539",
        "area_name": "崇礼县"
      }],
      "46": [{"area_id": "540", "area_name": "市辖区"}, {"area_id": "541", "area_name": "双桥区"}, {
        "area_id": "542",
        "area_name": "双滦区"
      }, {"area_id": "543", "area_name": "鹰手营子矿区"}, {"area_id": "544", "area_name": "承德县"}, {
        "area_id": "545",
        "area_name": "兴隆县"
      }, {"area_id": "546", "area_name": "平泉县"}, {"area_id": "547", "area_name": "滦平县"}, {
        "area_id": "548",
        "area_name": "隆化县"
      }, {"area_id": "549", "area_name": "丰宁满族自治县"}, {"area_id": "550", "area_name": "宽城满族自治县"}, {
        "area_id": "551",
        "area_name": "围场满族蒙古族自治县"
      }],
      "47": [{"area_id": "552", "area_name": "市辖区"}, {"area_id": "553", "area_name": "新华区"}, {
        "area_id": "554",
        "area_name": "运河区"
      }, {"area_id": "555", "area_name": "沧县"}, {"area_id": "556", "area_name": "青县"}, {
        "area_id": "557",
        "area_name": "东光县"
      }, {"area_id": "558", "area_name": "海兴县"}, {"area_id": "559", "area_name": "盐山县"}, {
        "area_id": "560",
        "area_name": "肃宁县"
      }, {"area_id": "561", "area_name": "南皮县"}, {"area_id": "562", "area_name": "吴桥县"}, {
        "area_id": "563",
        "area_name": "献县"
      }, {"area_id": "564", "area_name": "孟村回族自治县"}, {"area_id": "565", "area_name": "泊头市"}, {
        "area_id": "566",
        "area_name": "任丘市"
      }, {"area_id": "567", "area_name": "黄骅市"}, {"area_id": "568", "area_name": "河间市"}],
      "48": [{"area_id": "569", "area_name": "市辖区"}, {"area_id": "570", "area_name": "安次区"}, {
        "area_id": "571",
        "area_name": "广阳区"
      }, {"area_id": "572", "area_name": "固安县"}, {"area_id": "573", "area_name": "永清县"}, {
        "area_id": "574",
        "area_name": "香河县"
      }, {"area_id": "575", "area_name": "大城县"}, {"area_id": "576", "area_name": "文安县"}, {
        "area_id": "577",
        "area_name": "大厂回族自治县"
      }, {"area_id": "578", "area_name": "霸州市"}, {"area_id": "579", "area_name": "三河市"}],
      "49": [{"area_id": "580", "area_name": "市辖区"}, {"area_id": "581", "area_name": "桃城区"}, {
        "area_id": "582",
        "area_name": "枣强县"
      }, {"area_id": "583", "area_name": "武邑县"}, {"area_id": "584", "area_name": "武强县"}, {
        "area_id": "585",
        "area_name": "饶阳县"
      }, {"area_id": "586", "area_name": "安平县"}, {"area_id": "587", "area_name": "故城县"}, {
        "area_id": "588",
        "area_name": "景县"
      }, {"area_id": "589", "area_name": "阜城县"}, {"area_id": "590", "area_name": "冀州市"}, {
        "area_id": "591",
        "area_name": "深州市"
      }],
      "50": [{"area_id": "592", "area_name": "定州市"}, {"area_id": "593", "area_name": "辛集市"}],
      "51": [{"area_id": "594", "area_name": "市辖区"}, {"area_id": "595", "area_name": "小店区"}, {
        "area_id": "596",
        "area_name": "迎泽区"
      }, {"area_id": "597", "area_name": "杏花岭区"}, {"area_id": "598", "area_name": "尖草坪区"}, {
        "area_id": "599",
        "area_name": "万柏林区"
      }, {"area_id": "600", "area_name": "晋源区"}, {"area_id": "601", "area_name": "清徐县"}, {
        "area_id": "602",
        "area_name": "阳曲县"
      }, {"area_id": "603", "area_name": "娄烦县"}, {"area_id": "604", "area_name": "古交市"}],
      "52": [{"area_id": "605", "area_name": "市辖区"}, {"area_id": "606", "area_name": "城区"}, {
        "area_id": "607",
        "area_name": "矿区"
      }, {"area_id": "608", "area_name": "南郊区"}, {"area_id": "609", "area_name": "新荣区"}, {
        "area_id": "610",
        "area_name": "阳高县"
      }, {"area_id": "611", "area_name": "天镇县"}, {"area_id": "612", "area_name": "广灵县"}, {
        "area_id": "613",
        "area_name": "灵丘县"
      }, {"area_id": "614", "area_name": "浑源县"}, {"area_id": "615", "area_name": "左云县"}, {
        "area_id": "616",
        "area_name": "大同县"
      }],
      "53": [{"area_id": "617", "area_name": "市辖区"}, {"area_id": "618", "area_name": "城区"}, {
        "area_id": "619",
        "area_name": "矿区"
      }, {"area_id": "620", "area_name": "郊区"}, {"area_id": "621", "area_name": "平定县"}, {
        "area_id": "622",
        "area_name": "盂县"
      }],
      "54": [{"area_id": "623", "area_name": "市辖区"}, {"area_id": "624", "area_name": "城区"}, {
        "area_id": "625",
        "area_name": "郊区"
      }, {"area_id": "626", "area_name": "长治县"}, {"area_id": "627", "area_name": "襄垣县"}, {
        "area_id": "628",
        "area_name": "屯留县"
      }, {"area_id": "629", "area_name": "平顺县"}, {"area_id": "630", "area_name": "黎城县"}, {
        "area_id": "631",
        "area_name": "壶关县"
      }, {"area_id": "632", "area_name": "长子县"}, {"area_id": "633", "area_name": "武乡县"}, {
        "area_id": "634",
        "area_name": "沁县"
      }, {"area_id": "635", "area_name": "沁源县"}, {"area_id": "636", "area_name": "潞城市"}],
      "55": [{"area_id": "637", "area_name": "市辖区"}, {"area_id": "638", "area_name": "城区"}, {
        "area_id": "639",
        "area_name": "沁水县"
      }, {"area_id": "640", "area_name": "阳城县"}, {"area_id": "641", "area_name": "陵川县"}, {
        "area_id": "642",
        "area_name": "泽州县"
      }, {"area_id": "643", "area_name": "高平市"}],
      "56": [{"area_id": "644", "area_name": "市辖区"}, {"area_id": "645", "area_name": "朔城区"}, {
        "area_id": "646",
        "area_name": "平鲁区"
      }, {"area_id": "647", "area_name": "山阴县"}, {"area_id": "648", "area_name": "应县"}, {
        "area_id": "649",
        "area_name": "右玉县"
      }, {"area_id": "650", "area_name": "怀仁县"}],
      "57": [{"area_id": "651", "area_name": "市辖区"}, {"area_id": "652", "area_name": "榆次区"}, {
        "area_id": "653",
        "area_name": "榆社县"
      }, {"area_id": "654", "area_name": "左权县"}, {"area_id": "655", "area_name": "和顺县"}, {
        "area_id": "656",
        "area_name": "昔阳县"
      }, {"area_id": "657", "area_name": "寿阳县"}, {"area_id": "658", "area_name": "太谷县"}, {
        "area_id": "659",
        "area_name": "祁县"
      }, {"area_id": "660", "area_name": "平遥县"}, {"area_id": "661", "area_name": "灵石县"}, {
        "area_id": "662",
        "area_name": "介休市"
      }],
      "58": [{"area_id": "663", "area_name": "市辖区"}, {"area_id": "664", "area_name": "盐湖区"}, {
        "area_id": "665",
        "area_name": "临猗县"
      }, {"area_id": "666", "area_name": "万荣县"}, {"area_id": "667", "area_name": "闻喜县"}, {
        "area_id": "668",
        "area_name": "稷山县"
      }, {"area_id": "669", "area_name": "新绛县"}, {"area_id": "670", "area_name": "绛县"}, {
        "area_id": "671",
        "area_name": "垣曲县"
      }, {"area_id": "672", "area_name": "夏县"}, {"area_id": "673", "area_name": "平陆县"}, {
        "area_id": "674",
        "area_name": "芮城县"
      }, {"area_id": "675", "area_name": "永济市"}, {"area_id": "676", "area_name": "河津市"}],
      "59": [{"area_id": "677", "area_name": "市辖区"}, {"area_id": "678", "area_name": "忻府区"}, {
        "area_id": "679",
        "area_name": "定襄县"
      }, {"area_id": "680", "area_name": "五台县"}, {"area_id": "681", "area_name": "代县"}, {
        "area_id": "682",
        "area_name": "繁峙县"
      }, {"area_id": "683", "area_name": "宁武县"}, {"area_id": "684", "area_name": "静乐县"}, {
        "area_id": "685",
        "area_name": "神池县"
      }, {"area_id": "686", "area_name": "五寨县"}, {"area_id": "687", "area_name": "岢岚县"}, {
        "area_id": "688",
        "area_name": "河曲县"
      }, {"area_id": "689", "area_name": "保德县"}, {"area_id": "690", "area_name": "偏关县"}, {
        "area_id": "691",
        "area_name": "原平市"
      }],
      "60": [{"area_id": "692", "area_name": "市辖区"}, {"area_id": "693", "area_name": "尧都区"}, {
        "area_id": "694",
        "area_name": "曲沃县"
      }, {"area_id": "695", "area_name": "翼城县"}, {"area_id": "696", "area_name": "襄汾县"}, {
        "area_id": "697",
        "area_name": "洪洞县"
      }, {"area_id": "698", "area_name": "古县"}, {"area_id": "699", "area_name": "安泽县"}, {
        "area_id": "700",
        "area_name": "浮山县"
      }, {"area_id": "701", "area_name": "吉县"}, {"area_id": "702", "area_name": "乡宁县"}, {
        "area_id": "703",
        "area_name": "大宁县"
      }, {"area_id": "704", "area_name": "隰县"}, {"area_id": "705", "area_name": "永和县"}, {
        "area_id": "706",
        "area_name": "蒲县"
      }, {"area_id": "707", "area_name": "汾西县"}, {"area_id": "708", "area_name": "侯马市"}, {
        "area_id": "709",
        "area_name": "霍州市"
      }],
      "61": [{"area_id": "710", "area_name": "市辖区"}, {"area_id": "711", "area_name": "离石区"}, {
        "area_id": "712",
        "area_name": "文水县"
      }, {"area_id": "713", "area_name": "交城县"}, {"area_id": "714", "area_name": "兴县"}, {
        "area_id": "715",
        "area_name": "临县"
      }, {"area_id": "716", "area_name": "柳林县"}, {"area_id": "717", "area_name": "石楼县"}, {
        "area_id": "718",
        "area_name": "岚县"
      }, {"area_id": "719", "area_name": "方山县"}, {"area_id": "720", "area_name": "中阳县"}, {
        "area_id": "721",
        "area_name": "交口县"
      }, {"area_id": "722", "area_name": "孝义市"}, {"area_id": "723", "area_name": "汾阳市"}],
      "62": [{"area_id": "724", "area_name": "市辖区"}, {"area_id": "725", "area_name": "新城区"}, {
        "area_id": "726",
        "area_name": "回民区"
      }, {"area_id": "727", "area_name": "玉泉区"}, {"area_id": "728", "area_name": "赛罕区"}, {
        "area_id": "729",
        "area_name": "土默特左旗"
      }, {"area_id": "730", "area_name": "托克托县"}, {"area_id": "731", "area_name": "和林格尔县"}, {
        "area_id": "732",
        "area_name": "清水河县"
      }, {"area_id": "733", "area_name": "武川县"}],
      "63": [{"area_id": "734", "area_name": "市辖区"}, {"area_id": "735", "area_name": "东河区"}, {
        "area_id": "736",
        "area_name": "昆都仑区"
      }, {"area_id": "737", "area_name": "青山区"}, {"area_id": "738", "area_name": "石拐区"}, {
        "area_id": "739",
        "area_name": "白云鄂博矿区"
      }, {"area_id": "740", "area_name": "九原区"}, {"area_id": "741", "area_name": "土默特右旗"}, {
        "area_id": "742",
        "area_name": "固阳县"
      }, {"area_id": "743", "area_name": "达尔罕茂明安联合旗"}],
      "64": [{"area_id": "744", "area_name": "市辖区"}, {"area_id": "745", "area_name": "海勃湾区"}, {
        "area_id": "746",
        "area_name": "海南区"
      }, {"area_id": "747", "area_name": "乌达区"}],
      "65": [{"area_id": "748", "area_name": "市辖区"}, {"area_id": "749", "area_name": "红山区"}, {
        "area_id": "750",
        "area_name": "元宝山区"
      }, {"area_id": "751", "area_name": "松山区"}, {"area_id": "752", "area_name": "阿鲁科尔沁旗"}, {
        "area_id": "753",
        "area_name": "巴林左旗"
      }, {"area_id": "754", "area_name": "巴林右旗"}, {"area_id": "755", "area_name": "林西县"}, {
        "area_id": "756",
        "area_name": "克什克腾旗"
      }, {"area_id": "757", "area_name": "翁牛特旗"}, {"area_id": "758", "area_name": "喀喇沁旗"}, {
        "area_id": "759",
        "area_name": "宁城县"
      }, {"area_id": "760", "area_name": "敖汉旗"}],
      "66": [{"area_id": "761", "area_name": "市辖区"}, {"area_id": "762", "area_name": "科尔沁区"}, {
        "area_id": "763",
        "area_name": "科尔沁左翼中旗"
      }, {"area_id": "764", "area_name": "科尔沁左翼后旗"}, {"area_id": "765", "area_name": "开鲁县"}, {
        "area_id": "766",
        "area_name": "库伦旗"
      }, {"area_id": "767", "area_name": "奈曼旗"}, {"area_id": "768", "area_name": "扎鲁特旗"}, {
        "area_id": "769",
        "area_name": "霍林郭勒市"
      }],
      "67": [{"area_id": "770", "area_name": "市辖区"}, {"area_id": "771", "area_name": "东胜区"}, {
        "area_id": "772",
        "area_name": "达拉特旗"
      }, {"area_id": "773", "area_name": "准格尔旗"}, {"area_id": "774", "area_name": "鄂托克前旗"}, {
        "area_id": "775",
        "area_name": "鄂托克旗"
      }, {"area_id": "776", "area_name": "杭锦旗"}, {"area_id": "777", "area_name": "乌审旗"}, {
        "area_id": "778",
        "area_name": "伊金霍洛旗"
      }],
      "68": [{"area_id": "779", "area_name": "市辖区"}, {"area_id": "780", "area_name": "海拉尔区"}, {
        "area_id": "781",
        "area_name": "扎赉诺尔区"
      }, {"area_id": "782", "area_name": "阿荣旗"}, {"area_id": "783", "area_name": "莫力达瓦达斡尔族自治旗"}, {
        "area_id": "784",
        "area_name": "鄂伦春自治旗"
      }, {"area_id": "785", "area_name": "鄂温克族自治旗"}, {"area_id": "786", "area_name": "陈巴尔虎旗"}, {
        "area_id": "787",
        "area_name": "新巴尔虎左旗"
      }, {"area_id": "788", "area_name": "新巴尔虎右旗"}, {"area_id": "789", "area_name": "满洲里市"}, {
        "area_id": "790",
        "area_name": "牙克石市"
      }, {"area_id": "791", "area_name": "扎兰屯市"}, {"area_id": "792", "area_name": "额尔古纳市"}, {
        "area_id": "793",
        "area_name": "根河市"
      }],
      "69": [{"area_id": "794", "area_name": "市辖区"}, {"area_id": "795", "area_name": "临河区"}, {
        "area_id": "796",
        "area_name": "五原县"
      }, {"area_id": "797", "area_name": "磴口县"}, {"area_id": "798", "area_name": "乌拉特前旗"}, {
        "area_id": "799",
        "area_name": "乌拉特中旗"
      }, {"area_id": "800", "area_name": "乌拉特后旗"}, {"area_id": "801", "area_name": "杭锦后旗"}],
      "70": [{"area_id": "802", "area_name": "市辖区"}, {"area_id": "803", "area_name": "集宁区"}, {
        "area_id": "804",
        "area_name": "卓资县"
      }, {"area_id": "805", "area_name": "化德县"}, {"area_id": "806", "area_name": "商都县"}, {
        "area_id": "807",
        "area_name": "兴和县"
      }, {"area_id": "808", "area_name": "凉城县"}, {"area_id": "809", "area_name": "察哈尔右翼前旗"}, {
        "area_id": "810",
        "area_name": "察哈尔右翼中旗"
      }, {"area_id": "811", "area_name": "察哈尔右翼后旗"}, {"area_id": "812", "area_name": "四子王旗"}, {
        "area_id": "813",
        "area_name": "丰镇市"
      }],
      "71": [{"area_id": "814", "area_name": "乌兰浩特市"}, {"area_id": "815", "area_name": "阿尔山市"}, {
        "area_id": "816",
        "area_name": "科尔沁右翼前旗"
      }, {"area_id": "817", "area_name": "科尔沁右翼中旗"}, {"area_id": "818", "area_name": "扎赉特旗"}, {
        "area_id": "819",
        "area_name": "突泉县"
      }],
      "72": [{"area_id": "820", "area_name": "二连浩特市"}, {"area_id": "821", "area_name": "锡林浩特市"}, {
        "area_id": "822",
        "area_name": "阿巴嘎旗"
      }, {"area_id": "823", "area_name": "苏尼特左旗"}, {"area_id": "824", "area_name": "苏尼特右旗"}, {
        "area_id": "825",
        "area_name": "东乌珠穆沁旗"
      }, {"area_id": "826", "area_name": "西乌珠穆沁旗"}, {"area_id": "827", "area_name": "太仆寺旗"}, {
        "area_id": "828",
        "area_name": "镶黄旗"
      }, {"area_id": "829", "area_name": "正镶白旗"}, {"area_id": "830", "area_name": "正蓝旗"}, {
        "area_id": "831",
        "area_name": "多伦县"
      }],
      "73": [{"area_id": "832", "area_name": "阿拉善左旗"}, {"area_id": "833", "area_name": "阿拉善右旗"}, {
        "area_id": "834",
        "area_name": "额济纳旗"
      }],
      "74": [{"area_id": "835", "area_name": "市辖区"}, {"area_id": "836", "area_name": "和平区"}, {
        "area_id": "837",
        "area_name": "沈河区"
      }, {"area_id": "838", "area_name": "大东区"}, {"area_id": "839", "area_name": "皇姑区"}, {
        "area_id": "840",
        "area_name": "铁西区"
      }, {"area_id": "841", "area_name": "苏家屯区"}, {"area_id": "842", "area_name": "浑南区"}, {
        "area_id": "843",
        "area_name": "沈北新区"
      }, {"area_id": "844", "area_name": "于洪区"}, {"area_id": "845", "area_name": "辽中县"}, {
        "area_id": "846",
        "area_name": "康平县"
      }, {"area_id": "847", "area_name": "法库县"}, {"area_id": "848", "area_name": "新民市"}],
      "75": [{"area_id": "849", "area_name": "市辖区"}, {"area_id": "850", "area_name": "中山区"}, {
        "area_id": "851",
        "area_name": "西岗区"
      }, {"area_id": "852", "area_name": "沙河口区"}, {"area_id": "853", "area_name": "甘井子区"}, {
        "area_id": "854",
        "area_name": "旅顺口区"
      }, {"area_id": "855", "area_name": "金州区"}, {"area_id": "856", "area_name": "长海县"}, {
        "area_id": "857",
        "area_name": "瓦房店市"
      }, {"area_id": "858", "area_name": "普兰店市"}, {"area_id": "859", "area_name": "庄河市"}],
      "76": [{"area_id": "860", "area_name": "市辖区"}, {"area_id": "861", "area_name": "铁东区"}, {
        "area_id": "862",
        "area_name": "铁西区"
      }, {"area_id": "863", "area_name": "立山区"}, {"area_id": "864", "area_name": "千山区"}, {
        "area_id": "865",
        "area_name": "台安县"
      }, {"area_id": "866", "area_name": "岫岩满族自治县"}, {"area_id": "867", "area_name": "海城市"}],
      "77": [{"area_id": "868", "area_name": "市辖区"}, {"area_id": "869", "area_name": "新抚区"}, {
        "area_id": "870",
        "area_name": "东洲区"
      }, {"area_id": "871", "area_name": "望花区"}, {"area_id": "872", "area_name": "顺城区"}, {
        "area_id": "873",
        "area_name": "抚顺县"
      }, {"area_id": "874", "area_name": "新宾满族自治县"}, {"area_id": "875", "area_name": "清原满族自治县"}],
      "78": [{"area_id": "876", "area_name": "市辖区"}, {"area_id": "877", "area_name": "平山区"}, {
        "area_id": "878",
        "area_name": "溪湖区"
      }, {"area_id": "879", "area_name": "明山区"}, {"area_id": "880", "area_name": "南芬区"}, {
        "area_id": "881",
        "area_name": "本溪满族自治县"
      }, {"area_id": "882", "area_name": "桓仁满族自治县"}],
      "79": [{"area_id": "883", "area_name": "市辖区"}, {"area_id": "884", "area_name": "元宝区"}, {
        "area_id": "885",
        "area_name": "振兴区"
      }, {"area_id": "886", "area_name": "振安区"}, {"area_id": "887", "area_name": "宽甸满族自治县"}, {
        "area_id": "888",
        "area_name": "东港市"
      }, {"area_id": "889", "area_name": "凤城市"}],
      "80": [{"area_id": "890", "area_name": "市辖区"}, {"area_id": "891", "area_name": "古塔区"}, {
        "area_id": "892",
        "area_name": "凌河区"
      }, {"area_id": "893", "area_name": "太和区"}, {"area_id": "894", "area_name": "黑山县"}, {
        "area_id": "895",
        "area_name": "义县"
      }, {"area_id": "896", "area_name": "凌海市"}, {"area_id": "897", "area_name": "北镇市"}],
      "81": [{"area_id": "898", "area_name": "市辖区"}, {"area_id": "899", "area_name": "站前区"}, {
        "area_id": "900",
        "area_name": "西市区"
      }, {"area_id": "901", "area_name": "鲅鱼圈区"}, {"area_id": "902", "area_name": "老边区"}, {
        "area_id": "903",
        "area_name": "盖州市"
      }, {"area_id": "904", "area_name": "大石桥市"}],
      "82": [{"area_id": "905", "area_name": "市辖区"}, {"area_id": "906", "area_name": "海州区"}, {
        "area_id": "907",
        "area_name": "新邱区"
      }, {"area_id": "908", "area_name": "太平区"}, {"area_id": "909", "area_name": "清河门区"}, {
        "area_id": "910",
        "area_name": "细河区"
      }, {"area_id": "911", "area_name": "阜新蒙古族自治县"}, {"area_id": "912", "area_name": "彰武县"}],
      "83": [{"area_id": "913", "area_name": "市辖区"}, {"area_id": "914", "area_name": "白塔区"}, {
        "area_id": "915",
        "area_name": "文圣区"
      }, {"area_id": "916", "area_name": "宏伟区"}, {"area_id": "917", "area_name": "弓长岭区"}, {
        "area_id": "918",
        "area_name": "太子河区"
      }, {"area_id": "919", "area_name": "辽阳县"}, {"area_id": "920", "area_name": "灯塔市"}],
      "84": [{"area_id": "921", "area_name": "市辖区"}, {"area_id": "922", "area_name": "双台子区"}, {
        "area_id": "923",
        "area_name": "兴隆台区"
      }, {"area_id": "924", "area_name": "大洼县"}, {"area_id": "925", "area_name": "盘山县"}],
      "85": [{"area_id": "926", "area_name": "市辖区"}, {"area_id": "927", "area_name": "银州区"}, {
        "area_id": "928",
        "area_name": "清河区"
      }, {"area_id": "929", "area_name": "铁岭县"}, {"area_id": "930", "area_name": "西丰县"}, {
        "area_id": "931",
        "area_name": "昌图县"
      }, {"area_id": "932", "area_name": "调兵山市"}, {"area_id": "933", "area_name": "开原市"}],
      "86": [{"area_id": "934", "area_name": "市辖区"}, {"area_id": "935", "area_name": "双塔区"}, {
        "area_id": "936",
        "area_name": "龙城区"
      }, {"area_id": "937", "area_name": "朝阳县"}, {"area_id": "938", "area_name": "建平县"}, {
        "area_id": "939",
        "area_name": "喀喇沁左翼蒙古族自治县"
      }, {"area_id": "940", "area_name": "北票市"}, {"area_id": "941", "area_name": "凌源市"}],
      "87": [{"area_id": "942", "area_name": "市辖区"}, {"area_id": "943", "area_name": "连山区"}, {
        "area_id": "944",
        "area_name": "龙港区"
      }, {"area_id": "945", "area_name": "南票区"}, {"area_id": "946", "area_name": "绥中县"}, {
        "area_id": "947",
        "area_name": "建昌县"
      }, {"area_id": "948", "area_name": "兴城市"}],
      "88": [{"area_id": "949", "area_name": "市辖区"}, {"area_id": "950", "area_name": "南关区"}, {
        "area_id": "951",
        "area_name": "宽城区"
      }, {"area_id": "952", "area_name": "朝阳区"}, {"area_id": "953", "area_name": "二道区"}, {
        "area_id": "954",
        "area_name": "绿园区"
      }, {"area_id": "955", "area_name": "双阳区"}, {"area_id": "956", "area_name": "九台区"}, {
        "area_id": "957",
        "area_name": "农安县"
      }, {"area_id": "958", "area_name": "榆树市"}, {"area_id": "959", "area_name": "德惠市"}],
      "89": [{"area_id": "960", "area_name": "市辖区"}, {"area_id": "961", "area_name": "昌邑区"}, {
        "area_id": "962",
        "area_name": "龙潭区"
      }, {"area_id": "963", "area_name": "船营区"}, {"area_id": "964", "area_name": "丰满区"}, {
        "area_id": "965",
        "area_name": "永吉县"
      }, {"area_id": "966", "area_name": "蛟河市"}, {"area_id": "967", "area_name": "桦甸市"}, {
        "area_id": "968",
        "area_name": "舒兰市"
      }, {"area_id": "969", "area_name": "磐石市"}],
      "90": [{"area_id": "970", "area_name": "市辖区"}, {"area_id": "971", "area_name": "铁西区"}, {
        "area_id": "972",
        "area_name": "铁东区"
      }, {"area_id": "973", "area_name": "梨树县"}, {"area_id": "974", "area_name": "伊通满族自治县"}, {
        "area_id": "975",
        "area_name": "公主岭市"
      }, {"area_id": "976", "area_name": "双辽市"}],
      "91": [{"area_id": "977", "area_name": "市辖区"}, {"area_id": "978", "area_name": "龙山区"}, {
        "area_id": "979",
        "area_name": "西安区"
      }, {"area_id": "980", "area_name": "东丰县"}, {"area_id": "981", "area_name": "东辽县"}],
      "92": [{"area_id": "982", "area_name": "市辖区"}, {"area_id": "983", "area_name": "东昌区"}, {
        "area_id": "984",
        "area_name": "二道江区"
      }, {"area_id": "985", "area_name": "通化县"}, {"area_id": "986", "area_name": "辉南县"}, {
        "area_id": "987",
        "area_name": "柳河县"
      }, {"area_id": "988", "area_name": "梅河口市"}, {"area_id": "989", "area_name": "集安市"}],
      "93": [{"area_id": "990", "area_name": "市辖区"}, {"area_id": "991", "area_name": "浑江区"}, {
        "area_id": "992",
        "area_name": "江源区"
      }, {"area_id": "993", "area_name": "抚松县"}, {"area_id": "994", "area_name": "靖宇县"}, {
        "area_id": "995",
        "area_name": "长白朝鲜族自治县"
      }, {"area_id": "996", "area_name": "临江市"}],
      "94": [{"area_id": "997", "area_name": "市辖区"}, {"area_id": "998", "area_name": "宁江区"}, {
        "area_id": "999",
        "area_name": "前郭尔罗斯蒙古族自治县"
      }, {"area_id": "1000", "area_name": "长岭县"}, {"area_id": "1001", "area_name": "乾安县"}, {
        "area_id": "1002",
        "area_name": "扶余市"
      }],
      "95": [{"area_id": "1003", "area_name": "市辖区"}, {"area_id": "1004", "area_name": "洮北区"}, {
        "area_id": "1005",
        "area_name": "镇赉县"
      }, {"area_id": "1006", "area_name": "通榆县"}, {"area_id": "1007", "area_name": "洮南市"}, {
        "area_id": "1008",
        "area_name": "大安市"
      }],
      "96": [{"area_id": "1009", "area_name": "延吉市"}, {"area_id": "1010", "area_name": "图们市"}, {
        "area_id": "1011",
        "area_name": "敦化市"
      }, {"area_id": "1012", "area_name": "珲春市"}, {"area_id": "1013", "area_name": "龙井市"}, {
        "area_id": "1014",
        "area_name": "和龙市"
      }, {"area_id": "1015", "area_name": "汪清县"}, {"area_id": "1016", "area_name": "安图县"}],
      "97": [{"area_id": "1017", "area_name": "市辖区"}, {"area_id": "1018", "area_name": "道里区"}, {
        "area_id": "1019",
        "area_name": "南岗区"
      }, {"area_id": "1020", "area_name": "道外区"}, {"area_id": "1021", "area_name": "平房区"}, {
        "area_id": "1022",
        "area_name": "松北区"
      }, {"area_id": "1023", "area_name": "香坊区"}, {"area_id": "1024", "area_name": "呼兰区"}, {
        "area_id": "1025",
        "area_name": "阿城区"
      }, {"area_id": "1026", "area_name": "双城区"}, {"area_id": "1027", "area_name": "依兰县"}, {
        "area_id": "1028",
        "area_name": "方正县"
      }, {"area_id": "1029", "area_name": "宾县"}, {"area_id": "1030", "area_name": "巴彦县"}, {
        "area_id": "1031",
        "area_name": "木兰县"
      }, {"area_id": "1032", "area_name": "通河县"}, {"area_id": "1033", "area_name": "延寿县"}, {
        "area_id": "1034",
        "area_name": "尚志市"
      }, {"area_id": "1035", "area_name": "五常市"}],
      "98": [{"area_id": "1036", "area_name": "市辖区"}, {"area_id": "1037", "area_name": "龙沙区"}, {
        "area_id": "1038",
        "area_name": "建华区"
      }, {"area_id": "1039", "area_name": "铁锋区"}, {"area_id": "1040", "area_name": "昂昂溪区"}, {
        "area_id": "1041",
        "area_name": "富拉尔基区"
      }, {"area_id": "1042", "area_name": "碾子山区"}, {"area_id": "1043", "area_name": "梅里斯达斡尔族区"}, {
        "area_id": "1044",
        "area_name": "龙江县"
      }, {"area_id": "1045", "area_name": "依安县"}, {"area_id": "1046", "area_name": "泰来县"}, {
        "area_id": "1047",
        "area_name": "甘南县"
      }, {"area_id": "1048", "area_name": "富裕县"}, {"area_id": "1049", "area_name": "克山县"}, {
        "area_id": "1050",
        "area_name": "克东县"
      }, {"area_id": "1051", "area_name": "拜泉县"}, {"area_id": "1052", "area_name": "讷河市"}],
      "99": [{"area_id": "1053", "area_name": "市辖区"}, {"area_id": "1054", "area_name": "鸡冠区"}, {
        "area_id": "1055",
        "area_name": "恒山区"
      }, {"area_id": "1056", "area_name": "滴道区"}, {"area_id": "1057", "area_name": "梨树区"}, {
        "area_id": "1058",
        "area_name": "城子河区"
      }, {"area_id": "1059", "area_name": "麻山区"}, {"area_id": "1060", "area_name": "鸡东县"}, {
        "area_id": "1061",
        "area_name": "虎林市"
      }, {"area_id": "1062", "area_name": "密山市"}],
      "100": [{"area_id": "1063", "area_name": "市辖区"}, {"area_id": "1064", "area_name": "向阳区"}, {
        "area_id": "1065",
        "area_name": "工农区"
      }, {"area_id": "1066", "area_name": "南山区"}, {"area_id": "1067", "area_name": "兴安区"}, {
        "area_id": "1068",
        "area_name": "东山区"
      }, {"area_id": "1069", "area_name": "兴山区"}, {"area_id": "1070", "area_name": "萝北县"}, {
        "area_id": "1071",
        "area_name": "绥滨县"
      }],
      "101": [{"area_id": "1072", "area_name": "市辖区"}, {"area_id": "1073", "area_name": "尖山区"}, {
        "area_id": "1074",
        "area_name": "岭东区"
      }, {"area_id": "1075", "area_name": "四方台区"}, {"area_id": "1076", "area_name": "宝山区"}, {
        "area_id": "1077",
        "area_name": "集贤县"
      }, {"area_id": "1078", "area_name": "友谊县"}, {"area_id": "1079", "area_name": "宝清县"}, {
        "area_id": "1080",
        "area_name": "饶河县"
      }],
      "102": [{"area_id": "1081", "area_name": "市辖区"}, {"area_id": "1082", "area_name": "萨尔图区"}, {
        "area_id": "1083",
        "area_name": "龙凤区"
      }, {"area_id": "1084", "area_name": "让胡路区"}, {"area_id": "1085", "area_name": "红岗区"}, {
        "area_id": "1086",
        "area_name": "大同区"
      }, {"area_id": "1087", "area_name": "肇州县"}, {"area_id": "1088", "area_name": "肇源县"}, {
        "area_id": "1089",
        "area_name": "林甸县"
      }, {"area_id": "1090", "area_name": "杜尔伯特蒙古族自治县"}],
      "103": [{"area_id": "1091", "area_name": "市辖区"}, {"area_id": "1092", "area_name": "伊春区"}, {
        "area_id": "1093",
        "area_name": "南岔区"
      }, {"area_id": "1094", "area_name": "友好区"}, {"area_id": "1095", "area_name": "西林区"}, {
        "area_id": "1096",
        "area_name": "翠峦区"
      }, {"area_id": "1097", "area_name": "新青区"}, {"area_id": "1098", "area_name": "美溪区"}, {
        "area_id": "1099",
        "area_name": "金山屯区"
      }, {"area_id": "1100", "area_name": "五营区"}, {"area_id": "1101", "area_name": "乌马河区"}, {
        "area_id": "1102",
        "area_name": "汤旺河区"
      }, {"area_id": "1103", "area_name": "带岭区"}, {"area_id": "1104", "area_name": "乌伊岭区"}, {
        "area_id": "1105",
        "area_name": "红星区"
      }, {"area_id": "1106", "area_name": "上甘岭区"}, {"area_id": "1107", "area_name": "嘉荫县"}, {
        "area_id": "1108",
        "area_name": "铁力市"
      }],
      "104": [{"area_id": "1109", "area_name": "市辖区"}, {"area_id": "1110", "area_name": "向阳区"}, {
        "area_id": "1111",
        "area_name": "前进区"
      }, {"area_id": "1112", "area_name": "东风区"}, {"area_id": "1113", "area_name": "郊区"}, {
        "area_id": "1114",
        "area_name": "桦南县"
      }, {"area_id": "1115", "area_name": "桦川县"}, {"area_id": "1116", "area_name": "汤原县"}, {
        "area_id": "1117",
        "area_name": "抚远县"
      }, {"area_id": "1118", "area_name": "同江市"}, {"area_id": "1119", "area_name": "富锦市"}],
      "105": [{"area_id": "1120", "area_name": "市辖区"}, {"area_id": "1121", "area_name": "新兴区"}, {
        "area_id": "1122",
        "area_name": "桃山区"
      }, {"area_id": "1123", "area_name": "茄子河区"}, {"area_id": "1124", "area_name": "勃利县"}],
      "106": [{"area_id": "1125", "area_name": "市辖区"}, {"area_id": "1126", "area_name": "东安区"}, {
        "area_id": "1127",
        "area_name": "阳明区"
      }, {"area_id": "1128", "area_name": "爱民区"}, {"area_id": "1129", "area_name": "西安区"}, {
        "area_id": "1130",
        "area_name": "东宁县"
      }, {"area_id": "1131", "area_name": "林口县"}, {"area_id": "1132", "area_name": "绥芬河市"}, {
        "area_id": "1133",
        "area_name": "海林市"
      }, {"area_id": "1134", "area_name": "宁安市"}, {"area_id": "1135", "area_name": "穆棱市"}],
      "107": [{"area_id": "1136", "area_name": "市辖区"}, {"area_id": "1137", "area_name": "爱辉区"}, {
        "area_id": "1138",
        "area_name": "嫩江县"
      }, {"area_id": "1139", "area_name": "逊克县"}, {"area_id": "1140", "area_name": "孙吴县"}, {
        "area_id": "1141",
        "area_name": "北安市"
      }, {"area_id": "1142", "area_name": "五大连池市"}],
      "108": [{"area_id": "1143", "area_name": "市辖区"}, {"area_id": "1144", "area_name": "北林区"}, {
        "area_id": "1145",
        "area_name": "望奎县"
      }, {"area_id": "1146", "area_name": "兰西县"}, {"area_id": "1147", "area_name": "青冈县"}, {
        "area_id": "1148",
        "area_name": "庆安县"
      }, {"area_id": "1149", "area_name": "明水县"}, {"area_id": "1150", "area_name": "绥棱县"}, {
        "area_id": "1151",
        "area_name": "安达市"
      }, {"area_id": "1152", "area_name": "肇东市"}, {"area_id": "1153", "area_name": "海伦市"}],
      "109": [{"area_id": "1154", "area_name": "呼玛县"}, {"area_id": "1155", "area_name": "塔河县"}, {
        "area_id": "1156",
        "area_name": "漠河县"
      }],
      "110": [{"area_id": "1157", "area_name": "黄浦区"}, {"area_id": "1158", "area_name": "徐汇区"}, {
        "area_id": "1159",
        "area_name": "长宁区"
      }, {"area_id": "1160", "area_name": "静安区"}, {"area_id": "1161", "area_name": "普陀区"}, {
        "area_id": "1162",
        "area_name": "闸北区"
      }, {"area_id": "1163", "area_name": "虹口区"}, {"area_id": "1164", "area_name": "杨浦区"}, {
        "area_id": "1165",
        "area_name": "闵行区"
      }, {"area_id": "1166", "area_name": "宝山区"}, {"area_id": "1167", "area_name": "嘉定区"}, {
        "area_id": "1168",
        "area_name": "浦东新区"
      }, {"area_id": "1169", "area_name": "金山区"}, {"area_id": "1170", "area_name": "松江区"}, {
        "area_id": "1171",
        "area_name": "青浦区"
      }, {"area_id": "1172", "area_name": "奉贤区"}],
      "111": [{"area_id": "1173", "area_name": "崇明县"}],
      "112": [{"area_id": "1174", "area_name": "市辖区"}, {"area_id": "1175", "area_name": "玄武区"}, {
        "area_id": "1176",
        "area_name": "秦淮区"
      }, {"area_id": "1177", "area_name": "建邺区"}, {"area_id": "1178", "area_name": "鼓楼区"}, {
        "area_id": "1179",
        "area_name": "浦口区"
      }, {"area_id": "1180", "area_name": "栖霞区"}, {"area_id": "1181", "area_name": "雨花台区"}, {
        "area_id": "1182",
        "area_name": "江宁区"
      }, {"area_id": "1183", "area_name": "六合区"}, {"area_id": "1184", "area_name": "溧水区"}, {
        "area_id": "1185",
        "area_name": "高淳区"
      }],
      "113": [{"area_id": "1186", "area_name": "市辖区"}, {"area_id": "1187", "area_name": "崇安区"}, {
        "area_id": "1188",
        "area_name": "南长区"
      }, {"area_id": "1189", "area_name": "北塘区"}, {"area_id": "1190", "area_name": "锡山区"}, {
        "area_id": "1191",
        "area_name": "惠山区"
      }, {"area_id": "1192", "area_name": "滨湖区"}, {"area_id": "1193", "area_name": "江阴市"}, {
        "area_id": "1194",
        "area_name": "宜兴市"
      }],
      "114": [{"area_id": "1195", "area_name": "市辖区"}, {"area_id": "1196", "area_name": "鼓楼区"}, {
        "area_id": "1197",
        "area_name": "云龙区"
      }, {"area_id": "1198", "area_name": "贾汪区"}, {"area_id": "1199", "area_name": "泉山区"}, {
        "area_id": "1200",
        "area_name": "铜山区"
      }, {"area_id": "1201", "area_name": "丰县"}, {"area_id": "1202", "area_name": "沛县"}, {
        "area_id": "1203",
        "area_name": "睢宁县"
      }, {"area_id": "1204", "area_name": "新沂市"}, {"area_id": "1205", "area_name": "邳州市"}],
      "115": [{"area_id": "1206", "area_name": "市辖区"}, {"area_id": "1207", "area_name": "天宁区"}, {
        "area_id": "1208",
        "area_name": "钟楼区"
      }, {"area_id": "1209", "area_name": "新北区"}, {"area_id": "1210", "area_name": "武进区"}, {
        "area_id": "1211",
        "area_name": "金坛区"
      }, {"area_id": "1212", "area_name": "溧阳市"}],
      "116": [{"area_id": "1213", "area_name": "市辖区"}, {"area_id": "1214", "area_name": "虎丘区"}, {
        "area_id": "1215",
        "area_name": "吴中区"
      }, {"area_id": "1216", "area_name": "相城区"}, {"area_id": "1217", "area_name": "姑苏区"}, {
        "area_id": "1218",
        "area_name": "吴江区"
      }, {"area_id": "1219", "area_name": "常熟市"}, {"area_id": "1220", "area_name": "张家港市"}, {
        "area_id": "1221",
        "area_name": "昆山市"
      }, {"area_id": "1222", "area_name": "太仓市"}],
      "117": [{"area_id": "1223", "area_name": "市辖区"}, {"area_id": "1224", "area_name": "崇川区"}, {
        "area_id": "1225",
        "area_name": "港闸区"
      }, {"area_id": "1226", "area_name": "通州区"}, {"area_id": "1227", "area_name": "海安县"}, {
        "area_id": "1228",
        "area_name": "如东县"
      }, {"area_id": "1229", "area_name": "启东市"}, {"area_id": "1230", "area_name": "如皋市"}, {
        "area_id": "1231",
        "area_name": "海门市"
      }],
      "118": [{"area_id": "1232", "area_name": "市辖区"}, {"area_id": "1233", "area_name": "连云区"}, {
        "area_id": "1234",
        "area_name": "海州区"
      }, {"area_id": "1235", "area_name": "赣榆区"}, {"area_id": "1236", "area_name": "东海县"}, {
        "area_id": "1237",
        "area_name": "灌云县"
      }, {"area_id": "1238", "area_name": "灌南县"}],
      "119": [{"area_id": "1239", "area_name": "市辖区"}, {"area_id": "1240", "area_name": "清河区"}, {
        "area_id": "1241",
        "area_name": "淮安区"
      }, {"area_id": "1242", "area_name": "淮阴区"}, {"area_id": "1243", "area_name": "清浦区"}, {
        "area_id": "1244",
        "area_name": "涟水县"
      }, {"area_id": "1245", "area_name": "洪泽县"}, {"area_id": "1246", "area_name": "盱眙县"}, {
        "area_id": "1247",
        "area_name": "金湖县"
      }],
      "120": [{"area_id": "1248", "area_name": "市辖区"}, {"area_id": "1249", "area_name": "亭湖区"}, {
        "area_id": "1250",
        "area_name": "盐都区"
      }, {"area_id": "1251", "area_name": "大丰区"}, {"area_id": "1252", "area_name": "响水县"}, {
        "area_id": "1253",
        "area_name": "滨海县"
      }, {"area_id": "1254", "area_name": "阜宁县"}, {"area_id": "1255", "area_name": "射阳县"}, {
        "area_id": "1256",
        "area_name": "建湖县"
      }, {"area_id": "1257", "area_name": "东台市"}],
      "121": [{"area_id": "1258", "area_name": "市辖区"}, {"area_id": "1259", "area_name": "广陵区"}, {
        "area_id": "1260",
        "area_name": "邗江区"
      }, {"area_id": "1261", "area_name": "江都区"}, {"area_id": "1262", "area_name": "宝应县"}, {
        "area_id": "1263",
        "area_name": "仪征市"
      }, {"area_id": "1264", "area_name": "高邮市"}],
      "122": [{"area_id": "1265", "area_name": "市辖区"}, {"area_id": "1266", "area_name": "京口区"}, {
        "area_id": "1267",
        "area_name": "润州区"
      }, {"area_id": "1268", "area_name": "丹徒区"}, {"area_id": "1269", "area_name": "丹阳市"}, {
        "area_id": "1270",
        "area_name": "扬中市"
      }, {"area_id": "1271", "area_name": "句容市"}],
      "123": [{"area_id": "1272", "area_name": "市辖区"}, {"area_id": "1273", "area_name": "海陵区"}, {
        "area_id": "1274",
        "area_name": "高港区"
      }, {"area_id": "1275", "area_name": "姜堰区"}, {"area_id": "1276", "area_name": "兴化市"}, {
        "area_id": "1277",
        "area_name": "靖江市"
      }, {"area_id": "1278", "area_name": "泰兴市"}],
      "124": [{"area_id": "1279", "area_name": "市辖区"}, {"area_id": "1280", "area_name": "宿城区"}, {
        "area_id": "1281",
        "area_name": "宿豫区"
      }, {"area_id": "1282", "area_name": "沭阳县"}, {"area_id": "1283", "area_name": "泗阳县"}, {
        "area_id": "1284",
        "area_name": "泗洪县"
      }],
      "125": [{"area_id": "1285", "area_name": "市辖区"}, {"area_id": "1286", "area_name": "上城区"}, {
        "area_id": "1287",
        "area_name": "下城区"
      }, {"area_id": "1288", "area_name": "江干区"}, {"area_id": "1289", "area_name": "拱墅区"}, {
        "area_id": "1290",
        "area_name": "西湖区"
      }, {"area_id": "1291", "area_name": "滨江区"}, {"area_id": "1292", "area_name": "萧山区"}, {
        "area_id": "1293",
        "area_name": "余杭区"
      }, {"area_id": "1294", "area_name": "富阳区"}, {"area_id": "1295", "area_name": "桐庐县"}, {
        "area_id": "1296",
        "area_name": "淳安县"
      }, {"area_id": "1297", "area_name": "建德市"}, {"area_id": "1298", "area_name": "临安市"}],
      "126": [{"area_id": "1299", "area_name": "市辖区"}, {"area_id": "1300", "area_name": "海曙区"}, {
        "area_id": "1301",
        "area_name": "江东区"
      }, {"area_id": "1302", "area_name": "江北区"}, {"area_id": "1303", "area_name": "北仑区"}, {
        "area_id": "1304",
        "area_name": "镇海区"
      }, {"area_id": "1305", "area_name": "鄞州区"}, {"area_id": "1306", "area_name": "象山县"}, {
        "area_id": "1307",
        "area_name": "宁海县"
      }, {"area_id": "1308", "area_name": "余姚市"}, {"area_id": "1309", "area_name": "慈溪市"}, {
        "area_id": "1310",
        "area_name": "奉化市"
      }],
      "127": [{"area_id": "1311", "area_name": "市辖区"}, {"area_id": "1312", "area_name": "鹿城区"}, {
        "area_id": "1313",
        "area_name": "龙湾区"
      }, {"area_id": "1314", "area_name": "瓯海区"}, {"area_id": "1315", "area_name": "洞头区"}, {
        "area_id": "1316",
        "area_name": "永嘉县"
      }, {"area_id": "1317", "area_name": "平阳县"}, {"area_id": "1318", "area_name": "苍南县"}, {
        "area_id": "1319",
        "area_name": "文成县"
      }, {"area_id": "1320", "area_name": "泰顺县"}, {"area_id": "1321", "area_name": "瑞安市"}, {
        "area_id": "1322",
        "area_name": "乐清市"
      }],
      "128": [{"area_id": "1323", "area_name": "市辖区"}, {"area_id": "1324", "area_name": "南湖区"}, {
        "area_id": "1325",
        "area_name": "秀洲区"
      }, {"area_id": "1326", "area_name": "嘉善县"}, {"area_id": "1327", "area_name": "海盐县"}, {
        "area_id": "1328",
        "area_name": "海宁市"
      }, {"area_id": "1329", "area_name": "平湖市"}, {"area_id": "1330", "area_name": "桐乡市"}],
      "129": [{"area_id": "1331", "area_name": "市辖区"}, {"area_id": "1332", "area_name": "吴兴区"}, {
        "area_id": "1333",
        "area_name": "南浔区"
      }, {"area_id": "1334", "area_name": "德清县"}, {"area_id": "1335", "area_name": "长兴县"}, {
        "area_id": "1336",
        "area_name": "安吉县"
      }],
      "130": [{"area_id": "1337", "area_name": "市辖区"}, {"area_id": "1338", "area_name": "越城区"}, {
        "area_id": "1339",
        "area_name": "柯桥区"
      }, {"area_id": "1340", "area_name": "上虞区"}, {"area_id": "1341", "area_name": "新昌县"}, {
        "area_id": "1342",
        "area_name": "诸暨市"
      }, {"area_id": "1343", "area_name": "嵊州市"}],
      "131": [{"area_id": "1344", "area_name": "市辖区"}, {"area_id": "1345", "area_name": "婺城区"}, {
        "area_id": "1346",
        "area_name": "金东区"
      }, {"area_id": "1347", "area_name": "武义县"}, {"area_id": "1348", "area_name": "浦江县"}, {
        "area_id": "1349",
        "area_name": "磐安县"
      }, {"area_id": "1350", "area_name": "兰溪市"}, {"area_id": "1351", "area_name": "义乌市"}, {
        "area_id": "1352",
        "area_name": "东阳市"
      }, {"area_id": "1353", "area_name": "永康市"}],
      "132": [{"area_id": "1354", "area_name": "市辖区"}, {"area_id": "1355", "area_name": "柯城区"}, {
        "area_id": "1356",
        "area_name": "衢江区"
      }, {"area_id": "1357", "area_name": "常山县"}, {"area_id": "1358", "area_name": "开化县"}, {
        "area_id": "1359",
        "area_name": "龙游县"
      }, {"area_id": "1360", "area_name": "江山市"}],
      "133": [{"area_id": "1361", "area_name": "市辖区"}, {"area_id": "1362", "area_name": "定海区"}, {
        "area_id": "1363",
        "area_name": "普陀区"
      }, {"area_id": "1364", "area_name": "岱山县"}, {"area_id": "1365", "area_name": "嵊泗县"}],
      "134": [{"area_id": "1366", "area_name": "市辖区"}, {"area_id": "1367", "area_name": "椒江区"}, {
        "area_id": "1368",
        "area_name": "黄岩区"
      }, {"area_id": "1369", "area_name": "路桥区"}, {"area_id": "1370", "area_name": "玉环县"}, {
        "area_id": "1371",
        "area_name": "三门县"
      }, {"area_id": "1372", "area_name": "天台县"}, {"area_id": "1373", "area_name": "仙居县"}, {
        "area_id": "1374",
        "area_name": "温岭市"
      }, {"area_id": "1375", "area_name": "临海市"}],
      "135": [{"area_id": "1376", "area_name": "市辖区"}, {"area_id": "1377", "area_name": "莲都区"}, {
        "area_id": "1378",
        "area_name": "青田县"
      }, {"area_id": "1379", "area_name": "缙云县"}, {"area_id": "1380", "area_name": "遂昌县"}, {
        "area_id": "1381",
        "area_name": "松阳县"
      }, {"area_id": "1382", "area_name": "云和县"}, {"area_id": "1383", "area_name": "庆元县"}, {
        "area_id": "1384",
        "area_name": "景宁畲族自治县"
      }, {"area_id": "1385", "area_name": "龙泉市"}],
      "136": [{"area_id": "1386", "area_name": "市辖区"}, {"area_id": "1387", "area_name": "瑶海区"}, {
        "area_id": "1388",
        "area_name": "庐阳区"
      }, {"area_id": "1389", "area_name": "蜀山区"}, {"area_id": "1390", "area_name": "包河区"}, {
        "area_id": "1391",
        "area_name": "长丰县"
      }, {"area_id": "1392", "area_name": "肥东县"}, {"area_id": "1393", "area_name": "肥西县"}, {
        "area_id": "1394",
        "area_name": "庐江县"
      }, {"area_id": "1395", "area_name": "巢湖市"}],
      "137": [{"area_id": "1396", "area_name": "市辖区"}, {"area_id": "1397", "area_name": "镜湖区"}, {
        "area_id": "1398",
        "area_name": "弋江区"
      }, {"area_id": "1399", "area_name": "鸠江区"}, {"area_id": "1400", "area_name": "三山区"}, {
        "area_id": "1401",
        "area_name": "芜湖县"
      }, {"area_id": "1402", "area_name": "繁昌县"}, {"area_id": "1403", "area_name": "南陵县"}, {
        "area_id": "1404",
        "area_name": "无为县"
      }],
      "138": [{"area_id": "1405", "area_name": "市辖区"}, {"area_id": "1406", "area_name": "龙子湖区"}, {
        "area_id": "1407",
        "area_name": "蚌山区"
      }, {"area_id": "1408", "area_name": "禹会区"}, {"area_id": "1409", "area_name": "淮上区"}, {
        "area_id": "1410",
        "area_name": "怀远县"
      }, {"area_id": "1411", "area_name": "五河县"}, {"area_id": "1412", "area_name": "固镇县"}],
      "139": [{"area_id": "1413", "area_name": "市辖区"}, {"area_id": "1414", "area_name": "大通区"}, {
        "area_id": "1415",
        "area_name": "田家庵区"
      }, {"area_id": "1416", "area_name": "谢家集区"}, {"area_id": "1417", "area_name": "八公山区"}, {
        "area_id": "1418",
        "area_name": "潘集区"
      }, {"area_id": "1419", "area_name": "凤台县"}],
      "140": [{"area_id": "1420", "area_name": "市辖区"}, {"area_id": "1421", "area_name": "花山区"}, {
        "area_id": "1422",
        "area_name": "雨山区"
      }, {"area_id": "1423", "area_name": "博望区"}, {"area_id": "1424", "area_name": "当涂县"}, {
        "area_id": "1425",
        "area_name": "含山县"
      }, {"area_id": "1426", "area_name": "和县"}],
      "141": [{"area_id": "1427", "area_name": "市辖区"}, {"area_id": "1428", "area_name": "杜集区"}, {
        "area_id": "1429",
        "area_name": "相山区"
      }, {"area_id": "1430", "area_name": "烈山区"}, {"area_id": "1431", "area_name": "濉溪县"}],
      "142": [{"area_id": "1432", "area_name": "市辖区"}, {"area_id": "1433", "area_name": "铜官山区"}, {
        "area_id": "1434",
        "area_name": "狮子山区"
      }, {"area_id": "1435", "area_name": "郊区"}, {"area_id": "1436", "area_name": "铜陵县"}],
      "143": [{"area_id": "1437", "area_name": "市辖区"}, {"area_id": "1438", "area_name": "迎江区"}, {
        "area_id": "1439",
        "area_name": "大观区"
      }, {"area_id": "1440", "area_name": "宜秀区"}, {"area_id": "1441", "area_name": "怀宁县"}, {
        "area_id": "1442",
        "area_name": "枞阳县"
      }, {"area_id": "1443", "area_name": "潜山县"}, {"area_id": "1444", "area_name": "太湖县"}, {
        "area_id": "1445",
        "area_name": "宿松县"
      }, {"area_id": "1446", "area_name": "望江县"}, {"area_id": "1447", "area_name": "岳西县"}, {
        "area_id": "1448",
        "area_name": "桐城市"
      }],
      "144": [{"area_id": "1449", "area_name": "市辖区"}, {"area_id": "1450", "area_name": "屯溪区"}, {
        "area_id": "1451",
        "area_name": "黄山区"
      }, {"area_id": "1452", "area_name": "徽州区"}, {"area_id": "1453", "area_name": "歙县"}, {
        "area_id": "1454",
        "area_name": "休宁县"
      }, {"area_id": "1455", "area_name": "黟县"}, {"area_id": "1456", "area_name": "祁门县"}],
      "145": [{"area_id": "1457", "area_name": "市辖区"}, {"area_id": "1458", "area_name": "琅琊区"}, {
        "area_id": "1459",
        "area_name": "南谯区"
      }, {"area_id": "1460", "area_name": "来安县"}, {"area_id": "1461", "area_name": "全椒县"}, {
        "area_id": "1462",
        "area_name": "定远县"
      }, {"area_id": "1463", "area_name": "凤阳县"}, {"area_id": "1464", "area_name": "天长市"}, {
        "area_id": "1465",
        "area_name": "明光市"
      }],
      "146": [{"area_id": "1466", "area_name": "市辖区"}, {"area_id": "1467", "area_name": "颍州区"}, {
        "area_id": "1468",
        "area_name": "颍东区"
      }, {"area_id": "1469", "area_name": "颍泉区"}, {"area_id": "1470", "area_name": "临泉县"}, {
        "area_id": "1471",
        "area_name": "太和县"
      }, {"area_id": "1472", "area_name": "阜南县"}, {"area_id": "1473", "area_name": "颍上县"}, {
        "area_id": "1474",
        "area_name": "界首市"
      }],
      "147": [{"area_id": "1475", "area_name": "市辖区"}, {"area_id": "1476", "area_name": "埇桥区"}, {
        "area_id": "1477",
        "area_name": "砀山县"
      }, {"area_id": "1478", "area_name": "萧县"}, {"area_id": "1479", "area_name": "灵璧县"}, {
        "area_id": "1480",
        "area_name": "泗县"
      }],
      "148": [{"area_id": "1481", "area_name": "市辖区"}, {"area_id": "1482", "area_name": "金安区"}, {
        "area_id": "1483",
        "area_name": "裕安区"
      }, {"area_id": "1484", "area_name": "寿县"}, {"area_id": "1485", "area_name": "霍邱县"}, {
        "area_id": "1486",
        "area_name": "舒城县"
      }, {"area_id": "1487", "area_name": "金寨县"}, {"area_id": "1488", "area_name": "霍山县"}],
      "149": [{"area_id": "1489", "area_name": "市辖区"}, {"area_id": "1490", "area_name": "谯城区"}, {
        "area_id": "1491",
        "area_name": "涡阳县"
      }, {"area_id": "1492", "area_name": "蒙城县"}, {"area_id": "1493", "area_name": "利辛县"}],
      "150": [{"area_id": "1494", "area_name": "市辖区"}, {"area_id": "1495", "area_name": "贵池区"}, {
        "area_id": "1496",
        "area_name": "东至县"
      }, {"area_id": "1497", "area_name": "石台县"}, {"area_id": "1498", "area_name": "青阳县"}],
      "151": [{"area_id": "1499", "area_name": "市辖区"}, {"area_id": "1500", "area_name": "宣州区"}, {
        "area_id": "1501",
        "area_name": "郎溪县"
      }, {"area_id": "1502", "area_name": "广德县"}, {"area_id": "1503", "area_name": "泾县"}, {
        "area_id": "1504",
        "area_name": "绩溪县"
      }, {"area_id": "1505", "area_name": "旌德县"}, {"area_id": "1506", "area_name": "宁国市"}],
      "152": [{"area_id": "1507", "area_name": "市辖区"}, {"area_id": "1508", "area_name": "鼓楼区"}, {
        "area_id": "1509",
        "area_name": "台江区"
      }, {"area_id": "1510", "area_name": "仓山区"}, {"area_id": "1511", "area_name": "马尾区"}, {
        "area_id": "1512",
        "area_name": "晋安区"
      }, {"area_id": "1513", "area_name": "闽侯县"}, {"area_id": "1514", "area_name": "连江县"}, {
        "area_id": "1515",
        "area_name": "罗源县"
      }, {"area_id": "1516", "area_name": "闽清县"}, {"area_id": "1517", "area_name": "永泰县"}, {
        "area_id": "1518",
        "area_name": "平潭县"
      }, {"area_id": "1519", "area_name": "福清市"}, {"area_id": "1520", "area_name": "长乐市"}],
      "153": [{"area_id": "1521", "area_name": "市辖区"}, {"area_id": "1522", "area_name": "思明区"}, {
        "area_id": "1523",
        "area_name": "海沧区"
      }, {"area_id": "1524", "area_name": "湖里区"}, {"area_id": "1525", "area_name": "集美区"}, {
        "area_id": "1526",
        "area_name": "同安区"
      }, {"area_id": "1527", "area_name": "翔安区"}],
      "154": [{"area_id": "1528", "area_name": "市辖区"}, {"area_id": "1529", "area_name": "城厢区"}, {
        "area_id": "1530",
        "area_name": "涵江区"
      }, {"area_id": "1531", "area_name": "荔城区"}, {"area_id": "1532", "area_name": "秀屿区"}, {
        "area_id": "1533",
        "area_name": "仙游县"
      }],
      "155": [{"area_id": "1534", "area_name": "市辖区"}, {"area_id": "1535", "area_name": "梅列区"}, {
        "area_id": "1536",
        "area_name": "三元区"
      }, {"area_id": "1537", "area_name": "明溪县"}, {"area_id": "1538", "area_name": "清流县"}, {
        "area_id": "1539",
        "area_name": "宁化县"
      }, {"area_id": "1540", "area_name": "大田县"}, {"area_id": "1541", "area_name": "尤溪县"}, {
        "area_id": "1542",
        "area_name": "沙县"
      }, {"area_id": "1543", "area_name": "将乐县"}, {"area_id": "1544", "area_name": "泰宁县"}, {
        "area_id": "1545",
        "area_name": "建宁县"
      }, {"area_id": "1546", "area_name": "永安市"}],
      "156": [{"area_id": "1547", "area_name": "市辖区"}, {"area_id": "1548", "area_name": "鲤城区"}, {
        "area_id": "1549",
        "area_name": "丰泽区"
      }, {"area_id": "1550", "area_name": "洛江区"}, {"area_id": "1551", "area_name": "泉港区"}, {
        "area_id": "1552",
        "area_name": "惠安县"
      }, {"area_id": "1553", "area_name": "安溪县"}, {"area_id": "1554", "area_name": "永春县"}, {
        "area_id": "1555",
        "area_name": "德化县"
      }, {"area_id": "1556", "area_name": "金门县"}, {"area_id": "1557", "area_name": "石狮市"}, {
        "area_id": "1558",
        "area_name": "晋江市"
      }, {"area_id": "1559", "area_name": "南安市"}],
      "157": [{"area_id": "1560", "area_name": "市辖区"}, {"area_id": "1561", "area_name": "芗城区"}, {
        "area_id": "1562",
        "area_name": "龙文区"
      }, {"area_id": "1563", "area_name": "云霄县"}, {"area_id": "1564", "area_name": "漳浦县"}, {
        "area_id": "1565",
        "area_name": "诏安县"
      }, {"area_id": "1566", "area_name": "长泰县"}, {"area_id": "1567", "area_name": "东山县"}, {
        "area_id": "1568",
        "area_name": "南靖县"
      }, {"area_id": "1569", "area_name": "平和县"}, {"area_id": "1570", "area_name": "华安县"}, {
        "area_id": "1571",
        "area_name": "龙海市"
      }],
      "158": [{"area_id": "1572", "area_name": "市辖区"}, {"area_id": "1573", "area_name": "延平区"}, {
        "area_id": "1574",
        "area_name": "建阳区"
      }, {"area_id": "1575", "area_name": "顺昌县"}, {"area_id": "1576", "area_name": "浦城县"}, {
        "area_id": "1577",
        "area_name": "光泽县"
      }, {"area_id": "1578", "area_name": "松溪县"}, {"area_id": "1579", "area_name": "政和县"}, {
        "area_id": "1580",
        "area_name": "邵武市"
      }, {"area_id": "1581", "area_name": "武夷山市"}, {"area_id": "1582", "area_name": "建瓯市"}],
      "159": [{"area_id": "1583", "area_name": "市辖区"}, {"area_id": "1584", "area_name": "新罗区"}, {
        "area_id": "1585",
        "area_name": "永定区"
      }, {"area_id": "1586", "area_name": "长汀县"}, {"area_id": "1587", "area_name": "上杭县"}, {
        "area_id": "1588",
        "area_name": "武平县"
      }, {"area_id": "1589", "area_name": "连城县"}, {"area_id": "1590", "area_name": "漳平市"}],
      "160": [{"area_id": "1591", "area_name": "市辖区"}, {"area_id": "1592", "area_name": "蕉城区"}, {
        "area_id": "1593",
        "area_name": "霞浦县"
      }, {"area_id": "1594", "area_name": "古田县"}, {"area_id": "1595", "area_name": "屏南县"}, {
        "area_id": "1596",
        "area_name": "寿宁县"
      }, {"area_id": "1597", "area_name": "周宁县"}, {"area_id": "1598", "area_name": "柘荣县"}, {
        "area_id": "1599",
        "area_name": "福安市"
      }, {"area_id": "1600", "area_name": "福鼎市"}],
      "161": [{"area_id": "1601", "area_name": "市辖区"}, {"area_id": "1602", "area_name": "东湖区"}, {
        "area_id": "1603",
        "area_name": "西湖区"
      }, {"area_id": "1604", "area_name": "青云谱区"}, {"area_id": "1605", "area_name": "湾里区"}, {
        "area_id": "1606",
        "area_name": "青山湖区"
      }, {"area_id": "1607", "area_name": "新建区"}, {"area_id": "1608", "area_name": "南昌县"}, {
        "area_id": "1609",
        "area_name": "安义县"
      }, {"area_id": "1610", "area_name": "进贤县"}],
      "162": [{"area_id": "1611", "area_name": "市辖区"}, {"area_id": "1612", "area_name": "昌江区"}, {
        "area_id": "1613",
        "area_name": "珠山区"
      }, {"area_id": "1614", "area_name": "浮梁县"}, {"area_id": "1615", "area_name": "乐平市"}],
      "163": [{"area_id": "1616", "area_name": "市辖区"}, {"area_id": "1617", "area_name": "安源区"}, {
        "area_id": "1618",
        "area_name": "湘东区"
      }, {"area_id": "1619", "area_name": "莲花县"}, {"area_id": "1620", "area_name": "上栗县"}, {
        "area_id": "1621",
        "area_name": "芦溪县"
      }],
      "164": [{"area_id": "1622", "area_name": "市辖区"}, {"area_id": "1623", "area_name": "庐山区"}, {
        "area_id": "1624",
        "area_name": "浔阳区"
      }, {"area_id": "1625", "area_name": "九江县"}, {"area_id": "1626", "area_name": "武宁县"}, {
        "area_id": "1627",
        "area_name": "修水县"
      }, {"area_id": "1628", "area_name": "永修县"}, {"area_id": "1629", "area_name": "德安县"}, {
        "area_id": "1630",
        "area_name": "星子县"
      }, {"area_id": "1631", "area_name": "都昌县"}, {"area_id": "1632", "area_name": "湖口县"}, {
        "area_id": "1633",
        "area_name": "彭泽县"
      }, {"area_id": "1634", "area_name": "瑞昌市"}, {"area_id": "1635", "area_name": "共青城市"}],
      "165": [{"area_id": "1636", "area_name": "市辖区"}, {"area_id": "1637", "area_name": "渝水区"}, {
        "area_id": "1638",
        "area_name": "分宜县"
      }],
      "166": [{"area_id": "1639", "area_name": "市辖区"}, {"area_id": "1640", "area_name": "月湖区"}, {
        "area_id": "1641",
        "area_name": "余江县"
      }, {"area_id": "1642", "area_name": "贵溪市"}],
      "167": [{"area_id": "1643", "area_name": "市辖区"}, {"area_id": "1644", "area_name": "章贡区"}, {
        "area_id": "1645",
        "area_name": "南康区"
      }, {"area_id": "1646", "area_name": "赣县"}, {"area_id": "1647", "area_name": "信丰县"}, {
        "area_id": "1648",
        "area_name": "大余县"
      }, {"area_id": "1649", "area_name": "上犹县"}, {"area_id": "1650", "area_name": "崇义县"}, {
        "area_id": "1651",
        "area_name": "安远县"
      }, {"area_id": "1652", "area_name": "龙南县"}, {"area_id": "1653", "area_name": "定南县"}, {
        "area_id": "1654",
        "area_name": "全南县"
      }, {"area_id": "1655", "area_name": "宁都县"}, {"area_id": "1656", "area_name": "于都县"}, {
        "area_id": "1657",
        "area_name": "兴国县"
      }, {"area_id": "1658", "area_name": "会昌县"}, {"area_id": "1659", "area_name": "寻乌县"}, {
        "area_id": "1660",
        "area_name": "石城县"
      }, {"area_id": "1661", "area_name": "瑞金市"}],
      "168": [{"area_id": "1662", "area_name": "市辖区"}, {"area_id": "1663", "area_name": "吉州区"}, {
        "area_id": "1664",
        "area_name": "青原区"
      }, {"area_id": "1665", "area_name": "吉安县"}, {"area_id": "1666", "area_name": "吉水县"}, {
        "area_id": "1667",
        "area_name": "峡江县"
      }, {"area_id": "1668", "area_name": "新干县"}, {"area_id": "1669", "area_name": "永丰县"}, {
        "area_id": "1670",
        "area_name": "泰和县"
      }, {"area_id": "1671", "area_name": "遂川县"}, {"area_id": "1672", "area_name": "万安县"}, {
        "area_id": "1673",
        "area_name": "安福县"
      }, {"area_id": "1674", "area_name": "永新县"}, {"area_id": "1675", "area_name": "井冈山市"}],
      "169": [{"area_id": "1676", "area_name": "市辖区"}, {"area_id": "1677", "area_name": "袁州区"}, {
        "area_id": "1678",
        "area_name": "奉新县"
      }, {"area_id": "1679", "area_name": "万载县"}, {"area_id": "1680", "area_name": "上高县"}, {
        "area_id": "1681",
        "area_name": "宜丰县"
      }, {"area_id": "1682", "area_name": "靖安县"}, {"area_id": "1683", "area_name": "铜鼓县"}, {
        "area_id": "1684",
        "area_name": "丰城市"
      }, {"area_id": "1685", "area_name": "樟树市"}, {"area_id": "1686", "area_name": "高安市"}],
      "170": [{"area_id": "1687", "area_name": "市辖区"}, {"area_id": "1688", "area_name": "临川区"}, {
        "area_id": "1689",
        "area_name": "南城县"
      }, {"area_id": "1690", "area_name": "黎川县"}, {"area_id": "1691", "area_name": "南丰县"}, {
        "area_id": "1692",
        "area_name": "崇仁县"
      }, {"area_id": "1693", "area_name": "乐安县"}, {"area_id": "1694", "area_name": "宜黄县"}, {
        "area_id": "1695",
        "area_name": "金溪县"
      }, {"area_id": "1696", "area_name": "资溪县"}, {"area_id": "1697", "area_name": "东乡县"}, {
        "area_id": "1698",
        "area_name": "广昌县"
      }],
      "171": [{"area_id": "1699", "area_name": "市辖区"}, {"area_id": "1700", "area_name": "信州区"}, {
        "area_id": "1701",
        "area_name": "广丰区"
      }, {"area_id": "1702", "area_name": "上饶县"}, {"area_id": "1703", "area_name": "玉山县"}, {
        "area_id": "1704",
        "area_name": "铅山县"
      }, {"area_id": "1705", "area_name": "横峰县"}, {"area_id": "1706", "area_name": "弋阳县"}, {
        "area_id": "1707",
        "area_name": "余干县"
      }, {"area_id": "1708", "area_name": "鄱阳县"}, {"area_id": "1709", "area_name": "万年县"}, {
        "area_id": "1710",
        "area_name": "婺源县"
      }, {"area_id": "1711", "area_name": "德兴市"}],
      "172": [{"area_id": "1712", "area_name": "市辖区"}, {"area_id": "1713", "area_name": "历下区"}, {
        "area_id": "1714",
        "area_name": "市中区"
      }, {"area_id": "1715", "area_name": "槐荫区"}, {"area_id": "1716", "area_name": "天桥区"}, {
        "area_id": "1717",
        "area_name": "历城区"
      }, {"area_id": "1718", "area_name": "长清区"}, {"area_id": "1719", "area_name": "平阴县"}, {
        "area_id": "1720",
        "area_name": "济阳县"
      }, {"area_id": "1721", "area_name": "商河县"}, {"area_id": "1722", "area_name": "章丘市"}],
      "173": [{"area_id": "1723", "area_name": "市辖区"}, {"area_id": "1724", "area_name": "市南区"}, {
        "area_id": "1725",
        "area_name": "市北区"
      }, {"area_id": "1726", "area_name": "黄岛区"}, {"area_id": "1727", "area_name": "崂山区"}, {
        "area_id": "1728",
        "area_name": "李沧区"
      }, {"area_id": "1729", "area_name": "城阳区"}, {"area_id": "1730", "area_name": "胶州市"}, {
        "area_id": "1731",
        "area_name": "即墨市"
      }, {"area_id": "1732", "area_name": "平度市"}, {"area_id": "1733", "area_name": "莱西市"}],
      "174": [{"area_id": "1734", "area_name": "市辖区"}, {"area_id": "1735", "area_name": "淄川区"}, {
        "area_id": "1736",
        "area_name": "张店区"
      }, {"area_id": "1737", "area_name": "博山区"}, {"area_id": "1738", "area_name": "临淄区"}, {
        "area_id": "1739",
        "area_name": "周村区"
      }, {"area_id": "1740", "area_name": "桓台县"}, {"area_id": "1741", "area_name": "高青县"}, {
        "area_id": "1742",
        "area_name": "沂源县"
      }],
      "175": [{"area_id": "1743", "area_name": "市辖区"}, {"area_id": "1744", "area_name": "市中区"}, {
        "area_id": "1745",
        "area_name": "薛城区"
      }, {"area_id": "1746", "area_name": "峄城区"}, {"area_id": "1747", "area_name": "台儿庄区"}, {
        "area_id": "1748",
        "area_name": "山亭区"
      }, {"area_id": "1749", "area_name": "滕州市"}],
      "176": [{"area_id": "1750", "area_name": "市辖区"}, {"area_id": "1751", "area_name": "东营区"}, {
        "area_id": "1752",
        "area_name": "河口区"
      }, {"area_id": "1753", "area_name": "垦利县"}, {"area_id": "1754", "area_name": "利津县"}, {
        "area_id": "1755",
        "area_name": "广饶县"
      }],
      "177": [{"area_id": "1756", "area_name": "市辖区"}, {"area_id": "1757", "area_name": "芝罘区"}, {
        "area_id": "1758",
        "area_name": "福山区"
      }, {"area_id": "1759", "area_name": "牟平区"}, {"area_id": "1760", "area_name": "莱山区"}, {
        "area_id": "1761",
        "area_name": "长岛县"
      }, {"area_id": "1762", "area_name": "龙口市"}, {"area_id": "1763", "area_name": "莱阳市"}, {
        "area_id": "1764",
        "area_name": "莱州市"
      }, {"area_id": "1765", "area_name": "蓬莱市"}, {"area_id": "1766", "area_name": "招远市"}, {
        "area_id": "1767",
        "area_name": "栖霞市"
      }, {"area_id": "1768", "area_name": "海阳市"}],
      "178": [{"area_id": "1769", "area_name": "市辖区"}, {"area_id": "1770", "area_name": "潍城区"}, {
        "area_id": "1771",
        "area_name": "寒亭区"
      }, {"area_id": "1772", "area_name": "坊子区"}, {"area_id": "1773", "area_name": "奎文区"}, {
        "area_id": "1774",
        "area_name": "临朐县"
      }, {"area_id": "1775", "area_name": "昌乐县"}, {"area_id": "1776", "area_name": "青州市"}, {
        "area_id": "1777",
        "area_name": "诸城市"
      }, {"area_id": "1778", "area_name": "寿光市"}, {"area_id": "1779", "area_name": "安丘市"}, {
        "area_id": "1780",
        "area_name": "高密市"
      }, {"area_id": "1781", "area_name": "昌邑市"}],
      "179": [{"area_id": "1782", "area_name": "市辖区"}, {"area_id": "1783", "area_name": "任城区"}, {
        "area_id": "1784",
        "area_name": "兖州区"
      }, {"area_id": "1785", "area_name": "微山县"}, {"area_id": "1786", "area_name": "鱼台县"}, {
        "area_id": "1787",
        "area_name": "金乡县"
      }, {"area_id": "1788", "area_name": "嘉祥县"}, {"area_id": "1789", "area_name": "汶上县"}, {
        "area_id": "1790",
        "area_name": "泗水县"
      }, {"area_id": "1791", "area_name": "梁山县"}, {"area_id": "1792", "area_name": "曲阜市"}, {
        "area_id": "1793",
        "area_name": "邹城市"
      }],
      "180": [{"area_id": "1794", "area_name": "市辖区"}, {"area_id": "1795", "area_name": "泰山区"}, {
        "area_id": "1796",
        "area_name": "岱岳区"
      }, {"area_id": "1797", "area_name": "宁阳县"}, {"area_id": "1798", "area_name": "东平县"}, {
        "area_id": "1799",
        "area_name": "新泰市"
      }, {"area_id": "1800", "area_name": "肥城市"}],
      "181": [{"area_id": "1801", "area_name": "市辖区"}, {"area_id": "1802", "area_name": "环翠区"}, {
        "area_id": "1803",
        "area_name": "文登区"
      }, {"area_id": "1804", "area_name": "荣成市"}, {"area_id": "1805", "area_name": "乳山市"}],
      "182": [{"area_id": "1806", "area_name": "市辖区"}, {"area_id": "1807", "area_name": "东港区"}, {
        "area_id": "1808",
        "area_name": "岚山区"
      }, {"area_id": "1809", "area_name": "五莲县"}, {"area_id": "1810", "area_name": "莒县"}],
      "183": [{"area_id": "1811", "area_name": "市辖区"}, {"area_id": "1812", "area_name": "莱城区"}, {
        "area_id": "1813",
        "area_name": "钢城区"
      }],
      "184": [{"area_id": "1814", "area_name": "市辖区"}, {"area_id": "1815", "area_name": "兰山区"}, {
        "area_id": "1816",
        "area_name": "罗庄区"
      }, {"area_id": "1817", "area_name": "河东区"}, {"area_id": "1818", "area_name": "沂南县"}, {
        "area_id": "1819",
        "area_name": "郯城县"
      }, {"area_id": "1820", "area_name": "沂水县"}, {"area_id": "1821", "area_name": "兰陵县"}, {
        "area_id": "1822",
        "area_name": "费县"
      }, {"area_id": "1823", "area_name": "平邑县"}, {"area_id": "1824", "area_name": "莒南县"}, {
        "area_id": "1825",
        "area_name": "蒙阴县"
      }, {"area_id": "1826", "area_name": "临沭县"}],
      "185": [{"area_id": "1827", "area_name": "市辖区"}, {"area_id": "1828", "area_name": "德城区"}, {
        "area_id": "1829",
        "area_name": "陵城区"
      }, {"area_id": "1830", "area_name": "宁津县"}, {"area_id": "1831", "area_name": "庆云县"}, {
        "area_id": "1832",
        "area_name": "临邑县"
      }, {"area_id": "1833", "area_name": "齐河县"}, {"area_id": "1834", "area_name": "平原县"}, {
        "area_id": "1835",
        "area_name": "夏津县"
      }, {"area_id": "1836", "area_name": "武城县"}, {"area_id": "1837", "area_name": "乐陵市"}, {
        "area_id": "1838",
        "area_name": "禹城市"
      }],
      "186": [{"area_id": "1839", "area_name": "市辖区"}, {"area_id": "1840", "area_name": "东昌府区"}, {
        "area_id": "1841",
        "area_name": "阳谷县"
      }, {"area_id": "1842", "area_name": "莘县"}, {"area_id": "1843", "area_name": "茌平县"}, {
        "area_id": "1844",
        "area_name": "东阿县"
      }, {"area_id": "1845", "area_name": "冠县"}, {"area_id": "1846", "area_name": "高唐县"}, {
        "area_id": "1847",
        "area_name": "临清市"
      }],
      "187": [{"area_id": "1849", "area_name": "滨城区"}, {"area_id": "1850", "area_name": "沾化区"}, {
        "area_id": "1851",
        "area_name": "惠民县"
      }, {"area_id": "1852", "area_name": "阳信县"}, {"area_id": "1853", "area_name": "无棣县"}, {
        "area_id": "1854",
        "area_name": "博兴县"
      }, {"area_id": "1855", "area_name": "邹平县"}, {"area_id": "1848", "area_name": "市辖区"}],
      "188": [{"area_id": "1856", "area_name": "市辖区"}, {"area_id": "1857", "area_name": "牡丹区"}, {
        "area_id": "1858",
        "area_name": "曹县"
      }, {"area_id": "1859", "area_name": "单县"}, {"area_id": "1860", "area_name": "成武县"}, {
        "area_id": "1861",
        "area_name": "巨野县"
      }, {"area_id": "1862", "area_name": "郓城县"}, {"area_id": "1863", "area_name": "鄄城县"}, {
        "area_id": "1864",
        "area_name": "定陶县"
      }, {"area_id": "1865", "area_name": "东明县"}],
      "189": [{"area_id": "1866", "area_name": "市辖区"}, {"area_id": "1867", "area_name": "中原区"}, {
        "area_id": "1868",
        "area_name": "二七区"
      }, {"area_id": "1869", "area_name": "管城回族区"}, {"area_id": "1870", "area_name": "金水区"}, {
        "area_id": "1871",
        "area_name": "上街区"
      }, {"area_id": "1872", "area_name": "惠济区"}, {"area_id": "1873", "area_name": "中牟县"}, {
        "area_id": "1874",
        "area_name": "巩义市"
      }, {"area_id": "1875", "area_name": "荥阳市"}, {"area_id": "1876", "area_name": "新密市"}, {
        "area_id": "1877",
        "area_name": "新郑市"
      }, {"area_id": "1878", "area_name": "登封市"}],
      "190": [{"area_id": "1879", "area_name": "市辖区"}, {"area_id": "1880", "area_name": "龙亭区"}, {
        "area_id": "1881",
        "area_name": "顺河回族区"
      }, {"area_id": "1882", "area_name": "鼓楼区"}, {"area_id": "1883", "area_name": "禹王台区"}, {
        "area_id": "1884",
        "area_name": "金明区"
      }, {"area_id": "1885", "area_name": "祥符区"}, {"area_id": "1886", "area_name": "杞县"}, {
        "area_id": "1887",
        "area_name": "通许县"
      }, {"area_id": "1888", "area_name": "尉氏县"}, {"area_id": "1889", "area_name": "兰考县"}],
      "191": [{"area_id": "1890", "area_name": "市辖区"}, {"area_id": "1891", "area_name": "老城区"}, {
        "area_id": "1892",
        "area_name": "西工区"
      }, {"area_id": "1893", "area_name": "瀍河回族区"}, {"area_id": "1894", "area_name": "涧西区"}, {
        "area_id": "1895",
        "area_name": "吉利区"
      }, {"area_id": "1896", "area_name": "洛龙区"}, {"area_id": "1897", "area_name": "孟津县"}, {
        "area_id": "1898",
        "area_name": "新安县"
      }, {"area_id": "1899", "area_name": "栾川县"}, {"area_id": "1900", "area_name": "嵩县"}, {
        "area_id": "1901",
        "area_name": "汝阳县"
      }, {"area_id": "1902", "area_name": "宜阳县"}, {"area_id": "1903", "area_name": "洛宁县"}, {
        "area_id": "1904",
        "area_name": "伊川县"
      }, {"area_id": "1905", "area_name": "偃师市"}],
      "192": [{"area_id": "1906", "area_name": "市辖区"}, {"area_id": "1907", "area_name": "新华区"}, {
        "area_id": "1908",
        "area_name": "卫东区"
      }, {"area_id": "1909", "area_name": "石龙区"}, {"area_id": "1910", "area_name": "湛河区"}, {
        "area_id": "1911",
        "area_name": "宝丰县"
      }, {"area_id": "1912", "area_name": "叶县"}, {"area_id": "1913", "area_name": "鲁山县"}, {
        "area_id": "1914",
        "area_name": "郏县"
      }, {"area_id": "1915", "area_name": "舞钢市"}, {"area_id": "1916", "area_name": "汝州市"}],
      "193": [{"area_id": "1917", "area_name": "市辖区"}, {"area_id": "1918", "area_name": "文峰区"}, {
        "area_id": "1919",
        "area_name": "北关区"
      }, {"area_id": "1920", "area_name": "殷都区"}, {"area_id": "1921", "area_name": "龙安区"}, {
        "area_id": "1922",
        "area_name": "安阳县"
      }, {"area_id": "1923", "area_name": "汤阴县"}, {"area_id": "1924", "area_name": "滑县"}, {
        "area_id": "1925",
        "area_name": "内黄县"
      }, {"area_id": "1926", "area_name": "林州市"}],
      "194": [{"area_id": "1927", "area_name": "市辖区"}, {"area_id": "1928", "area_name": "鹤山区"}, {
        "area_id": "1929",
        "area_name": "山城区"
      }, {"area_id": "1930", "area_name": "淇滨区"}, {"area_id": "1931", "area_name": "浚县"}, {
        "area_id": "1932",
        "area_name": "淇县"
      }],
      "195": [{"area_id": "1933", "area_name": "市辖区"}, {"area_id": "1934", "area_name": "红旗区"}, {
        "area_id": "1935",
        "area_name": "卫滨区"
      }, {"area_id": "1936", "area_name": "凤泉区"}, {"area_id": "1937", "area_name": "牧野区"}, {
        "area_id": "1938",
        "area_name": "新乡县"
      }, {"area_id": "1939", "area_name": "获嘉县"}, {"area_id": "1940", "area_name": "原阳县"}, {
        "area_id": "1941",
        "area_name": "延津县"
      }, {"area_id": "1942", "area_name": "封丘县"}, {"area_id": "1943", "area_name": "长垣县"}, {
        "area_id": "1944",
        "area_name": "卫辉市"
      }, {"area_id": "1945", "area_name": "辉县市"}],
      "196": [{"area_id": "1946", "area_name": "市辖区"}, {"area_id": "1947", "area_name": "解放区"}, {
        "area_id": "1948",
        "area_name": "中站区"
      }, {"area_id": "1949", "area_name": "马村区"}, {"area_id": "1950", "area_name": "山阳区"}, {
        "area_id": "1951",
        "area_name": "修武县"
      }, {"area_id": "1952", "area_name": "博爱县"}, {"area_id": "1953", "area_name": "武陟县"}, {
        "area_id": "1954",
        "area_name": "温县"
      }, {"area_id": "1955", "area_name": "沁阳市"}, {"area_id": "1956", "area_name": "孟州市"}],
      "197": [{"area_id": "1957", "area_name": "市辖区"}, {"area_id": "1958", "area_name": "华龙区"}, {
        "area_id": "1959",
        "area_name": "清丰县"
      }, {"area_id": "1960", "area_name": "南乐县"}, {"area_id": "1961", "area_name": "范县"}, {
        "area_id": "1962",
        "area_name": "台前县"
      }, {"area_id": "1963", "area_name": "濮阳县"}],
      "198": [{"area_id": "1964", "area_name": "市辖区"}, {"area_id": "1965", "area_name": "魏都区"}, {
        "area_id": "1966",
        "area_name": "许昌县"
      }, {"area_id": "1967", "area_name": "鄢陵县"}, {"area_id": "1968", "area_name": "襄城县"}, {
        "area_id": "1969",
        "area_name": "禹州市"
      }, {"area_id": "1970", "area_name": "长葛市"}],
      "199": [{"area_id": "1971", "area_name": "市辖区"}, {"area_id": "1972", "area_name": "源汇区"}, {
        "area_id": "1973",
        "area_name": "郾城区"
      }, {"area_id": "1974", "area_name": "召陵区"}, {"area_id": "1975", "area_name": "舞阳县"}, {
        "area_id": "1976",
        "area_name": "临颍县"
      }],
      "200": [{"area_id": "1977", "area_name": "市辖区"}, {"area_id": "1978", "area_name": "湖滨区"}, {
        "area_id": "1979",
        "area_name": "渑池县"
      }, {"area_id": "1980", "area_name": "陕县"}, {"area_id": "1981", "area_name": "卢氏县"}, {
        "area_id": "1982",
        "area_name": "义马市"
      }, {"area_id": "1983", "area_name": "灵宝市"}],
      "201": [{"area_id": "1984", "area_name": "市辖区"}, {"area_id": "1985", "area_name": "宛城区"}, {
        "area_id": "1986",
        "area_name": "卧龙区"
      }, {"area_id": "1987", "area_name": "南召县"}, {"area_id": "1988", "area_name": "方城县"}, {
        "area_id": "1989",
        "area_name": "西峡县"
      }, {"area_id": "1990", "area_name": "镇平县"}, {"area_id": "1991", "area_name": "内乡县"}, {
        "area_id": "1992",
        "area_name": "淅川县"
      }, {"area_id": "1993", "area_name": "社旗县"}, {"area_id": "1994", "area_name": "唐河县"}, {
        "area_id": "1995",
        "area_name": "新野县"
      }, {"area_id": "1996", "area_name": "桐柏县"}, {"area_id": "1997", "area_name": "邓州市"}],
      "202": [{"area_id": "1998", "area_name": "市辖区"}, {"area_id": "1999", "area_name": "梁园区"}, {
        "area_id": "2000",
        "area_name": "睢阳区"
      }, {"area_id": "2001", "area_name": "民权县"}, {"area_id": "2002", "area_name": "睢县"}, {
        "area_id": "2003",
        "area_name": "宁陵县"
      }, {"area_id": "2004", "area_name": "柘城县"}, {"area_id": "2005", "area_name": "虞城县"}, {
        "area_id": "2006",
        "area_name": "夏邑县"
      }, {"area_id": "2007", "area_name": "永城市"}],
      "203": [{"area_id": "2008", "area_name": "市辖区"}, {"area_id": "2009", "area_name": "浉河区"}, {
        "area_id": "2010",
        "area_name": "平桥区"
      }, {"area_id": "2011", "area_name": "罗山县"}, {"area_id": "2012", "area_name": "光山县"}, {
        "area_id": "2013",
        "area_name": "新县"
      }, {"area_id": "2014", "area_name": "商城县"}, {"area_id": "2015", "area_name": "固始县"}, {
        "area_id": "2016",
        "area_name": "潢川县"
      }, {"area_id": "2017", "area_name": "淮滨县"}, {"area_id": "2018", "area_name": "息县"}],
      "204": [{"area_id": "2019", "area_name": "市辖区"}, {"area_id": "2020", "area_name": "川汇区"}, {
        "area_id": "2021",
        "area_name": "扶沟县"
      }, {"area_id": "2022", "area_name": "西华县"}, {"area_id": "2023", "area_name": "商水县"}, {
        "area_id": "2024",
        "area_name": "沈丘县"
      }, {"area_id": "2025", "area_name": "郸城县"}, {"area_id": "2026", "area_name": "淮阳县"}, {
        "area_id": "2027",
        "area_name": "太康县"
      }, {"area_id": "2028", "area_name": "鹿邑县"}, {"area_id": "2029", "area_name": "项城市"}],
      "205": [{"area_id": "2030", "area_name": "市辖区"}, {"area_id": "2031", "area_name": "驿城区"}, {
        "area_id": "2032",
        "area_name": "西平县"
      }, {"area_id": "2033", "area_name": "上蔡县"}, {"area_id": "2034", "area_name": "平舆县"}, {
        "area_id": "2035",
        "area_name": "正阳县"
      }, {"area_id": "2036", "area_name": "确山县"}, {"area_id": "2037", "area_name": "泌阳县"}, {
        "area_id": "2038",
        "area_name": "汝南县"
      }, {"area_id": "2039", "area_name": "遂平县"}, {"area_id": "2040", "area_name": "新蔡县"}],
      "206": [{"area_id": "2041", "area_name": "济源市"}],
      "207": [{"area_id": "2042", "area_name": "市辖区"}, {"area_id": "2043", "area_name": "江岸区"}, {
        "area_id": "2044",
        "area_name": "江汉区"
      }, {"area_id": "2045", "area_name": "硚口区"}, {"area_id": "2046", "area_name": "汉阳区"}, {
        "area_id": "2047",
        "area_name": "武昌区"
      }, {"area_id": "2048", "area_name": "青山区"}, {"area_id": "2049", "area_name": "洪山区"}, {
        "area_id": "2050",
        "area_name": "东西湖区"
      }, {"area_id": "2051", "area_name": "汉南区"}, {"area_id": "2052", "area_name": "蔡甸区"}, {
        "area_id": "2053",
        "area_name": "江夏区"
      }, {"area_id": "2054", "area_name": "黄陂区"}, {"area_id": "2055", "area_name": "新洲区"}],
      "208": [{"area_id": "2056", "area_name": "市辖区"}, {"area_id": "2057", "area_name": "黄石港区"}, {
        "area_id": "2058",
        "area_name": "西塞山区"
      }, {"area_id": "2059", "area_name": "下陆区"}, {"area_id": "2060", "area_name": "铁山区"}, {
        "area_id": "2061",
        "area_name": "阳新县"
      }, {"area_id": "2062", "area_name": "大冶市"}],
      "209": [{"area_id": "2063", "area_name": "市辖区"}, {"area_id": "2064", "area_name": "茅箭区"}, {
        "area_id": "2065",
        "area_name": "张湾区"
      }, {"area_id": "2066", "area_name": "郧阳区"}, {"area_id": "2067", "area_name": "郧西县"}, {
        "area_id": "2068",
        "area_name": "竹山县"
      }, {"area_id": "2069", "area_name": "竹溪县"}, {"area_id": "2070", "area_name": "房县"}, {
        "area_id": "2071",
        "area_name": "丹江口市"
      }],
      "210": [{"area_id": "2072", "area_name": "市辖区"}, {"area_id": "2073", "area_name": "西陵区"}, {
        "area_id": "2074",
        "area_name": "伍家岗区"
      }, {"area_id": "2075", "area_name": "点军区"}, {"area_id": "2076", "area_name": "猇亭区"}, {
        "area_id": "2077",
        "area_name": "夷陵区"
      }, {"area_id": "2078", "area_name": "远安县"}, {"area_id": "2079", "area_name": "兴山县"}, {
        "area_id": "2080",
        "area_name": "秭归县"
      }, {"area_id": "2081", "area_name": "长阳土家族自治县"}, {"area_id": "2082", "area_name": "五峰土家族自治县"}, {
        "area_id": "2083",
        "area_name": "宜都市"
      }, {"area_id": "2084", "area_name": "当阳市"}, {"area_id": "2085", "area_name": "枝江市"}],
      "211": [{"area_id": "2086", "area_name": "市辖区"}, {"area_id": "2087", "area_name": "襄城区"}, {
        "area_id": "2088",
        "area_name": "樊城区"
      }, {"area_id": "2089", "area_name": "襄州区"}, {"area_id": "2090", "area_name": "南漳县"}, {
        "area_id": "2091",
        "area_name": "谷城县"
      }, {"area_id": "2092", "area_name": "保康县"}, {"area_id": "2093", "area_name": "老河口市"}, {
        "area_id": "2094",
        "area_name": "枣阳市"
      }, {"area_id": "2095", "area_name": "宜城市"}],
      "212": [{"area_id": "2096", "area_name": "市辖区"}, {"area_id": "2097", "area_name": "梁子湖区"}, {
        "area_id": "2098",
        "area_name": "华容区"
      }, {"area_id": "2099", "area_name": "鄂城区"}],
      "213": [{"area_id": "2100", "area_name": "市辖区"}, {"area_id": "2101", "area_name": "东宝区"}, {
        "area_id": "2102",
        "area_name": "掇刀区"
      }, {"area_id": "2103", "area_name": "京山县"}, {"area_id": "2104", "area_name": "沙洋县"}, {
        "area_id": "2105",
        "area_name": "钟祥市"
      }],
      "214": [{"area_id": "2106", "area_name": "市辖区"}, {"area_id": "2107", "area_name": "孝南区"}, {
        "area_id": "2108",
        "area_name": "孝昌县"
      }, {"area_id": "2109", "area_name": "大悟县"}, {"area_id": "2110", "area_name": "云梦县"}, {
        "area_id": "2111",
        "area_name": "应城市"
      }, {"area_id": "2112", "area_name": "安陆市"}, {"area_id": "2113", "area_name": "汉川市"}],
      "215": [{"area_id": "2114", "area_name": "市辖区"}, {"area_id": "2115", "area_name": "沙市区"}, {
        "area_id": "2116",
        "area_name": "荆州区"
      }, {"area_id": "2117", "area_name": "公安县"}, {"area_id": "2118", "area_name": "监利县"}, {
        "area_id": "2119",
        "area_name": "江陵县"
      }, {"area_id": "2120", "area_name": "石首市"}, {"area_id": "2121", "area_name": "洪湖市"}, {
        "area_id": "2122",
        "area_name": "松滋市"
      }],
      "216": [{"area_id": "2123", "area_name": "市辖区"}, {"area_id": "2124", "area_name": "黄州区"}, {
        "area_id": "2125",
        "area_name": "团风县"
      }, {"area_id": "2126", "area_name": "红安县"}, {"area_id": "2127", "area_name": "罗田县"}, {
        "area_id": "2128",
        "area_name": "英山县"
      }, {"area_id": "2129", "area_name": "浠水县"}, {"area_id": "2130", "area_name": "蕲春县"}, {
        "area_id": "2131",
        "area_name": "黄梅县"
      }, {"area_id": "2132", "area_name": "麻城市"}, {"area_id": "2133", "area_name": "武穴市"}],
      "217": [{"area_id": "2134", "area_name": "市辖区"}, {"area_id": "2135", "area_name": "咸安区"}, {
        "area_id": "2136",
        "area_name": "嘉鱼县"
      }, {"area_id": "2137", "area_name": "通城县"}, {"area_id": "2138", "area_name": "崇阳县"}, {
        "area_id": "2139",
        "area_name": "通山县"
      }, {"area_id": "2140", "area_name": "赤壁市"}],
      "218": [{"area_id": "2141", "area_name": "市辖区"}, {"area_id": "2142", "area_name": "曾都区"}, {
        "area_id": "2143",
        "area_name": "随县"
      }, {"area_id": "2144", "area_name": "广水市"}],
      "219": [{"area_id": "2145", "area_name": "恩施市"}, {"area_id": "2146", "area_name": "利川市"}, {
        "area_id": "2147",
        "area_name": "建始县"
      }, {"area_id": "2148", "area_name": "巴东县"}, {"area_id": "2149", "area_name": "宣恩县"}, {
        "area_id": "2150",
        "area_name": "咸丰县"
      }, {"area_id": "2151", "area_name": "来凤县"}, {"area_id": "2152", "area_name": "鹤峰县"}],
      "220": [{"area_id": "2153", "area_name": "仙桃市"}, {"area_id": "2154", "area_name": "潜江市"}, {
        "area_id": "2155",
        "area_name": "天门市"
      }, {"area_id": "2156", "area_name": "神农架林区"}],
      "221": [{"area_id": "2157", "area_name": "市辖区"}, {"area_id": "2158", "area_name": "芙蓉区"}, {
        "area_id": "2159",
        "area_name": "天心区"
      }, {"area_id": "2160", "area_name": "岳麓区"}, {"area_id": "2161", "area_name": "开福区"}, {
        "area_id": "2162",
        "area_name": "雨花区"
      }, {"area_id": "2163", "area_name": "望城区"}, {"area_id": "2164", "area_name": "长沙县"}, {
        "area_id": "2165",
        "area_name": "宁乡县"
      }, {"area_id": "2166", "area_name": "浏阳市"}],
      "222": [{"area_id": "2167", "area_name": "市辖区"}, {"area_id": "2168", "area_name": "荷塘区"}, {
        "area_id": "2169",
        "area_name": "芦淞区"
      }, {"area_id": "2170", "area_name": "石峰区"}, {"area_id": "2171", "area_name": "天元区"}, {
        "area_id": "2172",
        "area_name": "株洲县"
      }, {"area_id": "2173", "area_name": "攸县"}, {"area_id": "2174", "area_name": "茶陵县"}, {
        "area_id": "2175",
        "area_name": "炎陵县"
      }, {"area_id": "2176", "area_name": "醴陵市"}],
      "223": [{"area_id": "2177", "area_name": "市辖区"}, {"area_id": "2178", "area_name": "雨湖区"}, {
        "area_id": "2179",
        "area_name": "岳塘区"
      }, {"area_id": "2180", "area_name": "湘潭县"}, {"area_id": "2181", "area_name": "湘乡市"}, {
        "area_id": "2182",
        "area_name": "韶山市"
      }],
      "224": [{"area_id": "2183", "area_name": "市辖区"}, {"area_id": "2184", "area_name": "珠晖区"}, {
        "area_id": "2185",
        "area_name": "雁峰区"
      }, {"area_id": "2186", "area_name": "石鼓区"}, {"area_id": "2187", "area_name": "蒸湘区"}, {
        "area_id": "2188",
        "area_name": "南岳区"
      }, {"area_id": "2189", "area_name": "衡阳县"}, {"area_id": "2190", "area_name": "衡南县"}, {
        "area_id": "2191",
        "area_name": "衡山县"
      }, {"area_id": "2192", "area_name": "衡东县"}, {"area_id": "2193", "area_name": "祁东县"}, {
        "area_id": "2194",
        "area_name": "耒阳市"
      }, {"area_id": "2195", "area_name": "常宁市"}],
      "225": [{"area_id": "2196", "area_name": "市辖区"}, {"area_id": "2197", "area_name": "双清区"}, {
        "area_id": "2198",
        "area_name": "大祥区"
      }, {"area_id": "2199", "area_name": "北塔区"}, {"area_id": "2200", "area_name": "邵东县"}, {
        "area_id": "2201",
        "area_name": "新邵县"
      }, {"area_id": "2202", "area_name": "邵阳县"}, {"area_id": "2203", "area_name": "隆回县"}, {
        "area_id": "2204",
        "area_name": "洞口县"
      }, {"area_id": "2205", "area_name": "绥宁县"}, {"area_id": "2206", "area_name": "新宁县"}, {
        "area_id": "2207",
        "area_name": "城步苗族自治县"
      }, {"area_id": "2208", "area_name": "武冈市"}],
      "226": [{"area_id": "2209", "area_name": "市辖区"}, {"area_id": "2210", "area_name": "岳阳楼区"}, {
        "area_id": "2211",
        "area_name": "云溪区"
      }, {"area_id": "2212", "area_name": "君山区"}, {"area_id": "2213", "area_name": "岳阳县"}, {
        "area_id": "2214",
        "area_name": "华容县"
      }, {"area_id": "2215", "area_name": "湘阴县"}, {"area_id": "2216", "area_name": "平江县"}, {
        "area_id": "2217",
        "area_name": "汨罗市"
      }, {"area_id": "2218", "area_name": "临湘市"}],
      "227": [{"area_id": "2219", "area_name": "市辖区"}, {"area_id": "2220", "area_name": "武陵区"}, {
        "area_id": "2221",
        "area_name": "鼎城区"
      }, {"area_id": "2222", "area_name": "安乡县"}, {"area_id": "2223", "area_name": "汉寿县"}, {
        "area_id": "2224",
        "area_name": "澧县"
      }, {"area_id": "2225", "area_name": "临澧县"}, {"area_id": "2226", "area_name": "桃源县"}, {
        "area_id": "2227",
        "area_name": "石门县"
      }, {"area_id": "2228", "area_name": "津市市"}],
      "228": [{"area_id": "2229", "area_name": "市辖区"}, {"area_id": "2230", "area_name": "永定区"}, {
        "area_id": "2231",
        "area_name": "武陵源区"
      }, {"area_id": "2232", "area_name": "慈利县"}, {"area_id": "2233", "area_name": "桑植县"}],
      "229": [{"area_id": "2234", "area_name": "市辖区"}, {"area_id": "2235", "area_name": "资阳区"}, {
        "area_id": "2236",
        "area_name": "赫山区"
      }, {"area_id": "2237", "area_name": "南县"}, {"area_id": "2238", "area_name": "桃江县"}, {
        "area_id": "2239",
        "area_name": "安化县"
      }, {"area_id": "2240", "area_name": "沅江市"}],
      "230": [{"area_id": "2241", "area_name": "市辖区"}, {"area_id": "2242", "area_name": "北湖区"}, {
        "area_id": "2243",
        "area_name": "苏仙区"
      }, {"area_id": "2244", "area_name": "桂阳县"}, {"area_id": "2245", "area_name": "宜章县"}, {
        "area_id": "2246",
        "area_name": "永兴县"
      }, {"area_id": "2247", "area_name": "嘉禾县"}, {"area_id": "2248", "area_name": "临武县"}, {
        "area_id": "2249",
        "area_name": "汝城县"
      }, {"area_id": "2250", "area_name": "桂东县"}, {"area_id": "2251", "area_name": "安仁县"}, {
        "area_id": "2252",
        "area_name": "资兴市"
      }],
      "231": [{"area_id": "2253", "area_name": "市辖区"}, {"area_id": "2254", "area_name": "零陵区"}, {
        "area_id": "2255",
        "area_name": "冷水滩区"
      }, {"area_id": "2256", "area_name": "祁阳县"}, {"area_id": "2257", "area_name": "东安县"}, {
        "area_id": "2258",
        "area_name": "双牌县"
      }, {"area_id": "2259", "area_name": "道县"}, {"area_id": "2260", "area_name": "江永县"}, {
        "area_id": "2261",
        "area_name": "宁远县"
      }, {"area_id": "2262", "area_name": "蓝山县"}, {"area_id": "2263", "area_name": "新田县"}, {
        "area_id": "2264",
        "area_name": "江华瑶族自治县"
      }],
      "232": [{"area_id": "2265", "area_name": "市辖区"}, {"area_id": "2266", "area_name": "鹤城区"}, {
        "area_id": "2267",
        "area_name": "中方县"
      }, {"area_id": "2268", "area_name": "沅陵县"}, {"area_id": "2269", "area_name": "辰溪县"}, {
        "area_id": "2270",
        "area_name": "溆浦县"
      }, {"area_id": "2271", "area_name": "会同县"}, {"area_id": "2272", "area_name": "麻阳苗族自治县"}, {
        "area_id": "2273",
        "area_name": "新晃侗族自治县"
      }, {"area_id": "2274", "area_name": "芷江侗族自治县"}, {"area_id": "2275", "area_name": "靖州苗族侗族自治县"}, {
        "area_id": "2276",
        "area_name": "通道侗族自治县"
      }, {"area_id": "2277", "area_name": "洪江市"}],
      "233": [{"area_id": "2278", "area_name": "市辖区"}, {"area_id": "2279", "area_name": "娄星区"}, {
        "area_id": "2280",
        "area_name": "双峰县"
      }, {"area_id": "2281", "area_name": "新化县"}, {"area_id": "2282", "area_name": "冷水江市"}, {
        "area_id": "2283",
        "area_name": "涟源市"
      }],
      "234": [{"area_id": "2284", "area_name": "吉首市"}, {"area_id": "2285", "area_name": "泸溪县"}, {
        "area_id": "2286",
        "area_name": "凤凰县"
      }, {"area_id": "2287", "area_name": "花垣县"}, {"area_id": "2288", "area_name": "保靖县"}, {
        "area_id": "2289",
        "area_name": "古丈县"
      }, {"area_id": "2290", "area_name": "永顺县"}, {"area_id": "2291", "area_name": "龙山县"}],
      "235": [{"area_id": "2292", "area_name": "市辖区"}, {"area_id": "2293", "area_name": "荔湾区"}, {
        "area_id": "2294",
        "area_name": "越秀区"
      }, {"area_id": "2295", "area_name": "海珠区"}, {"area_id": "2296", "area_name": "天河区"}, {
        "area_id": "2297",
        "area_name": "白云区"
      }, {"area_id": "2298", "area_name": "黄埔区"}, {"area_id": "2299", "area_name": "番禺区"}, {
        "area_id": "2300",
        "area_name": "花都区"
      }, {"area_id": "2301", "area_name": "南沙区"}, {"area_id": "2302", "area_name": "从化区"}, {
        "area_id": "2303",
        "area_name": "增城区"
      }],
      "236": [{"area_id": "2304", "area_name": "市辖区"}, {"area_id": "2305", "area_name": "武江区"}, {
        "area_id": "2306",
        "area_name": "浈江区"
      }, {"area_id": "2307", "area_name": "曲江区"}, {"area_id": "2308", "area_name": "始兴县"}, {
        "area_id": "2309",
        "area_name": "仁化县"
      }, {"area_id": "2310", "area_name": "翁源县"}, {"area_id": "2311", "area_name": "乳源瑶族自治县"}, {
        "area_id": "2312",
        "area_name": "新丰县"
      }, {"area_id": "2313", "area_name": "乐昌市"}, {"area_id": "2314", "area_name": "南雄市"}],
      "237": [{"area_id": "2315", "area_name": "市辖区"}, {"area_id": "2316", "area_name": "罗湖区"}, {
        "area_id": "2317",
        "area_name": "福田区"
      }, {"area_id": "2318", "area_name": "南山区"}, {"area_id": "2319", "area_name": "宝安区"}, {
        "area_id": "2320",
        "area_name": "龙岗区"
      }, {"area_id": "2321", "area_name": "盐田区"}],
      "238": [{"area_id": "2322", "area_name": "市辖区"}, {"area_id": "2323", "area_name": "香洲区"}, {
        "area_id": "2324",
        "area_name": "斗门区"
      }, {"area_id": "2325", "area_name": "金湾区"}],
      "239": [{"area_id": "2326", "area_name": "市辖区"}, {"area_id": "2327", "area_name": "龙湖区"}, {
        "area_id": "2328",
        "area_name": "金平区"
      }, {"area_id": "2329", "area_name": "濠江区"}, {"area_id": "2330", "area_name": "潮阳区"}, {
        "area_id": "2331",
        "area_name": "潮南区"
      }, {"area_id": "2332", "area_name": "澄海区"}, {"area_id": "2333", "area_name": "南澳县"}],
      "240": [{"area_id": "2334", "area_name": "市辖区"}, {"area_id": "2335", "area_name": "禅城区"}, {
        "area_id": "2336",
        "area_name": "南海区"
      }, {"area_id": "2337", "area_name": "顺德区"}, {"area_id": "2338", "area_name": "三水区"}, {
        "area_id": "2339",
        "area_name": "高明区"
      }],
      "241": [{"area_id": "2340", "area_name": "市辖区"}, {"area_id": "2341", "area_name": "蓬江区"}, {
        "area_id": "2342",
        "area_name": "江海区"
      }, {"area_id": "2343", "area_name": "新会区"}, {"area_id": "2344", "area_name": "台山市"}, {
        "area_id": "2345",
        "area_name": "开平市"
      }, {"area_id": "2346", "area_name": "鹤山市"}, {"area_id": "2347", "area_name": "恩平市"}],
      "242": [{"area_id": "2348", "area_name": "市辖区"}, {"area_id": "2349", "area_name": "赤坎区"}, {
        "area_id": "2350",
        "area_name": "霞山区"
      }, {"area_id": "2351", "area_name": "坡头区"}, {"area_id": "2352", "area_name": "麻章区"}, {
        "area_id": "2353",
        "area_name": "遂溪县"
      }, {"area_id": "2354", "area_name": "徐闻县"}, {"area_id": "2355", "area_name": "廉江市"}, {
        "area_id": "2356",
        "area_name": "雷州市"
      }, {"area_id": "2357", "area_name": "吴川市"}],
      "243": [{"area_id": "2358", "area_name": "市辖区"}, {"area_id": "2359", "area_name": "茂南区"}, {
        "area_id": "2360",
        "area_name": "电白区"
      }, {"area_id": "2361", "area_name": "高州市"}, {"area_id": "2362", "area_name": "化州市"}, {
        "area_id": "2363",
        "area_name": "信宜市"
      }],
      "244": [{"area_id": "2364", "area_name": "市辖区"}, {"area_id": "2365", "area_name": "端州区"}, {
        "area_id": "2366",
        "area_name": "鼎湖区"
      }, {"area_id": "2367", "area_name": "高要区"}, {"area_id": "2368", "area_name": "广宁县"}, {
        "area_id": "2369",
        "area_name": "怀集县"
      }, {"area_id": "2370", "area_name": "封开县"}, {"area_id": "2371", "area_name": "德庆县"}, {
        "area_id": "2372",
        "area_name": "四会市"
      }],
      "245": [{"area_id": "2373", "area_name": "市辖区"}, {"area_id": "2374", "area_name": "惠城区"}, {
        "area_id": "2375",
        "area_name": "惠阳区"
      }, {"area_id": "2376", "area_name": "博罗县"}, {"area_id": "2377", "area_name": "惠东县"}, {
        "area_id": "2378",
        "area_name": "龙门县"
      }],
      "246": [{"area_id": "2379", "area_name": "市辖区"}, {"area_id": "2380", "area_name": "梅江区"}, {
        "area_id": "2381",
        "area_name": "梅县区"
      }, {"area_id": "2382", "area_name": "大埔县"}, {"area_id": "2383", "area_name": "丰顺县"}, {
        "area_id": "2384",
        "area_name": "五华县"
      }, {"area_id": "2385", "area_name": "平远县"}, {"area_id": "2386", "area_name": "蕉岭县"}, {
        "area_id": "2387",
        "area_name": "兴宁市"
      }],
      "247": [{"area_id": "2388", "area_name": "市辖区"}, {"area_id": "2389", "area_name": "城区"}, {
        "area_id": "2390",
        "area_name": "海丰县"
      }, {"area_id": "2391", "area_name": "陆河县"}, {"area_id": "2392", "area_name": "陆丰市"}],
      "248": [{"area_id": "2393", "area_name": "市辖区"}, {"area_id": "2394", "area_name": "源城区"}, {
        "area_id": "2395",
        "area_name": "紫金县"
      }, {"area_id": "2396", "area_name": "龙川县"}, {"area_id": "2397", "area_name": "连平县"}, {
        "area_id": "2398",
        "area_name": "和平县"
      }, {"area_id": "2399", "area_name": "东源县"}],
      "249": [{"area_id": "2400", "area_name": "市辖区"}, {"area_id": "2401", "area_name": "江城区"}, {
        "area_id": "2402",
        "area_name": "阳东区"
      }, {"area_id": "2403", "area_name": "阳西县"}, {"area_id": "2404", "area_name": "阳春市"}],
      "250": [{"area_id": "2405", "area_name": "市辖区"}, {"area_id": "2406", "area_name": "清城区"}, {
        "area_id": "2407",
        "area_name": "清新区"
      }, {"area_id": "2408", "area_name": "佛冈县"}, {"area_id": "2409", "area_name": "阳山县"}, {
        "area_id": "2410",
        "area_name": "连山壮族瑶族自治县"
      }, {"area_id": "2411", "area_name": "连南瑶族自治县"}, {"area_id": "2412", "area_name": "英德市"}, {
        "area_id": "2413",
        "area_name": "连州市"
      }],
      "253": [{"area_id": "2414", "area_name": "市辖区"}, {"area_id": "2415", "area_name": "湘桥区"}, {
        "area_id": "2416",
        "area_name": "潮安区"
      }, {"area_id": "2417", "area_name": "饶平县"}],
      "254": [{"area_id": "2418", "area_name": "市辖区"}, {"area_id": "2419", "area_name": "榕城区"}, {
        "area_id": "2420",
        "area_name": "揭东区"
      }, {"area_id": "2421", "area_name": "揭西县"}, {"area_id": "2422", "area_name": "惠来县"}, {
        "area_id": "2423",
        "area_name": "普宁市"
      }],
      "255": [{"area_id": "2424", "area_name": "市辖区"}, {"area_id": "2425", "area_name": "云城区"}, {
        "area_id": "2426",
        "area_name": "云安区"
      }, {"area_id": "2427", "area_name": "新兴县"}, {"area_id": "2428", "area_name": "郁南县"}, {
        "area_id": "2429",
        "area_name": "罗定市"
      }],
      "256": [{"area_id": "2430", "area_name": "市辖区"}, {"area_id": "2431", "area_name": "兴宁区"}, {
        "area_id": "2432",
        "area_name": "青秀区"
      }, {"area_id": "2433", "area_name": "江南区"}, {"area_id": "2434", "area_name": "西乡塘区"}, {
        "area_id": "2435",
        "area_name": "良庆区"
      }, {"area_id": "2436", "area_name": "邕宁区"}, {"area_id": "2437", "area_name": "武鸣区"}, {
        "area_id": "2438",
        "area_name": "隆安县"
      }, {"area_id": "2439", "area_name": "马山县"}, {"area_id": "2440", "area_name": "上林县"}, {
        "area_id": "2441",
        "area_name": "宾阳县"
      }, {"area_id": "2442", "area_name": "横县"}],
      "257": [{"area_id": "2443", "area_name": "市辖区"}, {"area_id": "2444", "area_name": "城中区"}, {
        "area_id": "2445",
        "area_name": "鱼峰区"
      }, {"area_id": "2446", "area_name": "柳南区"}, {"area_id": "2447", "area_name": "柳北区"}, {
        "area_id": "2448",
        "area_name": "柳江县"
      }, {"area_id": "2449", "area_name": "柳城县"}, {"area_id": "2450", "area_name": "鹿寨县"}, {
        "area_id": "2451",
        "area_name": "融安县"
      }, {"area_id": "2452", "area_name": "融水苗族自治县"}, {"area_id": "2453", "area_name": "三江侗族自治县"}],
      "258": [{"area_id": "2454", "area_name": "市辖区"}, {"area_id": "2455", "area_name": "秀峰区"}, {
        "area_id": "2456",
        "area_name": "叠彩区"
      }, {"area_id": "2457", "area_name": "象山区"}, {"area_id": "2458", "area_name": "七星区"}, {
        "area_id": "2459",
        "area_name": "雁山区"
      }, {"area_id": "2460", "area_name": "临桂区"}, {"area_id": "2461", "area_name": "阳朔县"}, {
        "area_id": "2462",
        "area_name": "灵川县"
      }, {"area_id": "2463", "area_name": "全州县"}, {"area_id": "2464", "area_name": "兴安县"}, {
        "area_id": "2465",
        "area_name": "永福县"
      }, {"area_id": "2466", "area_name": "灌阳县"}, {"area_id": "2467", "area_name": "龙胜各族自治县"}, {
        "area_id": "2468",
        "area_name": "资源县"
      }, {"area_id": "2469", "area_name": "平乐县"}, {"area_id": "2470", "area_name": "荔浦县"}, {
        "area_id": "2471",
        "area_name": "恭城瑶族自治县"
      }],
      "259": [{"area_id": "2472", "area_name": "市辖区"}, {"area_id": "2473", "area_name": "万秀区"}, {
        "area_id": "2474",
        "area_name": "长洲区"
      }, {"area_id": "2475", "area_name": "龙圩区"}, {"area_id": "2476", "area_name": "苍梧县"}, {
        "area_id": "2477",
        "area_name": "藤县"
      }, {"area_id": "2478", "area_name": "蒙山县"}, {"area_id": "2479", "area_name": "岑溪市"}],
      "260": [{"area_id": "2480", "area_name": "市辖区"}, {"area_id": "2481", "area_name": "海城区"}, {
        "area_id": "2482",
        "area_name": "银海区"
      }, {"area_id": "2483", "area_name": "铁山港区"}, {"area_id": "2484", "area_name": "合浦县"}],
      "261": [{"area_id": "2485", "area_name": "市辖区"}, {"area_id": "2486", "area_name": "港口区"}, {
        "area_id": "2487",
        "area_name": "防城区"
      }, {"area_id": "2488", "area_name": "上思县"}, {"area_id": "2489", "area_name": "东兴市"}],
      "262": [{"area_id": "2490", "area_name": "市辖区"}, {"area_id": "2491", "area_name": "钦南区"}, {
        "area_id": "2492",
        "area_name": "钦北区"
      }, {"area_id": "2493", "area_name": "灵山县"}, {"area_id": "2494", "area_name": "浦北县"}],
      "263": [{"area_id": "2495", "area_name": "市辖区"}, {"area_id": "2496", "area_name": "港北区"}, {
        "area_id": "2497",
        "area_name": "港南区"
      }, {"area_id": "2498", "area_name": "覃塘区"}, {"area_id": "2499", "area_name": "平南县"}, {
        "area_id": "2500",
        "area_name": "桂平市"
      }],
      "264": [{"area_id": "2501", "area_name": "市辖区"}, {"area_id": "2502", "area_name": "玉州区"}, {
        "area_id": "2503",
        "area_name": "福绵区"
      }, {"area_id": "2504", "area_name": "容县"}, {"area_id": "2505", "area_name": "陆川县"}, {
        "area_id": "2506",
        "area_name": "博白县"
      }, {"area_id": "2507", "area_name": "兴业县"}, {"area_id": "2508", "area_name": "北流市"}],
      "265": [{"area_id": "2509", "area_name": "市辖区"}, {"area_id": "2510", "area_name": "右江区"}, {
        "area_id": "2511",
        "area_name": "田阳县"
      }, {"area_id": "2512", "area_name": "田东县"}, {"area_id": "2513", "area_name": "平果县"}, {
        "area_id": "2514",
        "area_name": "德保县"
      }, {"area_id": "2515", "area_name": "那坡县"}, {"area_id": "2516", "area_name": "凌云县"}, {
        "area_id": "2517",
        "area_name": "乐业县"
      }, {"area_id": "2518", "area_name": "田林县"}, {"area_id": "2519", "area_name": "西林县"}, {
        "area_id": "2520",
        "area_name": "隆林各族自治县"
      }, {"area_id": "2521", "area_name": "靖西市"}],
      "266": [{"area_id": "2522", "area_name": "市辖区"}, {"area_id": "2523", "area_name": "八步区"}, {
        "area_id": "2524",
        "area_name": "昭平县"
      }, {"area_id": "2525", "area_name": "钟山县"}, {"area_id": "2526", "area_name": "富川瑶族自治县"}],
      "267": [{"area_id": "2527", "area_name": "市辖区"}, {"area_id": "2528", "area_name": "金城江区"}, {
        "area_id": "2529",
        "area_name": "南丹县"
      }, {"area_id": "2530", "area_name": "天峨县"}, {"area_id": "2531", "area_name": "凤山县"}, {
        "area_id": "2532",
        "area_name": "东兰县"
      }, {"area_id": "2533", "area_name": "罗城仫佬族自治县"}, {"area_id": "2534", "area_name": "环江毛南族自治县"}, {
        "area_id": "2535",
        "area_name": "巴马瑶族自治县"
      }, {"area_id": "2536", "area_name": "都安瑶族自治县"}, {"area_id": "2537", "area_name": "大化瑶族自治县"}, {
        "area_id": "2538",
        "area_name": "宜州市"
      }],
      "268": [{"area_id": "2539", "area_name": "市辖区"}, {"area_id": "2540", "area_name": "兴宾区"}, {
        "area_id": "2541",
        "area_name": "忻城县"
      }, {"area_id": "2542", "area_name": "象州县"}, {"area_id": "2543", "area_name": "武宣县"}, {
        "area_id": "2544",
        "area_name": "金秀瑶族自治县"
      }, {"area_id": "2545", "area_name": "合山市"}],
      "269": [{"area_id": "2546", "area_name": "市辖区"}, {"area_id": "2547", "area_name": "江州区"}, {
        "area_id": "2548",
        "area_name": "扶绥县"
      }, {"area_id": "2549", "area_name": "宁明县"}, {"area_id": "2550", "area_name": "龙州县"}, {
        "area_id": "2551",
        "area_name": "大新县"
      }, {"area_id": "2552", "area_name": "天等县"}, {"area_id": "2553", "area_name": "凭祥市"}],
      "270": [{"area_id": "2554", "area_name": "市辖区"}, {"area_id": "2555", "area_name": "秀英区"}, {
        "area_id": "2556",
        "area_name": "龙华区"
      }, {"area_id": "2557", "area_name": "琼山区"}, {"area_id": "2558", "area_name": "美兰区"}],
      "271": [{"area_id": "2559", "area_name": "市辖区"}, {"area_id": "2560", "area_name": "海棠区"}, {
        "area_id": "2561",
        "area_name": "吉阳区"
      }, {"area_id": "2562", "area_name": "天涯区"}, {"area_id": "2563", "area_name": "崖州区"}],
      "272": [{"area_id": "2564", "area_name": "西沙群岛"}, {"area_id": "2565", "area_name": "南沙群岛"}, {
        "area_id": "2566",
        "area_name": "中沙群岛的岛礁及其海域"
      }],
      "273": [{"area_id": "2567", "area_name": "五指山市"}, {"area_id": "2568", "area_name": "琼海市"}, {
        "area_id": "2569",
        "area_name": "儋州市"
      }, {"area_id": "2570", "area_name": "文昌市"}, {"area_id": "2571", "area_name": "万宁市"}, {
        "area_id": "2572",
        "area_name": "东方市"
      }, {"area_id": "2573", "area_name": "定安县"}, {"area_id": "2574", "area_name": "屯昌县"}, {
        "area_id": "2575",
        "area_name": "澄迈县"
      }, {"area_id": "2576", "area_name": "临高县"}, {"area_id": "2577", "area_name": "白沙黎族自治县"}, {
        "area_id": "2578",
        "area_name": "昌江黎族自治县"
      }, {"area_id": "2579", "area_name": "乐东黎族自治县"}, {"area_id": "2580", "area_name": "陵水黎族自治县"}, {
        "area_id": "2581",
        "area_name": "保亭黎族苗族自治县"
      }, {"area_id": "2582", "area_name": "琼中黎族苗族自治县"}],
      "274": [{"area_id": "2583", "area_name": "万州区"}, {"area_id": "2584", "area_name": "涪陵区"}, {
        "area_id": "2585",
        "area_name": "渝中区"
      }, {"area_id": "2586", "area_name": "大渡口区"}, {"area_id": "2587", "area_name": "江北区"}, {
        "area_id": "2588",
        "area_name": "沙坪坝区"
      }, {"area_id": "2589", "area_name": "九龙坡区"}, {"area_id": "2590", "area_name": "南岸区"}, {
        "area_id": "2591",
        "area_name": "北碚区"
      }, {"area_id": "2592", "area_name": "綦江区"}, {"area_id": "2593", "area_name": "大足区"}, {
        "area_id": "2594",
        "area_name": "渝北区"
      }, {"area_id": "2595", "area_name": "巴南区"}, {"area_id": "2596", "area_name": "黔江区"}, {
        "area_id": "2597",
        "area_name": "长寿区"
      }, {"area_id": "2598", "area_name": "江津区"}, {"area_id": "2599", "area_name": "合川区"}, {
        "area_id": "2600",
        "area_name": "永川区"
      }, {"area_id": "2601", "area_name": "南川区"}, {"area_id": "2602", "area_name": "璧山区"}, {
        "area_id": "2603",
        "area_name": "铜梁区"
      }, {"area_id": "2604", "area_name": "潼南区"}, {"area_id": "2605", "area_name": "荣昌区"}],
      "275": [{"area_id": "2606", "area_name": "梁平县"}, {"area_id": "2607", "area_name": "城口县"}, {
        "area_id": "2608",
        "area_name": "丰都县"
      }, {"area_id": "2609", "area_name": "垫江县"}, {"area_id": "2610", "area_name": "武隆县"}, {
        "area_id": "2611",
        "area_name": "忠县"
      }, {"area_id": "2612", "area_name": "开县"}, {"area_id": "2613", "area_name": "云阳县"}, {
        "area_id": "2614",
        "area_name": "奉节县"
      }, {"area_id": "2615", "area_name": "巫山县"}, {"area_id": "2616", "area_name": "巫溪县"}, {
        "area_id": "2617",
        "area_name": "石柱土家族自治县"
      }, {"area_id": "2618", "area_name": "秀山土家族苗族自治县"}, {
        "area_id": "2619",
        "area_name": "酉阳土家族苗族自治县"
      }, {"area_id": "2620", "area_name": "彭水苗族土家族自治县"}],
      "276": [{"area_id": "2621", "area_name": "市辖区"}, {"area_id": "2622", "area_name": "锦江区"}, {
        "area_id": "2623",
        "area_name": "青羊区"
      }, {"area_id": "2624", "area_name": "金牛区"}, {"area_id": "2625", "area_name": "武侯区"}, {
        "area_id": "2626",
        "area_name": "成华区"
      }, {"area_id": "2627", "area_name": "龙泉驿区"}, {"area_id": "2628", "area_name": "青白江区"}, {
        "area_id": "2629",
        "area_name": "新都区"
      }, {"area_id": "2630", "area_name": "温江区"}, {"area_id": "2631", "area_name": "金堂县"}, {
        "area_id": "2632",
        "area_name": "双流县"
      }, {"area_id": "2633", "area_name": "郫县"}, {"area_id": "2634", "area_name": "大邑县"}, {
        "area_id": "2635",
        "area_name": "蒲江县"
      }, {"area_id": "2636", "area_name": "新津县"}, {"area_id": "2637", "area_name": "都江堰市"}, {
        "area_id": "2638",
        "area_name": "彭州市"
      }, {"area_id": "2639", "area_name": "邛崃市"}, {"area_id": "2640", "area_name": "崇州市"}],
      "277": [{"area_id": "2641", "area_name": "市辖区"}, {"area_id": "2642", "area_name": "自流井区"}, {
        "area_id": "2643",
        "area_name": "贡井区"
      }, {"area_id": "2644", "area_name": "大安区"}, {"area_id": "2645", "area_name": "沿滩区"}, {
        "area_id": "2646",
        "area_name": "荣县"
      }, {"area_id": "2647", "area_name": "富顺县"}],
      "278": [{"area_id": "2648", "area_name": "市辖区"}, {"area_id": "2649", "area_name": "东区"}, {
        "area_id": "2650",
        "area_name": "西区"
      }, {"area_id": "2651", "area_name": "仁和区"}, {"area_id": "2652", "area_name": "米易县"}, {
        "area_id": "2653",
        "area_name": "盐边县"
      }],
      "279": [{"area_id": "2654", "area_name": "市辖区"}, {"area_id": "2655", "area_name": "江阳区"}, {
        "area_id": "2656",
        "area_name": "纳溪区"
      }, {"area_id": "2657", "area_name": "龙马潭区"}, {"area_id": "2658", "area_name": "泸县"}, {
        "area_id": "2659",
        "area_name": "合江县"
      }, {"area_id": "2660", "area_name": "叙永县"}, {"area_id": "2661", "area_name": "古蔺县"}],
      "280": [{"area_id": "2662", "area_name": "市辖区"}, {"area_id": "2663", "area_name": "旌阳区"}, {
        "area_id": "2664",
        "area_name": "中江县"
      }, {"area_id": "2665", "area_name": "罗江县"}, {"area_id": "2666", "area_name": "广汉市"}, {
        "area_id": "2667",
        "area_name": "什邡市"
      }, {"area_id": "2668", "area_name": "绵竹市"}],
      "281": [{"area_id": "2669", "area_name": "市辖区"}, {"area_id": "2670", "area_name": "涪城区"}, {
        "area_id": "2671",
        "area_name": "游仙区"
      }, {"area_id": "2672", "area_name": "三台县"}, {"area_id": "2673", "area_name": "盐亭县"}, {
        "area_id": "2674",
        "area_name": "安县"
      }, {"area_id": "2675", "area_name": "梓潼县"}, {"area_id": "2676", "area_name": "北川羌族自治县"}, {
        "area_id": "2677",
        "area_name": "平武县"
      }, {"area_id": "2678", "area_name": "江油市"}],
      "282": [{"area_id": "2679", "area_name": "市辖区"}, {"area_id": "2680", "area_name": "利州区"}, {
        "area_id": "2681",
        "area_name": "昭化区"
      }, {"area_id": "2682", "area_name": "朝天区"}, {"area_id": "2683", "area_name": "旺苍县"}, {
        "area_id": "2684",
        "area_name": "青川县"
      }, {"area_id": "2685", "area_name": "剑阁县"}, {"area_id": "2686", "area_name": "苍溪县"}],
      "283": [{"area_id": "2687", "area_name": "市辖区"}, {"area_id": "2688", "area_name": "船山区"}, {
        "area_id": "2689",
        "area_name": "安居区"
      }, {"area_id": "2690", "area_name": "蓬溪县"}, {"area_id": "2691", "area_name": "射洪县"}, {
        "area_id": "2692",
        "area_name": "大英县"
      }],
      "284": [{"area_id": "2693", "area_name": "市辖区"}, {"area_id": "2694", "area_name": "市中区"}, {
        "area_id": "2695",
        "area_name": "东兴区"
      }, {"area_id": "2696", "area_name": "威远县"}, {"area_id": "2697", "area_name": "资中县"}, {
        "area_id": "2698",
        "area_name": "隆昌县"
      }],
      "285": [{"area_id": "2699", "area_name": "市辖区"}, {"area_id": "2700", "area_name": "市中区"}, {
        "area_id": "2701",
        "area_name": "沙湾区"
      }, {"area_id": "2702", "area_name": "五通桥区"}, {"area_id": "2703", "area_name": "金口河区"}, {
        "area_id": "2704",
        "area_name": "犍为县"
      }, {"area_id": "2705", "area_name": "井研县"}, {"area_id": "2706", "area_name": "夹江县"}, {
        "area_id": "2707",
        "area_name": "沐川县"
      }, {"area_id": "2708", "area_name": "峨边彝族自治县"}, {"area_id": "2709", "area_name": "马边彝族自治县"}, {
        "area_id": "2710",
        "area_name": "峨眉山市"
      }],
      "286": [{"area_id": "2711", "area_name": "市辖区"}, {"area_id": "2712", "area_name": "顺庆区"}, {
        "area_id": "2713",
        "area_name": "高坪区"
      }, {"area_id": "2714", "area_name": "嘉陵区"}, {"area_id": "2715", "area_name": "南部县"}, {
        "area_id": "2716",
        "area_name": "营山县"
      }, {"area_id": "2717", "area_name": "蓬安县"}, {"area_id": "2718", "area_name": "仪陇县"}, {
        "area_id": "2719",
        "area_name": "西充县"
      }, {"area_id": "2720", "area_name": "阆中市"}],
      "287": [{"area_id": "2721", "area_name": "市辖区"}, {"area_id": "2722", "area_name": "东坡区"}, {
        "area_id": "2723",
        "area_name": "彭山区"
      }, {"area_id": "2724", "area_name": "仁寿县"}, {"area_id": "2725", "area_name": "洪雅县"}, {
        "area_id": "2726",
        "area_name": "丹棱县"
      }, {"area_id": "2727", "area_name": "青神县"}],
      "288": [{"area_id": "2728", "area_name": "市辖区"}, {"area_id": "2729", "area_name": "翠屏区"}, {
        "area_id": "2730",
        "area_name": "南溪区"
      }, {"area_id": "2731", "area_name": "宜宾县"}, {"area_id": "2732", "area_name": "江安县"}, {
        "area_id": "2733",
        "area_name": "长宁县"
      }, {"area_id": "2734", "area_name": "高县"}, {"area_id": "2735", "area_name": "珙县"}, {
        "area_id": "2736",
        "area_name": "筠连县"
      }, {"area_id": "2737", "area_name": "兴文县"}, {"area_id": "2738", "area_name": "屏山县"}],
      "289": [{"area_id": "2739", "area_name": "市辖区"}, {"area_id": "2740", "area_name": "广安区"}, {
        "area_id": "2741",
        "area_name": "前锋区"
      }, {"area_id": "2742", "area_name": "岳池县"}, {"area_id": "2743", "area_name": "武胜县"}, {
        "area_id": "2744",
        "area_name": "邻水县"
      }, {"area_id": "2745", "area_name": "华蓥市"}],
      "290": [{"area_id": "2746", "area_name": "市辖区"}, {"area_id": "2747", "area_name": "通川区"}, {
        "area_id": "2748",
        "area_name": "达川区"
      }, {"area_id": "2749", "area_name": "宣汉县"}, {"area_id": "2750", "area_name": "开江县"}, {
        "area_id": "2751",
        "area_name": "大竹县"
      }, {"area_id": "2752", "area_name": "渠县"}, {"area_id": "2753", "area_name": "万源市"}],
      "291": [{"area_id": "2756", "area_name": "名山区"}, {"area_id": "2757", "area_name": "荥经县"}, {
        "area_id": "2758",
        "area_name": "汉源县"
      }, {"area_id": "2759", "area_name": "石棉县"}, {"area_id": "2760", "area_name": "天全县"}, {
        "area_id": "2761",
        "area_name": "芦山县"
      }, {"area_id": "2762", "area_name": "宝兴县"}, {"area_id": "2754", "area_name": "市辖区"}, {
        "area_id": "2755",
        "area_name": "雨城区"
      }],
      "292": [{"area_id": "2763", "area_name": "市辖区"}, {"area_id": "2764", "area_name": "巴州区"}, {
        "area_id": "2765",
        "area_name": "恩阳区"
      }, {"area_id": "2766", "area_name": "通江县"}, {"area_id": "2767", "area_name": "南江县"}, {
        "area_id": "2768",
        "area_name": "平昌县"
      }],
      "293": [{"area_id": "2769", "area_name": "市辖区"}, {"area_id": "2770", "area_name": "雁江区"}, {
        "area_id": "2771",
        "area_name": "安岳县"
      }, {"area_id": "2772", "area_name": "乐至县"}, {"area_id": "2773", "area_name": "简阳市"}],
      "294": [{"area_id": "2774", "area_name": "汶川县"}, {"area_id": "2775", "area_name": "理县"}, {
        "area_id": "2776",
        "area_name": "茂县"
      }, {"area_id": "2777", "area_name": "松潘县"}, {"area_id": "2778", "area_name": "九寨沟县"}, {
        "area_id": "2779",
        "area_name": "金川县"
      }, {"area_id": "2780", "area_name": "小金县"}, {"area_id": "2781", "area_name": "黑水县"}, {
        "area_id": "2782",
        "area_name": "马尔康县"
      }, {"area_id": "2783", "area_name": "壤塘县"}, {"area_id": "2784", "area_name": "阿坝县"}, {
        "area_id": "2785",
        "area_name": "若尔盖县"
      }, {"area_id": "2786", "area_name": "红原县"}],
      "295": [{"area_id": "2787", "area_name": "康定市"}, {"area_id": "2788", "area_name": "泸定县"}, {
        "area_id": "2789",
        "area_name": "丹巴县"
      }, {"area_id": "2790", "area_name": "九龙县"}, {"area_id": "2791", "area_name": "雅江县"}, {
        "area_id": "2792",
        "area_name": "道孚县"
      }, {"area_id": "2793", "area_name": "炉霍县"}, {"area_id": "2794", "area_name": "甘孜县"}, {
        "area_id": "2795",
        "area_name": "新龙县"
      }, {"area_id": "2796", "area_name": "德格县"}, {"area_id": "2797", "area_name": "白玉县"}, {
        "area_id": "2798",
        "area_name": "石渠县"
      }, {"area_id": "2799", "area_name": "色达县"}, {"area_id": "2800", "area_name": "理塘县"}, {
        "area_id": "2801",
        "area_name": "巴塘县"
      }, {"area_id": "2802", "area_name": "乡城县"}, {"area_id": "2803", "area_name": "稻城县"}, {
        "area_id": "2804",
        "area_name": "得荣县"
      }],
      "296": [{"area_id": "2805", "area_name": "西昌市"}, {"area_id": "2806", "area_name": "木里藏族自治县"}, {
        "area_id": "2807",
        "area_name": "盐源县"
      }, {"area_id": "2808", "area_name": "德昌县"}, {"area_id": "2809", "area_name": "会理县"}, {
        "area_id": "2810",
        "area_name": "会东县"
      }, {"area_id": "2811", "area_name": "宁南县"}, {"area_id": "2812", "area_name": "普格县"}, {
        "area_id": "2813",
        "area_name": "布拖县"
      }, {"area_id": "2814", "area_name": "金阳县"}, {"area_id": "2815", "area_name": "昭觉县"}, {
        "area_id": "2816",
        "area_name": "喜德县"
      }, {"area_id": "2817", "area_name": "冕宁县"}, {"area_id": "2818", "area_name": "越西县"}, {
        "area_id": "2819",
        "area_name": "甘洛县"
      }, {"area_id": "2820", "area_name": "美姑县"}, {"area_id": "2821", "area_name": "雷波县"}],
      "297": [{"area_id": "2822", "area_name": "市辖区"}, {"area_id": "2823", "area_name": "南明区"}, {
        "area_id": "2824",
        "area_name": "云岩区"
      }, {"area_id": "2825", "area_name": "花溪区"}, {"area_id": "2826", "area_name": "乌当区"}, {
        "area_id": "2827",
        "area_name": "白云区"
      }, {"area_id": "2828", "area_name": "观山湖区"}, {"area_id": "2829", "area_name": "开阳县"}, {
        "area_id": "2830",
        "area_name": "息烽县"
      }, {"area_id": "2831", "area_name": "修文县"}, {"area_id": "2832", "area_name": "清镇市"}],
      "298": [{"area_id": "2833", "area_name": "钟山区"}, {"area_id": "2834", "area_name": "六枝特区"}, {
        "area_id": "2835",
        "area_name": "水城县"
      }, {"area_id": "2836", "area_name": "盘县"}],
      "299": [{"area_id": "2837", "area_name": "市辖区"}, {"area_id": "2838", "area_name": "红花岗区"}, {
        "area_id": "2839",
        "area_name": "汇川区"
      }, {"area_id": "2840", "area_name": "遵义县"}, {"area_id": "2841", "area_name": "桐梓县"}, {
        "area_id": "2842",
        "area_name": "绥阳县"
      }, {"area_id": "2843", "area_name": "正安县"}, {"area_id": "2844", "area_name": "道真仡佬族苗族自治县"}, {
        "area_id": "2845",
        "area_name": "务川仡佬族苗族自治县"
      }, {"area_id": "2846", "area_name": "凤冈县"}, {"area_id": "2847", "area_name": "湄潭县"}, {
        "area_id": "2848",
        "area_name": "余庆县"
      }, {"area_id": "2849", "area_name": "习水县"}, {"area_id": "2850", "area_name": "赤水市"}, {
        "area_id": "2851",
        "area_name": "仁怀市"
      }],
      "300": [{"area_id": "2852", "area_name": "市辖区"}, {"area_id": "2853", "area_name": "西秀区"}, {
        "area_id": "2854",
        "area_name": "平坝区"
      }, {"area_id": "2855", "area_name": "普定县"}, {"area_id": "2856", "area_name": "镇宁布依族苗族自治县"}, {
        "area_id": "2857",
        "area_name": "关岭布依族苗族自治县"
      }, {"area_id": "2858", "area_name": "紫云苗族布依族自治县"}],
      "301": [{"area_id": "2859", "area_name": "市辖区"}, {"area_id": "2860", "area_name": "七星关区"}, {
        "area_id": "2861",
        "area_name": "大方县"
      }, {"area_id": "2862", "area_name": "黔西县"}, {"area_id": "2863", "area_name": "金沙县"}, {
        "area_id": "2864",
        "area_name": "织金县"
      }, {"area_id": "2865", "area_name": "纳雍县"}, {"area_id": "2866", "area_name": "威宁彝族回族苗族自治县"}, {
        "area_id": "2867",
        "area_name": "赫章县"
      }],
      "302": [{"area_id": "2868", "area_name": "市辖区"}, {"area_id": "2869", "area_name": "碧江区"}, {
        "area_id": "2870",
        "area_name": "万山区"
      }, {"area_id": "2871", "area_name": "江口县"}, {"area_id": "2872", "area_name": "玉屏侗族自治县"}, {
        "area_id": "2873",
        "area_name": "石阡县"
      }, {"area_id": "2874", "area_name": "思南县"}, {"area_id": "2875", "area_name": "印江土家族苗族自治县"}, {
        "area_id": "2876",
        "area_name": "德江县"
      }, {"area_id": "2877", "area_name": "沿河土家族自治县"}, {"area_id": "2878", "area_name": "松桃苗族自治县"}],
      "303": [{"area_id": "2879", "area_name": "兴义市"}, {"area_id": "2880", "area_name": "兴仁县"}, {
        "area_id": "2881",
        "area_name": "普安县"
      }, {"area_id": "2882", "area_name": "晴隆县"}, {"area_id": "2883", "area_name": "贞丰县"}, {
        "area_id": "2884",
        "area_name": "望谟县"
      }, {"area_id": "2885", "area_name": "册亨县"}, {"area_id": "2886", "area_name": "安龙县"}],
      "304": [{"area_id": "2887", "area_name": "凯里市"}, {"area_id": "2888", "area_name": "黄平县"}, {
        "area_id": "2889",
        "area_name": "施秉县"
      }, {"area_id": "2890", "area_name": "三穗县"}, {"area_id": "2891", "area_name": "镇远县"}, {
        "area_id": "2892",
        "area_name": "岑巩县"
      }, {"area_id": "2893", "area_name": "天柱县"}, {"area_id": "2894", "area_name": "锦屏县"}, {
        "area_id": "2895",
        "area_name": "剑河县"
      }, {"area_id": "2896", "area_name": "台江县"}, {"area_id": "2897", "area_name": "黎平县"}, {
        "area_id": "2898",
        "area_name": "榕江县"
      }, {"area_id": "2899", "area_name": "从江县"}, {"area_id": "2900", "area_name": "雷山县"}, {
        "area_id": "2901",
        "area_name": "麻江县"
      }, {"area_id": "2902", "area_name": "丹寨县"}],
      "305": [{"area_id": "2903", "area_name": "都匀市"}, {"area_id": "2904", "area_name": "福泉市"}, {
        "area_id": "2905",
        "area_name": "荔波县"
      }, {"area_id": "2906", "area_name": "贵定县"}, {"area_id": "2907", "area_name": "瓮安县"}, {
        "area_id": "2908",
        "area_name": "独山县"
      }, {"area_id": "2909", "area_name": "平塘县"}, {"area_id": "2910", "area_name": "罗甸县"}, {
        "area_id": "2911",
        "area_name": "长顺县"
      }, {"area_id": "2912", "area_name": "龙里县"}, {"area_id": "2913", "area_name": "惠水县"}, {
        "area_id": "2914",
        "area_name": "三都水族自治县"
      }],
      "306": [{"area_id": "2915", "area_name": "市辖区"}, {"area_id": "2916", "area_name": "五华区"}, {
        "area_id": "2917",
        "area_name": "盘龙区"
      }, {"area_id": "2918", "area_name": "官渡区"}, {"area_id": "2919", "area_name": "西山区"}, {
        "area_id": "2920",
        "area_name": "东川区"
      }, {"area_id": "2921", "area_name": "呈贡区"}, {"area_id": "2922", "area_name": "晋宁县"}, {
        "area_id": "2923",
        "area_name": "富民县"
      }, {"area_id": "2924", "area_name": "宜良县"}, {"area_id": "2925", "area_name": "石林彝族自治县"}, {
        "area_id": "2926",
        "area_name": "嵩明县"
      }, {"area_id": "2927", "area_name": "禄劝彝族苗族自治县"}, {
        "area_id": "2928",
        "area_name": "寻甸回族彝族自治县"
      }, {"area_id": "2929", "area_name": "安宁市"}],
      "307": [{"area_id": "2930", "area_name": "市辖区"}, {"area_id": "2931", "area_name": "麒麟区"}, {
        "area_id": "2932",
        "area_name": "马龙县"
      }, {"area_id": "2933", "area_name": "陆良县"}, {"area_id": "2934", "area_name": "师宗县"}, {
        "area_id": "2935",
        "area_name": "罗平县"
      }, {"area_id": "2936", "area_name": "富源县"}, {"area_id": "2937", "area_name": "会泽县"}, {
        "area_id": "2938",
        "area_name": "沾益县"
      }, {"area_id": "2939", "area_name": "宣威市"}],
      "308": [{"area_id": "2940", "area_name": "市辖区"}, {"area_id": "2941", "area_name": "红塔区"}, {
        "area_id": "2942",
        "area_name": "江川县"
      }, {"area_id": "2943", "area_name": "澄江县"}, {"area_id": "2944", "area_name": "通海县"}, {
        "area_id": "2945",
        "area_name": "华宁县"
      }, {"area_id": "2946", "area_name": "易门县"}, {"area_id": "2947", "area_name": "峨山彝族自治县"}, {
        "area_id": "2948",
        "area_name": "新平彝族傣族自治县"
      }, {"area_id": "2949", "area_name": "元江哈尼族彝族傣族自治县"}],
      "309": [{"area_id": "2950", "area_name": "市辖区"}, {"area_id": "2951", "area_name": "隆阳区"}, {
        "area_id": "2952",
        "area_name": "施甸县"
      }, {"area_id": "2953", "area_name": "龙陵县"}, {"area_id": "2954", "area_name": "昌宁县"}, {
        "area_id": "2955",
        "area_name": "腾冲市"
      }],
      "310": [{"area_id": "2956", "area_name": "市辖区"}, {"area_id": "2957", "area_name": "昭阳区"}, {
        "area_id": "2958",
        "area_name": "鲁甸县"
      }, {"area_id": "2959", "area_name": "巧家县"}, {"area_id": "2960", "area_name": "盐津县"}, {
        "area_id": "2961",
        "area_name": "大关县"
      }, {"area_id": "2962", "area_name": "永善县"}, {"area_id": "2963", "area_name": "绥江县"}, {
        "area_id": "2964",
        "area_name": "镇雄县"
      }, {"area_id": "2965", "area_name": "彝良县"}, {"area_id": "2966", "area_name": "威信县"}, {
        "area_id": "2967",
        "area_name": "水富县"
      }],
      "311": [{"area_id": "2968", "area_name": "市辖区"}, {"area_id": "2969", "area_name": "古城区"}, {
        "area_id": "2970",
        "area_name": "玉龙纳西族自治县"
      }, {"area_id": "2971", "area_name": "永胜县"}, {"area_id": "2972", "area_name": "华坪县"}, {
        "area_id": "2973",
        "area_name": "宁蒗彝族自治县"
      }],
      "312": [{"area_id": "2974", "area_name": "市辖区"}, {"area_id": "2975", "area_name": "思茅区"}, {
        "area_id": "2976",
        "area_name": "宁洱哈尼族彝族自治县"
      }, {"area_id": "2977", "area_name": "墨江哈尼族自治县"}, {"area_id": "2978", "area_name": "景东彝族自治县"}, {
        "area_id": "2979",
        "area_name": "景谷傣族彝族自治县"
      }, {"area_id": "2980", "area_name": "镇沅彝族哈尼族拉祜族自治县"}, {
        "area_id": "2981",
        "area_name": "江城哈尼族彝族自治县"
      }, {"area_id": "2982", "area_name": "孟连傣族拉祜族佤族自治县"}, {
        "area_id": "2983",
        "area_name": "澜沧拉祜族自治县"
      }, {"area_id": "2984", "area_name": "西盟佤族自治县"}],
      "313": [{"area_id": "2985", "area_name": "市辖区"}, {"area_id": "2986", "area_name": "临翔区"}, {
        "area_id": "2987",
        "area_name": "凤庆县"
      }, {"area_id": "2988", "area_name": "云县"}, {"area_id": "2989", "area_name": "永德县"}, {
        "area_id": "2990",
        "area_name": "镇康县"
      }, {"area_id": "2991", "area_name": "双江拉祜族佤族布朗族傣族自治县"}, {
        "area_id": "2992",
        "area_name": "耿马傣族佤族自治县"
      }, {"area_id": "2993", "area_name": "沧源佤族自治县"}],
      "314": [{"area_id": "2994", "area_name": "楚雄市"}, {"area_id": "2995", "area_name": "双柏县"}, {
        "area_id": "2996",
        "area_name": "牟定县"
      }, {"area_id": "2997", "area_name": "南华县"}, {"area_id": "2998", "area_name": "姚安县"}, {
        "area_id": "2999",
        "area_name": "大姚县"
      }, {"area_id": "3000", "area_name": "永仁县"}, {"area_id": "3001", "area_name": "元谋县"}, {
        "area_id": "3002",
        "area_name": "武定县"
      }, {"area_id": "3003", "area_name": "禄丰县"}],
      "315": [{"area_id": "3004", "area_name": "个旧市"}, {"area_id": "3005", "area_name": "开远市"}, {
        "area_id": "3006",
        "area_name": "蒙自市"
      }, {"area_id": "3007", "area_name": "弥勒市"}, {"area_id": "3008", "area_name": "屏边苗族自治县"}, {
        "area_id": "3009",
        "area_name": "建水县"
      }, {"area_id": "3010", "area_name": "石屏县"}, {"area_id": "3011", "area_name": "泸西县"}, {
        "area_id": "3012",
        "area_name": "元阳县"
      }, {"area_id": "3013", "area_name": "红河县"}, {"area_id": "3014", "area_name": "金平苗族瑶族傣族自治县"}, {
        "area_id": "3015",
        "area_name": "绿春县"
      }, {"area_id": "3016", "area_name": "河口瑶族自治县"}],
      "316": [{"area_id": "3017", "area_name": "文山市"}, {"area_id": "3018", "area_name": "砚山县"}, {
        "area_id": "3019",
        "area_name": "西畴县"
      }, {"area_id": "3020", "area_name": "麻栗坡县"}, {"area_id": "3021", "area_name": "马关县"}, {
        "area_id": "3022",
        "area_name": "丘北县"
      }, {"area_id": "3023", "area_name": "广南县"}, {"area_id": "3024", "area_name": "富宁县"}],
      "317": [{"area_id": "3025", "area_name": "景洪市"}, {"area_id": "3026", "area_name": "勐海县"}, {
        "area_id": "3027",
        "area_name": "勐腊县"
      }],
      "318": [{"area_id": "3028", "area_name": "大理市"}, {"area_id": "3029", "area_name": "漾濞彝族自治县"}, {
        "area_id": "3030",
        "area_name": "祥云县"
      }, {"area_id": "3031", "area_name": "宾川县"}, {"area_id": "3032", "area_name": "弥渡县"}, {
        "area_id": "3033",
        "area_name": "南涧彝族自治县"
      }, {"area_id": "3034", "area_name": "巍山彝族回族自治县"}, {"area_id": "3035", "area_name": "永平县"}, {
        "area_id": "3036",
        "area_name": "云龙县"
      }, {"area_id": "3037", "area_name": "洱源县"}, {"area_id": "3038", "area_name": "剑川县"}, {
        "area_id": "3039",
        "area_name": "鹤庆县"
      }],
      "319": [{"area_id": "3040", "area_name": "瑞丽市"}, {"area_id": "3041", "area_name": "芒市"}, {
        "area_id": "3042",
        "area_name": "梁河县"
      }, {"area_id": "3043", "area_name": "盈江县"}, {"area_id": "3044", "area_name": "陇川县"}],
      "320": [{"area_id": "3045", "area_name": "泸水县"}, {"area_id": "3046", "area_name": "福贡县"}, {
        "area_id": "3047",
        "area_name": "贡山独龙族怒族自治县"
      }, {"area_id": "3048", "area_name": "兰坪白族普米族自治县"}],
      "321": [{"area_id": "3049", "area_name": "香格里拉市"}, {"area_id": "3050", "area_name": "德钦县"}, {
        "area_id": "3051",
        "area_name": "维西傈僳族自治县"
      }],
      "322": [{"area_id": "3052", "area_name": "市辖区"}, {"area_id": "3053", "area_name": "城关区"}, {
        "area_id": "3054",
        "area_name": "林周县"
      }, {"area_id": "3055", "area_name": "当雄县"}, {"area_id": "3056", "area_name": "尼木县"}, {
        "area_id": "3057",
        "area_name": "曲水县"
      }, {"area_id": "3058", "area_name": "堆龙德庆县"}, {"area_id": "3059", "area_name": "达孜县"}, {
        "area_id": "3060",
        "area_name": "墨竹工卡县"
      }],
      "323": [{"area_id": "3061", "area_name": "桑珠孜区"}, {"area_id": "3062", "area_name": "南木林县"}, {
        "area_id": "3063",
        "area_name": "江孜县"
      }, {"area_id": "3064", "area_name": "定日县"}, {"area_id": "3065", "area_name": "萨迦县"}, {
        "area_id": "3066",
        "area_name": "拉孜县"
      }, {"area_id": "3067", "area_name": "昂仁县"}, {"area_id": "3068", "area_name": "谢通门县"}, {
        "area_id": "3069",
        "area_name": "白朗县"
      }, {"area_id": "3070", "area_name": "仁布县"}, {"area_id": "3071", "area_name": "康马县"}, {
        "area_id": "3072",
        "area_name": "定结县"
      }, {"area_id": "3073", "area_name": "仲巴县"}, {"area_id": "3074", "area_name": "亚东县"}, {
        "area_id": "3075",
        "area_name": "吉隆县"
      }, {"area_id": "3076", "area_name": "聂拉木县"}, {"area_id": "3077", "area_name": "萨嘎县"}, {
        "area_id": "3078",
        "area_name": "岗巴县"
      }],
      "324": [{"area_id": "3079", "area_name": "卡若区"}, {"area_id": "3080", "area_name": "江达县"}, {
        "area_id": "3081",
        "area_name": "贡觉县"
      }, {"area_id": "3082", "area_name": "类乌齐县"}, {"area_id": "3083", "area_name": "丁青县"}, {
        "area_id": "3084",
        "area_name": "察雅县"
      }, {"area_id": "3085", "area_name": "八宿县"}, {"area_id": "3086", "area_name": "左贡县"}, {
        "area_id": "3087",
        "area_name": "芒康县"
      }, {"area_id": "3088", "area_name": "洛隆县"}, {"area_id": "3089", "area_name": "边坝县"}],
      "325": [{"area_id": "3090", "area_name": "巴宜区"}, {"area_id": "3091", "area_name": "工布江达县"}, {
        "area_id": "3092",
        "area_name": "米林县"
      }, {"area_id": "3093", "area_name": "墨脱县"}, {"area_id": "3094", "area_name": "波密县"}, {
        "area_id": "3095",
        "area_name": "察隅县"
      }, {"area_id": "3096", "area_name": "朗县"}],
      "326": [{"area_id": "3097", "area_name": "乃东县"}, {"area_id": "3098", "area_name": "扎囊县"}, {
        "area_id": "3099",
        "area_name": "贡嘎县"
      }, {"area_id": "3100", "area_name": "桑日县"}, {"area_id": "3101", "area_name": "琼结县"}, {
        "area_id": "3102",
        "area_name": "曲松县"
      }, {"area_id": "3103", "area_name": "措美县"}, {"area_id": "3104", "area_name": "洛扎县"}, {
        "area_id": "3105",
        "area_name": "加查县"
      }, {"area_id": "3106", "area_name": "隆子县"}, {"area_id": "3107", "area_name": "错那县"}, {
        "area_id": "3108",
        "area_name": "浪卡子县"
      }],
      "327": [{"area_id": "3109", "area_name": "那曲县"}, {"area_id": "3110", "area_name": "嘉黎县"}, {
        "area_id": "3111",
        "area_name": "比如县"
      }, {"area_id": "3112", "area_name": "聂荣县"}, {"area_id": "3113", "area_name": "安多县"}, {
        "area_id": "3114",
        "area_name": "申扎县"
      }, {"area_id": "3115", "area_name": "索县"}, {"area_id": "3116", "area_name": "班戈县"}, {
        "area_id": "3117",
        "area_name": "巴青县"
      }, {"area_id": "3118", "area_name": "尼玛县"}, {"area_id": "3119", "area_name": "双湖县"}],
      "328": [{"area_id": "3120", "area_name": "普兰县"}, {"area_id": "3121", "area_name": "札达县"}, {
        "area_id": "3122",
        "area_name": "噶尔县"
      }, {"area_id": "3123", "area_name": "日土县"}, {"area_id": "3124", "area_name": "革吉县"}, {
        "area_id": "3125",
        "area_name": "改则县"
      }, {"area_id": "3126", "area_name": "措勤县"}],
      "329": [{"area_id": "3127", "area_name": "市辖区"}, {"area_id": "3128", "area_name": "新城区"}, {
        "area_id": "3129",
        "area_name": "碑林区"
      }, {"area_id": "3130", "area_name": "莲湖区"}, {"area_id": "3131", "area_name": "灞桥区"}, {
        "area_id": "3132",
        "area_name": "未央区"
      }, {"area_id": "3133", "area_name": "雁塔区"}, {"area_id": "3134", "area_name": "阎良区"}, {
        "area_id": "3135",
        "area_name": "临潼区"
      }, {"area_id": "3136", "area_name": "长安区"}, {"area_id": "3137", "area_name": "高陵区"}, {
        "area_id": "3138",
        "area_name": "蓝田县"
      }, {"area_id": "3139", "area_name": "周至县"}, {"area_id": "3140", "area_name": "户县"}],
      "330": [{"area_id": "3141", "area_name": "市辖区"}, {"area_id": "3142", "area_name": "王益区"}, {
        "area_id": "3143",
        "area_name": "印台区"
      }, {"area_id": "3144", "area_name": "耀州区"}, {"area_id": "3145", "area_name": "宜君县"}],
      "331": [{"area_id": "3146", "area_name": "市辖区"}, {"area_id": "3147", "area_name": "渭滨区"}, {
        "area_id": "3148",
        "area_name": "金台区"
      }, {"area_id": "3149", "area_name": "陈仓区"}, {"area_id": "3150", "area_name": "凤翔县"}, {
        "area_id": "3151",
        "area_name": "岐山县"
      }, {"area_id": "3152", "area_name": "扶风县"}, {"area_id": "3153", "area_name": "眉县"}, {
        "area_id": "3154",
        "area_name": "陇县"
      }, {"area_id": "3155", "area_name": "千阳县"}, {"area_id": "3156", "area_name": "麟游县"}, {
        "area_id": "3157",
        "area_name": "凤县"
      }, {"area_id": "3158", "area_name": "太白县"}],
      "332": [{"area_id": "3159", "area_name": "市辖区"}, {"area_id": "3160", "area_name": "秦都区"}, {
        "area_id": "3161",
        "area_name": "杨陵区"
      }, {"area_id": "3162", "area_name": "渭城区"}, {"area_id": "3163", "area_name": "三原县"}, {
        "area_id": "3164",
        "area_name": "泾阳县"
      }, {"area_id": "3165", "area_name": "乾县"}, {"area_id": "3166", "area_name": "礼泉县"}, {
        "area_id": "3167",
        "area_name": "永寿县"
      }, {"area_id": "3168", "area_name": "彬县"}, {"area_id": "3169", "area_name": "长武县"}, {
        "area_id": "3170",
        "area_name": "旬邑县"
      }, {"area_id": "3171", "area_name": "淳化县"}, {"area_id": "3172", "area_name": "武功县"}, {
        "area_id": "3173",
        "area_name": "兴平市"
      }],
      "333": [{"area_id": "3174", "area_name": "市辖区"}, {"area_id": "3175", "area_name": "临渭区"}, {
        "area_id": "3176",
        "area_name": "华县"
      }, {"area_id": "3177", "area_name": "潼关县"}, {"area_id": "3178", "area_name": "大荔县"}, {
        "area_id": "3179",
        "area_name": "合阳县"
      }, {"area_id": "3180", "area_name": "澄城县"}, {"area_id": "3181", "area_name": "蒲城县"}, {
        "area_id": "3182",
        "area_name": "白水县"
      }, {"area_id": "3183", "area_name": "富平县"}, {"area_id": "3184", "area_name": "韩城市"}, {
        "area_id": "3185",
        "area_name": "华阴市"
      }],
      "334": [{"area_id": "3186", "area_name": "市辖区"}, {"area_id": "3187", "area_name": "宝塔区"}, {
        "area_id": "3188",
        "area_name": "延长县"
      }, {"area_id": "3189", "area_name": "延川县"}, {"area_id": "3190", "area_name": "子长县"}, {
        "area_id": "3191",
        "area_name": "安塞县"
      }, {"area_id": "3192", "area_name": "志丹县"}, {"area_id": "3193", "area_name": "吴起县"}, {
        "area_id": "3194",
        "area_name": "甘泉县"
      }, {"area_id": "3195", "area_name": "富县"}, {"area_id": "3196", "area_name": "洛川县"}, {
        "area_id": "3197",
        "area_name": "宜川县"
      }, {"area_id": "3198", "area_name": "黄龙县"}, {"area_id": "3199", "area_name": "黄陵县"}],
      "335": [{"area_id": "3200", "area_name": "市辖区"}, {"area_id": "3201", "area_name": "汉台区"}, {
        "area_id": "3202",
        "area_name": "南郑县"
      }, {"area_id": "3203", "area_name": "城固县"}, {"area_id": "3204", "area_name": "洋县"}, {
        "area_id": "3205",
        "area_name": "西乡县"
      }, {"area_id": "3206", "area_name": "勉县"}, {"area_id": "3207", "area_name": "宁强县"}, {
        "area_id": "3208",
        "area_name": "略阳县"
      }, {"area_id": "3209", "area_name": "镇巴县"}, {"area_id": "3210", "area_name": "留坝县"}, {
        "area_id": "3211",
        "area_name": "佛坪县"
      }],
      "336": [{"area_id": "3212", "area_name": "市辖区"}, {"area_id": "3213", "area_name": "榆阳区"}, {
        "area_id": "3214",
        "area_name": "神木县"
      }, {"area_id": "3215", "area_name": "府谷县"}, {"area_id": "3216", "area_name": "横山县"}, {
        "area_id": "3217",
        "area_name": "靖边县"
      }, {"area_id": "3218", "area_name": "定边县"}, {"area_id": "3219", "area_name": "绥德县"}, {
        "area_id": "3220",
        "area_name": "米脂县"
      }, {"area_id": "3221", "area_name": "佳县"}, {"area_id": "3222", "area_name": "吴堡县"}, {
        "area_id": "3223",
        "area_name": "清涧县"
      }, {"area_id": "3224", "area_name": "子洲县"}],
      "337": [{"area_id": "3225", "area_name": "市辖区"}, {"area_id": "3226", "area_name": "汉滨区"}, {
        "area_id": "3227",
        "area_name": "汉阴县"
      }, {"area_id": "3228", "area_name": "石泉县"}, {"area_id": "3229", "area_name": "宁陕县"}, {
        "area_id": "3230",
        "area_name": "紫阳县"
      }, {"area_id": "3231", "area_name": "岚皋县"}, {"area_id": "3232", "area_name": "平利县"}, {
        "area_id": "3233",
        "area_name": "镇坪县"
      }, {"area_id": "3234", "area_name": "旬阳县"}, {"area_id": "3235", "area_name": "白河县"}],
      "338": [{"area_id": "3236", "area_name": "市辖区"}, {"area_id": "3237", "area_name": "商州区"}, {
        "area_id": "3238",
        "area_name": "洛南县"
      }, {"area_id": "3239", "area_name": "丹凤县"}, {"area_id": "3240", "area_name": "商南县"}, {
        "area_id": "3241",
        "area_name": "山阳县"
      }, {"area_id": "3242", "area_name": "镇安县"}, {"area_id": "3243", "area_name": "柞水县"}],
      "339": [{"area_id": "3244", "area_name": "市辖区"}, {"area_id": "3245", "area_name": "城关区"}, {
        "area_id": "3246",
        "area_name": "七里河区"
      }, {"area_id": "3247", "area_name": "西固区"}, {"area_id": "3248", "area_name": "安宁区"}, {
        "area_id": "3249",
        "area_name": "红古区"
      }, {"area_id": "3250", "area_name": "永登县"}, {"area_id": "3251", "area_name": "皋兰县"}, {
        "area_id": "3252",
        "area_name": "榆中县"
      }],
      "340": [{"area_id": "3253", "area_name": "市辖区"}],
      "341": [{"area_id": "3254", "area_name": "市辖区"}, {"area_id": "3255", "area_name": "金川区"}, {
        "area_id": "3256",
        "area_name": "永昌县"
      }],
      "342": [{"area_id": "3257", "area_name": "市辖区"}, {"area_id": "3258", "area_name": "白银区"}, {
        "area_id": "3259",
        "area_name": "平川区"
      }, {"area_id": "3260", "area_name": "靖远县"}, {"area_id": "3261", "area_name": "会宁县"}, {
        "area_id": "3262",
        "area_name": "景泰县"
      }],
      "343": [{"area_id": "3263", "area_name": "市辖区"}, {"area_id": "3264", "area_name": "秦州区"}, {
        "area_id": "3265",
        "area_name": "麦积区"
      }, {"area_id": "3266", "area_name": "清水县"}, {"area_id": "3267", "area_name": "秦安县"}, {
        "area_id": "3268",
        "area_name": "甘谷县"
      }, {"area_id": "3269", "area_name": "武山县"}, {"area_id": "3270", "area_name": "张家川回族自治县"}],
      "344": [{"area_id": "3271", "area_name": "市辖区"}, {"area_id": "3272", "area_name": "凉州区"}, {
        "area_id": "3273",
        "area_name": "民勤县"
      }, {"area_id": "3274", "area_name": "古浪县"}, {"area_id": "3275", "area_name": "天祝藏族自治县"}],
      "345": [{"area_id": "3276", "area_name": "市辖区"}, {"area_id": "3277", "area_name": "甘州区"}, {
        "area_id": "3278",
        "area_name": "肃南裕固族自治县"
      }, {"area_id": "3279", "area_name": "民乐县"}, {"area_id": "3280", "area_name": "临泽县"}, {
        "area_id": "3281",
        "area_name": "高台县"
      }, {"area_id": "3282", "area_name": "山丹县"}],
      "346": [{"area_id": "3283", "area_name": "市辖区"}, {"area_id": "3284", "area_name": "崆峒区"}, {
        "area_id": "3285",
        "area_name": "泾川县"
      }, {"area_id": "3286", "area_name": "灵台县"}, {"area_id": "3287", "area_name": "崇信县"}, {
        "area_id": "3288",
        "area_name": "华亭县"
      }, {"area_id": "3289", "area_name": "庄浪县"}, {"area_id": "3290", "area_name": "静宁县"}],
      "347": [{"area_id": "3291", "area_name": "市辖区"}, {"area_id": "3292", "area_name": "肃州区"}, {
        "area_id": "3293",
        "area_name": "金塔县"
      }, {"area_id": "3294", "area_name": "瓜州县"}, {"area_id": "3295", "area_name": "肃北蒙古族自治县"}, {
        "area_id": "3296",
        "area_name": "阿克塞哈萨克族自治县"
      }, {"area_id": "3297", "area_name": "玉门市"}, {"area_id": "3298", "area_name": "敦煌市"}],
      "348": [{"area_id": "3299", "area_name": "市辖区"}, {"area_id": "3300", "area_name": "西峰区"}, {
        "area_id": "3301",
        "area_name": "庆城县"
      }, {"area_id": "3302", "area_name": "环县"}, {"area_id": "3303", "area_name": "华池县"}, {
        "area_id": "3304",
        "area_name": "合水县"
      }, {"area_id": "3305", "area_name": "正宁县"}, {"area_id": "3306", "area_name": "宁县"}, {
        "area_id": "3307",
        "area_name": "镇原县"
      }],
      "349": [{"area_id": "3308", "area_name": "市辖区"}, {"area_id": "3309", "area_name": "安定区"}, {
        "area_id": "3310",
        "area_name": "通渭县"
      }, {"area_id": "3311", "area_name": "陇西县"}, {"area_id": "3312", "area_name": "渭源县"}, {
        "area_id": "3313",
        "area_name": "临洮县"
      }, {"area_id": "3314", "area_name": "漳县"}, {"area_id": "3315", "area_name": "岷县"}],
      "350": [{"area_id": "3316", "area_name": "市辖区"}, {"area_id": "3317", "area_name": "武都区"}, {
        "area_id": "3318",
        "area_name": "成县"
      }, {"area_id": "3319", "area_name": "文县"}, {"area_id": "3320", "area_name": "宕昌县"}, {
        "area_id": "3321",
        "area_name": "康县"
      }, {"area_id": "3322", "area_name": "西和县"}, {"area_id": "3323", "area_name": "礼县"}, {
        "area_id": "3324",
        "area_name": "徽县"
      }, {"area_id": "3325", "area_name": "两当县"}],
      "351": [{"area_id": "3326", "area_name": "临夏市"}, {"area_id": "3327", "area_name": "临夏县"}, {
        "area_id": "3328",
        "area_name": "康乐县"
      }, {"area_id": "3329", "area_name": "永靖县"}, {"area_id": "3330", "area_name": "广河县"}, {
        "area_id": "3331",
        "area_name": "和政县"
      }, {"area_id": "3332", "area_name": "东乡族自治县"}, {"area_id": "3333", "area_name": "积石山保安族东乡族撒拉族自治县"}],
      "352": [{"area_id": "3334", "area_name": "合作市"}, {"area_id": "3335", "area_name": "临潭县"}, {
        "area_id": "3336",
        "area_name": "卓尼县"
      }, {"area_id": "3337", "area_name": "舟曲县"}, {"area_id": "3338", "area_name": "迭部县"}, {
        "area_id": "3339",
        "area_name": "玛曲县"
      }, {"area_id": "3340", "area_name": "碌曲县"}, {"area_id": "3341", "area_name": "夏河县"}],
      "353": [{"area_id": "3342", "area_name": "市辖区"}, {"area_id": "3343", "area_name": "城东区"}, {
        "area_id": "3344",
        "area_name": "城中区"
      }, {"area_id": "3345", "area_name": "城西区"}, {"area_id": "3346", "area_name": "城北区"}, {
        "area_id": "3347",
        "area_name": "大通回族土族自治县"
      }, {"area_id": "3348", "area_name": "湟中县"}, {"area_id": "3349", "area_name": "湟源县"}],
      "354": [{"area_id": "3350", "area_name": "乐都区"}, {"area_id": "3351", "area_name": "平安区"}, {
        "area_id": "3352",
        "area_name": "民和回族土族自治县"
      }, {"area_id": "3353", "area_name": "互助土族自治县"}, {"area_id": "3354", "area_name": "化隆回族自治县"}, {
        "area_id": "3355",
        "area_name": "循化撒拉族自治县"
      }],
      "355": [{"area_id": "3356", "area_name": "门源回族自治县"}, {"area_id": "3357", "area_name": "祁连县"}, {
        "area_id": "3358",
        "area_name": "海晏县"
      }, {"area_id": "3359", "area_name": "刚察县"}],
      "356": [{"area_id": "3360", "area_name": "同仁县"}, {"area_id": "3361", "area_name": "尖扎县"}, {
        "area_id": "3362",
        "area_name": "泽库县"
      }, {"area_id": "3363", "area_name": "河南蒙古族自治县"}],
      "357": [{"area_id": "3364", "area_name": "共和县"}, {"area_id": "3365", "area_name": "同德县"}, {
        "area_id": "3366",
        "area_name": "贵德县"
      }, {"area_id": "3367", "area_name": "兴海县"}, {"area_id": "3368", "area_name": "贵南县"}],
      "358": [{"area_id": "3369", "area_name": "玛沁县"}, {"area_id": "3370", "area_name": "班玛县"}, {
        "area_id": "3371",
        "area_name": "甘德县"
      }, {"area_id": "3372", "area_name": "达日县"}, {"area_id": "3373", "area_name": "久治县"}, {
        "area_id": "3374",
        "area_name": "玛多县"
      }],
      "359": [{"area_id": "3375", "area_name": "玉树市"}, {"area_id": "3376", "area_name": "杂多县"}, {
        "area_id": "3377",
        "area_name": "称多县"
      }, {"area_id": "3378", "area_name": "治多县"}, {"area_id": "3379", "area_name": "囊谦县"}, {
        "area_id": "3380",
        "area_name": "曲麻莱县"
      }],
      "360": [{"area_id": "3381", "area_name": "格尔木市"}, {"area_id": "3382", "area_name": "德令哈市"}, {
        "area_id": "3383",
        "area_name": "乌兰县"
      }, {"area_id": "3384", "area_name": "都兰县"}, {"area_id": "3385", "area_name": "天峻县"}],
      "361": [{"area_id": "3386", "area_name": "市辖区"}, {"area_id": "3387", "area_name": "兴庆区"}, {
        "area_id": "3388",
        "area_name": "西夏区"
      }, {"area_id": "3389", "area_name": "金凤区"}, {"area_id": "3390", "area_name": "永宁县"}, {
        "area_id": "3391",
        "area_name": "贺兰县"
      }, {"area_id": "3392", "area_name": "灵武市"}],
      "362": [{"area_id": "3393", "area_name": "市辖区"}, {"area_id": "3394", "area_name": "大武口区"}, {
        "area_id": "3395",
        "area_name": "惠农区"
      }, {"area_id": "3396", "area_name": "平罗县"}],
      "363": [{"area_id": "3397", "area_name": "市辖区"}, {"area_id": "3398", "area_name": "利通区"}, {
        "area_id": "3399",
        "area_name": "红寺堡区"
      }, {"area_id": "3400", "area_name": "盐池县"}, {"area_id": "3401", "area_name": "同心县"}, {
        "area_id": "3402",
        "area_name": "青铜峡市"
      }],
      "364": [{"area_id": "3403", "area_name": "市辖区"}, {"area_id": "3404", "area_name": "原州区"}, {
        "area_id": "3405",
        "area_name": "西吉县"
      }, {"area_id": "3406", "area_name": "隆德县"}, {"area_id": "3407", "area_name": "泾源县"}, {
        "area_id": "3408",
        "area_name": "彭阳县"
      }],
      "365": [{"area_id": "3409", "area_name": "市辖区"}, {"area_id": "3410", "area_name": "沙坡头区"}, {
        "area_id": "3411",
        "area_name": "中宁县"
      }, {"area_id": "3412", "area_name": "海原县"}],
      "366": [{"area_id": "3413", "area_name": "市辖区"}, {"area_id": "3414", "area_name": "天山区"}, {
        "area_id": "3415",
        "area_name": "沙依巴克区"
      }, {"area_id": "3416", "area_name": "新市区"}, {"area_id": "3417", "area_name": "水磨沟区"}, {
        "area_id": "3418",
        "area_name": "头屯河区"
      }, {"area_id": "3419", "area_name": "达坂城区"}, {"area_id": "3420", "area_name": "米东区"}, {
        "area_id": "3421",
        "area_name": "乌鲁木齐县"
      }],
      "367": [{"area_id": "3422", "area_name": "市辖区"}, {"area_id": "3423", "area_name": "独山子区"}, {
        "area_id": "3424",
        "area_name": "克拉玛依区"
      }, {"area_id": "3425", "area_name": "白碱滩区"}, {"area_id": "3426", "area_name": "乌尔禾区"}],
      "368": [{"area_id": "3427", "area_name": "高昌区"}, {"area_id": "3428", "area_name": "鄯善县"}, {
        "area_id": "3429",
        "area_name": "托克逊县"
      }],
      "369": [{"area_id": "3430", "area_name": "哈密市"}, {
        "area_id": "3431",
        "area_name": "巴里坤哈萨克自治县"
      }, {"area_id": "3432", "area_name": "伊吾县"}],
      "370": [{"area_id": "3433", "area_name": "昌吉市"}, {"area_id": "3434", "area_name": "阜康市"}, {
        "area_id": "3435",
        "area_name": "呼图壁县"
      }, {"area_id": "3436", "area_name": "玛纳斯县"}, {"area_id": "3437", "area_name": "奇台县"}, {
        "area_id": "3438",
        "area_name": "吉木萨尔县"
      }, {"area_id": "3439", "area_name": "木垒哈萨克自治县"}],
      "371": [{"area_id": "3440", "area_name": "博乐市"}, {"area_id": "3441", "area_name": "阿拉山口市"}, {
        "area_id": "3442",
        "area_name": "精河县"
      }, {"area_id": "3443", "area_name": "温泉县"}],
      "372": [{"area_id": "3444", "area_name": "库尔勒市"}, {"area_id": "3445", "area_name": "轮台县"}, {
        "area_id": "3446",
        "area_name": "尉犁县"
      }, {"area_id": "3447", "area_name": "若羌县"}, {"area_id": "3448", "area_name": "且末县"}, {
        "area_id": "3449",
        "area_name": "焉耆回族自治县"
      }, {"area_id": "3450", "area_name": "和静县"}, {"area_id": "3451", "area_name": "和硕县"}, {
        "area_id": "3452",
        "area_name": "博湖县"
      }],
      "373": [{"area_id": "3453", "area_name": "阿克苏市"}, {"area_id": "3454", "area_name": "温宿县"}, {
        "area_id": "3455",
        "area_name": "库车县"
      }, {"area_id": "3456", "area_name": "沙雅县"}, {"area_id": "3457", "area_name": "新和县"}, {
        "area_id": "3458",
        "area_name": "拜城县"
      }, {"area_id": "3459", "area_name": "乌什县"}, {"area_id": "3460", "area_name": "阿瓦提县"}, {
        "area_id": "3461",
        "area_name": "柯坪县"
      }],
      "374": [{"area_id": "3462", "area_name": "阿图什市"}, {"area_id": "3463", "area_name": "阿克陶县"}, {
        "area_id": "3464",
        "area_name": "阿合奇县"
      }, {"area_id": "3465", "area_name": "乌恰县"}],
      "375": [{"area_id": "3466", "area_name": "喀什市"}, {"area_id": "3467", "area_name": "疏附县"}, {
        "area_id": "3468",
        "area_name": "疏勒县"
      }, {"area_id": "3469", "area_name": "英吉沙县"}, {"area_id": "3470", "area_name": "泽普县"}, {
        "area_id": "3471",
        "area_name": "莎车县"
      }, {"area_id": "3472", "area_name": "叶城县"}, {"area_id": "3473", "area_name": "麦盖提县"}, {
        "area_id": "3474",
        "area_name": "岳普湖县"
      }, {"area_id": "3475", "area_name": "伽师县"}, {"area_id": "3476", "area_name": "巴楚县"}, {
        "area_id": "3477",
        "area_name": "塔什库尔干塔吉克自治县"
      }],
      "376": [{"area_id": "3478", "area_name": "和田市"}, {"area_id": "3479", "area_name": "和田县"}, {
        "area_id": "3480",
        "area_name": "墨玉县"
      }, {"area_id": "3481", "area_name": "皮山县"}, {"area_id": "3482", "area_name": "洛浦县"}, {
        "area_id": "3483",
        "area_name": "策勒县"
      }, {"area_id": "3484", "area_name": "于田县"}, {"area_id": "3485", "area_name": "民丰县"}],
      "377": [{"area_id": "3486", "area_name": "伊宁市"}, {"area_id": "3487", "area_name": "奎屯市"}, {
        "area_id": "3488",
        "area_name": "霍尔果斯市"
      }, {"area_id": "3489", "area_name": "伊宁县"}, {"area_id": "3490", "area_name": "察布查尔锡伯自治县"}, {
        "area_id": "3491",
        "area_name": "霍城县"
      }, {"area_id": "3492", "area_name": "巩留县"}, {"area_id": "3493", "area_name": "新源县"}, {
        "area_id": "3494",
        "area_name": "昭苏县"
      }, {"area_id": "3495", "area_name": "特克斯县"}, {"area_id": "3496", "area_name": "尼勒克县"}],
      "378": [{"area_id": "3497", "area_name": "塔城市"}, {"area_id": "3498", "area_name": "乌苏市"}, {
        "area_id": "3499",
        "area_name": "额敏县"
      }, {"area_id": "3500", "area_name": "沙湾县"}, {"area_id": "3501", "area_name": "托里县"}, {
        "area_id": "3502",
        "area_name": "裕民县"
      }, {"area_id": "3503", "area_name": "和布克赛尔蒙古自治县"}],
      "379": [{"area_id": "3504", "area_name": "阿勒泰市"}, {"area_id": "3505", "area_name": "布尔津县"}, {
        "area_id": "3506",
        "area_name": "富蕴县"
      }, {"area_id": "3507", "area_name": "福海县"}, {"area_id": "3508", "area_name": "哈巴河县"}, {
        "area_id": "3509",
        "area_name": "青河县"
      }, {"area_id": "3510", "area_name": "吉木乃县"}],
      "380": [{"area_id": "3511", "area_name": "石河子市"}, {"area_id": "3512", "area_name": "阿拉尔市"}, {
        "area_id": "3513",
        "area_name": "图木舒克市"
      }, {"area_id": "3514", "area_name": "五家渠市"}]
    }
  }
}




module.exports=ctdata;


