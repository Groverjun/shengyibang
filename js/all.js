$(window).resize(function() {
	$("#left").height($(window).height())
});
$(".mat-button").on("click", function() {
	if($("#left").css("left") == "0px") {
		$("#left").css("left", "-250px")
	} else {
		$("#left").css("left", "0")
	}
})
$(".container").on("click",function(){
	$("#left").css("left", "-250px");
})
$(".left_list li").on("click", function() {
	$(this).css("background", "rgba(0,0,0,0.2)").siblings().css("background", "none")
	$(this).find("em").css("transform", "rotate(0deg)").parent().parent().siblings().find("em").css("transform", "rotate(-90deg)")

})
$("#right #buttton .btn").on("click", function() {
	$(this).find("i").addClass("abt_act1").parent().siblings().find("i").removeClass("abt_act1");
})
$("#information .btn-group button").on("click", function() {
	$(this).addClass("btn-active").parent().siblings().find("button").removeClass("btn-active")
})
$(".input-group input").on("focus", function() {
	$("#footer").css("display", "none")
})
$(".input-group input").on("blur", function() {
	$("#footer").css("display", "block")
})
window.onload=function(){
	var myChart = echarts.init(document.getElementById('Pie'));
	var myChart2 = echarts.init(document.getElementById('Bar'));

option1 = {
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b}: {c} ({d}%)"
	},

	legend: {
		orient: 'vertical',
		x: 'left',
		data: ['百度', '搜狗', '360', '百度移动', '360移动', '搜狗移动'],
		textStyle: {
			color: '#fff'
		}
	},
	series: [{
			name: '访问来源',
			type: 'pie',
			selectedMode: 'single',
			radius: ['50%', '70%'],
			center: ['65%', '55%'],
			label: {
				normal: {
					position: 'inner'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: 40,
					name: '百度',
					textStyle: {
						color: "red"
					},
					selected: true,

				},
				{
					value: 10,
					name: '搜狗'
				},
				{
					value: 5,
					name: '360'
				},
				{
					value: 20,
					name: '百度移动'
				},
				{
					value: 10,
					name: '搜狗移动'
				},
				{
					value: 15,
					name: '360移动'
				},
			]
		},
		{
			name: '访问来源',
			type: 'pie',
			radius: ['60%', '55%'],
		}
	]
};

option2 = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			crossStyle: {
				color: '#999'
			}
		},
		axisLabel: {
			interval: 0
		}
	},
	toolbox: {

	},

	legend: {
		data: ['主词数量', '产品词数量', '地区产品词数量', '产品行业词数量', '地区产品行业词数量'],
		textStyle: {
			color: '#fff'
		}
	},
	xAxis: [{
		type: 'category',
		data: ['百度', '搜狗', '360', '百度移动', '360移动', '搜狗移动'],
		axisPointer: {
			type: 'shadow',
			textStyle: {
				color: '#fff'
			}
		},
		axisLabel: {
			show: true,
			textStyle: {
				color: '#fff'
			}
		}
	}],
	yAxis: [{
		type: 'value',
		min: 0,
		max: 1200,
		interval: 200,
		axisLabel: {
			formatter: '{value} ml'
		},
		axisLabel: {
			show: true,
			textStyle: {
				color: '#fff'
			}
		}
	}, ],
	series: [{
			name: '主词数量',
			type: 'bar',
			data: [{
					value: 369,
					name: '百度',
					selected: true
				},
				{
					value: 336,
					name: '搜狗'
				},
				{
					value: 280,
					name: '360'
				},
				{
					value: 360,
					name: '百度移动'
				},
				{
					value: 10,
					name: '搜狗移动'
				},
				{
					value: 15,
					name: '360移动'
				},
			]
		},
		{
			name: '产品词数量',
			type: 'bar',
			data: [{
					value: 686,
					name: '百度',
					selected: true
				},
				{
					value: 502,
					name: '搜狗'
				},
				{
					value: 412,
					name: '360'
				},
				{
					value: 650,
					name: '百度移动'
				},
				{
					value: 330,
					name: '搜狗移动'
				},
				{
					value: 150,
					name: '360移动'
				},
			]
		},
		{
			name: '地区产品词数量',
			type: 'bar',
			data: [{
					value: 180,
					name: '百度',
					selected: true
				},
				{
					value: 160,
					name: '搜狗'
				},
				{
					value: 150,
					name: '360'
				},
				{
					value: 200,
					name: '百度移动'
				},
				{
					value: 330,
					name: '搜狗移动'
				},
				{
					value: 150,
					name: '360移动'
				},
			]
		},
		{
			name: '产品行业词数量',
			type: 'bar',
			data: [{
					value: 360,
					name: '百度',
					selected: true
				},
				{
					value: 320,
					name: '搜狗'
				},
				{
					value: 300,
					name: '360'
				},
				{
					value: 300,
					name: '百度移动'
				},
				{
					value: 330,
					name: '搜狗移动'
				},
				{
					value: 150,
					name: '360移动'
				},
			]
		},
		{
			name: '地区产品行业词数量',
			type: 'bar',
			data: [{
					value: 120,
					name: '百度',
					selected: true
				},
				{
					value: 100,
					name: '搜狗'
				},
				{
					value: 90,
					name: '360'
				},
				{
					value: 200,
					name: '百度移动'
				},
				{
					value: 150,
					name: '搜狗移动'
				},
				{
					value: 150,
					name: '360移动'
				},
			]
		}
	]
};


myChart.setOption(option1);
myChart2.setOption(option2);
$(window).resize(function() {
	myChart2.resize();
	myChart.resize();
})
}
