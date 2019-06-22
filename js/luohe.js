var myChart = echarts.init(document.getElementById('map_1'));
var uploadedDataURL = "http://hzdjfile.madfrog.cn/group1/default/20190623/03/36/2/luohe.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap('luohe', geoJson);
  myChart.hideLoading();


  option = {
    //backgroundColor: '#000',
    tooltip: {
      trigger: 'item',
      backgroundColor: '#09bdb1',
      borderColor: '#FFFFCC',
      showDelay: 0,
      hideDelay: 0,
      enterable: true,
      transitionDuration: 0,
      extraCssText: 'z-index:100',
      formatter: function (params, ticket, callback) {
        //根据业务自己拓展要显示的内容
        var res = "";
        var name = params.name;
        var value = params.value;
        res = name;
        return res;
      }
    },
    geo: {
      map: 'luohe',
      label: {
        emphasis: {
          show: true
        }
      },
      roam: false,//禁止其放大缩小
      itemStyle: {
        normal: {
          areaColor: '#4c60ff',
          borderColor: '#FFFFCC'
        },
        emphasis: {
          areaColor: '#293fff'
        }
      },
    }
  };
  myChart.setOption(option);
    myChart.resize();

});
