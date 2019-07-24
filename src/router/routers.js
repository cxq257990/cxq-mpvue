export default [{
    path: '/index',
    meta: {
      title: '首页'
    },
    name: 'a_index',
    component: function (resolve) {
      require(['@/pages/index'], resolve)
    }
  },
  {
    path: '/',
    meta: {
      title: '首页'
    },
    name: 'b_index',
    component: function (resolve) {
      require(['@/pages/index'], resolve)
    }
  },
  {
    path: '/pages/',
    meta: {
      title: '首页'
    },
    name: 'c_index',
    component: function (resolve) {
      require(['@/pages/index'], resolve)
    }
  },
  {
    path: '/pages/components',
    meta: {
      title: '组件'
    },
    name: '_components',
    component: function (resolve) {
      require(['@/pages/components'], resolve)
    }
  },
  {
    path: '/pages/elements',
    meta: {
      title: '元件'
    },
    name: '_elements',
    component: function (resolve) {
      require(['@/pages/elements'], resolve)
    }
  },
  {
    path: '/pages/index',
    meta: {
      title: '首页'
    },
    name: '_index',
    component: function (resolve) {
      require(['@/pages/index'], resolve)
    }
  },
  {
    path: '/pages/test1',
    meta: {
      title: '测试一'
    },
    name: '_test1',
    component: function (resolve) {
      require(['@/pages/test1'], resolve)
    }
  },
  {
    path: '/pages/test2',
    meta: {
      title: '测试二'
    },
    name: '_test2',
    component: function (resolve) {
      require(['@/pages/test2'], resolve)
    }
  },
  {
    path: '/pages/test3',
    meta: {
      title: '测试三'
    },
    name: '_test3',
    component: function (resolve) {
      require(['@/pages/test3'], resolve)
    }
  },
  {
    path: '/pages/test',
    meta: {
      title: '测试'
    },
    name: '_test',
    component: function (resolve) {
      require(['@/pages/test'], resolve)
    }
  },
  {
    path: '/pages/common/iview',
    meta: {
      title: 'IView'
    },
    name: '_common_iview',
    component: function (resolve) {
      require(['@/pages/common/iview'], resolve)
    }
  },
  {
    path: '/pages/common/message',
    meta: {
      title: '信息'
    },
    name: '_common_message',
    component: function (resolve) {
      require(['@/pages/common/message'], resolve)
    }
  },
  {
    path: '/pages/user/add',
    meta: {
      title: '注册会员'
    },
    name: '_user_add',
    component: function (resolve) {
      require(['@/pages/user/add'], resolve)
    }
  },
  {
    path: '/pages/user/agreement',
    meta: {
      title: '注册协议'
    },
    name: '_user_agreement',
    component: function (resolve) {
      require(['@/pages/user/agreement'], resolve)
    }
  },
  {
    path: '/pages/user/index',
    meta: {
      title: '会员中心'
    },
    name: '_user_index',
    component: function (resolve) {
      require(['@/pages/user/index'], resolve)
    }
  },
  {
    path: '/pages/user/info',
    meta: {
      title: '账户信息'
    },
    name: '_user_info',
    component: function (resolve) {
      require(['@/pages/user/info'], resolve)
    }
  },
  {
    path: '/pages/user/login',
    meta: {
      title: '会员登录'
    },
    name: '_user_login',
    component: function (resolve) {
      require(['@/pages/user/login'], resolve)
    }
  },
  {
    path: '/pages/user/logout',
    meta: {
      title: '退出登录'
    },
    name: '_user_logout',
    component: function (resolve) {
      require(['@/pages/user/logout'], resolve)
    }
  },
  {
    path: '/pages/user/qrcode',
    meta: {
      title: '二维码名片'
    },
    name: '_user_qrcode',
    component: function (resolve) {
      require(['@/pages/user/qrcode'], resolve)
    }
  },
  {
    path: '/pages/user/reg',
    meta: {
      title: '会员注册'
    },
    name: '_user_reg',
    component: function (resolve) {
      require(['@/pages/user/reg'], resolve)
    }
  },
  {
    path: '/pages/user/tree',
    meta: {
      title: '组织架构图'
    },
    name: '_user_tree',
    component: function (resolve) {
      require(['@/pages/user/tree'], resolve)
    }
  },
  {
    path: '/pages/user/view',
    meta: {
      title: '会员详情'
    },
    name: '_user_view',
    component: function (resolve) {
      require(['@/pages/user/view'], resolve)
    }
  },
  {
    path: '/pages/user/rec/recuser',
    meta: {
      title: '我的会员'
    },
    name: '_user_rec_recuser',
    component: function (resolve) {
      require(['@/pages/user/rec/recuser'], resolve)
    }
  },
  {
    path: '/pages/user/password/find',
    meta: {
      title: '找回密码'
    },
    name: '_user_password_find',
    component: function (resolve) {
      require(['@/pages/user/password/find'], resolve)
    }
  },
  {
    path: '/pages/user/password/index',
    meta: {
      title: '安全设置'
    },
    name: '_user_password_index',
    component: function (resolve) {
      require(['@/pages/user/password/index'], resolve)
    }
  },
  {
    path: '/pages/user/password/login',
    meta: {
      title: '登录密码修改'
    },
    name: '_user_password_login',
    component: function (resolve) {
      require(['@/pages/user/password/login'], resolve)
    }
  },
  {
    path: '/pages/user/password/safe',
    meta: {
      title: '安全密码修改'
    },
    name: '_user_password_safe',
    component: function (resolve) {
      require(['@/pages/user/password/safe'], resolve)
    }
  },
  {
    path: '/pages/user/identity/index',
    meta: {
      title: '实名认证'
    },
    name: '_user_identity_index',
    component: function (resolve) {
      require(['@/pages/user/identity/index'], resolve)
    }
  },
  {
    path: '/pages/user/favarite/index',
    meta: {
      title: '我的收藏'
    },
    name: '_user_favarite_index',
    component: function (resolve) {
      require(['@/pages/user/favarite/index'], resolve)
    }
  },
  {
    path: '/pages/user/address/edit',
    meta: {
      title: '添加地址'
    },
    name: '_user_address_edit',
    component: function (resolve) {
      require(['@/pages/user/address/edit'], resolve)
    }
  },
  {
    path: '/pages/user/address/index',
    meta: {
      title: '收货地址'
    },
    name: '_user_address_index',
    component: function (resolve) {
      require(['@/pages/user/address/index'], resolve)
    }
  },
  {
    path: '/pages/user/address/select',
    meta: {
      title: '选择地址'
    },
    name: '_user_address_select',
    component: function (resolve) {
      require(['@/pages/user/address/select'], resolve)
    }
  },
  {
    path: '/pages/finance/withdraw/add',
    meta: {
      title: '提现申请'
    },
    name: '_finance_withdraw_add',
    component: function (resolve) {
      require(['@/pages/finance/withdraw/add'], resolve)
    }
  },
  {
    path: '/pages/finance/withdraw/list',
    meta: {
      title: '提现记录'
    },
    name: '_finance_withdraw_list',
    component: function (resolve) {
      require(['@/pages/finance/withdraw/list'], resolve)
    }
  },
  {
    path: '/pages/finance/withdraw/view',
    meta: {
      title: '提现详情'
    },
    name: '_finance_withdraw_view',
    component: function (resolve) {
      require(['@/pages/finance/withdraw/view'], resolve)
    }
  },
  {
    path: '/pages/finance/transfer/add',
    meta: {
      title: '转账'
    },
    name: '_finance_transfer_add',
    component: function (resolve) {
      require(['@/pages/finance/transfer/add'], resolve)
    }
  },
  {
    path: '/pages/finance/transfer/list',
    meta: {
      title: '转账记录'
    },
    name: '_finance_transfer_list',
    component: function (resolve) {
      require(['@/pages/finance/transfer/list'], resolve)
    }
  },
  {
    path: '/pages/finance/transfer/view',
    meta: {
      title: '转账详情'
    },
    name: '_finance_transfer_view',
    component: function (resolve) {
      require(['@/pages/finance/transfer/view'], resolve)
    }
  },
  {
    path: '/pages/finance/recharge/add',
    meta: {
      title: '充值'
    },
    name: '_finance_recharge_add',
    component: function (resolve) {
      require(['@/pages/finance/recharge/add'], resolve)
    }
  },
  {
    path: '/pages/finance/recharge/list',
    meta: {
      title: '充值记录'
    },
    name: '_finance_recharge_list',
    component: function (resolve) {
      require(['@/pages/finance/recharge/list'], resolve)
    }
  },
  {
    path: '/pages/finance/recharge/view',
    meta: {
      title: '充值详情'
    },
    name: '_finance_recharge_view',
    component: function (resolve) {
      require(['@/pages/finance/recharge/view'], resolve)
    }
  },
  {
    path: '/pages/finance/pay/index',
    meta: {
      title: '支付'
    },
    name: '_finance_pay_index',
    component: function (resolve) {
      require(['@/pages/finance/pay/index'], resolve)
    }
  },
  {
    path: '/pages/finance/pay/list',
    meta: {
      title: '收银台'
    },
    name: '_finance_pay_list',
    component: function (resolve) {
      require(['@/pages/finance/pay/list'], resolve)
    }
  },
  {
    path: '/pages/finance/pay/view',
    meta: {
      title: '收银详情'
    },
    name: '_finance_pay_view',
    component: function (resolve) {
      require(['@/pages/finance/pay/view'], resolve)
    }
  },
  {
    path: '/pages/finance/bill/list',
    meta: {
      title: '财务记录'
    },
    name: '_finance_bill_list',
    component: function (resolve) {
      require(['@/pages/finance/bill/list'], resolve)
    }
  },
  {
    path: '/pages/finance/bill/view',
    meta: {
      title: '财务详情'
    },
    name: '_finance_bill_view',
    component: function (resolve) {
      require(['@/pages/finance/bill/view'], resolve)
    }
  },
  {
    path: '/pages/finance/bankcard/add',
    meta: {
      title: '操作银行卡'
    },
    name: '_finance_bankcard_add',
    component: function (resolve) {
      require(['@/pages/finance/bankcard/add'], resolve)
    }
  },
  {
    path: '/pages/finance/bankcard/list',
    meta: {
      title: '我的银行卡'
    },
    name: '_finance_bankcard_list',
    component: function (resolve) {
      require(['@/pages/finance/bankcard/list'], resolve)
    }
  },
  {
    path: '/pages/finance/account/index',
    meta: {
      title: '钱包'
    },
    name: '_finance_account_index',
    component: function (resolve) {
      require(['@/pages/finance/account/index'], resolve)
    }
  },
  {
    path: '/pages/product/class',
    meta: {
      title: '商品分类'
    },
    name: '_product_class',
    component: function (resolve) {
      require(['@/pages/product/class'], resolve)
    }
  },
  {
    path: '/pages/product/list',
    meta: {
      title: '商品列表'
    },
    name: '_product_list',
    component: function (resolve) {
      require(['@/pages/product/list'], resolve)
    }
  },
  {
    path: '/pages/product/search',
    meta: {
      title: '商品搜索'
    },
    name: '_product_search',
    component: function (resolve) {
      require(['@/pages/product/search'], resolve)
    }
  },
  {
    path: '/pages/product/show',
    meta: {
      title: '商品详情'
    },
    name: '_product_show',
    component: function (resolve) {
      require(['@/pages/product/show'], resolve)
    }
  },
  {
    path: '/pages/product/user/footprint',
    meta: {
      title: '我的足迹'
    },
    name: '_product_user_footprint',
    component: function (resolve) {
      require(['@/pages/product/user/footprint'], resolve)
    }
  },
  {
    path: '/pages/store/class',
    meta: {
      title: '店铺分类'
    },
    name: '_store_class',
    component: function (resolve) {
      require(['@/pages/store/class'], resolve)
    }
  },
  {
    path: '/pages/store/index',
    meta: {
      title: '店铺首页'
    },
    name: '_store_index',
    component: function (resolve) {
      require(['@/pages/store/index'], resolve)
    }
  },
  {
    path: '/pages/store/info',
    meta: {
      title: '店铺信息'
    },
    name: '_store_info',
    component: function (resolve) {
      require(['@/pages/store/info'], resolve)
    }
  },
  {
    path: '/pages/store/news',
    meta: {
      title: '店铺动态'
    },
    name: '_store_news',
    component: function (resolve) {
      require(['@/pages/store/news'], resolve)
    }
  },
  {
    path: '/pages/order/buy',
    meta: {
      title: '购买'
    },
    name: '_order_buy',
    component: function (resolve) {
      require(['@/pages/order/buy'], resolve)
    }
  },
  {
    path: '/pages/order/cart',
    meta: {
      title: '购物车'
    },
    name: '_order_cart',
    component: function (resolve) {
      require(['@/pages/order/cart'], resolve)
    }
  },
  {
    path: '/pages/order/evaluate',
    meta: {
      title: '订单评价'
    },
    name: '_order_evaluate',
    component: function (resolve) {
      require(['@/pages/order/evaluate'], resolve)
    }
  },
  {
    path: '/pages/order/index',
    meta: {
      title: '订单中心'
    },
    name: '_order_index',
    component: function (resolve) {
      require(['@/pages/order/index'], resolve)
    }
  },
  {
    path: '/pages/order/show',
    meta: {
      title: '订单详情'
    },
    name: '_order_show',
    component: function (resolve) {
      require(['@/pages/order/show'], resolve)
    }
  },
  {
    path: '/pages/articles/index',
    meta: {
      title: '文章首页'
    },
    name: '_articles_index',
    component: function (resolve) {
      require(['@/pages/articles/index'], resolve)
    }
  },
  {
    path: '/pages/articles/list',
    meta: {
      title: '文章列表页'
    },
    name: '_articles_list',
    component: function (resolve) {
      require(['@/pages/articles/list'], resolve)
    }
  },
  {
    path: '/pages/articles/show',
    meta: {
      title: '文章详情页'
    },
    name: '_articles_show',
    component: function (resolve) {
      require(['@/pages/articles/show'], resolve)
    }
  },
  {
    path: '/pages/articles/topline/index',
    meta: {
      title: '头条'
    },
    name: '_articles_topline_index',
    component: function (resolve) {
      require(['@/pages/articles/topline/index'], resolve)
    }
  },
  {
    path: '/pages/articles/topline/show',
    meta: {
      title: '头条详情'
    },
    name: '_articles_topline_show',
    component: function (resolve) {
      require(['@/pages/articles/topline/show'], resolve)
    }
  },
  {
    path: '/pages/articles/notice/index',
    meta: {
      title: '会员通知'
    },
    name: '_articles_notice_index',
    component: function (resolve) {
      require(['@/pages/articles/notice/index'], resolve)
    }
  },
  {
    path: '/pages/articles/notice/show',
    meta: {
      title: '会员通知详情'
    },
    name: '_articles_notice_show',
    component: function (resolve) {
      require(['@/pages/articles/notice/show'], resolve)
    }
  },
  {
    path: '/pages/articles/help/index',
    meta: {
      title: '客户中心'
    },
    name: '_articles_help_index',
    component: function (resolve) {
      require(['@/pages/articles/help/index'], resolve)
    }
  },
  {
    path: '/pages/articles/help/show',
    meta: {
      title: '客服中心详情页'
    },
    name: '_articles_help_show',
    component: function (resolve) {
      require(['@/pages/articles/help/show'], resolve)
    }
  },
  {
    path: '/pages/articles/about/index',
    meta: {
      title: '关于我们'
    },
    name: '_articles_about_index',
    component: function (resolve) {
      require(['@/pages/articles/about/index'], resolve)
    }
  },
  {
    path: '/pages/support/add',
    meta: {
      title: '意见反馈'
    },
    name: '_support_add',
    component: function (resolve) {
      require(['@/pages/support/add'], resolve)
    }
  },
  {
    path: '/pages/support/index',
    meta: {
      title: '意见反馈'
    },
    name: '_support_index',
    component: function (resolve) {
      require(['@/pages/support/index'], resolve)
    }
  },
  {
    path: '/pages/share/index',
    meta: {
      title: '我的分润'
    },
    name: '_share_index',
    component: function (resolve) {
      require(['@/pages/share/index'], resolve)
    }
  },
  {
    path: '/pages/share/show',
    meta: {
      title: '分润详情'
    },
    name: '_share_show',
    component: function (resolve) {
      require(['@/pages/share/show'], resolve)
    }
  },
  {
    path: '/pages/stock/deliver',
    meta: {
      title: '发货管理'
    },
    name: '_stock_deliver',
    component: function (resolve) {
      require(['@/pages/stock/deliver'], resolve)
    }
  },
  {
    path: '/pages/stock/goods',
    meta: {
      title: '订货下单'
    },
    name: '_stock_goods',
    component: function (resolve) {
      require(['@/pages/stock/goods'], resolve)
    }
  },
  {
    path: '/pages/stock/offlinedeliver',
    meta: {
      title: '线下发货'
    },
    name: '_stock_offlinedeliver',
    component: function (resolve) {
      require(['@/pages/stock/offlinedeliver'], resolve)
    }
  },
  {
    path: '/pages/stock/user',
    meta: {
      title: '我的库存'
    },
    name: '_stock_user',
    component: function (resolve) {
      require(['@/pages/stock/user'], resolve)
    }
  }
]
