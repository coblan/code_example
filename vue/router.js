import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
// 扩展openPage方法
Router.prototype.openPage = function(link, query) {
  const meta = this.currentRoute.meta;
  meta.time = new Date().getTime();
  this.push({
    path: link,
    query,
    meta
  });
};
  
const constantRouterMap = [
  {
    path:'/',
    name: "home",
    component: () => import("./views/home/Home.vue"),
    meta: {
      title: "首页",
      isShowFoot: true,
      keepAlive: false,
      index: 1
    }
  },
  {
    path: "/home",
    name: "home",
    component: () => import("./views/home/Home.vue"),
    meta: {
      title: "首页",
      isShowFoot: true,
      keepAlive: false,
      index: 2
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/login.vue"),
    meta: {
      title: "登录",
      isShowFoot: false,
      keepAlive: false,
      index: 1
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./views/register.vue"),
    meta: {
      title: "注册",
      isShowFoot: false,
      keepAlive: false,
      index: 999
    }
  },
  {
    path: "/ResetPwd",
    name: "ResetPwd",
    component: () => import("./views/ResetPwd.vue"),
    meta: {
      title: "重置密码",
      isShowFoot: false,
      keepAlive: false,
      index: 99999
    }
  },
  {
    path: "/registerPage",
    name: "registerPage",
    component: () => import("./views/registerPage.vue"),
    meta: {
      title: "账户设置",
      isShowFoot: false,
      keepAlive: false,
      index: 99999
    }
  },
  
  {
    path: "/hotbetpage",
    name: "hotbetpage",
    component: () => import("./views/home/hotbetpage"),
    meta: {
      title: "热门投注",
      isShowFoot: false,
      keepAlive: false,
      index: 4
    }
  },
  {
    path: "/ranking",
    name: "ranking",
    component: () => import("./views/home/Ranking.vue"),
    meta: {
      title: "排行榜",
      keepAlive: false,
      index: 22
    }
  },
  {
    path: "/match",
    name: "match",
    component: () => import("./views/match/Match.vue"),
    meta: {
      title: "赛事",
      isShowFoot: true,
      keepAlive: true,
      index: 3
    }
  },
  {
    path: "/matchdetail",
    name: "matchdetail",
    component: () => import("./views/match/matchDetail.vue"),
    meta: {
      title: "赛事详情",
      isShowFoot: false,
      keepAlive: false,
      index: 311,
    }
  },
  {
    path: "/homeoder",
    name: "homeoder",
    component: () => import("./views/match/homeOder.vue"),
    meta: {
      title: "订单中心",
      isShowFoot: false,
      keepAlive: false,
      index: 32
    }
  },
  {
    path: "/parlay",
    name: "parlay",
    component: () => import("./views/parlay/parlayView.vue"),
    meta: {
      title: "串关",
      isShowFoot: false,
      keepAlive: true,
      index: 33
    }
  },
  {
    path: "/confirmTicket",
    name: "confirmTicket",
    component: () => import("./views/parlay/confirmTicket.vue"),
    meta: {
      title: "订单确认",
      isShowFoot: false,
      keepAlive: true,
      index: 34
    }
  },
  {
    path: "/customer",
    name: "customer",
    component: () => import("./views/customer/customer.vue"),
    meta: {
      title: "客服",
      isShowFoot: true,
      keepAlive: false,
      index: 5
    }
  },
  {
    path: "/brand",
    name: "brand",
    component: () => import("./views/brand.vue"),
    meta: {
      title: "品牌",
      isShowFoot: true,
      keepAlive: true,
      index: 6
    }
  },
  {
    path: "/mineView",
    name: "mineView",
    component: () => import("./views/mine/mineView.vue"),
    meta: {
      title: "我的",
      isShowFoot: true,
      keepAlive: false,
      index: 7
    }
  },
  {
    path: "/AccountDetail",
    name: "AccountDetail",
    component: () => import("./views/mine/AccountDetail.vue"),
    meta: {
      title: "账目明细",
      isShowFoot: false,
      keepAlive: true,
      index: 60
    }
  },
  {
    path: "/detaiOder",
    name: "detaiOder",
    component: () => import("./views/mine/detaiOder.vue"),
    meta: {
      title: "我的订单",
      isShowFoot: false,
      keepAlive: false,
      index: 601
    }
  },
  {
    path: "/minenews",
    name: "minenews",
    component: () => import("./views/mine/minenews.vue"),
    meta: {
      title: "消息中心",
      isShowFoot: false,
      keepAlive: false,
      index: 61
    }
  },
  {
    path: "/mineOder",
    name: "mineOder",
    component: () => import("./views/mine/mineOder.vue"),
    meta: {
      title: "我的订单",
      isShowFoot: false,
      keepAlive: false,
      index: 62
    }
  },
  {
    path: "/customerCenter",
    name: "customerCenter",
    component: () => import("./views/mine/customerCenter.vue"),
    meta: {
      title: "客服中心",
      isShowFoot: false,
      keepAlive: false,
      index: 62
    }
  },
  {
    path: "/userSet",
    name: "userSet",
    component: () => import("./views/mine/userSet.vue"),
    meta: {
      title: "设置",
      isShowFoot: false,
      keepAlive: false,
      index: 63
    }
  },
  {
    path: "/changepwd",
    name: "changepwd",
    component: () => import("./views/mine/changepwd.vue"),
    meta: {
      title: "修改密码",
      isShowFoot: false,
      keepAlive: false,
      index: 633
    }
  },
  {
    path: "/exchange",
    name: "exchange",
    component: () => import("./views/mine/exchange.vue"),
    meta: {
      title: "资金密码",
      isShowFoot: false,
      keepAlive: false,
      index: 634
    }
  },
  {
    path: "/expassword",
    name: "expassword",
    component: () => import("./views/mine/expassword.vue"),
    meta: {
      title: "资金密码",
      isShowFoot: false,
      keepAlive: false,
      index: 635
    }
  },
  {
    path: "/address",
    name: "address",
    component: () => import("./views/mine/address.vue"),
    meta: {
      title: "收货地址",
      isShowFoot: false,
      keepAlive: false,
      index: 635
    }
  },
  {
    path: "/recharge",
    name: "recharge",
    component: () => import("./views/mine/recharge.vue"),
    meta: {
      title: "充值中心",
      isShowFoot: false,
      keepAlive: false,
      index: 63
    }
  },
  {
    path: "/urlPage",
    name: "urlPage",
    component: () => import("./views/mine/urlPage.vue"),
    meta: {
      title: "充值",
      isShowFoot: false,
      keepAlive: false,
      index: 636
    }
  },
  {
    path: "/cyberBank",
    name: "cyberBank",
    component: () => import("./views/mine/cyberBank.vue"),
    meta: {
      title: "网银转账",
      isShowFoot: false,
      keepAlive: false,
      index: 636
    }
  },
  {
    path: "/recharPay",
    name: "recharPay",
    component: () => import("./views/mine/recharPay.vue"),
    meta: {
      title: "充值中心",
      isShowFoot: false,
      keepAlive: false,
      index: 64
    }
  },
  {
    path: "/withdraw",
     name: "withdraw",
      component: () => import("./views/mine/withdraw.vue"),
      meta: {
    title: "提现",
        isShowFoot: false,
        keepAlive: false,
        index: 65
  }
  },
  {
    path: "/withdrawForm",
        name: "withdrawForm",
      component: () => import("./views/mine/withdrawForm.vue"),
      meta: {
    title: "提现",
        isShowFoot: false,
        keepAlive: false,
        index: 64
  }
},
{
  path: "/withdrawPhoneCheck",
      name: "withdrawPhoneCheck",
    component: () => import("./views/mine/withdrawPhoneCheck.vue"),
    meta: {
  title: "手机验证",
      isShowFoot: false,
      keepAlive: false,
      index: 64
}
},
{
  path: "/withdrawSuccess",
      name: "withdrawSuccess",
    component: () => import("./views/mine/withdrawSuccess.vue"),
    meta: {
  title: "成功",
      isShowFoot: false,
      keepAlive: false,
      index: 64
}
},
{
  path: "/addBankcardPhonecheck",
      name: "addBankcardPhonecheck",
    component: () => import("./views/mine/addBankcardPhonecheck.vue"),
    meta: {
  title: "添加银行卡",
      isShowFoot: false,
      keepAlive: false,
      index: 64
}
},
{
  path: "/addBankcardForm",
      name: "addBankcardForm",
    component: () => import("./views/mine/addBankcardForm.vue"),
    meta: {
  title: "添加银行卡",
      isShowFoot: false,
      keepAlive: false,
      index: 64
}
},
  {
    path: "/addBankcardConfirm",
    name: "addBankcardConfirm",
    component: () => import("./views/mine/addBankcardConfirm.vue"),
    meta: {
      title: "添加银行卡",
      isShowFoot: false,
      keepAlive: false,
      index: 64
    }
  },


  {
    path: "/pageIframe",
    name: "pageIframe",
    component: () => import("./views/pageIframe.vue"),
    meta: {
      title: "",
      isShowFoot: false,
      keepAlive: false,
      index: 999999999
    }
  },
  {
    path: "/agFrame",
    name: "agFrame",
    component: () => import("./views/agFrame.vue"),
    meta: {
      title: "",
      isShowFoot: false,
      keepAlive: false,
      index: 999999999
    }
  },
  {
    path: "/agTransMoney",
    name: "agTransMoney",
    component: () => import("./views/home/agTransMoney.vue"),
    meta: {
      title: "",
      isShowFoot: false,
      keepAlive: false,
      index: 999999999
    }
  },

  
];
const router = new Router({
  // mode: 'history',
  
  routes: constantRouterMap,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;
