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
					let open = window.location.href.indexOf("index.html")
					let url
					if( open != -1 )
						url = "html\\" + value['url']
					else
						url = value['url']
				    if (xmlhttp.status==200  || xmlhttp.status == 0 )
					{
					   if(xmlhttp.readyState==4)
							window.location.href = url 						
					}
				}
				xmlhttp.open("GET",value['url'],true)
				xmlhttp.send()
			}
        },
    }
})
