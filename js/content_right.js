new Vue({
    el: '#item_bar',
    data: {
        menu: [{
            name: '中药方智能推荐',
            url: '中药方智能推荐.html',
			color:'#FDE5E7'
        }, {
            name: '绿色上网',
			url: '绿色上网.html',
			color:'#FFEEE8'
        }, {
            name: '操作系统兴趣小组',
			url: '操作系统兴趣小组.html',
			color:'#FEF5E7'
        }, {
            name: '其他',
			url: '其他.html',
			color:'#EAFAF1'
        }, ]
    },
    methods: {
        skip: function (value) {
            if (value['url'] == undefined)
                alert('正在施工')
            else
			{
				let xmlhttp;
				if (window.XMLHttpRequest)
				{
					//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
					xmlhttp=new XMLHttpRequest();
				}
				else
				{
					// IE6, IE5 浏览器执行代码
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlhttp.onreadystatechange=function()
				{
				    if (xmlhttp.status==200  || xmlhttp.status == 0 )
					{
					   if(xmlhttp.readyState==4)
							window.location.href = "html\\" + value['url']						
					}
				}
				xmlhttp.open("GET","html\\" + value['url'],true)
				xmlhttp.send()
			}
        },
    }
})
