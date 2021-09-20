let vm_menu = new Vue({
    el: '#menu',
    data: {
        menu: [],
		return_url:'',
    },
    methods: {
        skip: function (value) {
            window.location.href = '#subsection' + (value + 1)
        },
		getdata:function (){
	        let array = document.getElementsByTagName("h2")
	        for(i=0;i<array.length;i++)
		         this.menu.push(JSON.parse( '{"name":"' + array[i].innerText + '"}'))		
		},
		place_block:function()
		{
			 let before = document.createElement("div")
			 before.style.width = "20vw"
			 before.style.height = "100vh"
			 let menu = document.getElementById("menu")
			 document.body.insertBefore(before,menu)
		},
		setTitle:function(){
			let title = document.getElementById("menu_title")
			let text = decodeURIComponent(window.location.href.substring(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf(".")))
			title.innerHTML = text
		}
    },
	created: function(){
		this.getdata()
		this.place_block()
		this.setTitle()
	}
})
