new Vue({
    el: '#item_bar',
    data: {
		menu:myJson
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
							window.location.href = value['url']						
					}
					else
						alert(xmlhttp.status)
				}
				xmlhttp.open("GET",value['url'],true)
				xmlhttp.send()
			}
        },
    }
})
