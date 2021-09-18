let vm_first_bar = new Vue({
    el: '#mul_menu_bar',
    data: {
        menu: myJson
    },
    methods: {
		skip:function(value){
			if(value.url == undefined)
				alert("正在施工")
			else
			    window.location.href = value.url
		},
		place_block:function()
		{
			 let before = document.createElement("div")
			 before.style.width = "24vw"
			 before.style.height = "100vh"
			 let menu = document.getElementById("mul_menu_bar")
			 document.body.insertBefore(before,menu)
		},
    },
	created: function(){
		this.place_block()
	}
})
let vm_paging = new Vue({
    el: '#paging',
    data: {
        menu: myJson
    },
    methods: {
		skip:function(value){
			if(value.url == undefined)
				alert("正在施工")
			else
			    window.location.href = value.url
		}
    }
})
