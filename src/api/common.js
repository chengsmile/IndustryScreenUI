let menus = () => {
    return [{
        id: 1,
        menuCode: 'AppSecurityMonitorUI',
        menuName: '移动应用程序与安全监测系统',
        menuPath: '/',
        redirect: '/home',
        isNewWindow: false,
        childrenVisible: true,
        children: [
            {
                id: 85716,
                isDefault: true,
                menuCode: '/home',
                menuIcon: 'iconshouye',
                menuName: '首页',
                isVisible: true,
                menuPath: '/home',
                isNewWindow: false,
                childrenVisible: false
            },
            {
                id: 73900,
                isDefault: false,
                menuCode: '/dataManage',
                menuIcon: 'iconshujuguanli',
                menuName: '数据管理',
                isVisible: true,
                menuPath: '/dataManage',
                isNewWindow: false,
                childrenVisible: true,
                children: [
                    {
                        id: 48479,
                        isDefault: false,
                        menuCode: '/appInfoDB',
                        menuIcon: 'iconshujuguanli',
                        menuName: 'APP信息库',
                        isVisible: true,
                        menuPath: '/dataManage/appInfoDB',
                        isNewWindow: false,
                        childrenVisible: false
                    },
                    {
                        id: 50744,
                        isDefault: false,
                        menuCode: '/appPlateformDB',
                        menuIcon: 'iconshujuguanli',
                        menuName: 'APP平台库',
                        isVisible: true,
                        menuPath: '/dataManage/appPlateformDB',
                        isNewWindow: false,
                        childrenVisible: true,
                        children: [{
                            id: 48479,
                            isDefault: false,
                            menuCode: '/dataManage/appPlateformDB/details',
                            menuIcon: 'iconshujuguanli',
                            menuName: '详情页面',
                            isVisible: true,
                            menuPath: '/dataManage/appPlateformDB/details',
                            isNewWindow: false,
                            childrenVisible: false
                        }]
                    },
                    {
                        id: 50744,
                        isDefault: false,
                        menuCode: '/appDeveloperDB',
                        menuIcon: 'iconshujuguanli',
                        menuName: 'APP开发者库',
                        isVisible: true,
                        menuPath: '/dataManage/appDeveloperDB',
                        isNewWindow: false,
                        childrenVisible: true,
                        children: [{
                            id: 48479,
                            isDefault: false,
                            menuCode: '/dataManage/appDeveloperDB/details',
                            menuIcon: 'iconshujuguanli',
                            menuName: '详情页面',
                            isVisible: true,
                            menuPath: '/dataManage/appDeveloperDB/details',
                            isNewWindow: false,
                            childrenVisible: false
                        }]
                    }
                ]
            },
            {
                id: 16463,
                isDefault: false,
                menuCode: '/tradeManage',
                menuIcon: 'iconindustry_certification',
                menuName: '行业管理',
                isVisible: true,
                menuPath: '/tradeManage',
                isNewWindow: false,
                childrenVisible: true,
                children: [
                    {
                        id: 56167,
                        isDefault: false,
                        menuCode: '/tradeTypeManage',
                        menuIcon: 'iconindustry_certification',
                        menuName: '行业类型管理',
                        isVisible: true,
                        menuPath: '/tradeManage/tradeTypeManage',
                        isNewWindow: false,
                        childrenVisible: false
                    },
                    {
                        id: 53501,
                        isDefault: false,
                        menuCode: '/tradeOrderManage',
                        menuIcon: 'iconindustry_certification',
                        menuName: '行业指令管理',
                        isVisible: true,
                        menuPath: '/tradeManage/tradeOrderManage',
                        isNewWindow: false,
                        childrenVisible: false
                    }
                ]
            },
            {
                id: 3872,
                isDefault: false,
                menuCode: '/warnCenter',
                menuIcon: 'iconearly-warn',
                menuName: '预警中心',
                isVisible: true,
                menuPath: '/warnCenter',
                isNewWindow: false,
                childrenVisible: false,
                children: [
                    {
                        id: 47801,
                        isDefault: false,
                        menuCode: '/audit',
                        menuIcon: 'iconearly-warn',
                        menuName: '审核详情',
                        isVisible: true,
                        menuPath: '/warnCenter/audit',
                        isNewWindow: false,
                        childrenVisible: false
                    }
                ]
            },
            {
                id: 34913,
                isDefault: false,
                menuCode: '/mallReport',
                menuIcon: 'iconjindushangbao',
                menuName: '商城上报',
                isVisible: true,
                menuPath: '/mallReport',
                isNewWindow: false,
                childrenVisible: true,
                children: [
                    {
                        id: 44295,
                        isDefault: false,
                        menuCode: '/reportMonitor',
                        menuIcon: 'iconjindushangbao',
                        menuName: '上报监测',
                        isVisible: true,
                        menuPath: '/mallReport/reportMonitor',
                        isNewWindow: false,
                        childrenVisible: false
                    },
                    {
                        id: 48813,
                        isDefault: false,
                        menuCode: '/reportStatistics',
                        menuIcon: 'iconjindushangbao',
                        menuName: '上报统计',
                        isVisible: true,
                        menuPath: '/mallReport/reportStatistics',
                        isNewWindow: false,
                        childrenVisible: false
                    }
                ]
            },
            {
                id: 72865,
                isDefault: false,
                menuCode: '/onlineMonitor',
                menuIcon: 'icon101-copy',
                menuName: '在线监测',
                isVisible: true,
                menuPath: '/onlineMonitor',
                isNewWindow: false,
                childrenVisible: false
            },
            {
                id: 68052,
                isDefault: false,
                menuCode: '/reportFormManage',
                menuIcon: 'iconbaobiao',
                menuName: '报表管理',
                isVisible: true,
                menuPath: '/reportFormManage',
                isNewWindow: false,
                childrenVisible: false
            },
            {
                id: 3832,
                isDefault: false,
                menuCode: '/teamHandle',
                menuIcon: 'iconxietongwendang',
                menuName: '协同处置',
                isVisible: true,
                menuPath: '/teamHandle',
                isNewWindow: false,
                childrenVisible: true,
                children: [
                    {
                        id: 9467,
                        isDefault: false,
                        menuCode: '/teamJob',
                        menuIcon: 'iconxietongwendang',
                        menuName: '协同任务',
                        isVisible: true,
                        menuPath: '/teamHandle/teamJob',
                        isNewWindow: false,
                        childrenVisible: false
                    },
                    {
                        id: 24786,
                        isDefault: false,
                        menuCode: '/jobMonitor',
                        menuIcon: 'iconxietongwendang',
                        menuName: '任务监测',
                        isVisible: true,
                        menuPath: '/teamHandle/jobMonitor',
                        isNewWindow: false,
                        childrenVisible: false
                    },
                    {
                        id: 33971,
                        isDefault: false,
                        menuCode: '/rectification',
                        menuIcon: 'iconxietongwendang',
                        menuName: '整改书',
                        isVisible: true,
                        menuPath: '/teamHandle/rectification',
                        isNewWindow: false,
                        childrenVisible: false
                    }, 
                    {
                        id: 33973,
                        isDefault: false,
                        menuCode: '/teamManage',
                        menuIcon: 'iconxietongwendang',
                        menuName: '协同管理',
                        isVisible: true,
                        menuPath: '/teamHandle/teamManage',
                        isNewWindow: false,
                        childrenVisible: false
                    }
                ]
            },
            {
                id: 66523,
                isDefault: false,
                menuCode: '/fileManage',
                menuIcon: 'iconwenjianguanli1',
                menuName: '文件管理',
                isVisible: true,
                menuPath: '/fileManage',
                isNewWindow: false,
                childrenVisible: false
            },
            {
                id: 1460,
                isDefault: false,
                menuCode: '/system',
                menuIcon: 'iconxitongshezhi4',
                menuName: '系统配置',
                isVisible: true,
                menuPath: '/system',
                isNewWindow: false,
                childrenVisible: true,
                children: [
                    {
                        id: 31294,
                        isDefault: false,
                        menuCode: '/userManage',
                        menuIcon: 'iconxitongshezhi4',
                        menuName: '用户管理',
                        isVisible: true,
                        menuPath: '/system/userManage',
                        isNewWindow: false,
                        childrenVisible: false
                    },
                    {
                        id: 10408,
                        isDefault: false,
                        menuCode: '/roleManage',
                        menuIcon: 'iconxitongshezhi4',
                        menuName: '角色管理',
                        isVisible: true,
                        menuPath: '/system/roleManage',
                        isNewWindow: false,
                        childrenVisible: false
                    }
                ]
            },
            {
              id: 72895,
              isDefault: false,
              menuCode: '/previewPage',
              menuIcon: '',
              menuName: '在线预览',
              isVisible: true,
              menuPath: '/previewPage',
              isNewWindow: true,
              childrenVisible: false
            }
        ]
    }]
}

module.exports.menus = menus
