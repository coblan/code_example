// 微信小程序获取用户地址
var qqmapsdk = new QQMapWX({
    key:config.qqmap.key //这里自己的key秘钥进行填充
});
wx.getLocation({
    type:'wgs84',
    success:function(res){
        var lat = res.latitude;
        var lng = res.longitude;
        qqmapsdk.reverseGeocoder({
            location:{
                latitude: lat,
                longitude: lng
            },
            success:function(res){
                t.setData({
                    ad_info: res.result.ad_info
                });
                t.getData();
            }
        });
    }
});