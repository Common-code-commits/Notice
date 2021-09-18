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
		}
    },
	created: function(){
		this.getdata()
	}
})
