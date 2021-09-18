var vm_section = new Vue({
    el: '.section',
    data: {
    },
    methods: {
		setorder:function(){
			let array = document.getElementsByTagName("h2")
			for(i=0;i<array.length;i++)
				array[i].innerText = parse_Chinese(i+1) + '、' + array[i].innerText
		},
		setid:function(){
			let array = document.getElementsByTagName("h2")
			for(i=0;i<array.length;i++)
			    array[i].setAttribute('id','subsection' + (i + 1))
		}
    },
	created: function(){
		this.setorder()
		this.setid()
	}
})
function parse_Chinese(number)
{
	let chinses_number = ['零','一','二','三','四','五','六','七','八','九','十']
	if(number<11)
		return chinses_number[number]
	else if(number<20)
		return '十' + chinses_number[number%10]
	else if(number%10!=0)
	    return chinses_number[number/10] + '十' + chinses_number[number%10]
	else
	    return chinses_number[number/10] + '十'
}
