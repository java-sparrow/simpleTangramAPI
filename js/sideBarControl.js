/**
 * @file 侧边栏控制（菜单栏伸缩、侧边栏伸缩）
 * @author xlst(x_l_st@126.com)
 */

define(function (require) {

    // 数据容器
    var model = {};

    // dom元素容器
    var view = {
        leftNavi: T.dom.g('leftNavi'),
        
        shrink: T.dom.q('shrink-icon', this.leftNavi)[0],
        leftSidebar: T.dom.q('layout-common-sidebar')[0],
        expendBar: T.dom.g('expendBar'),
        main: T.dom.q('layout-common-main')[0]
    };
    
    //  获得节点级别
    function getNodeLevel(node) {
        var i = 1;
        while (!T.dom.hasClass(node, 'node-'+i) && i<100) {
            i++;
        }
        return (i == 100) ? 0 : i;
    }
    //  清除nowAt节点的选中状态
    function clearNowAtNode() {
        T.object.each(
            T.dom.q('common-node', view.leftNavi),
            function (ele) {
                T.dom.removeClass(ele, 'node-' + getNodeLevel(ele) + '-nowat');
            }
        );
    }
    //  重置选中节点的nowAt状态
    function resetNowAtNode(node) {
        var parent = T.dom.prev(node);
        var nodeLevel = getNodeLevel(node);
        
        T.dom.addClass(node, 'node-' + nodeLevel + '-nowat');
        
        if (!parent || !T.dom.hasClass(parent, 'node-' + (nodeLevel-1))) {
            parent = T.dom.prev(node.parentNode);
        }
        
        if (parent) {
            //  递归，以使该节点的所有逻辑父菜单生效
            resetNowAtNode(parent);
        }
    }
    //  展开子节点
    function showChildrenNode(parent) {
        var childNodes = T.dom.next(parent);
        //  因为tangram的show方法没有容错，所以这里要先判断
        if (childNodes) {
            T.dom.show(childNodes);
        }
    }
    //  收缩子节点
    function hideChildrenNode(parent) {
        var childNodes = T.dom.next(parent);
        if (childNodes) {
            T.dom.hide(childNodes);
        }
    }
    //  展开/伸缩 子节点
    function toggleChildrenNode(ele) {
        if (T.dom.hasClass(ele, 'node-open|node-opened')) {
            T.dom.removeClass(ele, 'node-open node-opened');
            T.dom.addClass(ele, 'node-closed');
            
            hideChildrenNode(ele);
        }
        else if (T.dom.hasClass(ele, 'node-closed')) {
            T.dom.removeClass(ele, 'node-closed');
            //  一二级菜单的类名不同，所以需要分开处理
            if (T.dom.hasClass(ele, 'node-1')) {
                T.dom.addClass(ele, 'node-open');
            }
            else {
                T.dom.addClass(ele, 'node-opened');
            }
            
            showChildrenNode(ele);
        }
    }
    
    /**
     * 页面事件绑定：侧边栏 事件控制、菜单节点 事件控制
     */
    function bindEvents() {
        var expendBar = view.expendBar;
        
        //  隐藏侧边栏
        T.event.on(
            view.shrink,
            'click',
            function (e) {
                T.dom.hide(view.leftSidebar);
                
                T.dom.removeClass(expendBar, 'nav-bar-opened');
                T.dom.addClass(expendBar, 'nav-bar-closed');
                
                T.dom.addClass(view.main, 'layout-common-main-expend');
                
                //  阻止事件传播，防止冒泡到第一个菜单，影响nowat状态
                // T.event.stopPropagation(e);
            }
        );
        //  展开侧边栏
        T.event.on(
            expendBar,
            'click',
            function (e) {
                T.dom.show(view.leftSidebar);
                
                T.dom.removeClass(expendBar, 'nav-bar-closed');
                T.dom.addClass(expendBar, 'nav-bar-opened');
                
                T.dom.removeClass(view.main, 'layout-common-main-expend');
            }
        );
        
        //  绑定菜单节点的单击事件
        T.event.on(
            view.leftNavi,
            'click',
            function (e) {
                var node = T.event.getTarget(e);
                
                if (T.dom.hasClass(node, 'common-node')) {
                    //   设置节点状态
                    clearNowAtNode();
                    resetNowAtNode(node);
                }
                else if (T.dom.hasClass(node.parentNode, 'common-node')) {
                    //   设置节点状态
                    clearNowAtNode();
                    resetNowAtNode(node.parentNode);
                }
            }
        );
        //  绑定一级菜单节点的双击事件
        T.event.on(
            view.leftNavi,
            'dblclick',
            function (e) {
                var node = T.event.getTarget(e);
                
                if (T.dom.hasClass(node, 'node-1')) {
                    toggleChildrenNode(node);
                }
                else if (T.dom.hasClass(node.parentNode, 'node-1')) {
                    toggleChildrenNode(node.parentNode);
                }
            }
        );
        
        //  绑定节点前的图标点击事件
        T.event.on(
            view.leftNavi,
            'click',
            function (e) {
                var node = T.event.getTarget(e);
                
                if (T.dom.hasClass(node, 'node-icon')) {
                    if (T.dom.hasClass(node.parentNode, 'common-node')) {
                        toggleChildrenNode(node.parentNode);
                    }
                }
            }
        );
        
        //  取消侧边栏的文本选中事件
        T.event.on(
            view.leftNavi, 'selectstart',
            function () {
                return false;
            }
        );
        
        //  初始化nowAt状态？
    }
    
    bindEvents();
    
    return {
        clearNowAtNode: clearNowAtNode,
        resetNowAtNode: resetNowAtNode,
        
        showChildrenNode: showChildrenNode,
        hideChildrenNode: hideChildrenNode,
        toggleChildrenNode: toggleChildrenNode,
        
        bindNodeClicked: function (callback) {
            T.event.on(
                view.leftNavi,
                'click',
                function (e) {
                    var node = T.event.getTarget(e);
                    
                    if (T.dom.hasClass(node, 'node-icon')) {
                        //  不响应小箭头图标事件
                        return ;
                    }
                    
                    if (T.dom.hasClass(node, 'common-node')) {
                        callback(node);
                    }
                    else if (T.dom.hasClass(node.parentNode, 'common-node')) {
                        callback(node.parentNode);
                    }
                }
            );
        }
    };
});
