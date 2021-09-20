var vm_section = new Vue({
	el: '#section',
	data: {},
	methods: {
		setorder: function() {
			let array = document.getElementsByTagName("h2")
			for (let i = 0; i < array.length; i++)
				array[i].innerText = parse_Chinese(i + 1) + '、' + array[i].innerText
		},
		setid: function() {
			let array = document.getElementsByTagName("h2")
			for (let i = 0; i < array.length; i++)
				array[i].setAttribute('id', 'subsection' + (i + 1))
		},
		set_tabbar: function() {
			let before = document.createElement('div')
			before.style.width = "100%"
			before.style.height = "8vh"
			let tabbar = document.getElementById('tabbar')
			document.getElementById('content_right').insertBefore(before, tabbar)
		},
		indentation: function() {
			let p = document.querySelectorAll('#section p')
			for (let i = 0; i < p.length; i++) {
				p[i].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + p[i].innerHTML
				p[i].innerHTML = p[i].innerHTML.replace(/<br>/g, "<br>&nbsp;&nbsp;&nbsp;&nbsp;")
			}
		},
		addlistener:function(obj,type,func){
			 return obj.addEventListener ? obj.addEventListener(type,func) : obj.attachEvent("on"+type,func);
		},
		img_button: function() {
			let img = document.getElementsByClassName('section_img')
			for(let i=0;i<img.length;i++)
				this.addlistener(img[i],"click",this.img_click_to_enlarge)
		},
		img_click_to_enlarge:function (e) {
			if(e.target.className=="section_img")
				e.target.className = "section_img_click"
			else
				e.target.className = "section_img"
		},
		setTitle:function(){
			let title = document.querySelectorAll("#section h1")
			let text = decodeURIComponent(window.location.href.substring(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf(".")))
			title[0].innerHTML = text
		},
	},
	mounted:function()
	{
		this.img_button()	
	},
	created: function() {
		this.setorder()
		this.setid()
		this.set_tabbar()
		this.indentation()
		this.setTitle()
	}
})


function parse_Chinese(number) {
	let chinses_number = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
	if (number < 11)
		return chinses_number[number]
	else if (number < 20)
		return '十' + chinses_number[number % 10]
	else if (number % 10 != 0)
		return chinses_number[number / 10] + '十' + chinses_number[number % 10]
	else
		return chinses_number[number / 10] + '十'
}
