new Vue({
    el: '#menu',
    data: {
        menu: [{
            name: '深度学习框架安装',
            url: '深度学习框架安装.html'
        }, {
            name: '版本控制管理工具',
			url: '版本控制管理工具.html'
        }, {
            name: '深度学习数理基础'
        }, {
            name: '前端与微信小程序'
        }, {
            name: '后端程序与环境搭建'
        }, {
            name: 'API调用示范'
        }, {
            name: '数据库管理及项目规范'
        }],
    },
    methods: {
        skip: function (value) {
            if (value['url'] == undefined)
                alert('正在施工')
            else
                window.location.href = "html\\"+value['url']
        }
    }
})
