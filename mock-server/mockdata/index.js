// 未定义接口
exports.undefinedInterfaces = []

// 请求失败的接口
exports.errorInterfaces = []

module.exports = [
  [
    "/mobileApp/onlineMonitor/uploadFile",
    {
      "success": true,
      "data": null,
      "msg": "上传文件成功！"
    }
  ],
  [
    "/mobileApp/onlineMonitor/retrievalList",
    {
      "success": true,
      "data": {
        "total": 5,
        "rows": [
          {
            "fileName": "111.txt",
            "status": 2
          },
          {
            "fileName": "111.doc",
            "status": 1
          },
          {
            "fileName": "222.doc",
            "status": 0
          },
          {
            "fileName": "111.txt",
            "status": 2
          },
          {
            "fileName": "111.doc",
            "status": 1
          }
        ]
      },
      "msg": ""
    }
  ],
  [
    "/mobileApp/tradeManage/getOrderManageTableList",
    {
      "success": true,
      "data": {
        "total": 1,
        "rows": [
          {
            "domain": "111.com",
            "ip": "1.2.2.1"
          }
        ]
      }
    }
  ],
  [
    "/mobileApp/tradeManage/getTypeManageTableList",
    {
      "success": true,
      "data": {
        "total": 1,
        "rows": [
          {
            "domain": "111.com",
            "ip": "1.2.2.1"
          }
        ]
      }
    }
  ]
]