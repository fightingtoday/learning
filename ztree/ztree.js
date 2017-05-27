
/*ztree学习之路

*html界面要引用
*<!-- ztree插件 -->
<script type="text/javascript" src="<%=basePath%>web/static/js/jquery.ztree.core-3.5.min.js"></script>
<script type="text/javascript" src="<%=basePath%>web/static/js/jquery.ztree.excheck-3.5.min.js"></script>
<link type="text/css" rel="stylesheet" href="<%=basePath%>web/Qdisplay/css/zTreeStyle.css" >主要树要有ztree这一class默认样式才生效
图片ztreeStandard.gif ,ztreeStandard.png等 
*
*/
//设置标签树             
//标签树格式

var zNodes={
        [
            {
                "id":57,
                "type":"parent",
                "name":"地址",
                "children":[
                    {
                        "id":16,
                        "type":"text",
                        "name":"省"
                    },
                    {
                        "id":17,
                        "type":"text",
                        "name":"市"
                    },
                    {
                        "id":18,
                        "type":"text",
                        "name":"区"
                    },
                    {
                        "id":24,
                        "type":"text",
                        "name":"街道"
                    }
                ]
            },
            {
                "id":53,
                "type":"parent",
                "name":"出生日期",
                "children":[
                    {
                        "id":54,
                        "type":"text",
                        "name":"年"
                    },
                    {
                        "id":55,
                        "type":"text",
                        "name":"月"
                    },
                    {
                        "id":56,
                        "type":"text",
                        "name":"日"
                    }
                ]
            },
            {
                "id":51,
                "type":"text",
                "name":"邮箱"
            },
            {
                "id":23,
                "type":"text",
                "name":"手机号"
            },
            {
                "id":22,
                "type":"text",
                "name":"姓名"
            }
        ]
}

function setCheck(zNodes) {
    var setting = {
                check: {
                    enable: true,
                    chkStyle: "radio",
                    radioType: "all"
                }
        };
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    forbideCheck();//禁止有子节点的父节点可选
}

//禁止含有子节点的父节点被选
function forbideCheck(){
    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
    var allNodes=zTree.getNodes();//这里只能找到最外层所有的节点
    forbideCheck_recursion(allNodes);//禁止有子节点的父节点可选
}
//禁止含有子节点的父节点被选，递归
function forbideCheck_recursion(allNodes){
    if(allNodes.length>0){
        for(var i=0;i<allNodes.length;i++){
            if(allNodes[i].isParent){//找到父节点
                allNodes[i].chkDisabled=true;//nocheck为true表示没有选择框
                forbideCheck_recursion(allNodes[i].children);
            }
        }
    }
}
