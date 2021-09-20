let vue_tabbar = new Vue({
	el:"#tabbar",
	data:{},
	methods:{
		Return:function(){
			let head=sessionStorage.getItem('url_head')-1
			let url=sessionStorage.getItem("url["+head+"]")
			sessionStorage.removeItem("url[" + head + 1 +"]")
			sessionStorage.setItem('url_head',head)
			window.location.href = url	
		},
		setHistroyUrl:function(){
			let head=sessionStorage.getItem('url_head')
			if (head ==undefined)
			{
				let open = window.location.href.indexOf("index.html")
				if( open != -1 )
				{
					sessionStorage.clear()
					sessionStorage.setItem('url[0]',window.location.href)
					sessionStorage.setItem('url_head',0)					
				}
				else
				{
					window.location.href = "../index.html"
				}
			}
			let url=sessionStorage.getItem("url["+head +"]")
			if(window.location.href != url)
			{
				sessionStorage.setItem('url_head',++head)
				sessionStorage.setItem("url["+head+"]",window.location.href)
			}
		},
	},
	created:function()
	{
		this.setHistroyUrl()
	},
	destroyed:function(){
		sessionStorage.clear()
	}
})