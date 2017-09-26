/**
 * Created by chao on 2017/9/24.
 */
//简单实例
var app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue!'
    }
});
var app2 = new Vue({
    el: '#app2',
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
});
var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
});
var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: '学习 JavaScript'},
            {text: '学习 Vue'},
            {text: '整个牛项目'}
        ]
    }
});
var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'hello vue.js!'
    }
});
//组件
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});
var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '随便其他什么人吃的东西'}
        ]
    }
});
//单选
var app8 = new Vue({
    el: '#app8',
    data: {
        select: ''
    }
});
var app9 = new Vue({
    el: '#app9',
    data: {
        selected: []
    }
});
var app10 = new Vue({
    el: '#app10',
    data: {
        selected: 'A',
        options: [
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'}
        ]
    }
});
//组件····注册组件
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
});
var app11 = new Vue({
    el: '#app11'
});
//局部注册
var Child = {
    template: '<div>A custom component!</div>'
}
new Vue({
    components: {
        'my-component': Child
    }
});
//计数器
var data = {counter: 0};
Vue.component('simple-counter', {
    template: '<button @click ="counter += 1">{{counter}}</button>',
    data: function () {
        return {counter: 0}
        /*data*/
    }
});
var app12 = new Vue({
    el: '#app12'
});
//信息传递
Vue.component('child', {
    props: ['message'],
    template: '<span>{{message}}</span>'
});
var app13 = new Vue({
    el: '#app13'
});
//动态props
Vue.component('child2', {
    props: ['myMessage'],
    template: '<span>{{myMessage}}</span>'
});
var app14 = new Vue({
    el: '#app14',
    data: {
        parentMsg: 'Message from par'
    }
});
//属性对象
/*
 var todo = {
 text: 'Learn Vue',
 isComplete: false
 }
 Vue.component('child3',{
 props:[todo],
 template:'<span></span>'
 })*/
//prop验证
Vue.component('example', {
    props: {
        //基本类型检测（null意思是任何类型都可以）
        propA: Number,
        //多种类型
        propB: [String, Number],
        //必传且是字符串
        propC: {
            type: String,
            required: true
        },
        //数字，有默认值
        propD: {
            type: Number,
            default: 100
        },
        // 数组/对象的默认值应当由一个工厂函数返回
        propE: {
            type: Object,
            default: function () {
                return {message: 'hello'}
            }
        },
        // 自定义验证函数
        propF: {
            validator: function (value) {
                return value > 10
            }
        }
    }
});
//子组件向父组件传递信息
Vue.component('button-counter', {
    template: '<button @click = "incrementCounter">{{counter}}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1;
            this.$emit('increment')
        }
    }
});
var app15 = new Vue({
    el: '#app15',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
});
//非父子组件的通信
//简单的场景，使用一个空的Vue实例作为中央事件总线
//复杂的情况下，考虑使用专门的状态管理模式。
var bus = new Vue();
Vue.component('brother1', {
    template: '<button @click="test">brother1</button>',
    methods:{
        test:function () {
            bus.$emit('is-clicked',1)
        }
    }

});
Vue.component('brother2', {
    template: '<button>brother2</button>',
    created:function () {
        bus.$on('is-clicked', function (id) {
            console.log(id)
        })
    }
});
var app16 = new Vue({
    el: '#app16'
});
//slot插槽
Vue.component('my-slot',{
    template:'<div><h2>我是子组件的标题</h2><slot>只有在没有要分发的内容时才会显示。</slot></div>'
});
var app17 = new Vue({
    el: '#app17'
});
//具名插槽 分配
Vue.component('app-layout',{
    template:'<div>' +
    '<header><slot name="header"></slot></header>' +
    '<main><slot></slot></main>'+
    '<footer><slot name="footer"></slot></footer>'+
    '</div>'
});
var app18 = new Vue({
    el:'#app18'
});
//作用域插槽  有错误，暂时未解决
/*Vue.component('slot-child',{
    template: '<div class="child"><slot text = "hello from parent"></slot></div>'
});
var app19 = new Vue({
    el:'#app19'
});*/
//动态组件
var app20 = new Vue({
    el:'#app20',
    data:{
        currentView:'home',
        nextView:'posts'
    },
    components:{
        home:{
            template:'<h1>这是h1标签</h1>'
        },
        posts:{
            template:'<div>这是DIV标签</div>'
        }
    }
});
//子组件索引
Vue.component('ref-id',{
    template:'<p>子组件索引</p>'
});
var app21 = new Vue({
    el:'#app21'
});
var refId = app21.$refs.refId;
console.log(refId);
//异步加载


//组件命名约定
/*
 当注册组件 (或者 props) 时，可以使用 kebab-case，camelCase，或 PascalCase。
*/