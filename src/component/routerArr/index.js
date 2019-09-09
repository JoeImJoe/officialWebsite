const route = [
    { path: '/', breadcrumb: '', key: "/", children: [], show: false },//完成
    {
        path: '', breadcrumb: '', key: "/userIndex", children: [//完成
            { path: '/user', breadcrumb: '首页', key: "/user", },
        ], 
    },
    {
        path: "", breadcrumb: "方案管理", key: "case", children: [//完成
            { path: '/myCase', breadcrumb: '我的方案', key: "/myCase", },
        ], 
    },
    {
        path: "", breadcrumb: "个人库", key: "geren", children: [
            { path: '/user/collection', breadcrumb: '收藏夹', key: "collection", },
            {
                path: '/myUpload', breadcrumb: '个人上传', key: "/myUpload",//完成
                children: [{ path: '/myUpload/form', breadcrumb: '测试表单页', key: "/myUpload/form", }]
            },
        ], 
    },
    {
        path: "", breadcrumb: "交易管理", key: "deal", children: [
            { path: '/user/customer', breadcrumb: '客户管理', key: "customer", },
            { path: '/user/order', breadcrumb: '订单管理', key: "/user/order", },
        ], 
    },
    {
        path: "", breadcrumb: "账户管理", key: "account", children: [
            { path: '/user/accountSet', breadcrumb: '客户管理', key: "accountSet", },
        ], 
    },
    {
        path: "", breadcrumb: "我的资产", key: "capital", children: [

        ], 
    },
    // {
    //     path: '/user', breadcrumb: '', key: "/form", show: false,
    //     children: [

    //     ]
    // }
]
export default route