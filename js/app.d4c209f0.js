(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],v=0,_=[];v<s.length;v++)r=s[v],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&_.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(_.length)_.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2746:function(t,e,n){},3556:function(t,e,n){"use strict";n("2746")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title,expression:"$route.meta.title"}]})],1)},o=[],r={name:"app"},s=r,l=(n("034f"),n("2877")),c=Object(l["a"])(s,i,o,!1,null,null,null),u=c.exports,v=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"homecontainer"},[n("el-aside",{attrs:{width:"320px"}},[n("div",{staticClass:"logodiv"},[n("el-image",{staticClass:"logoimg",staticStyle:{width:"150px",height:"190px"},attrs:{src:t.squareUrl,fit:"fit"}})],1),n("div",{staticClass:"asidediv"},[n("p",{staticClass:"namep"},[t._v(t._s(t.info.name))]),n("div",{staticClass:"emaildiv"},[n("div",{staticStyle:{"text-align":"center"}},[n("a",{staticClass:"peointr",staticStyle:{"font-weight":"bold",color:"white"},attrs:{target:"_blank",title:"海洋技术科学学院",href:"http://www.ioisas.cn/"}},[t._v(t._s(t.info.school))])]),n("div",{staticStyle:{"text-align":"center"}},[n("a",{staticClass:"peointr",staticStyle:{"font-weight":"bold",color:"white"},attrs:{target:"_blank",title:"齐鲁工业大学",href:"http://www.qlu.edu.cn/"}},[t._v(t._s(t.info.university))])]),n("div",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("邮件地址:")]),t._v(" "+t._s(t.info.email)+" ")]),n("div",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("办公室:")]),t._v(" "+t._s(t.info.office)+" ")]),n("div",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("地址:")]),t._v(" "+t._s(t.info.address)+" ")]),n("div",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("办公电话:")]),t._v(" "+t._s(t.info.tel)+" ")])]),n("br"),n("div",[n("a",{attrs:{target:"_blak",href:"https://clustrmaps.com/site/1bhow",title:"Visit tracker"}},[n("img",{staticStyle:{border:"0"},attrs:{src:"//clustrmaps.com/map_v2.png?cl=ffffff&w=192&t=tt&d=YWDTlaZEZnWMeU5dExOAtieLsxta-cGh7x8l5qX6IRo&co=333744&ct=ffffff",width:"256",height:"160",alt:"Map"}})])]),n("div",{staticClass:"cright"},[n("p",[t._v("Copyright © 2015-2021 Zhijin Qiu.")]),n("p",[t._v("All rights reserved.")])])])]),n("el-container",[n("el-header",{staticClass:"mainheader"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#333744","text-color":"#fff","active-text-color":"#ffd04b",router:!0},on:{select:t.handleSelect}},[n("el-menu-item",[n("a",{attrs:{href:"./index.html"}},[t._v("仇志金")])]),n("el-menu-item",[n("a",{attrs:{href:"#News"}},[t._v("相关奖励")])]),n("el-menu-item",[n("a",{attrs:{href:"#Projects"}},[t._v("科研项目")])]),n("el-submenu",{attrs:{index:"2"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("学术论文")]},proxy:!0}])},[n("el-menu-item",[n("a",{attrs:{href:"#Journal"}},[n("font",{attrs:{color:"white"}},[t._v("学术期刊")])],1)]),n("el-menu-item",[n("a",{attrs:{href:"#Conference"}},[n("font",{attrs:{color:"white"}},[t._v("学术会议")])],1)])],1),n("el-menu-item",[n("a",{attrs:{href:"#Patents"}},[t._v("专利")])]),n("el-menu-item",[n("a",{attrs:{href:"#Teaching"}},[t._v("教学课程")])])],1)],1),n("el-main",[n("div",[n("div",[n("a",{attrs:{name:"Top"}}),n("div",{staticClass:"markdown-body"},[n("markdown-zhijinqiu")],1)])]),n("div",[n("a",{attrs:{name:"News"}}),n("div",{staticClass:"markdown-body"},[n("markdown-news")],1),n("el-divider")],1),n("div",[n("a",{attrs:{name:"Projects"}}),n("div",{staticClass:"markdown-body"},[n("markdown-projects")],1),n("el-divider")],1),n("div",[n("a",{attrs:{name:"Journal"}}),n("div",{staticClass:"markdown-body"},[n("markdown-journals")],1),n("a",{attrs:{name:"Conference"}}),n("div",{staticClass:"markdown-body"},[n("markdown-conferences")],1),n("el-divider")],1),n("div",[n("a",{attrs:{name:"Patents"}}),n("div",{staticClass:"markdown-body"},[n("markdown-patents")],1),n("el-divider")],1),n("div",[n("a",{attrs:{name:"Teaching"}}),n("div",{staticClass:"markdown-body"},[n("markdown-teaching")],1),n("el-divider")],1),n("div",{staticClass:"footerspan"},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("超链接：")]),n("span",[n("a",{staticClass:"peointr",attrs:{href:"http://www.qlu.edu.cn/",target:"_blank",title:"齐鲁工业大学"}},[t._v("齐鲁工业大学")])]),n("span",[n("a",{staticClass:"peointr",attrs:{href:"http://www.sdas.org/",target:"_blank",title:"山东省科学院"}},[t._v("山东省科学院")])]),n("span",[n("a",{staticClass:"peointr",attrs:{href:"http://www.ioisas.cn/",target:"_blank",title:"山东省科学院海洋仪器仪表研究所"}},[t._v("山东省科学院海洋仪器仪表研究所")])]),n("span",[n("a",{staticClass:"peointr",attrs:{href:"https://scholar.google.com/",target:"_blank",title:"Google Search"}},[t._v("Google Search")])]),n("span",[n("a",{staticClass:"peointr",attrs:{href:"https://github.com/",target:"_blank",title:"GitHub"}},[t._v("GitHub")])])])])],1)],1)},h=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h3",[t._v("仇志金，博士，助理研究员，漂浮式海洋信息智能感知团队，主要从事漂浮式海洋信息智能感知与电波传输环境预测研究，研究内容包括大气折射率剖面反演，大气波导，海洋监测。")]),n("h3",[t._v("教育经历")]),t._m(0),n("h3",[t._v("工作经历")]),t._m(1),n("h2",[n("font",{attrs:{color:"##0364bf"}},[t._v(" 招生要求：寻找具有良好数学和大气科学研究背景的、自我驱动型的，能够吃苦耐劳的硕士研究生，如果您有信心，请您与我联系：qzj At qlu.edu.cn。")])],1),t._m(2)])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("2016.9-2017.9，"),n("a",{staticClass:"peointr",attrs:{href:"http://www.uncc.edu/",target:"_blank",title:"University of North Carolina at Charlotte"}},[t._v("北卡罗来纳大学夏洛特分校")]),t._v("，联合培养博士，导师： "),n("a",{staticClass:"peointr",attrs:{href:"https://cis.temple.edu/~yu/",target:"_blank",title:"Prof. Yu Wang"}},[t._v("Prof. Yu Wang")])]),n("li",[t._v("2013.8-2018.1，"),n("a",{staticClass:"peointr",attrs:{href:"http://www.ouc.edu.cn/",target:"_blank",title:"Ocean University of China"}},[t._v("中国海洋大学信息科学与工程学院")]),t._v("，计算机系统结构，博士，导师："),n("a",{staticClass:"peointr",attrs:{href:"http://it.ouc.edu.cn/2019/0605/c16100a249529/page.htm",target:"_blank",title:"Zhongwen Guo"}},[t._v("郭忠文教授")])]),n("li",[t._v("2011.8-2013.6，"),n("a",{staticClass:"peointr",attrs:{href:"http://www.ouc.edu.cn/",target:"_blank",title:"Ocean University of China"}},[t._v("中国海洋大学信息科学与工程学院")]),t._v("，软件工程，硕士，导师："),n("a",{staticClass:"peointr",attrs:{href:"http://it.ouc.edu.cn/2019/0605/c16100a249529/page.htm",target:"_blank",title:"Zhongwen Guo"}},[t._v("郭忠文教授")])]),n("li",[t._v("2007.8-2011.6，"),n("a",{staticClass:"peointr",attrs:{href:"http://www.qust.edu.cn/",target:"_blank",title:"Qingdao University of Science and Technology"}},[t._v("青岛科技大学计算机学院")]),t._v("，计算机科学与技术专业，学士")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("2018.1-至今，山东省科学院海洋仪器仪表研究所，助理研究员")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{attrs:{align:"center"}},[n("i",[t._v('"I think, therefore I am." - René Descartes')])])}],g={},m=Object(l["a"])(g,d,f,!1,null,null,null),p=m.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",[t._v("相关奖励")]),n("ul",[n("li",[t._v("2019年度山东省高等学校科学技术奖三等奖")]),n("li",[t._v('TC>ISO/TC8/SC13 "ISO/WD 23745"工作组成员')]),n("li",[t._v('"IEEE 2402"工作组成员')]),n("li",[t._v("国家标准《GB/T 33137-2016》起草人员")]),n("li",[t._v("第九届中国传感器网络学术会议（CWSN 2015）最佳论文（Best Paper）奖")]),n("li",[t._v("2015年青岛十大明星创客 ["),n("a",{staticClass:"peointr",attrs:{href:"http://www.dailyqd.com/channelzt/2015-12/04/content_296241.htm",target:"_blank",title:"2015年青岛十大明星创客"}},[t._v("相关报道")]),t._v("]")]),n("li",[t._v("2015年获第四届中国创新创业大赛【青岛赛区】暨“千帆汇”第二届青岛市创新创业大赛决赛第二名")]),n("li",[t._v("2009年全国大学生数学建模竞赛山东赛区一等奖")])])])}],w={},b=Object(l["a"])(w,y,C,!1,null,null,null),S=b.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",[t._v("学术论文")]),n("h2",[t._v("学术期刊")]),n("ul",[n("li",[t._v("Jing Zou"),n("sup",[t._v("*")]),t._v(", Chesheng Zhan, Haiqing Song, Tong Hu, "),n("strong",[t._v("Zhijin Qiu")]),t._v(", Bo Wang, and Zhiqian Li. Development and Evaluation of a Hydrometeorological Forecasting System Using the Coupled Ocean-Atmosphere-Wave-Sediment Transport (COAWST) Model. "),n("em",[t._v("Advances in Meteorology")]),t._v(", 2021, 2021.")]),n("li",[t._v("Li, Ting, "),n("strong",[t._v("Zhijin Qiu")]),t._v(", Lijuan Cao, Dazhao Cheng, Weichao Wang, Xinghua Shi, and Yu Wang"),n("sup",[t._v("*")]),t._v(". Privacy-Preserving Participant Grouping for Mobile Social Sensing over Edge Clouds. "),n("em",[t._v("IEEE Transactions on Network Science and Engineering (2020)")]),t._v(".")]),n("li",[t._v("郭帅, 郭忠文"),n("sup",[t._v("*")]),t._v(", "),n("strong",[t._v("仇志金")]),t._v(". HSMA: 面向物联网异构数据的模式分层匹配算法. "),n("em",[t._v("计算机研究与发展")]),t._v(". 2019, 55 (11): 2522-2531.")]),n("li",[t._v("仇利克, 胡乃军, 郭忠文"),n("sup",[t._v("*")]),t._v(", "),n("strong",[t._v("仇志金")]),t._v(", 刘石勇, 刘竞. 基于多元传感参数的性能指标预测方法研究. "),n("em",[t._v("中国海洋大学学报 (自然科学版)")]),t._v(". 2019, 04: 149-154.")]),n("li",[n("strong",[t._v("Qiu, Zhijin")]),t._v(", Zhongwen Guo"),n("sup",[t._v("*")]),t._v(", Yu Wang, Tong Hu, Chao Liu, and Ting Li. Reconstruction model of ocean observing complex virtual instrument. "),n("em",[t._v("Journal of Ocean University of China")]),t._v(". 2018, 17(5): 1159-1170.（SCI二区）")]),n("li",[t._v("胡桐, "),n("strong",[t._v("仇志金"),n("sup",[t._v("*")])]),t._v(", 漆随平, 邹靖, 王东明. "),n("em",[t._v("基于边缘计算的海洋观测要素自匹配方法")]),t._v(". 海洋技术学报. 2018, 37(4): 29-36.")]),n("li",[t._v("胡桐"),n("sup",[t._v("*")]),t._v(", 漆随平, 王东明, 郭颜萍, 邹靖, "),n("strong",[t._v("仇志金")]),t._v(". "),n("em",[t._v("船体纵横摇工况下海面风测量数据偏差分析")]),t._v(". 海洋技术学报. 2018, 37(3): 79-85.")]),n("li",[t._v("刘超, 胡乃军, "),n("strong",[t._v("仇志金")]),t._v(", 郭忠文"),n("sup",[t._v("*")]),t._v(". 海洋观测复杂虚拟仪器云服务模型设计. "),n("em",[t._v("中国海洋大学学报: 自然科学版")]),t._v(". 2018;48(4): 140-147.")]),n("li",[t._v("仇利克, 郭忠文"),n("sup",[t._v("*")]),t._v(", 刘青, 刘颖健, "),n("strong",[t._v("仇志金")]),t._v(". 基于冗余分析的特征选择算法. "),n("em",[t._v("北京邮电大学学报")]),t._v(", 2017, 40(1): 36-41.")]),n("li",[t._v("黄海广, 胡乃军, "),n("strong",[t._v("仇志金")]),t._v(", 孔祥伦, 郭忠文"),n("sup",[t._v("*")]),t._v(". 基于多源定位数据的实时船舶监控系统设计. "),n("em",[t._v("中国海洋大学学报: 自然科学版")]),t._v(", 2015 (9): 122-129.")]),n("li",[n("strong",[t._v("仇志金"),n("sup",[t._v("*")])]),t._v(". 机房监控高性能采集软件系统设计与实现. 毕业设计, "),n("em",[t._v("中国海洋大学")]),t._v(", 2013.")]),n("li",[n("strong",[t._v("仇志金")]),t._v(", 郭忠文"),n("sup",[t._v("*")]),t._v(", 刘超. 传感器网络节点数据高速采集自适应算法. "),n("em",[t._v("东南大学学报: 自然科学版")]),t._v(", 2013, 42(A02): 238-244.")])])])}],I={},j=Object(l["a"])(I,E,P,!1,null,null,null),k=j.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h2",[t._v("学术会议")]),n("ul",[n("li",[t._v("Hu, Tong, Suiping Qi, "),n("strong",[t._v("Zhijin Qiu")]),t._v(', Jing Zou, and Dongming Wang. "Application of PSO-LSSVM in Bias Correction of Shipborne Anemometer Measurement." '),n("em",[t._v("In International Conference on Cognitive Systems and Signal Processing")]),t._v(", 348-357. Springer, Singapore, 2018.")]),n("li",[n("strong",[t._v("Zhijin Qiu")]),t._v(', Suiping Qi, Zhengyu Zhou, Tong Hu, Jing Zou, and Dongming Wang. "HDAA: High-Speed Data Acquisition Algorithm of IoT." '),n("em",[t._v("In International Conference on Cognitive Systems and Signal Processing")]),t._v(", 488-499. Springer, Singapore, 2018.")]),n("li",[n("strong",[t._v("Zhijin Qiu")]),t._v(', Tong Hu, Suiping Qi, Shiyong Liu, Xupeng Wang, and Zhongwen Guo. "Automatic matching method for ocean observation elements based on edge computing." '),n("em",[t._v("In 2018 4th International Conference on Big Data Computing and Communications (BIGCOM)")]),t._v(", 174-180. IEEE, 2018.")]),n("li",[t._v("Liu, Shiyong, Zhichao Cao, Zhongwen Guo, Guohua Wang, Xupeng Wang, "),n("strong",[t._v("Zhijin Qiu")]),t._v(', and Xukun Qin. "NVMTFS: A Non-Volatile Memory Adaptive File System for Tiered Storage System." '),n("em",[t._v("In 2018 4th International Conference on Big Data Computing and Communications (BIGCOM)")]),t._v(", 201-206. IEEE, 2018.")]),n("li",[t._v("Liu, Shiyong, Zhongwen Guo, Chen Liu, Xupeng Wang, Guohua Wang, "),n("strong",[t._v("Zhijin Qiu")]),t._v(', and Xukun Qin. "The Read Amplification Analysis of NoSQL Database on Top of OSDs: A Case Study of HBase." '),n("em",[t._v("In 2018 4th International Conference on Big Data Computing and Communications (BIGCOM)")]),t._v(", 207-212. IEEE, 2018.")]),n("li",[t._v("Ting Li, "),n("strong",[t._v("Zhijin Qiu")]),t._v(', Lijuan Cao, Hanshang Li, Zhongwen Guo, Fan Li, Xinghua Shi, and Yu Wang. "Participant Grouping for Privacy Preservation in Mobile Crowdsensing over Hierarchical Edge Clouds." '),n("em",[t._v("In 2018 IEEE 37th International Performance Computing and Communications Conference (IPCCC)")]),t._v(". 1-8. IEEE, 2018.")]),n("li",[t._v("Li, Ting, Taeho Jung, "),n("strong",[t._v("Zhijin Qiu")]),t._v(', Hanshang Li, Lijuan Cao, and Yu Wang. "Scalable privacy-preserving participant selection for mobile crowdsensing systems: Participant grouping and secure group bidding." '),n("em",[t._v("IEEE Transactions on Network Science and Engineering (2018)")]),t._v(".")]),n("li",[n("strong",[t._v("Zhijin Qiu")]),t._v(', Zhongwen Guo, Yanan Sun, Yingjian Liu, and Yu Wang. "Poux: Performance optimization strategy for cloud platforms based on user experience." '),n("em",[t._v("In 2017 3rd International Conference on Big Data Computing and Communications (BIGCOM)")]),t._v(", 200-207. IEEE, 2017.")]),n("li",[n("strong",[t._v("Zhijin Qiu")]),t._v(', Zhongwen Guo, Shuai Guo, Yingjian Liu, and Yu Wang. "DAQ-Middleware: Data Acquisition Middleware based on Internet of Things." '),n("em",[t._v("In 2017 3rd International Conference on Big Data Computing and Communications (BIGCOM)")]),t._v(", 404-412. IEEE, 2017.")]),n("li",[t._v("Shuai Guo, Zhongwen Guo, "),n("strong",[t._v("Zhijin Qiu")]),t._v(', Yingjian Liu, and Yu Wang. "IFRAT: An IoT Field Recognition Algorithm based on Time-series Data." '),n("em",[t._v("In 2017 3rd International Conference on Big Data Computing and Communications (BIGCOM)")]),t._v(", 251-255. IEEE, 2017.")]),n("li",[n("strong",[t._v("Zhijin Qiu")]),t._v(', Naijun Hu, Zhongwen Guo, Like Qiu, Shuai Guo, and Xi Wang. "IoT sensing parameters adaptive matching algorithm." '),n("em",[t._v("In International Conference on Big Data Computing and Communications")]),t._v(", 198-211. Springer, Cham, 2016.")]),n("li",[n("strong",[t._v("Zhijin Qiu")]),t._v(', Zhongwen Guo, Shuai Guo, Like Qiu, Xi Wang, Shiyong Liu, and Chao Liu. "IoTI: Internet of things instruments reconstruction model design." '),n("em",[t._v("In 2016 IEEE International Instrumentation and Measurement Technology Conference Proceedings")]),t._v(", 1-6. IEEE, 2016.")])])])}],O={},T=Object(l["a"])(O,x,Z,!1,null,null,null),A=T.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",[t._v("科研项目")]),n("ul",[n("li",[t._v("2021.1-2023.12，山东省自然科学基金项目青年基金，“基于多模型环境适用特性的蒸发波导融合预报方法研究”（#ZR2020QD085），位次1，15万元。(执行中)")]),n("li",[t._v("2021.1-2022.12，山东省科学院海洋仪器表研究所培养基金国家自然科学基金扶持项目，“基于气象水文环境对蒸发波导模型预测精度影响规律的多模型融合预测方法研究”（#），位次1/5，10万元。(执行中)")]),n("li",[t._v("2020.1-2021.12，山东省科学院青年基金项目，“基于多模型融合算法的蒸发波导监测预报方法研究”（#2020QN0023），位次1，9.62万元。(执行中)")]),n("li",[t._v("2016.01-2019.12，国家自然科学基金，“面向东海-南海海流观测的大规模三维移动传感器网络关键技术研究”，参与。(已结题)")]),n("li",[t._v("2013.01-2016.12，国家高技术研究发展计划（863计划），“南海及周边海域风浪流耦合同化精细化数值预报与信息服务系统”，参与。(已结题)")])])])}],L={},D=Object(l["a"])(L,Q,G,!1,null,null,null),$=D.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",[t._v("专利")]),n("ul",[n("li",[t._v("一种蒸发波导高度的融合预测方法（发明）（申请号：#CN202011358850.0，公开号：#CN112711899A），"),n("strong",[t._v("仇志金")]),t._v(", 胡桐, 王波, 邹靖, 李志乾（1/5）。")]),n("li",[t._v("一种船体姿态计算方法及应用（发明）（申请号：#CN202010703034.2，公开号：#CN111880209A），胡桐, "),n("strong",[t._v("仇志金")]),t._v(", 王东明, 王中秋, 邹靖, 漆随平（2/6）。")])])])}],B={},N=Object(l["a"])(B,M,W,!1,null,null,null),q=N.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",[t._v("教学课程")]),n("ul",[n("li",[n("strong",[t._v("数据结构：")]),t._v(" 2020-2021上学期（2021-2022-1），课程代码：B806026。"),n("a",{staticClass:"peointr",attrs:{href:"./#/datastructure",target:"_blank",title:"数据结构课程信息"}},[t._v("课程信息")])]),n("li",[n("strong",[t._v("Python基础与应用：")]),t._v(" 2020-2021上学期（2021-2022-1），课程代码：B806015。"),n("a",{staticClass:"peointr",attrs:{href:"./#/python",target:"_blank",title:"Python课程信息"}},[t._v("课程信息")])])]),n("p",[n("strong",[t._v("欢迎海洋技术专业的学生选择以上课程。")])])])}],J={},U=Object(l["a"])(J,H,Y,!1,null,null,null),R=U.exports,X={setup:function(){},components:{markdownZhijinqiu:p,markdownNews:S,markdownJournals:k,markdownConferences:A,markdownProjects:$,markdownPatents:q,markdownTeaching:R},data:function(){return{activeIndex:"1",activeIndex2:"1",squareUrl:"../assets/head.jpg",info:{name:"仇志金（Zhijin Qiu）",university:"齐鲁工业大学",school:"海洋技术科学学院",email:"qzj AT qlu.edu.cn",office:"山东省科学院大厦A1003",address:"山东省青岛市苗岭路37号",phone:"+86 186-6972-3238",tel:"+86(532) 5862-8394"}}},methods:{handleSelect:function(t,e){console.log(t,e)}}},z=X,F=(n("3556"),Object(l["a"])(z,_,h,!1,null,"bce31d7c",null)),V=F.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"homecontainer"},[n("el-header",{staticClass:"courseheader"},[t._v("数据结构")]),n("el-main",{staticClass:"elmain"},[n("div",[n("div",{staticClass:"markdown-body"},[n("markdown-datastructure")],1)])])],1)},tt=[],et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("h1",[t._v("课程信息")]),a("p",[t._v("数据结构(data structure)是带有结构特性的数据元素的集合，它研究的是数据的逻辑结构和数据的物理结构以及它们之间的相互关系，并对这种结构定义相适应的运算，设计出相应的算法，并确保经过这些运算以后所得到的新结构仍保持原来的结构类型。简而言之，数据结构是相互之间存在一种或多种特定关系的数据元素的集合，即带“结构”的数据元素的集合。“结构”就是指数据元素之间存在的关系，分为逻辑结构和存储结构。")]),a("p",[t._v("数据的逻辑结构和物理结构是数据结构的两个密切相关的方面，同一逻辑结构可以对应不同的存储结构。算法的设计取决于数据的逻辑结构，而算法的实现依赖于指定的存储结构。")]),a("p",[t._v("数据结构的研究内容是构造复杂软件系统的基础，它的核心技术是分解与抽象。通过分解可以划分出数据的3个层次；再通过抽象，舍弃数据元素的具体内容，就得到逻辑结构。类似地，通过分解将处理要求划分成各种功能，再通过抽象舍弃实现细节，就得到运算的定义。上述两个方面的结合可以将问题变换为数据结构。这是一个从具体（即具体问题）到抽象（即数据结构）的过程。然后，通过增加对实现细节的考虑进一步得到存储结构和实现运算，从而完成设计任务。这是一个从抽象（即数据结构）到具体（即具体实现）的过程。")]),a("h1",[t._v("教材选择")]),a("h2",[t._v("教材信息")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("作者")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("出版社")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("ISBN")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("数据结构（C语言版 第2版 附微课视频）")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("严蔚敏 李冬梅 吴伟民")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("人民邮电出版社")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("9787115379504")])])])]),a("h2",[t._v("教材封面")]),a("img",{attrs:{src:n("d3e4"),width:"10%"}}),a("h2",[t._v("教材内容")]),a("p",[t._v("《数据结构（C语言版 第2版）在选材与编排上，贴近当前普通高等院校“数据结构”课程的现状和发展趋势，符合新研究生考试大纲，内容难度适度，突出实用性和应用性。全书共8章，内容包括：")]),a("ol",[a("li",[t._v("绪论")]),a("li",[t._v("线性表")]),a("li",[t._v("栈和队列")]),a("li",[t._v("串、数组和广义表")]),a("li",[t._v("树和二叉树")]),a("li",[t._v("图")]),a("li",[t._v("查找")]),a("li",[t._v("排序。")])]),a("p",[a("u",[t._v("全书采用类C语言作为数据结构和算法的描述语言。")])]),a("h1",[t._v("上课时间及地点")]),a("p",[t._v("2021年上学期，每周三，3-4节，1003教室")]),a("h1",[t._v("课程信息")])])}],at={},it=Object(l["a"])(at,et,nt,!1,null,null,null),ot=it.exports,rt={setup:function(){},components:{markdownDatastructure:ot}},st=rt,lt=(n("fd00"),Object(l["a"])(st,K,tt,!1,null,"8edad0e6",null)),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"homecontainer"},[n("el-header",{staticClass:"courseheader"},[t._v("Python基础与应用")]),n("el-main",{staticClass:"elmain"},[n("div",[n("div",{staticClass:"markdown-body"},[n("markdown-python")],1)])])],1)},vt=[],_t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("h1",[t._v("课程信息")]),a("p",[t._v("Python由Guido van Rossum于1989年底开始设计与开发，第一个公开发行版本发行于1991年。Python推出不久就迅速得到了各行业人士的青睐，经过30年的发展，Python已经渗透到计算机科学与技术、统计分析、移动终端开发、科学计算可视化、逆向工程与软件分析、图形编程与图像处理、人工智能、游戏设计与策划、网站开发、数据采集、大数据处理、密码学、系统运维、音乐编程、计算机辅助教育、医药辅助设计、天文信息处理、化学、生物等几乎所有专业和领域。著名搜索引擎Google的核心代码使用Python实现，迪士尼公司的动画制作与生成采用Python实现，大部分UNIX和Linux都内建了Python环境支持，豆瓣网使用Python作为主体开发语言进行网站架构和有关应用的设计与开发，网易大量网络游戏的服务器端代码超过70%采用Python进行设计与开发，易度的PaaA企业应用云端开发平台和百度云计算平台BAE也都大量采用了Python语言，美国宇航局使用Python实现了CAD/CAE/PDM库及模型管理系统，雅虎公司使用Python建立全球范围的站点群，微软公司的集成开发环境Visual Studio 2015开始默认支持Python语言，开源ERP系统Odoo完全采用Python语言开发，引力波数据是用Python进行处理和分析的，类似的案例数不胜数。")]),a("p",[t._v("早在多年前Python就已经成为卡内基梅隆大学、麻省理工学院、加州大学伯克利分校、哈佛大学等国外很多大学计算机专业或非计算机专业的程序设计入门教学语言，目前国内也有不少学校的多个专业陆续开设了Python程序设计课程。2011年1月Python语言被TIOBE网站评为2010年度语言；2014年12月IEEE Spectrum推出的编程语言排行榜中，Python取得了第5位的好名次；2017年和2018年连续两年IEEE Spectrum把Python排在第一位；2019年7月TIOBE编程语言排行榜上Python跃居第3位，仅次于Java、C，已经成为脚本语言的标准。")]),a("p",[t._v("Python是一门免费、开源的跨平台高级动态编程语言，支持命令式编程、函数式编程，完全支持面向对象程序设计，拥有大量功能强大的内置对象、标准库和扩展库以及众多狂热的支持者，使得各领域的科研人员、策划人员甚至管理人员能够快速实现和验证自己的思路与创意。在有些编程语言中需要编写大量代码才能实现的功能，在Python中直接调用内置函数或标准库方法即可实现。Python用户只需要把主要精力放在业务逻辑的设计与实现上，在开发效率和运行效率之间达到了完美的平衡，其精妙之处令人赞叹。")]),a("p",[t._v("Python是一门快乐、优雅的语言。与C语言系列和Java等语言相比，Python大幅度降低了学习与使用的难度。Python易学易用，语法简洁清晰，代码可读性强，编程模式非常符合人类思维方式和习惯。经常浏览Python社区的优秀代码、Python标准库和扩展库文档甚至源代码，适当了解其内部工作原理，可以帮助读者编写出更加优雅的Python程序。")]),a("p",[t._v("如果读者有其他程序设计语言的基础，那么在学习和使用Python的过程中，一定不要把用其他语言编程的习惯和风格带到Python中来，那样不仅会使得代码变得非常冗长、烦琐，还可能会严重影响代码的效率。应该尽量尝试从最自然、最简洁的角度出发去思考和解决问题，这样才能写出更加优雅、更加Pythonic的代码。")]),a("h1",[t._v("教材选择")]),a("h2",[t._v("教材信息")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("作者")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("出版社")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("ISBN")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("数据结构（C语言版 第2版 附微课视频）")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("严蔚敏 李冬梅 吴伟民")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("人民邮电出版社")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("9787115379504")])])])]),a("h2",[t._v("教材封面")]),a("img",{attrs:{src:n("9648"),width:"10%"}}),a("h2",[t._v("教材内容")]),a("p",[t._v("《Python程序设计（第3版 微课版）》共18章，主要内容如下：")]),a("ol",[a("li",[t._v("第1章介绍Python基础知识与概念；")]),a("li",[t._v("第2章讲解列表、元组、字典、集合等常用序列结构；")]),a("li",[t._v("第3章讲解Python选择结构与循环结构；")]),a("li",[t._v("第4章讲解字符串基本操作方法与正则表达式模块re的用法；")]),a("li",[t._v("第5章讲解函数设计与使用；")]),a("li",[t._v("第6章讲解面向对象编程有关的知识；")]),a("li",[t._v("第7章讲解文本文件与二进制文件的读写，以及文件与目录操作，Office文件操作；")]),a("li",[t._v("第8章讲解异常处理结构以及Python程序的调试与测试方法；")]),a("li",[t._v("第9章讲解标准库tkinter的GUI应用；")]),a("li",[t._v("第10章讲解网络编程，网页内容读取；")]),a("li",[t._v("第11章讲解安卓平台的Python程序设计；")]),a("li",[t._v("第12章讲解注册表编程以及系统运维编程；")]),a("li",[t._v("第13章讲解多线程与多进程编程；")]),a("li",[t._v("第14章介绍SQLite、Access、MS SQL Server、MySQL访问方法；")]),a("li",[t._v("第15章讲解图形图像编程、音乐编程、视频处理以及语音识别；")]),a("li",[t._v("第16章介绍逆向工程与软件分析原理、IDAPython编程、Immunity Debugger以及Windows平台软件调试原理；")]),a("li",[t._v("第17章讲解NumPy、SciPy、Matplotlib、pandas与statistics在科学计算和可视化、数据处理、统计与分析中的应用；")]),a("li",[t._v("第18章讲解安全哈希算法、对称密钥密码算法DES与AES以及非对称密钥密码算法RSA与DSA。")])]),a("h1",[t._v("上课时间及地点")]),a("p",[t._v("2021年上学期，每周三，3-4节，1003教室")]),a("h1",[t._v("课程信息")])])}],dt={},ft=Object(l["a"])(dt,_t,ht,!1,null,null,null),gt=ft.exports,mt={setup:function(){},components:{markdownPython:gt}},pt=mt,yt=(n("70eb"),Object(l["a"])(pt,ut,vt,!1,null,"f38a52f0",null)),Ct=yt.exports;a["default"].use(v["a"]);var wt=[{path:"/",meta:{title:"仇志金 Zhijin Qiu"},redirect:"/main"},{path:"/main",meta:{title:"仇志金 Zhijin Qiu"},component:V},{path:"/datastructure",meta:{title:"数据结构 仇志金 Zhijin Qiu"},component:ct},{path:"/python",meta:{title:"Python 仇志金 Zhijin Qiu"},component:Ct}],bt=new v["a"]({routes:wt}),St=bt,Et=(n("0fb7"),n("450d"),n("f529")),Pt=n.n(Et),It=(n("279e"),n("7d94")),jt=n.n(It),kt=(n("e3ea"),n("7bc3")),xt=n.n(kt),Zt=(n("acb6"),n("c673")),Ot=n.n(Zt),Tt=(n("bdc7"),n("aa2f")),At=n.n(Tt),Qt=(n("920a"),n("4f0c")),Gt=n.n(Qt),Lt=(n("8bd8"),n("4cb2")),Dt=n.n(Lt),$t=(n("ce18"),n("f58e")),Mt=n.n($t),Wt=(n("4ca3"),n("443e")),Bt=n.n(Wt),Nt=(n("de31"),n("c69e")),qt=n.n(Nt),Ht=(n("a769"),n("5cc3")),Yt=n.n(Ht),Jt=(n("a673"),n("7b31")),Ut=n.n(Jt),Rt=(n("adec"),n("3d2d")),Xt=n.n(Rt),zt=(n("10cb"),n("f3ad")),Ft=n.n(zt),Vt=(n("eca7"),n("3787")),Kt=n.n(Vt),te=(n("425f"),n("4105")),ee=n.n(te),ne=(n("1951"),n("eedf")),ae=n.n(ne);a["default"].use(ae.a),a["default"].use(ee.a),a["default"].use(Kt.a),a["default"].use(Ft.a),a["default"].use(Xt.a),a["default"].use(Ut.a),a["default"].use(Yt.a),a["default"].use(qt.a),a["default"].use(Bt.a),a["default"].use(Mt.a),a["default"].use(Dt.a),a["default"].use(Gt.a),a["default"].use(At.a),a["default"].use(Ot.a),a["default"].use(xt.a),a["default"].use(jt.a),a["default"].prototype.$message=Pt.a;n("aede"),n("e4cb");var ie=n("7876"),oe=n.n(ie),re=n("bc3a"),se=n.n(re);a["default"].prototype.$http=se.a,se.a.defaults.baseURL="http://www.ysqorz.top:8888/api/private/v1/",se.a.interceptors.request.use((function(t){return t.headers.Authorization=window.sessionStorage.getItem("token"),t})),a["default"].config.productionTip=!1,St.beforeEach((function(t,e,n){t.meta.title&&(document.title=t.meta.title),n()})),a["default"].use(oe.a),new a["default"]({router:St,render:function(t){return t(u)}}).$mount("#app")},"70eb":function(t,e,n){"use strict";n("9155")},"85ec":function(t,e,n){},9155:function(t,e,n){},9391:function(t,e,n){},9648:function(t,e,n){t.exports=n.p+"img/python_book.5d69c84d.jpg"},aede:function(t,e,n){},d3e4:function(t,e,n){t.exports=n.p+"img/datastructure_book.cff59fc8.jpg"},fd00:function(t,e,n){"use strict";n("9391")}});
//# sourceMappingURL=app.d4c209f0.js.map