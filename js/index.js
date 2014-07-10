/**
 * @file 主页面对应的脚本
 * @author xlst(x_l_st@126.com)
 */

define(function (require) {

    // 数据容器
    var model = {};

    // dom元素容器
    var view = {};

    /**
     * 初始化页面
     */
    function initView() {
        view = {
            leftNavi: T.dom.g('leftNavi'),
            apiContent: T.dom.g('apiContent')
        };
        
        function createParentNode(text) {
            var node = T.dom.create(
                'div',
                {
                    className: 'common-node node-1 node-closed',
                    'data-text': text
                }
            );
            
            node.innerHTML = [
                '<div class="node-1-text">',
                    text,
                '</div>',
                '<div class="node-icon"></div>'
            ].join('');
            
            view.leftNavi.appendChild(node);
            
            return node;
        }
        function createChildNode(parentNode, textArray) {
            //  子节点的 外围包裹节点
            var childNodeWrapper = T.dom.next(parentNode);
            if (childNodeWrapper === null
                || !T.dom.hasClass(childNodeWrapper, 'node-2-con')
            ) {
                //  如果页面上不存在该包裹节点，则重新创建
                childNodeWrapper = T.dom.create(
                    'div',
                    {
                        className: 'node-2-con',
                        style: 'display: none;'
                    }
                );
                
                T.dom.insertAfter(childNodeWrapper, parentNode);
            }
            
            //  统一将字符串包装成数组
            if (!T.lang.isArray(textArray)) {
                textArray = [ textArray ];
            }
            T.array.each(
                textArray,
                function (text) {
                    var childNode = T.dom.create(
                        'div',
                        {
                            className: 'common-node node-2',
                            'data-text': text
                        }
                    );
                    childNode.innerHTML = [
                        '<div class="node-2-text">',
                            text,
                        '</div>'
                    ].join('');
                    childNodeWrapper.appendChild(childNode);
                }
            );
        }
        
        var allNameSpaces = tangram_base_api.nameSpace;
        var nameSpaceParentNodeMap = {};
        T.array.each(
            allNameSpaces,
            function (nameSpace) {
                if (nameSpace.n.indexOf('.', 6) < 0) {
                    nameSpaceParentNodeMap[nameSpace.n] = createParentNode(nameSpace.n);
                }
                else {
                    //  忽略三级菜单，如baidu.string.filterFormat.escapeJs
                    if (nameSpace.n.indexOf('.', 6) != nameSpace.n.lastIndexOf('.')) {
                        return ;
                    }
                    
                    createChildNode(nameSpaceParentNodeMap[nameSpace.p], nameSpace.n);
                }
            }
        );
    }

    /**
     * 页面事件绑定
     */
    function bindEvents() {
        
    }
    
    function getDocHTML(docContentData) {
        var templateArr = ['<ul>'];
        
        templateArr.push('<li>#{grammar} : #{desc}</li>');
        
        templateArr.push(
            '<li>',
                '<table class="api-param-table">',
                    '<tr>',
                        '<th>参数名</th>',
                        '<th>类型</th>',
                        '<th>描述</th>',
                    '</tr>'
        );
        T.object.each(
            docContentData.options,
            function (option) {
                templateArr.push(
                    '<tr>',
                        '<td>', option.name, '</td>',
                        '<td>', option.type, '</td>',
                        '<td>', option.desc, '</td>',
                    '</tr>'
                );
            }
        );
        templateArr.push(
                '</table>',
            '</li>'
        );
        
        if (docContentData.returns) {
            templateArr.push(
                '<li>',
                    '返回值',
                    '<br />',
                    docContentData.returns[0].type,
                    ' : ',
                    docContentData.returns[0].desc,
                '</li>'
            );
        }
        
        templateArr.push('</ul>');
        
        return T.string.format(templateArr.join(''), docContentData);
    }
    
    return {
        enter: function (options) {
            var sideBarControl = require('./sideBarControl');
            
            sideBarControl.bindNodeClicked(
                function (node) {
                    var docMap = tangram_base_api.docMap;
                    var docContentData = docMap[T.dom.getAttr(node, 'data-text')];
                    
                    view.apiContent.innerHTML = getDocHTML(docContentData);
                }
            );
            
            initView();
            bindEvents();
        }
    };
});
