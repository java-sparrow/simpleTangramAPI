var tangram_base_api = {
    plugin : {},
    docMap : {
        'baidu.ajax' : {
            name : 'ajax',
            desc : '对XMLHttpRequest请求的封装'
        },
        'baidu.ajax.form' : {
            name : 'form',
            type : 'XMLHttpRequest',
            desc : '将一个表单用ajax方式提交',
            grammar : 'baidu.ajax.form(form[, options])',
            options : [{
                name : 'form',
                type : 'HTMLFormElement',
                desc : '需要提交的表单元素'
            }, {
                name : 'options',
                type : 'Object',
                desc : '发送请求的选项参数'
            }, {
                name : 'options.async',
                type : 'Boolean',
                desc : '是否异步请求。默认为true（异步）'
            }, {
                name : 'options.username',
                type : 'String',
                desc : '用户名'
            }, {
                name : 'options.password',
                type : 'String',
                desc : '密码'
            }, {
                name : 'options.headers',
                type : 'Object',
                desc : '要设置的http request header'
            }, {
                name : 'options.replacer',
                type : 'Function',
                desc : '对参数值特殊处理的函数,replacer(string value, string key)'
            }, {
                name : 'options.onbeforerequest',
                type : 'Function',
                desc : '发送请求之前触发，function(XMLHttpRequest xhr)。'
            }, {
                name : 'options.onsuccess',
                type : 'Function',
                desc : '请求成功时触发，function(XMLHttpRequest xhr, string responseText)。'
            }, {
                name : 'options.onfailure',
                type : 'Function',
                desc : '请求失败时触发，function(XMLHttpRequest xhr)。'
            }, {
                name : 'options.on{STATUS_CODE}',
                type : 'Function',
                desc : '当请求为相应状态码时触发的事件，如on302、on404、on500，function(XMLHttpRequest xhr)。3XX的状态码浏览器无法获取，4xx的，可能因为未知问题导致获取失败。'
            }],
            returns : [{
                type : 'XMLHttpRequest',
                desc : '发送请求的XMLHttpRequest对象'
            }],
            sees : [{
                desc : 'baidu.ajax.request'
            }]
        },
        'baidu.ajax.get' : {
            name : 'get',
            type : 'XMLHttpRequest',
            desc : '发送一个get请求',
            grammar : 'baidu.ajax.get(url[, onsuccess])',
            meta : 'standard',
            options : [{
                name : 'url',
                type : 'string',
                desc : '发送请求的url地址'
            }, {
                name : 'onsuccess',
                type : 'Function',
                desc : '请求成功之后的回调函数，function(XMLHttpRequest xhr, string responseText)'
            }],
            returns : [{
                type : 'XMLHttpRequest',
                desc : '发送请求的XMLHttpRequest对象'
            }],
            sees : [{
                desc : 'baidu.ajax.post,baidu.ajax.request'
            }]
        },
        'baidu.ajax.post' : {
            name : 'post',
            type : 'XMLHttpRequest',
            desc : '发送一个post请求',
            grammar : 'baidu.ajax.post(url, data[, onsuccess])',
            meta : 'standard',
            options : [{
                name : 'url',
                type : 'string',
                desc : '发送请求的url地址'
            }, {
                name : 'data',
                type : 'string',
                desc : '发送的数据'
            }, {
                name : 'onsuccess',
                type : 'Function',
                desc : '请求成功之后的回调函数，function(XMLHttpRequest xhr, string responseText)'
            }],
            returns : [{
                type : 'XMLHttpRequest',
                desc : '发送请求的XMLHttpRequest对象'
            }],
            sees : [{
                desc : 'baidu.ajax.get,baidu.ajax.request'
            }]
        },
        'baidu.ajax.request' : {
            name : 'request',
            type : 'XMLHttpRequest',
            desc : '发送一个ajax请求',
            grammar : 'baidu.ajax.request(url[, options])',
            meta : 'standard',
            options : [{
                name : 'url',
                type : 'string',
                desc : '发送请求的url'
            }, {
                name : 'options',
                type : 'Object',
                desc : '发送请求的选项参数'
            }, {
                name : 'options.method',
                type : 'String',
                desc : '请求发送的类型。默认为GET'
            }, {
                name : 'options.async',
                type : 'Boolean',
                desc : '是否异步请求。默认为true（异步）'
            }, {
                name : 'options.data',
                type : 'String',
                desc : '需要发送的数据。如果是GET请求的话，不需要这个属性'
            }, {
                name : 'options.headers',
                type : 'Object',
                desc : '要设置的http request header'
            }, {
                name : 'options.timeout',
                type : 'number',
                desc : '超时时间，单位ms'
            }, {
                name : 'options.username',
                type : 'String',
                desc : '用户名'
            }, {
                name : 'options.password',
                type : 'String',
                desc : '密码'
            }, {
                name : 'options.onsuccess',
                type : 'Function',
                desc : '请求成功时触发，function(XMLHttpRequest xhr, string responseText)。'
            }, {
                name : 'options.onfailure',
                type : 'Function',
                desc : '请求失败时触发，function(XMLHttpRequest xhr)。'
            }, {
                name : 'options.onbeforerequest',
                type : 'Function',
                desc : '发送请求之前触发，function(XMLHttpRequest xhr)。'
            }, {
                name : 'options.on{STATUS_CODE}',
                type : 'Function',
                desc : '当请求为相应状态码时触发的事件，如on302、on404、on500，function(XMLHttpRequest xhr)。3XX的状态码浏览器无法获取，4xx的，可能因为未知问题导致获取失败。'
            }, {
                name : 'options.noCache',
                type : 'Boolean',
                desc : '是否需要缓存，默认为false（缓存），1.1.1起支持。'
            }],
            returns : [{
                type : 'XMLHttpRequest',
                desc : '发送请求的XMLHttpRequest对象'
            }],
            sees : [{
                desc : 'baidu.ajax.get,baidu.ajax.post,baidu.ajax.form'
            }]
        },
        'baidu.array' : {
            name : 'array',
            desc : '操作数组的方法'
        },
        'baidu.array.contains' : {
            name : 'contains',
            type : 'boolean',
            desc : '判断一个数组中是否包含给定元素',
            grammar : 'baidu.array.contains(source, obj)',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要判断的数组.'
            }, {
                name : 'obj',
                type : 'Any',
                desc : '要查找的元素.'
            }],
            returns : [{
                type : 'boolean',
                desc : '判断结果.'
            }]
        },
        'baidu.array.each' : {
            name : 'each',
            type : 'Array',
            desc : '遍历数组中所有元素',
            grammar : 'baidu.array.each(source, iterator[, thisObject])',
            meta : 'standard',
            shortcut : 'each',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要遍历的数组'
            }, {
                name : 'iterator',
                type : 'Function',
                desc : '对每个数组元素进行调用的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function (item, index)。'
            }, {
                name : 'thisObject',
                type : 'Object',
                desc : '函数调用时的this指针，如果没有此参数，默认是当前遍历的数组'
            }],
            returns : [{
                type : 'Array',
                desc : '遍历的数组'
            }]
        },
        'baidu.array.empty' : {
            name : 'empty',
            desc : '清空一个数组',
            grammar : 'baidu.array.empty(source)',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要清空的数组.'
            }]
        },
        'baidu.array.every' : {
            name : 'every',
            type : 'boolean',
            desc : '判断一个数组中是否所有元素都满足给定条件',
            grammar : 'baidu.array.every(source, iterator[,thisObject])',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要判断的数组.'
            }, {
                name : 'iterator',
                type : 'Function',
                desc : '判断函数.'
            }, {
                name : 'thisObject',
                type : 'Object',
                desc : '函数调用时的this指针，如果没有此参数，默认是当前遍历的数组'
            }],
            returns : [{
                type : 'boolean',
                desc : '判断结果.'
            }],
            sees : [{
                desc : 'baidu.array.some'
            }]
        },
        'baidu.array.filter' : {
            name : 'filter',
            type : 'Array',
            desc : '从数组中筛选符合条件的元素',
            grammar : 'baidu.array.filter(source, iterator[, thisObject])',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要筛选的数组'
            }, {
                name : 'iterator',
                type : 'Function',
                desc : '对每个数组元素进行筛选的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function (item, index)，函数需要返回true或false'
            }, {
                name : 'thisObject',
                type : 'Object',
                desc : '函数调用时的this指针，如果没有此参数，默认是当前遍历的数组'
            }],
            returns : [{
                type : 'Array',
                desc : '符合条件的数组项集合'
            }],
            sees : [{
                desc : 'baidu.array.find'
            }]
        },
        'baidu.array.find' : {
            name : 'find',
            type : 'Any|null',
            desc : '从数组中寻找符合条件的第一个元素',
            grammar : 'baidu.array.find(source, iterator)',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要查找的数组'
            }, {
                name : 'iterator',
                type : 'Function',
                desc : '对每个数组元素进行查找的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function (item, index)，函数需要返回true或false'
            }],
            returns : [{
                type : 'Any|null',
                desc : '符合条件的第一个元素，找不到时返回null'
            }],
            sees : [{
                desc : 'baidu.array.filter,baidu.array.indexOf'
            }]
        },
        'baidu.array.hash' : {
            name : 'hash',
            type : 'Object',
            desc : '将两个数组参数合并成一个类似hashMap结构的对象，这个对象使用第一个数组做为key，使用第二个数组做为值，如果第二个参数未指定，则把对象的所有值置为true。',
            grammar : 'baidu.array.hash(keys[, values])',
            options : [{
                name : 'keys',
                type : 'Array',
                desc : '作为key的数组'
            }, {
                name : 'values',
                type : 'Array',
                desc : '作为value的数组，未指定此参数时，默认值将对象的值都设为true。'
            }],
            returns : [{
                type : 'Object',
                desc : '合并后的对象{key : value}'
            }]
        },
        'baidu.array.indexOf' : {
            name : 'indexOf',
            type : 'number',
            desc : '查询数组中指定元素的索引位置',
            grammar : 'baidu.array.indexOf(source, match[, fromIndex])',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要查询的数组'
            }, {
                name : 'match',
                type : 'Any',
                desc : '查询项'
            }, {
                name : 'fromIndex',
                type : 'number',
                desc : '查询的起始位索引位置，如果为负数，则从source.length+fromIndex往后开始查找'
            }],
            returns : [{
                type : 'number',
                desc : '指定元素的索引位置，查询不到时返回-1'
            }],
            sees : [{
                desc : 'baidu.array.find,baidu.array.lastIndexOf'
            }]
        },
        'baidu.array.lastIndexOf' : {
            name : 'lastIndexOf',
            type : 'number',
            desc : '从后往前，查询数组中指定元素的索引位置',
            grammar : 'baidu.array.lastIndexOf(source, match)',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要查询的数组'
            }, {
                name : 'match',
                type : 'Any',
                desc : '查询项'
            }, {
                name : 'fromIndex',
                type : 'number',
                desc : '查询的起始位索引位置，如果为负数，则从source.length+fromIndex往前开始查找'
            }],
            returns : [{
                type : 'number',
                desc : '指定元素的索引位置，查询不到时返回-1'
            }],
            sees : [{
                desc : 'baidu.array.indexOf'
            }]
        },
        'baidu.array.map' : {
            name : 'map',
            type : 'Array',
            desc : '遍历数组中所有元素，将每一个元素应用方法进行转换，并返回转换后的新数组。',
            grammar : 'baidu.array.map(source, iterator[, thisObject])',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要遍历的数组.'
            }, {
                name : 'iterator',
                type : 'Function',
                desc : '对每个数组元素进行处理的函数.'
            }, {
                name : 'thisObject',
                type : 'Object',
                desc : '函数调用时的this指针，如果没有此参数，默认是当前遍历的数组'
            }],
            returns : [{
                type : 'Array',
                desc : 'map后的数组.'
            }],
            sees : [{
                desc : 'baidu.array.reduce'
            }]
        },
        'baidu.array.reduce' : {
            name : 'reduce',
            type : 'Array',
            desc : '遍历数组中所有元素，将每一个元素应用方法进行合并，并返回合并后的结果。',
            version : '1.3.4',
            grammar : 'baidu.array.reduce(source, iterator[, initializer])',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要遍历的数组.'
            }, {
                name : 'iterator',
                type : 'Function',
                desc : '对每个数组元素进行处理的函数，函数接受四个参数：上一次reduce的结果（或初始值），当前元素值，索引值，整个数组.'
            }, {
                name : 'initializer',
                type : 'Object',
                desc : '合并的初始项，如果没有此参数，默认用数组中的第一个值作为初始值.'
            }],
            returns : [{
                type : 'Array',
                desc : 'reduce后的值.'
            }],
            sees : [{
                desc : 'baidu.array.reduce'
            }]
        },
        'baidu.array.remove' : {
            name : 'remove',
            type : 'Array',
            desc : '移除数组中的项',
            grammar : 'baidu.array.remove(source, match)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要移除项的数组'
            }, {
                name : 'match',
                type : 'Any',
                desc : '要移除的项'
            }],
            returns : [{
                type : 'Array',
                desc : '移除后的数组'
            }],
            sees : [{
                desc : 'baidu.array.removeAt'
            }]
        },
        'baidu.array.removeAt' : {
            name : 'removeAt',
            type : 'Any',
            desc : '移除数组中的项',
            grammar : 'baidu.array.removeAt(source, index)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要移除项的数组'
            }, {
                name : 'index',
                type : 'number',
                desc : '要移除项的索引位置'
            }],
            returns : [{
                type : 'Any',
                desc : '被移除的数组项'
            }],
            sees : [{
                desc : 'baidu.array.remove'
            }]
        },
        'baidu.array.some' : {
            name : 'some',
            type : 'boolean',
            desc : '判断一个数组中是否有部分元素满足给定条件',
            grammar : 'baidu.array.some(source, iterator[,thisObject])',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要判断的数组.'
            }, {
                name : 'iterator',
                type : 'Function',
                desc : '判断函数.'
            }, {
                name : 'thisObject',
                type : 'Object',
                desc : '函数调用时的this指针，如果没有此参数，默认是当前遍历的数组'
            }],
            returns : [{
                type : 'boolean',
                desc : '判断结果.'
            }],
            sees : [{
                desc : 'baidu.array.every'
            }]
        },
        'baidu.array.unique' : {
            name : 'unique',
            type : 'Array',
            desc : '过滤数组中的相同项。如果两个元素相同，会删除后一个元素。',
            grammar : 'baidu.array.unique(source[, compareFn])',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要过滤相同项的数组'
            }, {
                name : 'compareFn',
                type : 'Function',
                desc : '比较两个数组项是否相同的函数,两个数组项作为函数的参数。'
            }],
            returns : [{
                type : 'Array',
                desc : '过滤后的新数组'
            }]
        },
        'baidu.async' : {
            name : 'async',
            desc : '对异步调用的封装'
        },
        'baidu.async.get' : {
            name : 'get',
            type : 'baidu.async.Deferred',
            desc : '支持异步的ajax.get封装.',
            version : '1.3.9',
            grammar : 'baidu.async.Deferred(url)',
            options : [{
                name : 'url',
                type : 'String',
                desc : '请求地址.'
            }],
            returns : [{
                type : 'baidu.async.Deferred',
                desc : 'Deferred对象,支持链式调用.'
            }]
        },
        'baidu.async.post' : {
            name : 'post',
            type : 'baidu.async.Deferred',
            desc : '支持异步的ajax.post封装.',
            version : '1.3.9',
            grammar : 'baidu.async.post(url, data)',
            options : [{
                name : 'url',
                type : 'String',
                desc : '请求地址.'
            }, {
                name : 'data',
                type : 'String',
                desc : '请求数据.'
            }],
            returns : [{
                type : 'baidu.async.Deferred',
                desc : 'Deferred对象,支持链式调用.'
            }]
        },
        'baidu.async.when' : {
            name : 'when',
            type : 'baidu.async.Deferred',
            desc : '保证onResolve或onReject可以按序执行. 若第一个参数为deferred,则deferred完成后执行.否则立即执行onResolve,并传入第一个参数.',
            version : '1.3.9',
            grammar : 'baidu.async.when(deferredOrValue, onResolve, onReject)',
            options : [{
                name : 'deferredOrValue',
                type : 'baidu.async.Deferred|*',
                desc : 'deferred实例或任意值.'
            }, {
                name : 'onResolve',
                type : 'Function',
                desc : '成功时的回调函数.若第一个参数不是Deferred实例,则立即执行此方法.'
            }, {
                name : 'onReject',
                type : 'Function',
                desc : '失败时的回调函数.'
            }],
            returns : [{
                type : 'baidu.async.Deferred',
                desc : 'deferred.'
            }]
        },
        'baidu.browser' : {
            name : 'browser',
            desc : '判断浏览器类型和特性的属性'
        },
        'baidu.browser.chrome' : {
            name : 'chrome',
            type : 'Number',
            desc : '判断是否为chrome浏览器',
            grammar : 'baidu.browser.chrome',
            returns : [{
                type : 'Number',
                desc : 'chrome版本号'
            }],
            sees : [{
                desc : 'baidu.browser.ie,baidu.browser.firefox,baidu.browser.safari,baidu.browser.opera'
            }]
        },
        'baidu.browser.firefox' : {
            name : 'firefox',
            type : 'Number',
            desc : '判断是否为firefox浏览器',
            grammar : 'baidu.browser.firefox',
            meta : 'standard',
            returns : [{
                type : 'Number',
                desc : 'firefox版本号'
            }],
            sees : [{
                desc : 'baidu.browser.ie,baidu.browser.safari,baidu.browser.opera,baidu.browser.chrome'
            }]
        },
        'baidu.browser.ie' : {
            name : 'ie',
            type : 'Number',
            desc : '判断是否为ie浏览器',
            grammar : 'baidu.browser.ie',
            returns : [{
                type : 'Number',
                desc : 'IE版本号'
            }]
        },
        'baidu.browser.isGecko' : {
            name : 'isGecko',
            type : 'Boolean',
            desc : '判断是否为gecko内核',
            grammar : 'baidu.browser.isGecko',
            meta : 'standard',
            returns : [{
                type : 'Boolean',
                desc : '布尔值'
            }],
            sees : [{
                desc : 'baidu.browser.isWebkit'
            }]
        },
        'baidu.browser.isStrict' : {
            name : 'isStrict',
            type : 'Boolean',
            desc : '判断是否严格标准的渲染模式',
            grammar : 'baidu.browser.isStrict',
            meta : 'standard',
            returns : [{
                type : 'Boolean',
                desc : '布尔值'
            }]
        },
        'baidu.browser.isWebkit' : {
            name : 'isWebkit',
            type : 'Boolean',
            desc : '判断是否为webkit内核',
            grammar : 'baidu.browser.isWebkit',
            meta : 'standard',
            returns : [{
                type : 'Boolean',
                desc : '布尔值'
            }],
            sees : [{
                desc : 'baidu.browser.isGecko'
            }]
        },
        'baidu.browser.maxthon' : {
            name : 'maxthon',
            type : 'Number',
            desc : '判断是否为maxthon浏览器',
            grammar : 'baidu.browser.maxthon',
            returns : [{
                type : 'Number',
                desc : 'maxthon版本号'
            }],
            sees : [{
                desc : 'baidu.browser.ie'
            }]
        },
        'baidu.browser.opera' : {
            name : 'opera',
            desc : 'opera 从10开始不是用opera后面的字符串进行版本的判断在Browser identification最后添加Version + 数字进行版本标识opera后面的数字保持在9.80不变'
        },
        'baidu.browser.safari' : {
            name : 'safari',
            desc : '判断是否为safari浏览器, 支持ipad',
            grammar : 'baidu.browser.safari',
            meta : 'standard',
            sees : [{
                desc : 'baidu.browser.ie,baidu.browser.firefox,baidu.browser.opera,baidu.browser.chrome'
            }]
        },
        'baidu.cookie' : {
            name : 'cookie',
            desc : '操作cookie的方法'
        },
        'baidu.cookie.get' : {
            name : 'get',
            type : 'string|null',
            desc : '获取cookie的值，用decodeURIComponent进行解码',
            grammar : 'baidu.cookie.get(key)',
            meta : 'standard',
            options : [{
                name : 'key',
                type : 'string',
                desc : '需要获取Cookie的键名'
            }],
            returns : [{
                type : 'string|null',
                desc : 'cookie的值，获取不到时返回null'
            }],
            sees : [{
                desc : 'baidu.cookie.getRaw,baidu.cookie.set'
            }]
        },
        'baidu.cookie.getRaw' : {
            name : 'getRaw',
            type : 'string|null',
            desc : '获取cookie的值，不对值进行解码',
            grammar : 'baidu.cookie.getRaw(key)',
            meta : 'standard',
            options : [{
                name : 'key',
                type : 'string',
                desc : '需要获取Cookie的键名'
            }],
            returns : [{
                type : 'string|null',
                desc : '获取的Cookie值，获取不到时返回null'
            }],
            sees : [{
                desc : 'baidu.cookie.get,baidu.cookie.setRaw'
            }]
        },
        'baidu.cookie.remove' : {
            name : 'remove',
            desc : '删除cookie的值',
            grammar : 'baidu.cookie.remove(key, options)',
            meta : 'standard',
            options : [{
                name : 'key',
                type : 'string',
                desc : '需要删除Cookie的键名'
            }, {
                name : 'options',
                type : 'Object',
                desc : '需要删除的cookie对应的 path domain 等值'
            }]
        },
        'baidu.cookie.set' : {
            name : 'set',
            desc : '设置cookie的值，用encodeURIComponent进行编码',
            grammar : 'baidu.cookie.set(key, value[, options])',
            meta : 'standard',
            options : [{
                name : 'key',
                type : 'string',
                desc : '需要设置Cookie的键名'
            }, {
                name : 'value',
                type : 'string',
                desc : '需要设置Cookie的值'
            }, {
                name : 'options',
                type : 'Object',
                desc : '设置Cookie的其他可选参数'
            }, {
                name : 'options.path',
                type : 'string',
                desc : 'cookie路径'
            }, {
                name : 'options.expires',
                type : 'Date|number',
                desc : 'cookie过期时间,如果类型是数字的话, 单位是毫秒'
            }, {
                name : 'options.domain',
                type : 'string',
                desc : 'cookie域名'
            }, {
                name : 'options.secure',
                type : 'string',
                desc : 'cookie是否安全传输'
            }],
            sees : [{
                desc : 'baidu.cookie.setRaw,baidu.cookie.get'
            }]
        },
        'baidu.cookie.setRaw' : {
            name : 'setRaw',
            desc : '设置cookie的值，不对值进行编码',
            grammar : 'baidu.cookie.setRaw(key, value[, options])',
            meta : 'standard',
            options : [{
                name : 'key',
                type : 'string',
                desc : '需要设置Cookie的键名'
            }, {
                name : 'value',
                type : 'string',
                desc : '需要设置Cookie的值'
            }, {
                name : 'options',
                type : 'Object',
                desc : '设置Cookie的其他可选参数'
            }, {
                name : 'options.path',
                type : 'string',
                desc : 'cookie路径'
            }, {
                name : 'options.expires',
                type : 'Date|number',
                desc : 'cookie过期时间,如果类型是数字的话, 单位是毫秒'
            }, {
                name : 'options.domain',
                type : 'string',
                desc : 'cookie域名'
            }, {
                name : 'options.secure',
                type : 'string',
                desc : 'cookie是否安全传输'
            }],
            sees : [{
                desc : 'baidu.cookie.set,baidu.cookie.getRaw'
            }]
        },
        'baidu.date' : {
            name : 'date',
            desc : '操作日期的方法'
        },
        'baidu.date.format' : {
            name : 'format',
            type : 'string',
            desc : '对目标日期对象进行格式化',
            grammar : 'baidu.date.format(source, pattern)',
            options : [{
                name : 'source',
                type : 'Date',
                desc : '目标日期对象'
            }, {
                name : 'pattern',
                type : 'string',
                desc : '日期格式化规则'
            }],
            methods : [{
                name : 'replacer',
                options : [{
                    name : 'patternPart'
                }, {
                    name : 'result'
                }]
            }],
            returns : [{
                type : 'string',
                desc : '格式化后的字符串'
            }]
        },
        'baidu.date.parse' : {
            name : 'parse',
            type : 'Date',
            desc : '将目标字符串转换成日期对象',
            grammar : 'baidu.date.parse(source)',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }],
            returns : [{
                type : 'Date',
                desc : '转换后的日期对象'
            }]
        },
        'baidu.dom' : {
            name : 'dom',
            desc : '操作dom的方法'
        },
        'baidu.dom.addClass' : {
            name : 'addClass',
            type : 'HTMLElement',
            desc : '为目标元素添加className',
            grammar : 'baidu.dom.addClass(element, className)',
            meta : 'standard',
            shortcut : 'addClass',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'className',
                type : 'string',
                desc : '要添加的className，允许同时添加多个class，中间使用空白符分隔'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.removeClass'
            }]
        },
        'baidu.dom.children' : {
            name : 'children',
            type : 'Array',
            desc : '获取目标元素的直接子元素列表',
            grammar : 'baidu.dom.children(element)',
            meta : 'standard',
            options : [{
                name : 'element',
                type : 'HTMLElement|String',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'Array',
                desc : '目标元素的子元素列表，没有子元素时返回空数组'
            }]
        },
        'baidu.dom.contains' : {
            name : 'contains',
            type : 'boolean',
            desc : '判断一个元素是否包含另一个元素',
            grammar : 'baidu.dom.contains(container, contained)',
            meta : 'standard',
            options : [{
                name : 'container',
                type : 'HTMLElement|string',
                desc : '包含元素或元素的id'
            }, {
                name : 'contained',
                type : 'HTMLElement|string',
                desc : '被包含元素或元素的id'
            }],
            returns : [{
                type : 'boolean',
                desc : 'contained元素是否被包含于container元素的DOM节点上'
            }],
            sees : [{
                desc : 'baidu.dom.intersect'
            }]
        },
        'baidu.dom.create' : {
            name : 'create',
            type : 'HTMLElement',
            desc : '创建 Element 对象。',
            version : '1.3',
            grammar : 'baidu.dom.create(tagName[, options])',
            meta : 'standard',
            options : [{
                name : 'tagName',
                type : 'string',
                desc : '标签名称.'
            }, {
                name : 'opt_attributes',
                type : 'Object',
                desc : '元素创建时拥有的属性，如style和className.'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '创建的 Element 对象'
            }]
        },
        'baidu.dom.drag' : {
            name : 'drag',
            desc : '拖动指定的DOM元素',
            version : '1.2',
            grammar : 'baidu.dom.drag(element, options)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '元素或者元素的id.'
            }, {
                name : 'options',
                type : 'Object',
                desc : '拖曳配置项.'
            }, {
                name : 'options.range',
                type : 'Array',
                desc : '限制drag的拖拽范围，数组中必须包含四个值，分别是上、右、下、左边缘相对上方或左方的像素距离。默认无限制.'
            }, {
                name : 'options.interval',
                type : 'Number',
                desc : '拖曳行为的触发频度（时间：毫秒）.'
            }, {
                name : 'options.capture',
                type : 'Boolean',
                desc : '鼠标拖曳粘滞.'
            }, {
                name : 'options.mouseEvent',
                type : 'Object',
                desc : '键名为clientX和clientY的object，若不设置此项，默认会获取当前鼠标位置.'
            }, {
                name : 'options.ondragstart',
                type : 'Function',
                desc : 'drag开始时触发.'
            }, {
                name : 'options.ondrag',
                type : 'Function',
                desc : 'drag进行中触发.'
            }, {
                name : 'options.ondragend',
                type : 'Function',
                desc : 'drag结束时触发.'
            }, {
                name : 'options.autoStop',
                type : 'function',
                desc : '是否在onmouseup时自动停止拖拽。默认为true.'
            }],
            sees : [{
                desc : 'baidu.dom.draggable'
            }]
        },
        'baidu.dom.draggable' : {
            name : 'draggable',
            type : 'Draggable Instance',
            desc : '让一个DOM元素可拖拽',
            version : '1.2',
            grammar : 'baidu.dom.draggable(element[, options])',
            options : [{
                name : 'element',
                type : 'string|HTMLElement',
                desc : '元素或者元素的ID.'
            }, {
                name : 'options',
                type : 'Object',
                desc : '选项.'
            }, {
                name : 'options.range',
                type : 'Array',
                desc : '限制drag的拖拽范围，数组中必须包含四个值，分别是上、右、下、左边缘相对上方或左方的像素距离。默认无限制.'
            }, {
                name : 'options.interval',
                type : 'Number',
                desc : '拖曳行为的触发频度（时间：毫秒）.'
            }, {
                name : 'options.capture',
                type : 'Boolean',
                desc : '鼠标拖曳粘滞.'
            }, {
                name : 'options.mouseEvent',
                type : 'Object',
                desc : '键名为clientX和clientY的object，若不设置此项，默认会获取当前鼠标位置.'
            }, {
                name : 'options.onbeforedragstart',
                type : 'Function',
                desc : 'drag开始前触发（即鼠标按下时）.'
            }, {
                name : 'options.ondragstart',
                type : 'Function',
                desc : 'drag开始时触发.'
            }, {
                name : 'options.ondrag',
                type : 'Function',
                desc : 'drag进行中触发.'
            }, {
                name : 'options.ondragend',
                type : 'Function',
                desc : 'drag结束时触发.'
            }, {
                name : 'options.handler',
                type : 'HTMLElement',
                desc : '用于拖拽的手柄，比如dialog的title.'
            }, {
                name : 'options.toggle',
                type : 'Function',
                desc : '在每次ondrag的时候，会调用这个方法判断是否应该停止拖拽。如果此函数返回值为false，则停止拖拽.'
            }],
            methods : [{
                name : 'handlerMouseDown',
                options : [{
                    name : 'e'
                }]
            }],
            returns : [{
                type : 'Draggable Instance',
                desc : '拖拽实例，包含cancel方法，可以停止拖拽.'
            }],
            sees : [{
                desc : 'baidu.dom.drag'
            }]
        },
        'baidu.dom.droppable' : {
            name : 'droppable',
            type : 'Function',
            desc : '让一个DOM元素可以容纳被拖拽的DOM元素',
            version : '1.3',
            grammar : 'baidu.dom.droppable(element[, options])',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '容器元素或者容器元素的ID'
            }, {
                name : 'options',
                type : 'Object',
                desc : '选项，拖拽元素对于容器元素的事件'
            }, {
                name : 'options.ondrop',
                type : 'Function',
                desc : '当元素放到容器元素内部触发'
            }, {
                name : 'options.ondropover',
                type : 'Function',
                desc : '当元素在容器元素上方时触发'
            }, {
                name : 'options.ondropout',
                type : 'Function',
                desc : '当元素移除容器元素时触发'
            }],
            returns : [{
                type : 'Function',
                desc : 'cancel取消拖拽'
            }],
            sees : [{
                desc : 'baidu.dom.droppable'
            }]
        },
        'baidu.dom.empty' : {
            name : 'empty',
            type : 'HTMLElement',
            desc : '删除一个节点下面的所有子节点。',
            version : '1.3',
            grammar : 'baidu.dom.empty(element)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }]
        },
        'baidu.dom.first' : {
            name : 'first',
            type : 'HTMLElement|null',
            desc : '获取目标元素的第一个元素节点',
            grammar : 'baidu.dom.first(element)',
            meta : 'standard',
            options : [{
                name : 'element',
                type : 'HTMLElement|String',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'HTMLElement|null',
                desc : '目标元素的第一个元素节点，查找不到时返回null'
            }],
            sees : [{
                desc : 'baidu.dom.last,baidu.dom.prev,baidu.dom.next'
            }]
        },
        'baidu.dom.fixable' : {
            name : 'fixable',
            type : 'Object',
            desc : '使目标元素拥有可进行与页面可见区域相对位置保持不变的移动的能力',
            grammar : 'baidu.dom.fixable(element, options)',
            options : [{
                name : 'element',
                type : 'HTMLElement|String',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'options',
                type : 'Object',
                desc : '配置项'
            }, {
                name : 'options.vertival',
                type : 'String',
                desc : '取值[top|bottom] 默认值 top'
            }, {
                name : 'options.horizontal',
                type : 'Strgin',
                desc : '取值[left|right] 默认值 left'
            }, {
                name : 'options.offset',
                type : 'Object',
                desc : '{x:String|Number, y:String|Number}} 横向与纵向的取值'
            }, {
                name : 'options.autofix',
                type : 'Boolean',
                desc : '是否自动进行fix，默认值为true'
            }, {
                name : 'options.onrender',
                type : 'Function',
                desc : '当被渲染时候触发'
            }, {
                name : 'options.onupdate',
                type : 'Function',
                desc : '当位置被更新的时候触发'
            }, {
                name : 'options.onrelease',
                type : 'Function',
                desc : '当被释放的时候触发'
            }],
            returns : [{
                type : 'Object',
                desc : '返回值一个对象，有三个方法：render、update、release'
            }]
        },
        'baidu.dom.g' : {
            name : 'g',
            type : 'HTMLElement|null',
            desc : '从文档中获取指定的DOM元素',
            grammar : 'baidu.dom.g(id)',
            meta : 'standard',
            shortcut : 'g,T.G',
            options : [{
                name : 'id',
                type : 'string|HTMLElement',
                desc : '元素的id或DOM元素.'
            }],
            returns : [{
                type : 'HTMLElement|null',
                desc : '获取的元素，查找不到时返回null,如果参数不合法，直接返回参数.'
            }],
            sees : [{
                desc : 'baidu.dom.q'
            }]
        },
        'baidu.dom.getAncestorBy' : {
            name : 'getAncestorBy',
            type : 'HTMLElement|null',
            desc : '获取目标元素符合条件的最近的祖先元素',
            grammar : 'baidu.dom.getAncestorBy(element, method)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'method',
                type : 'Function',
                desc : '判断祖先元素条件的函数，function (element)'
            }],
            returns : [{
                type : 'HTMLElement|null',
                desc : '符合条件的最近的祖先元素，查找不到时返回null'
            }],
            sees : [{
                desc : 'baidu.dom.getAncestorByTag,baidu.dom.getAncestorByClass'
            }]
        },
        'baidu.dom.getAncestorByClass' : {
            name : 'getAncestorByClass',
            type : 'HTMLElement|null',
            desc : '获取目标元素指定元素className最近的祖先元素',
            grammar : 'baidu.dom.getAncestorByClass(element, className)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'className',
                type : 'string',
                desc : '祖先元素的class，只支持单个class'
            }],
            returns : [{
                type : 'HTMLElement|null',
                desc : '指定元素className最近的祖先元素，查找不到时返回null'
            }],
            sees : [{
                desc : 'baidu.dom.getAncestorBy,baidu.dom.getAncestorByTag'
            }]
        },
        'baidu.dom.getAncestorByTag' : {
            name : 'getAncestorByTag',
            type : 'HTMLElement|null',
            desc : '获取目标元素指定标签的最近的祖先元素',
            grammar : 'baidu.dom.getAncestorByTag(element, tagName)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'tagName',
                type : 'string',
                desc : '祖先元素的标签名'
            }],
            returns : [{
                type : 'HTMLElement|null',
                desc : '指定标签的最近的祖先元素，查找不到时返回null'
            }],
            sees : [{
                desc : 'baidu.dom.getAncestorBy,baidu.dom.getAncestorByClass'
            }]
        },
        'baidu.dom.getAttr' : {
            name : 'getAttr',
            type : 'string|null',
            desc : '获取目标元素的属性值',
            grammar : 'baidu.dom.getAttr(element, key)',
            meta : 'standard',
            shortcut : 'getAttr',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'key',
                type : 'string',
                desc : '要获取的attribute键名'
            }],
            returns : [{
                type : 'string|null',
                desc : '目标元素的attribute值，获取不到时返回null'
            }],
            sees : [{
                desc : 'baidu.dom.setAttr,baidu.dom.setAttrs'
            }]
        },
        'baidu.dom.getComputedStyle' : {
            name : 'getComputedStyle',
            type : 'string',
            desc : '获取目标元素的computed style值。如果元素的样式值不能被浏览器计算，则会返回空字符串（IE）',
            grammar : 'baidu.dom.getComputedStyle(element, key)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'key',
                type : 'string',
                desc : '要获取的样式名'
            }],
            returns : [{
                type : 'string',
                desc : '目标元素的computed style值'
            }],
            sees : [{
                desc : 'baidu.dom.getStyle'
            }]
        },
        'baidu.dom.getCurrentStyle' : {
            name : 'getCurrentStyle',
            type : 'string',
            desc : '获取目标元素的 currentStyle 值，兼容非IE浏览器某些样式名称或者值需要hack的话，需要别外处理！',
            grammar : 'baidu.dom.currentStyle(element, key)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'key',
                type : 'string',
                desc : '要获取的样式名'
            }],
            returns : [{
                type : 'string',
                desc : '目标元素的computed style值'
            }],
            sees : [{
                desc : 'baidu.dom.getStyle'
            }]
        },
        'baidu.dom.getDocument' : {
            name : 'getDocument',
            type : 'HTMLDocument',
            desc : '获取目标元素所属的document对象',
            grammar : 'baidu.dom.getDocument(element)',
            meta : 'standard',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'HTMLDocument',
                desc : '目标元素所属的document对象'
            }],
            sees : [{
                desc : 'baidu.dom.getWindow'
            }]
        },
        'baidu.dom.getParent' : {
            name : 'getParent',
            type : 'HTMLElement|null',
            desc : '获得元素的父节点',
            grammar : 'baidu.dom.getParent(element)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'HTMLElement|null',
                desc : '父元素，如果找不到父元素，返回null'
            }]
        },
        'baidu.dom.getPosition' : {
            name : 'getPosition',
            type : 'Object',
            desc : '获取目标元素相对于整个文档左上角的位置',
            grammar : 'baidu.dom.getPosition(element)',
            meta : 'standard',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'Object',
                desc : '目标元素的位置，键值为top和left的Object。'
            }]
        },
        'baidu.dom.getStyle' : {
            name : 'getStyle',
            type : 'string',
            desc : '获取目标元素的样式值',
            grammar : 'baidu.dom.getStyle(element, key)',
            meta : 'standard',
            shortcut : 'getStyle',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'key',
                type : 'string',
                desc : '要获取的样式名'
            }],
            returns : [{
                type : 'string',
                desc : '目标元素的样式值'
            }],
            sees : [{
                desc : 'baidu.dom.setStyle,baidu.dom.setStyles, baidu.dom.getComputedStyle'
            }]
        },
        'baidu.dom.getText' : {
            name : 'getText',
            type : 'String',
            desc : '获得元素中的文本内容。',
            version : '1.3',
            grammar : 'baidu.dom.getText(element)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'String',
                desc : '元素中文本的内容'
            }]
        },
        'baidu.dom.getWindow' : {
            name : 'getWindow',
            type : 'window',
            desc : '获取目标元素所属的window对象',
            grammar : 'baidu.dom.getWindow(element)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'window',
                desc : '目标元素所属的window对象'
            }],
            sees : [{
                desc : 'baidu.dom.getDocument'
            }]
        },
        'baidu.dom.hasAttr' : {
            name : 'hasAttr',
            type : 'Boolean',
            desc : '查询一个元素是否包含指定的属性',
            version : '1.3',
            grammar : 'baidu.dom.hasAttr(element, name)',
            options : [{
                name : 'element',
                type : 'DOMElement|string',
                desc : 'DOM元素或元素的id'
            }, {
                name : 'name',
                type : 'string',
                desc : '要查找的属性名'
            }],
            returns : [{
                type : 'Boolean',
                desc : '是否包含此属性'
            }]
        },
        'baidu.dom.hasClass' : {
            name : 'hasClass',
            type : 'Boolean',
            desc : '判断元素是否拥有指定的className',
            version : '1.2',
            grammar : 'baidu.dom.hasClass(element, className)',
            meta : 'standard',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'className',
                type : 'string',
                desc : '要判断的className，可以是用空格拼接的多个className'
            }],
            returns : [{
                type : 'Boolean',
                desc : '是否拥有指定的className，如果要查询的classname有一个或多个不在元素的className中，返回false'
            }],
            sees : [{
                desc : 'baidu.dom.addClass, baidu.dom.removeClass'
            }]
        },
        'baidu.dom.hide' : {
            name : 'hide',
            type : 'HTMLElement',
            desc : '隐藏目标元素',
            grammar : 'baidu.dom.hide(element)',
            meta : 'standard',
            shortcut : 'hide',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.show,baidu.dom.toggle'
            }]
        },
        'baidu.dom.insertAfter' : {
            name : 'insertAfter',
            type : 'HTMLElement',
            desc : '将目标元素添加到基准元素之后',
            grammar : 'baidu.dom.insertAfter(newElement, existElement)',
            meta : 'standard',
            options : [{
                name : 'newElement',
                type : 'HTMLElement|string',
                desc : '被添加的目标元素'
            }, {
                name : 'existElement',
                type : 'HTMLElement|string',
                desc : '基准元素'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '被添加的目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.insertBefore'
            }]
        },
        'baidu.dom.insertBefore' : {
            name : 'insertBefore',
            type : 'HTMLElement',
            desc : '将目标元素添加到基准元素之前',
            grammar : 'baidu.dom.insertBefore(newElement, existElement)',
            meta : 'standard',
            options : [{
                name : 'newElement',
                type : 'HTMLElement|string',
                desc : '被添加的目标元素'
            }, {
                name : 'existElement',
                type : 'HTMLElement|string',
                desc : '基准元素'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '被添加的目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.insertAfter'
            }]
        },
        'baidu.dom.insertHTML' : {
            name : 'insertHTML',
            type : 'HTMLElement',
            desc : '在目标元素的指定位置插入HTML代码',
            grammar : 'baidu.dom.insertHTML(element, position, html)',
            meta : 'standard',
            shortcut : 'insertHTML',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'position',
                type : 'string',
                desc : '插入html的位置信息，取值为beforeBegin,afterBegin,beforeEnd,afterEnd'
            }, {
                name : 'html',
                type : 'string',
                desc : '要插入的html'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }]
        },
        'baidu.dom.intersect' : {
            name : 'intersect',
            type : 'boolean',
            desc : '检查两个元素是否相交',
            grammar : 'baidu.dom.intersect(element1, element2)',
            options : [{
                name : 'element1',
                type : 'HTMLElement|string',
                desc : '要检查的元素或元素的id'
            }, {
                name : 'element2',
                type : 'HTMLElement|string',
                desc : '要检查的元素或元素的id'
            }],
            returns : [{
                type : 'boolean',
                desc : '两个元素是否相交的检查结果'
            }],
            sees : [{
                desc : 'baidu.dom.contains'
            }]
        },
        'baidu.dom.last' : {
            name : 'last',
            type : 'HTMLElement|null',
            desc : '获取目标元素的最后一个元素节点',
            grammar : 'baidu.dom.last(element)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'HTMLElement|null',
                desc : '目标元素的最后一个元素节点，查找不到时返回null'
            }],
            sees : [{
                desc : 'baidu.dom.first,baidu.dom.prev,baidu.dom.next'
            }]
        },
        'baidu.dom.next' : {
            name : 'next',
            type : 'HTMLElement|null',
            desc : '获取目标元素的下一个兄弟元素节点',
            grammar : 'baidu.dom.next(element)',
            meta : 'standard',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'HTMLElement|null',
                desc : '目标元素的下一个兄弟元素节点，查找不到时返回null'
            }],
            sees : [{
                desc : 'baidu.dom.first,baidu.dom.last,baidu.dom.prev'
            }]
        },
        'baidu.dom.opacity' : {
            name : 'opacity',
            desc : '设置HTML元素的不透明性，跨浏览器种类兼容处理',
            grammar : 'baidu.dom.opacity(element, opacity)',
            options : [{
                name : 'element',
                type : 'String|HTMLElement',
                desc : '定位插入的HTML的目标DOM元素'
            }, {
                name : 'opacity',
                type : 'Number',
                desc : '不透明度'
            }]
        },
        'baidu.dom.prev' : {
            name : 'prev',
            type : 'HTMLElement|null',
            desc : '获取目标元素的上一个兄弟元素节点',
            grammar : 'baidu.dom.prev(element)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'HTMLElement|null',
                desc : '目标元素的上一个兄弟元素节点，查找不到时返回null'
            }],
            sees : [{
                desc : 'baidu.dom.first,baidu.dom.last,baidu.dom.next'
            }]
        },
        'baidu.dom.q' : {
            name : 'q',
            type : 'Array',
            desc : '通过className获取元素',
            grammar : 'baidu.dom.q(className[, element, tagName])',
            meta : 'standard',
            shortcut : 'q,T.Q',
            options : [{
                name : 'className',
                type : 'string',
                desc : '元素的class，只能指定单一的class，如果为空字符串或者纯空白的字符串，返回空数组。'
            }, {
                name : 'element',
                type : 'string|HTMLElement',
                desc : '开始搜索的元素，默认是document。'
            }, {
                name : 'tagName',
                type : 'string',
                desc : '要获取元素的标签名，如果没有值或者值为空字符串或者纯空白的字符串，表示不限制标签名。'
            }],
            returns : [{
                type : 'Array',
                desc : '获取的元素集合，查找不到或className参数错误时返回空数组.'
            }],
            sees : [{
                desc : 'baidu.dom.g'
            }]
        },
        'baidu.dom.query' : {
            name : 'query',
            type : 'Array',
            desc : '提供css选择器功能   选择器支持所有的<a href=\"http://www.w3.org/TR/css3-selectors/\">css3选择器</a> ，核心实现采用sizzle。baidu.dom.query.matches 请参考<a href=\"http://wiki.github.com/jeresig/sizzle/\" target=\"_blank\">sizzle 文档</a>',
            version : '1.5',
            grammar : 'baidu.dom.query(selector[, context, results])',
            options : [{
                name : 'selector',
                type : 'String',
                desc : '选择器定义'
            }, {
                name : 'context',
                type : 'HTMLElement | DOMDocument',
                desc : '查找的上下文'
            }, {
                name : 'results',
                type : 'Array',
                desc : '查找的结果会追加到这个数组中'
            }],
            returns : [{
                type : 'Array',
                desc : '包含所有筛选出的DOM元素的数组'
            }],
            sees : [{
                desc : 'baidu.dom.g, baidu.dom.q,'
            }]
        },
        'baidu.dom.ready' : {
            name : 'ready',
            desc : '使函数在页面dom节点加载完毕时调用',
            grammar : 'baidu.dom.ready(callback)',
            meta : 'standard',
            options : [{
                name : 'callback',
                type : 'Function',
                desc : '页面加载完毕时调用的函数.'
            }]
        },
        'baidu.dom.remove' : {
            name : 'remove',
            desc : '从DOM树上移除目标元素',
            grammar : 'baidu.dom.remove(element)',
            meta : 'standard',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '需要移除的元素或元素的id'
            }]
        },
        'baidu.dom.removeClass' : {
            name : 'removeClass',
            type : 'HTMLElement',
            desc : '移除目标元素的className',
            grammar : 'baidu.dom.removeClass(element, className)',
            meta : 'standard',
            shortcut : 'removeClass',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'className',
                type : 'string',
                desc : '要移除的className，允许同时移除多个class，中间使用空白符分隔'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.addClass'
            }]
        },
        'baidu.dom.removeStyle' : {
            name : 'removeStyle',
            type : 'HTMLElement',
            desc : '删除元素的某个样式',
            version : '1.3',
            grammar : 'baidu.dom.removeStyle(element, styleName)',
            options : [{
                name : 'element',
                type : 'HTMLElement|String',
                desc : '需要删除样式的元素或者元素id'
            }, {
                name : 'styleName',
                type : 'string',
                desc : '需要删除的样式名字'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.setStyle'
            }]
        },
        'baidu.dom.resizable' : {
            name : 'resizable',
            type : 'Object',
            desc : '绘制可以根据鼠标行为改变HTMLElement大小的resize handle',
            version : '1.3',
            grammar : 'baidu.dom.resizable(element[, options])',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '需要改变大小的元素或者元素的id.'
            }, {
                name : 'options',
                type : 'Object',
                desc : 'resizable参数配置'
            }, {
                name : 'options.direction',
                type : 'Array',
                desc : '可以改变的方向[e,se,s,ws,w,wn,n,en]'
            }, {
                name : 'options.onresizestart',
                type : 'Function',
                desc : '开始改变大小时触发'
            }, {
                name : 'options.onresizeend',
                type : 'Function',
                desc : '大小改变结束时触发'
            }, {
                name : 'options.onresize',
                type : 'Function',
                desc : '大小改变后时触发'
            }, {
                name : 'options.maxWidth',
                type : 'Number|String',
                desc : '可改变的最大宽度'
            }, {
                name : 'options.maxHeight',
                type : 'Number|String',
                desc : '可改变的最大高度'
            }, {
                name : 'options.minWidth',
                type : 'Number|String',
                desc : '可改变的最小宽度'
            }, {
                name : 'options.minHeight',
                type : 'Number|String',
                desc : '可改变的最小高度'
            }, {
                name : 'options.classPrefix',
                type : 'String',
                desc : 'className 前缀'
            }, {
                name : 'options.directionHandlePosition',
                type : 'Object',
                desc : 'resizHandle的位置参数'
            }],
            returns : [{
                type : 'Object',
                desc : '{cancel:Function} cancel函数'
            }]
        },
        'baidu.dom.setAttr' : {
            name : 'setAttr',
            type : 'HTMLElement',
            desc : '设置目标元素的attribute值',
            grammar : 'baidu.dom.setAttr(element, key, value)',
            meta : 'standard',
            shortcut : 'setAttr',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'key',
                type : 'string',
                desc : '要设置的attribute键名'
            }, {
                name : 'value',
                type : 'string',
                desc : '要设置的attribute值'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.getAttr,baidu.dom.setAttrs'
            }]
        },
        'baidu.dom.setAttrs' : {
            name : 'setAttrs',
            type : 'HTMLElement',
            desc : '批量设置目标元素的attribute值',
            grammar : 'baidu.dom.setAttrs(element, attributes)',
            meta : 'standard',
            shortcut : 'setAttrs',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'attributes',
                type : 'Object',
                desc : '要设置的attribute集合'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.setAttr,baidu.dom.getAttr'
            }]
        },
        'baidu.dom.setBorderBoxHeight' : {
            name : 'setBorderBoxHeight',
            type : 'HTMLElement',
            desc : '按照border-box模型设置元素的height值',
            grammar : 'baidu.dom.setBorderBoxHeight(element, height)',
            shortcut : 'dom.setOuterHeight',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : 'DOM元素或元素的id'
            }, {
                name : 'height',
                type : 'number|string',
                desc : '要设置的height'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '设置好的元素'
            }],
            sees : [{
                desc : 'baidu.dom.setBorderBoxWidth, baidu.dom.setBorderBoxSize'
            }]
        },
        'baidu.dom.setBorderBoxSize' : {
            name : 'setBorderBoxSize',
            type : 'HTMLElement',
            desc : '按照border-box模型设置元素的height和width值。只支持元素的padding/border/height/width使用同一种计量单位的情况。<br/> 不支持：<br/> 1. 非数字值(medium)<br/> 2. em/px在不同的属性中混用',
            grammar : 'baidu.dom.setBorderBoxSize(element, size)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '元素或DOM元素的id'
            }, {
                name : 'size',
                type : 'object',
                desc : '包含height和width键名的对象'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '设置好的元素'
            }],
            sees : [{
                desc : 'baidu.dom.setBorderBoxWidth, baidu.dom.setBorderBoxHeight'
            }]
        },
        'baidu.dom.setBorderBoxWidth' : {
            name : 'setBorderBoxWidth',
            type : 'HTMLElement',
            desc : '按照border-box模型设置元素的width值',
            grammar : 'baidu.dom.setBorderBoxWidth(element, width)',
            shortcut : 'dom.setOuterWidth',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : 'DOM元素或元素的id'
            }, {
                name : 'width',
                type : 'number|string',
                desc : '要设置的width'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '设置好的元素'
            }],
            sees : [{
                desc : 'baidu.dom.setBorderBoxHeight, baidu.dom.setBorderBoxSize'
            }]
        },
        'baidu.dom.setPixel' : {
            name : 'setPixel',
            desc : '给元素样式（比如width）赋值时，如果是数字则添加单位(px)，如果是其它值直接赋',
            grammar : 'baidu.dom.setPixel(el, style, n)',
            options : [{
                name : 'el',
                type : 'HTMLElement',
                desc : 'DOM元素'
            }, {
                name : 'style',
                type : 'String',
                desc : '样式属性名'
            }, {
                name : 'n',
                type : 'Number|String',
                desc : '被赋的值'
            }]
        },
        'baidu.dom.setPosition' : {
            name : 'setPosition',
            type : 'HTMLElement',
            desc : '设置目标元素的top和left值到用户指定的位置',
            grammar : 'baidu.dom.setPosition(element, position)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'position',
                type : 'object',
                desc : '位置对象 {top: {number}, left : {number}}'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '进行设置的元素'
            }]
        },
        'baidu.dom.setStyle' : {
            name : 'setStyle',
            type : 'HTMLElement',
            desc : '设置目标元素的style样式值',
            grammar : 'baidu.dom.setStyle(element, key, value)',
            meta : 'standard',
            shortcut : 'setStyle',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'key',
                type : 'string',
                desc : '要设置的样式名'
            }, {
                name : 'value',
                type : 'string',
                desc : '要设置的样式值'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.getStyle,baidu.dom.setStyles'
            }]
        },
        'baidu.dom.setStyles' : {
            name : 'setStyles',
            type : 'HTMLElement',
            desc : '批量设置目标元素的style样式值',
            grammar : 'baidu.dom.setStyles(element, styles)',
            meta : 'standard',
            shortcut : 'setStyles',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'styles',
                type : 'Object',
                desc : '要设置的样式集合'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.setStyle,baidu.dom.getStyle'
            }]
        },
        'baidu.dom.show' : {
            name : 'show',
            type : 'HTMLElement',
            desc : '显示目标元素，即将目标元素的display属性还原成默认值。默认值可能在stylesheet中定义，或者是继承了浏览器的默认样式值',
            grammar : 'baidu.dom.show(element)',
            meta : 'standard',
            shortcut : 'show',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.hide,baidu.dom.toggle'
            }]
        },
        'baidu.dom.toggle' : {
            name : 'toggle',
            type : 'HTMLElement',
            desc : '改变目标元素的显示/隐藏状态',
            grammar : 'baidu.dom.toggle(element)',
            meta : 'standard',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.dom.show,baidu.dom.hide'
            }]
        },
        'baidu.dom.toggleClass' : {
            name : 'toggleClass',
            desc : '添加或者删除一个节点中的指定class，如果已经有就删除，否则添加',
            version : '1.3',
            grammar : 'baidu.dom.toggleClass(element, className)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素的id'
            }, {
                name : 'className',
                type : 'String',
                desc : '指定的className。允许同时添加多个class，中间使用空白符分隔'
            }]
        },
        'baidu.element' : {
            name : 'element',
            desc : '通过该方法封装的对象可使用dom、event方法集合以及each方法进行链式调用'
        },
        'baidu.element.each' : {
            name : 'each',
            desc : '以每一个匹配的元素作为上下文执行传递进来的函数，方便用户自行遍历dom。',
            version : '1.3',
            grammar : 'baidu.element(node).each(iterator)',
            options : [{
                name : 'iterator',
                type : 'Function',
                desc : '遍历Dom时调用的方法'
            }]
        },
        'baidu.element.Element' : {
            name : 'Element',
            type : 'ElementObj',
            desc : 'Element类，所有扩展到链条上的方法都会被放在这里面',
            version : '1.3',
            grammar : 'baidu.element.Element(node)',
            options : [{
                name : 'node',
                type : 'DOMElement|NodeList',
                desc : '目标元素，可以是数组或者单个node节点'
            }],
            methods : [{
                name : 'each',
                options : [{
                    name : 'iterator'
                }]
            }],
            returns : [{
                type : 'ElementObj',
                desc : '包装后的DOM对象'
            }]
        },
        'baidu.element.events' : {
            name : 'events',
            type : 'baidu.element',
            desc : '方法提供了事件绑定的快捷方式，事件发生时会触发传递进来的函数。events代指事件方法的总和。',
            version : '1.3',
            grammar : 'baidu.element(node).events(fn)',
            options : [{
                name : 'fn',
                type : 'Function',
                desc : '事件触发时要调用的方法'
            }],
            returns : [{
                type : 'baidu.element',
                desc : 'Element对象'
            }]
        },
        'baidu.element.extend' : {
            name : 'extend',
            type : 'baidu.element.Element',
            desc : '为element对象扩展一个方法。',
            version : '1.3',
            grammar : 'baidu.element.extend(json)',
            shortcut : 'e',
            options : [{
                name : 'json',
                type : 'Object',
                desc : '要扩展的方法名以及方法'
            }],
            returns : [{
                type : 'baidu.element.Element',
                desc : 'Element对象'
            }]
        },
        'baidu.event' : {
            name : 'event',
            desc : '屏蔽浏览器差异性的事件封装'
        },
        'baidu.event.EventArg' : {
            name : 'EventArg',
            desc : '事件对象构造器，屏蔽浏览器差异的事件类',
            grammar : 'baidu.event.EventArg(event[, win])',
            meta : 'standard',
            options : [{
                name : 'event',
                type : 'Event',
                desc : '事件对象'
            }, {
                name : 'win',
                type : 'Window',
                desc : '窗口对象，默认为window'
            }],
            methods : [{
                name : 'preventDefault'
            }, {
                name : 'stopPropagation'
            }, {
                name : 'stop'
            }],
            sees : [{
                desc : 'baidu.event.get'
            }]
        },
        'baidu.event.fire' : {
            name : 'fire',
            type : 'HTMLElement',
            desc : '触发已经注册的事件。注：在ie下不支持load和unload事件',
            version : '1.3',
            grammar : 'baidu.event.fire(element, type, options)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string|window',
                desc : '目标元素或目标元素id'
            }, {
                name : 'type',
                type : 'string',
                desc : '事件类型'
            }, {
                name : 'options',
                type : 'Object',
                desc : '触发的选项'
            }, {
                name : 'options.bubbles',
                type : 'Boolean',
                desc : '是否冒泡'
            }, {
                name : 'options.cancelable',
                type : 'Boolean',
                desc : '是否可以阻止事件的默认操作'
            }, {
                name : 'options.view',
                type : 'window|null',
                desc : '指定 Event 的 AbstractView'
            }, {
                name : 'options.detail',
                type : '1|Number',
                desc : '指定 Event 的鼠标单击量'
            }, {
                name : 'options.screenX',
                type : 'Number',
                desc : '指定 Event 的屏幕 x 坐标'
            }, {
                name : 'options.screenY',
                type : 'Number',
                desc : 'number 指定 Event 的屏幕 y 坐标'
            }, {
                name : 'options.clientX',
                type : 'Number',
                desc : '指定 Event 的客户端 x 坐标'
            }, {
                name : 'options.clientY',
                type : 'Number',
                desc : '指定 Event 的客户端 y 坐标'
            }, {
                name : 'options.ctrlKey',
                type : 'Boolean',
                desc : '指定是否在 Event 期间按下 ctrl 键'
            }, {
                name : 'options.altKey',
                type : 'Boolean',
                desc : '指定是否在 Event 期间按下 alt 键'
            }, {
                name : 'options.shiftKey',
                type : 'Boolean',
                desc : '指定是否在 Event 期间按下 shift 键'
            }, {
                name : 'options.metaKey',
                type : 'Boolean',
                desc : '指定是否在 Event 期间按下 meta 键'
            }, {
                name : 'options.button',
                type : 'Number',
                desc : '指定 Event 的鼠标按键'
            }, {
                name : 'options.keyCode',
                type : 'Number',
                desc : '指定 Event 的键盘按键'
            }, {
                name : 'options.charCode',
                type : 'Number',
                desc : '指定 Event 的字符编码'
            }, {
                name : 'options.relatedTarget',
                type : 'HTMLElement',
                desc : '指定 Event 的相关 EventTarget'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }]
        },
        'baidu.event.get' : {
            name : 'get',
            type : 'EventArg',
            desc : '获取扩展的EventArg对象',
            grammar : 'baidu.event.get(event[, win])',
            meta : 'standard',
            options : [{
                name : 'event',
                type : 'Event',
                desc : '事件对象'
            }, {
                name : 'win',
                type : 'window',
                desc : '触发事件元素所在的window'
            }],
            returns : [{
                type : 'EventArg',
                desc : '扩展的事件对象'
            }],
            sees : [{
                desc : 'baidu.event.EventArg'
            }]
        },
        'baidu.event.getEvent' : {
            name : 'getEvent',
            type : 'Event',
            desc : '获取事件对象',
            grammar : 'baidu.event.getEvent()',
            meta : 'standard',
            options : [{
                name : 'event',
                type : 'Event',
                desc : 'event对象，目前没有使用这个参数，只是保留接口。by dengping.'
            }],
            returns : [{
                type : 'Event',
                desc : 'event对象.'
            }]
        },
        'baidu.event.getKeyCode' : {
            name : 'getKeyCode',
            type : 'number',
            desc : '获取键盘事件的键值',
            grammar : 'baidu.event.getKeyCode(event)',
            options : [{
                name : 'event',
                type : 'Event',
                desc : '事件对象'
            }],
            returns : [{
                type : 'number',
                desc : '键盘事件的键值'
            }]
        },
        'baidu.event.getPageX' : {
            name : 'getPageX',
            type : 'number',
            desc : '获取鼠标事件的鼠标x坐标',
            grammar : 'baidu.event.getPageX(event)',
            options : [{
                name : 'event',
                type : 'Event',
                desc : '事件对象'
            }],
            returns : [{
                type : 'number',
                desc : '鼠标事件的鼠标x坐标'
            }],
            sees : [{
                desc : 'baidu.event.getPageY'
            }]
        },
        'baidu.event.getPageY' : {
            name : 'getPageY',
            type : 'number',
            desc : '获取鼠标事件的鼠标y坐标',
            grammar : 'baidu.event.getPageY(event)',
            options : [{
                name : 'event',
                type : 'Event',
                desc : '事件对象'
            }],
            returns : [{
                type : 'number',
                desc : '鼠标事件的鼠标y坐标'
            }],
            sees : [{
                desc : 'baidu.event.getPageX'
            }]
        },
        'baidu.event.getTarget' : {
            name : 'getTarget',
            type : 'HTMLElement',
            desc : '获取事件的触发元素',
            grammar : 'baidu.event.getTarget(event)',
            meta : 'standard',
            options : [{
                name : 'event',
                type : 'Event',
                desc : '事件对象'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '事件的触发元素'
            }]
        },
        'baidu.event.on' : {
            name : 'on',
            type : 'HTMLElement|window',
            desc : '为目标元素添加事件监听器',
            grammar : 'baidu.event.on(element, type, listener)',
            meta : 'standard',
            shortcut : 'on',
            options : [{
                name : 'element',
                type : 'HTMLElement|string|window',
                desc : '目标元素或目标元素id'
            }, {
                name : 'type',
                type : 'string',
                desc : '事件类型'
            }, {
                name : 'listener',
                type : 'Function',
                desc : '需要添加的监听器'
            }],
            returns : [{
                type : 'HTMLElement|window',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.event.un'
            }]
        },
        'baidu.event.once' : {
            name : 'once',
            type : 'HTMLElement',
            desc : '为目标元素添加一次事件绑定',
            version : '1.3',
            grammar : 'baidu.event.once(element, type, listener)',
            options : [{
                name : 'element',
                type : 'HTMLElement|string',
                desc : '目标元素或目标元素id'
            }, {
                name : 'type',
                type : 'string',
                desc : '事件类型'
            }, {
                name : 'listener',
                type : 'Function',
                desc : '需要添加的监听器'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.event.un,baidu.event.on'
            }]
        },
        'baidu.event.preventDefault' : {
            name : 'preventDefault',
            desc : '阻止事件的默认行为',
            grammar : 'baidu.event.preventDefault(event)',
            meta : 'standard',
            options : [{
                name : 'event',
                type : 'Event',
                desc : '事件对象'
            }],
            sees : [{
                desc : 'baidu.event.stop,baidu.event.stopPropagation'
            }]
        },
        'baidu.event.stop' : {
            name : 'stop',
            desc : '停止事件',
            grammar : 'baidu.event.stop(event)',
            options : [{
                name : 'event',
                type : 'Event',
                desc : '事件对象'
            }],
            sees : [{
                desc : 'baidu.event.stopPropagation,baidu.event.preventDefault'
            }]
        },
        'baidu.event.stopPropagation' : {
            name : 'stopPropagation',
            desc : '阻止事件传播',
            grammar : 'baidu.event.stopPropagation(event)',
            options : [{
                name : 'event',
                type : 'Event',
                desc : '事件对象'
            }],
            sees : [{
                desc : 'baidu.event.stop,baidu.event.preventDefault'
            }]
        },
        'baidu.event.un' : {
            name : 'un',
            type : 'HTMLElement|window',
            desc : '为目标元素移除事件监听器',
            grammar : 'baidu.event.un(element, type, listener)',
            meta : 'standard',
            shortcut : 'un',
            options : [{
                name : 'element',
                type : 'HTMLElement|string|window',
                desc : '目标元素或目标元素id'
            }, {
                name : 'type',
                type : 'string',
                desc : '事件类型'
            }, {
                name : 'listener',
                type : 'Function',
                desc : '需要移除的监听器'
            }],
            returns : [{
                type : 'HTMLElement|window',
                desc : '目标元素'
            }],
            sees : [{
                desc : 'baidu.event.on'
            }]
        },
        'baidu.fn' : {
            name : 'fn',
            desc : '对方法的操作，解决内存泄露问题'
        },
        'baidu.fn.abstractMethod' : {
            name : 'abstractMethod',
            desc : '定义一个抽象方法',
            sees : [{
                desc : 'goog.abstractMethod'
            }]
        },
        'baidu.fn.bind' : {
            name : 'bind',
            type : 'Function',
            desc : '为对象绑定方法和作用域',
            version : '1.3',
            grammar : 'baidu.fn.bind(handler[, obj, args])',
            options : [{
                name : 'handler',
                type : 'Function|String',
                desc : '要绑定的函数，或者一个在作用域下可用的函数名'
            }, {
                name : 'obj',
                type : 'Object',
                desc : '执行运行时this，如果不传入则运行时this为函数本身'
            }, {
                name : 'args',
                type : 'args* 0..n',
                desc : '函数执行时附加到执行时函数前面的参数'
            }],
            returns : [{
                type : 'Function',
                desc : '封装后的函数'
            }]
        },
        'baidu.fn.blank' : {
            name : 'blank',
            type : 'Function',
            desc : '这是一个空函数，用于需要排除函数作用域链干扰的情况.',
            version : '1.3.3',
            grammar : 'baidu.fn.blank()',
            meta : 'standard',
            returns : [{
                type : 'Function',
                desc : '一个空函数'
            }]
        },
        'baidu.fn.methodize' : {
            name : 'methodize',
            type : 'Function',
            desc : '将一个静态函数变换成一个对象的方法，使其的第一个参数为this，或this[attr]',
            version : '1.3',
            grammar : 'baidu.fn.methodize(func[, attr])',
            options : [{
                name : 'func',
                type : 'Function',
                desc : '要方法化的函数'
            }, {
                name : 'attr',
                type : 'string',
                desc : '属性'
            }],
            returns : [{
                type : 'Function',
                desc : '已方法化的函数'
            }]
        },
        'baidu.fn.multize' : {
            name : 'multize',
            type : 'Function',
            desc : '对函数进行集化，使其在第一个参数为array时，结果也返回一个数组',
            version : '1.3',
            grammar : 'baidu.fn.multize(func[, recursive])',
            options : [{
                name : 'func',
                type : 'Function',
                desc : '需要包装的函数'
            }, {
                name : 'recursive',
                type : 'Boolean',
                desc : '是否递归包装（如果数组里面一项仍然是数组，递归），可选'
            }, {
                name : 'joinArray',
                type : 'Boolean',
                desc : '将操作的结果展平后返回（如果返回的结果是数组，则将多个数组合成一个），可选'
            }],
            returns : [{
                type : 'Function',
                desc : '已集化的函数'
            }]
        },
        'baidu.fn.wrapReturnValue' : {
            name : 'wrapReturnValue',
            type : 'function',
            desc : '包装函数的返回值，使其在能按照index指定的方式返回。<br/>如果其值为-1，直接返回返回值。 <br/>如果其值为0，返回\"返回值\"的包装结果。<br/> 如果其值大于0，返回第i个位置的参数的包装结果（从1开始计数）',
            version : '1.3.5',
            grammar : 'baidu.fn.wrapReturnValue(func, wrapper, mode)',
            options : [{
                name : 'func',
                type : 'function',
                desc : '需要包装的函数'
            }, {
                name : 'wrapper',
                type : 'function',
                desc : '包装器'
            }, {
                name : 'mode',
                type : 'number',
                desc : '包装第几个参数'
            }],
            returns : [{
                type : 'function',
                desc : '包装后的函数'
            }]
        },
        'baidu.form' : {
            name : 'form',
            desc : '对form的操作，解决表单数据问题'
        },
        'baidu.form.json' : {
            name : 'json',
            type : 'data',
            desc : 'josn化表单数据',
            grammar : 'baidu.form.json(form[, replacer])',
            options : [{
                name : 'form',
                type : 'HTMLFormElement',
                desc : '需要提交的表单元素'
            }, {
                name : 'replacer',
                type : 'Function',
                desc : '对参数值特殊处理的函数,replacer(string value, string key)'
            }],
            returns : [{
                type : 'data',
                desc : '表单数据js对象'
            }]
        },
        'baidu.form.serialize' : {
            name : 'serialize',
            type : 'data',
            desc : '序列化表单数据',
            grammar : 'baidu.form.serialize(form[, replacer])',
            options : [{
                name : 'form',
                type : 'HTMLFormElement',
                desc : '需要提交的表单元素'
            }, {
                name : 'replacer',
                type : 'Function',
                desc : '对参数值特殊处理的函数,replacer(string value, string key)'
            }],
            returns : [{
                type : 'data',
                desc : '表单数据数组'
            }]
        },
        'baidu.json' : {
            name : 'json',
            desc : '操作json对象的方法'
        },
        'baidu.json.decode' : {
            name : 'decode',
            type : 'JSON',
            desc : '将字符串解析成json对象，为过时接口，今后会被baidu.json.parse代替',
            grammar : 'baidu.json.decode(source)',
            meta : 'out',
            options : [{
                name : 'source',
                type : 'string',
                desc : '需要解析的字符串'
            }],
            returns : [{
                type : 'JSON',
                desc : '解析结果json对象'
            }],
            sees : [{
                desc : 'baidu.json.encode,baidu.json.parse'
            }]
        },
        'baidu.json.encode' : {
            name : 'encode',
            type : 'string',
            desc : '将json对象序列化，为过时接口，今后会被baidu.json.stringify代替',
            grammar : 'baidu.json.encode(value)',
            meta : 'out',
            options : [{
                name : 'value',
                type : 'JSON',
                desc : '需要序列化的json对象'
            }],
            returns : [{
                type : 'string',
                desc : '序列化后的字符串'
            }],
            sees : [{
                desc : 'baidu.json.decode,baidu.json.stringify'
            }]
        },
        'baidu.json.parse' : {
            name : 'parse',
            type : 'JSON',
            desc : '将字符串解析成json对象。注：不会自动祛除空格',
            grammar : 'baidu.json.parse(data)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'string',
                desc : '需要解析的字符串'
            }],
            returns : [{
                type : 'JSON',
                desc : '解析结果json对象'
            }],
            sees : [{
                desc : 'baidu.json.stringify,baidu.json.decode'
            }]
        },
        'baidu.json.stringify' : {
            name : 'stringify',
            type : 'string',
            desc : '将json对象序列化',
            grammar : 'baidu.json.stringify(value)',
            meta : 'standard',
            options : [{
                name : 'value',
                type : 'JSON',
                desc : '需要序列化的json对象'
            }],
            returns : [{
                type : 'string',
                desc : '序列化后的字符串'
            }],
            sees : [{
                desc : 'baidu.json.parse,baidu.json.encode'
            }]
        },
        'baidu.lang' : {
            name : 'lang',
            desc : '对语言层面的封装，包括类型判断、模块扩展、继承基类以及对象自定义事件的支持。'
        },
        'baidu.lang.Class' : {
            name : 'Class',
            desc : 'Tangram继承机制提供的一个基类，用户可以通过继承baidu.lang.Class来获取它的属性及方法。',
            grammar : 'baidu.lang.Class(guid)',
            meta : 'standard,standard',
            options : [{
                name : 'guid',
                type : 'string',
                desc : '对象的唯一标识'
            }],
            methods : [{
                name : 'dispose'
            }, {
                name : 'toString',
                type : 'string',
                desc : '重载了默认的toString方法，使得返回信息更加准确一些。20111219 meizz 为支持老版本的className属性，以后统一改成 __type',
                returns : [{
                    type : 'string',
                    desc : '对象的String表示形式'
                }]
            }, {
                name : 'removeEventListener',
                options : [{
                    name : 'type'
                }, {
                    name : 'handler'
                }]
            }, {
                name : 'dispatchEvent',
                options : [{
                    name : 'event'
                }, {
                    name : 'options'
                }]
            }, {
                name : 'addEventListener',
                options : [{
                    name : 'type'
                }, {
                    name : 'handler'
                }, {
                    name : 'key'
                }]
            }, {
                name : 'addEventListeners',
                desc : '添加多个自定义事件。',
                version : '1.3',
                grammar : 'obj.addEventListeners(events, fn)',
                options : [{
                    name : 'events',
                    type : 'object',
                    desc : 'json对象，key为事件名称，value为事件被触发时应该调用的回调函数'
                }, {
                    name : 'fn',
                    type : 'Function',
                    desc : '要挂载的函数'
                }]
            }],
            sees : [{
                desc : 'baidu.lang.inherits,baidu.lang.Event'
            }]
        },
        'baidu.lang.createClass' : {
            name : 'createClass',
            type : 'Object',
            desc : '创建一个类，包括创造类的构造器、继承基类Class',
            version : '1.2',
            grammar : 'baidu.lang.createClass(constructor[, options])',
            options : [{
                name : 'constructor',
                type : 'Function',
                desc : '类的构造器函数'
            }, {
                name : 'options',
                type : 'Object'
            }, {
                name : 'options.type',
                type : 'string',
                desc : '类名'
            }, {
                name : 'options.superClass',
                type : 'Function',
                desc : '父类，默认为baidu.lang.Class'
            }],
            returns : [{
                type : 'Object',
                desc : '一个类对象'
            }],
            sees : [{
                desc : 'baidu.lang.Class,baidu.lang.inherits'
            }]
        },
        'baidu.lang.createSingle' : {
            name : 'createSingle',
            type : 'Object',
            desc : '创建一个baidu.lang.Class的单例实例',
            version : '1.2',
            grammar : 'baidu.lang.createSingle(json)',
            options : [{
                name : 'json',
                type : 'Object',
                desc : '直接挂载到这个单例里的预定属性/方法'
            }],
            returns : [{
                type : 'Object',
                desc : '一个实例'
            }],
            sees : [{
                desc : 'baidu.lang.Class'
            }]
        },
        'baidu.lang.decontrol' : {
            name : 'decontrol',
            desc : '解除instance中对指定类实例的引用关系。',
            version : '1.1.1',
            grammar : 'baidu.lang.decontrol(guid)',
            options : [{
                name : 'guid',
                type : 'string',
                desc : '类的唯一标识'
            }],
            sees : [{
                desc : 'baidu.lang.instance'
            }]
        },
        'baidu.lang.Event' : {
            name : 'Event',
            desc : '自定义的事件对象。',
            grammar : 'baidu.lang.Event(type[, target])',
            meta : 'standard,standard',
            options : [{
                name : 'type',
                type : 'string',
                desc : '事件类型名称。为了方便区分事件和一个普通的方法，事件类型名称必须以\"on\"(小写)开头。'
            }, {
                name : 'target',
                type : 'Object',
                desc : '触发事件的对象'
            }],
            sees : [{
                desc : 'baidu.lang.Class'
            }]
        },
        'baidu.lang.eventCenter' : {
            name : 'eventCenter',
            desc : '事件中心',
            methods : [{
                name : 'addEventListener',
                desc : '注册全局事件监听器。',
                grammar : 'baidu.lang.eventCenter.addEventListener(type, handler[, key])',
                options : [{
                    name : 'type',
                    type : 'string',
                    desc : '自定义事件的名称'
                }, {
                    name : 'handler',
                    type : 'Function',
                    desc : '自定义事件被触发时应该调用的回调函数'
                }, {
                    name : 'key',
                    type : 'string',
                    desc : '为事件监听函数指定的名称，可在移除时使用。如果不提供，方法会默认为它生成一个全局唯一的key。'
                }]
            }, {
                name : 'removeEventListener',
                desc : '移除全局事件监听器。',
                grammar : 'baidu.lang.eventCenter.removeEventListener(type, handler)',
                options : [{
                    name : 'type',
                    type : 'string',
                    desc : '事件类型'
                }, {
                    name : 'handler',
                    type : 'Function|string',
                    desc : '要移除的事件监听函数或者监听函数的key'
                }]
            }, {
                name : 'dispatchEvent',
                desc : '派发全局自定义事件，使得绑定到全局自定义事件上面的函数都会被执行。',
                grammar : 'baidu.lang.eventCenter.dispatchEvent(event, options)',
                options : [{
                    name : 'event',
                    type : 'baidu.lang.Event|String',
                    desc : 'Event对象，或事件名称(1.1.1起支持)'
                }, {
                    name : 'options',
                    type : 'Object',
                    desc : '扩展参数,所含属性键值会扩展到Event对象上(1.2起支持)'
                }]
            }]
        },
        'baidu.lang.eventCenter.addEventListener' : {
            name : 'addEventListener',
            desc : '注册全局事件监听器。',
            grammar : 'baidu.lang.eventCenter.addEventListener(type, handler[, key])',
            options : [{
                name : 'type',
                type : 'string',
                desc : '自定义事件的名称'
            }, {
                name : 'handler',
                type : 'Function',
                desc : '自定义事件被触发时应该调用的回调函数'
            }, {
                name : 'key',
                type : 'string',
                desc : '为事件监听函数指定的名称，可在移除时使用。如果不提供，方法会默认为它生成一个全局唯一的key。'
            }]
        },
        'baidu.lang.eventCenter.dispatchEvent' : {
            name : 'dispatchEvent',
            desc : '派发全局自定义事件，使得绑定到全局自定义事件上面的函数都会被执行。',
            grammar : 'baidu.lang.eventCenter.dispatchEvent(event, options)',
            options : [{
                name : 'event',
                type : 'baidu.lang.Event|String',
                desc : 'Event对象，或事件名称(1.1.1起支持)'
            }, {
                name : 'options',
                type : 'Object',
                desc : '扩展参数,所含属性键值会扩展到Event对象上(1.2起支持)'
            }]
        },
        'baidu.lang.eventCenter.removeEventListener' : {
            name : 'removeEventListener',
            desc : '移除全局事件监听器。',
            grammar : 'baidu.lang.eventCenter.removeEventListener(type, handler)',
            options : [{
                name : 'type',
                type : 'string',
                desc : '事件类型'
            }, {
                name : 'handler',
                type : 'Function|string',
                desc : '要移除的事件监听函数或者监听函数的key'
            }]
        },
        'baidu.lang.getModule' : {
            name : 'getModule',
            type : '?Object',
            desc : '根据变量名或者命名空间来查找对象',
            grammar : 'baidu.lang.getModule(name, opt_obj)',
            options : [{
                name : 'name',
                type : 'string',
                desc : '变量或者命名空间的名字.'
            }, {
                name : 'opt_obj',
                type : 'Object=',
                desc : '从这个对象开始查找，默认是window;'
            }],
            returns : [{
                type : '?Object',
                desc : '返回找到的对象，如果没有找到返回null.'
            }],
            sees : [{
                desc : 'goog.getObjectByName'
            }]
        },
        'baidu.lang.guid' : {
            name : 'guid',
            type : 'String',
            desc : '返回一个当前页面的唯一标识字符串。',
            version : '1.1.1',
            grammar : 'baidu.lang.guid()',
            meta : 'standard',
            returns : [{
                type : 'String',
                desc : '当前页面的唯一标识字符串'
            }]
        },
        'baidu.lang.inherits' : {
            name : 'inherits',
            desc : '为类型构造器建立继承关系',
            grammar : 'baidu.lang.inherits(subClass, superClass[, type])',
            meta : 'standard',
            shortcut : 'inherits',
            options : [{
                name : 'subClass',
                type : 'Function',
                desc : '子类构造器'
            }, {
                name : 'superClass',
                type : 'Function',
                desc : '父类构造器'
            }, {
                name : 'type',
                type : 'string',
                desc : '类名标识'
            }],
            sees : [{
                desc : 'baidu.lang.Class'
            }]
        },
        'baidu.lang.instance' : {
            name : 'instance',
            type : 'Object|null',
            desc : '根据参数(guid)的指定，返回对应的实例对象引用',
            grammar : 'baidu.lang.instance(guid)',
            meta : 'standard',
            options : [{
                name : 'guid',
                type : 'string',
                desc : '需要获取实例的guid'
            }],
            returns : [{
                type : 'Object|null',
                desc : '如果存在的话，返回;否则返回null。'
            }]
        },
        'baidu.lang.isArray' : {
            name : 'isArray',
            type : 'boolean',
            desc : '判断目标参数是否Array对象',
            grammar : 'baidu.lang.isArray(source)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'Any',
                desc : '目标参数'
            }],
            returns : [{
                type : 'boolean',
                desc : '类型判断结果'
            }],
            sees : [{
                desc : 'baidu.lang.isString,baidu.lang.isObject,baidu.lang.isNumber,baidu.lang.isElement,baidu.lang.isBoolean,baidu.lang.isDate'
            }]
        },
        'baidu.lang.isBoolean' : {
            name : 'isBoolean',
            type : 'boolean',
            desc : '判断目标参数是否Boolean对象',
            version : '1.3',
            grammar : 'baidu.lang.isBoolean(source)',
            options : [{
                name : 'source',
                type : 'Any',
                desc : '目标参数'
            }],
            returns : [{
                type : 'boolean',
                desc : '类型判断结果'
            }],
            sees : [{
                desc : 'baidu.lang.isString,baidu.lang.isObject,baidu.lang.isNumber,baidu.lang.isElement,baidu.lang.isArray,baidu.lang.isDate'
            }]
        },
        'baidu.lang.isDate' : {
            name : 'isDate',
            type : 'boolean',
            desc : '判断目标参数是否为Date对象',
            version : '1.3',
            grammar : 'baidu.lang.isDate(source)',
            options : [{
                name : 'source',
                type : 'Any',
                desc : '目标参数'
            }],
            returns : [{
                type : 'boolean',
                desc : '类型判断结果'
            }],
            sees : [{
                desc : 'baidu.lang.isString,baidu.lang.isObject,baidu.lang.isNumber,baidu.lang.isArray,baidu.lang.isBoolean,baidu.lang.isElement'
            }]
        },
        'baidu.lang.isElement' : {
            name : 'isElement',
            type : 'boolean',
            desc : '判断目标参数是否为Element对象',
            grammar : 'baidu.lang.isElement(source)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'Any',
                desc : '目标参数'
            }],
            returns : [{
                type : 'boolean',
                desc : '类型判断结果'
            }],
            sees : [{
                desc : 'baidu.lang.isString,baidu.lang.isObject,baidu.lang.isNumber,baidu.lang.isArray,baidu.lang.isBoolean,baidu.lang.isDate'
            }]
        },
        'baidu.lang.isFunction' : {
            name : 'isFunction',
            type : 'boolean',
            desc : '判断目标参数是否为function或Function实例',
            version : '1.2',
            grammar : 'baidu.lang.isFunction(source)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'Any',
                desc : '目标参数'
            }],
            returns : [{
                type : 'boolean',
                desc : '类型判断结果'
            }],
            sees : [{
                desc : 'baidu.lang.isString,baidu.lang.isObject,baidu.lang.isNumber,baidu.lang.isArray,baidu.lang.isElement,baidu.lang.isBoolean,baidu.lang.isDate'
            }]
        },
        'baidu.lang.isNumber' : {
            name : 'isNumber',
            type : 'boolean',
            desc : '判断目标参数是否number类型或Number对象',
            grammar : 'baidu.lang.isNumber(source)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'Any',
                desc : '目标参数'
            }],
            returns : [{
                type : 'boolean',
                desc : '类型判断结果'
            }],
            sees : [{
                desc : 'baidu.lang.isString,baidu.lang.isObject,baidu.lang.isArray,baidu.lang.isElement,baidu.lang.isBoolean,baidu.lang.isDate'
            }]
        },
        'baidu.lang.isObject' : {
            name : 'isObject',
            type : 'boolean',
            desc : '判断目标参数是否为Object对象',
            grammar : 'baidu.lang.isObject(source)',
            meta : 'standard',
            shortcut : 'isObject',
            options : [{
                name : 'source',
                type : 'Any',
                desc : '目标参数'
            }],
            returns : [{
                type : 'boolean',
                desc : '类型判断结果'
            }],
            sees : [{
                desc : 'baidu.lang.isString,baidu.lang.isNumber,baidu.lang.isArray,baidu.lang.isElement,baidu.lang.isBoolean,baidu.lang.isDate'
            }]
        },
        'baidu.lang.isString' : {
            name : 'isString',
            type : 'boolean',
            desc : '判断目标参数是否string类型或String对象',
            grammar : 'baidu.lang.isString(source)',
            meta : 'standard',
            shortcut : 'isString',
            options : [{
                name : 'source',
                type : 'Any',
                desc : '目标参数'
            }],
            returns : [{
                type : 'boolean',
                desc : '类型判断结果'
            }],
            sees : [{
                desc : 'baidu.lang.isObject,baidu.lang.isNumber,baidu.lang.isArray,baidu.lang.isElement,baidu.lang.isBoolean,baidu.lang.isDate'
            }]
        },
        'baidu.lang.module' : {
            name : 'module',
            desc : '增加自定义模块扩展,默认创建在当前作用域',
            grammar : 'baidu.lang.module(name, module[, owner])',
            meta : 'standard',
            options : [{
                name : 'name',
                type : 'string',
                desc : '需要创建的模块名.'
            }, {
                name : 'module',
                type : 'Any',
                desc : '需要创建的模块对象.'
            }, {
                name : 'owner',
                type : 'Object',
                desc : '模块创建的目标环境，默认为window.'
            }]
        },
        'baidu.lang.register' : {
            name : 'register',
            desc : '向某个类注册插件',
            grammar : 'baidu.lang.register(Class, constructorHook, methods)',
            meta : 'standard',
            options : [{
                name : 'Class',
                type : 'Class',
                desc : '接受注册的载体 类'
            }, {
                name : 'constructorHook',
                type : 'Function',
                desc : '运行在载体类构造器里钩子函数'
            }, {
                name : 'methods',
                type : 'JSON',
                desc : '挂载到载体类原型链上的方法集，可选'
            }]
        },
        'baidu.lang.toArray' : {
            name : 'toArray',
            type : 'array',
            desc : '将一个变量转换成array',
            version : '1.3',
            grammar : 'baidu.lang.toArray(source)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'mix',
                desc : '需要转换成array的变量'
            }],
            returns : [{
                type : 'array',
                desc : '转换后的array'
            }]
        },
        'baidu.number' : {
            name : 'number',
            desc : '操作number的方法'
        },
        'baidu.number.comma' : {
            name : 'comma',
            type : 'string',
            desc : '为目标数字添加逗号分隔',
            grammar : 'baidu.number.comma(source[, length])',
            options : [{
                name : 'source',
                type : 'number',
                desc : '需要处理的数字'
            }, {
                name : 'length',
                type : 'number',
                desc : '两次逗号之间的数字位数，默认为3位'
            }],
            returns : [{
                type : 'string',
                desc : '添加逗号分隔后的字符串'
            }]
        },
        'baidu.number.pad' : {
            name : 'pad',
            type : 'string',
            desc : '对目标数字进行0补齐处理',
            grammar : 'baidu.number.pad(source, length)',
            options : [{
                name : 'source',
                type : 'number',
                desc : '需要处理的数字'
            }, {
                name : 'length',
                type : 'number',
                desc : '需要输出的长度'
            }],
            returns : [{
                type : 'string',
                desc : '对目标数字进行0补齐处理后的结果'
            }]
        },
        'baidu.number.randomInt' : {
            name : 'randomInt',
            type : 'number',
            desc : '生成随机整数，范围是[min, max]',
            grammar : 'baidu.number.randomInt(min, max)',
            options : [{
                name : 'min',
                type : 'number',
                desc : '随机整数的最小值'
            }, {
                name : 'max',
                type : 'number',
                desc : '随机整数的最大值'
            }],
            returns : [{
                type : 'number',
                desc : '生成的随机整数'
            }]
        },
        'baidu.object' : {
            name : 'object',
            desc : '操作原生对象的方法'
        },
        'baidu.object.clone' : {
            name : 'clone',
            type : 'Object',
            desc : '对一个object进行深度拷贝',
            grammar : 'baidu.object.clone(source)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'Object',
                desc : '需要进行拷贝的对象'
            }],
            returns : [{
                type : 'Object',
                desc : '拷贝后的新对象'
            }]
        },
        'baidu.object.each' : {
            name : 'each',
            type : 'Object',
            desc : '遍历Object中所有元素，1.1.1增加',
            version : '1.1.1',
            grammar : 'baidu.object.each(source, iterator)',
            options : [{
                name : 'source',
                type : 'Object',
                desc : '需要遍历的Object'
            }, {
                name : 'iterator',
                type : 'Function',
                desc : '对每个Object元素进行调用的函数，function (item, key)'
            }],
            returns : [{
                type : 'Object',
                desc : '遍历的Object'
            }]
        },
        'baidu.object.extend' : {
            name : 'extend',
            type : 'Object',
            desc : '将源对象的所有属性拷贝到目标对象中',
            grammar : 'baidu.object.extend(target, source)',
            meta : 'standard',
            shortcut : 'extend',
            options : [{
                name : 'target',
                type : 'Object',
                desc : '目标对象'
            }, {
                name : 'source',
                type : 'Object',
                desc : '源对象'
            }],
            returns : [{
                type : 'Object',
                desc : '目标对象'
            }],
            sees : [{
                desc : 'baidu.array.merge'
            }]
        },
        'baidu.object.isEmpty' : {
            name : 'isEmpty',
            type : 'boolean',
            desc : '检测一个对象是否是空的，需要注意的是：如果污染了Object.prototype或者Array.prototype，那么baidu.object.isEmpty({})或者baidu.object.isEmpty([])可能返回的就是false.',
            grammar : 'baidu.object.isEmpty(obj)',
            options : [{
                name : 'obj',
                type : 'Object',
                desc : '需要检测的对象.'
            }],
            returns : [{
                type : 'boolean',
                desc : '如果是空的对象就返回true.'
            }]
        },
        'baidu.object.isPlain' : {
            name : 'isPlain',
            type : 'Boolean',
            desc : '判断一个对象是不是字面量对象，即判断这个对象是不是由{}或者new Object类似方式创建',
            grammar : 'baidu.object.isPlain(source)',
            options : [{
                name : 'source',
                type : 'Object',
                desc : '需要检查的对象'
            }],
            returns : [{
                type : 'Boolean',
                desc : '检查结果'
            }]
        },
        'baidu.object.keys' : {
            name : 'keys',
            type : 'Array',
            desc : '获取目标对象的键名列表',
            grammar : 'baidu.object.keys(source)',
            options : [{
                name : 'source',
                type : 'Object',
                desc : '目标对象'
            }],
            returns : [{
                type : 'Array',
                desc : '键名列表'
            }],
            sees : [{
                desc : 'baidu.object.values'
            }]
        },
        'baidu.object.map' : {
            name : 'map',
            type : 'Array',
            desc : '遍历object中所有元素，将每一个元素应用方法进行转换，返回转换后的新object。',
            grammar : 'baidu.object.map(source, iterator)',
            options : [{
                name : 'source',
                type : 'Array',
                desc : '需要遍历的object'
            }, {
                name : 'iterator',
                type : 'Function',
                desc : '对每个object元素进行处理的函数'
            }],
            returns : [{
                type : 'Array',
                desc : 'map后的object'
            }]
        },
        'baidu.object.merge' : {
            name : 'merge',
            type : 'object',
            desc : '合并源对象的属性到目标对象。',
            grammar : 'baidu.object.merge(target, source[, opt_options])',
            options : [{
                name : 'target',
                type : 'Function',
                desc : '目标对象.'
            }, {
                name : 'source',
                type : 'Function',
                desc : '源对象.'
            }, {
                name : 'opt_options',
                type : 'Object',
                desc : 'optional merge选项.'
            }, {
                name : 'opt_options.overwrite',
                type : 'boolean',
                desc : 'optional 如果为真，源对象属性会覆盖掉目标对象上的已有属性，默认为假.'
            }, {
                name : 'opt_options.whiteList',
                type : 'string[]',
                desc : 'optional 白名单，默认为空，如果存在，只有在这里的属性才会被处理.'
            }, {
                name : 'opt_options.recursive',
                type : 'boolean',
                desc : 'optional 是否递归合并对象里面的object，默认为否.'
            }],
            returns : [{
                type : 'object',
                desc : 'merge后的object.'
            }],
            sees : [{
                desc : 'baidu.object.extend'
            }]
        },
        'baidu.object.values' : {
            name : 'values',
            type : 'Array',
            desc : '获取目标对象的值列表',
            grammar : 'baidu.object.values(source)',
            options : [{
                name : 'source',
                type : 'Object',
                desc : '目标对象'
            }],
            returns : [{
                type : 'Array',
                desc : '值列表'
            }],
            sees : [{
                desc : 'baidu.object.keys'
            }]
        },
        'baidu.page' : {
            name : 'page',
            desc : '对页面层面的封装，包括页面的高宽属性、以及外部css和js的动态添加'
        },
        'baidu.page.createStyleSheet' : {
            name : 'createStyleSheet',
            type : 'baidu.page.createStyleSheet.StyleSheet',
            desc : '在页面中创建样式表对象',
            version : '1.2',
            grammar : 'baidu.page.createStyleSheet(options)',
            options : [{
                name : 'options',
                type : 'Object',
                desc : '配置信息'
            }, {
                name : 'options.document',
                type : 'Document',
                desc : '指定在哪个document下创建，默认是当前文档'
            }, {
                name : 'options.url',
                type : 'String',
                desc : 'css文件的URL'
            }, {
                name : 'options.index',
                type : 'Number',
                desc : '在文档里的排序索引（注意，仅IE下有效）'
            }],
            returns : [{
                type : 'baidu.page.createStyleSheet.StyleSheet',
                desc : 'styleSheet对象(注意: 仅IE下,其他浏览器均返回null)'
            }],
            sees : [{
                desc : 'baidu.page.createStyleSheet.StyleSheet'
            }]
        },
        'baidu.page.getHeight' : {
            name : 'getHeight',
            type : 'number',
            desc : '获取页面高度',
            grammar : 'baidu.page.getHeight()',
            returns : [{
                type : 'number',
                desc : '页面高度'
            }],
            sees : [{
                desc : 'baidu.page.getWidth'
            }]
        },
        'baidu.page.getMousePosition' : {
            name : 'getMousePosition',
            type : 'object',
            desc : '获得页面里的目前鼠标所在的坐标',
            version : '1.2',
            grammar : 'baidu.page.getMousePosition()',
            returns : [{
                type : 'object',
                desc : '鼠标坐标值{x:[Number], y:[Number]}'
            }]
        },
        'baidu.page.getScrollLeft' : {
            name : 'getScrollLeft',
            type : 'number',
            desc : '获取横向滚动量',
            grammar : 'baidu.page.getScrollLeft()',
            returns : [{
                type : 'number',
                desc : '横向滚动量'
            }],
            sees : [{
                desc : 'baidu.page.getScrollTop'
            }]
        },
        'baidu.page.getScrollTop' : {
            name : 'getScrollTop',
            type : 'number',
            desc : '获取纵向滚动量',
            grammar : 'baidu.page.getScrollTop()',
            meta : 'standard',
            returns : [{
                type : 'number',
                desc : '纵向滚动量'
            }],
            sees : [{
                desc : 'baidu.page.getScrollLeft'
            }]
        },
        'baidu.page.getViewHeight' : {
            name : 'getViewHeight',
            type : 'number',
            desc : '获取页面视觉区域高度',
            grammar : 'baidu.page.getViewHeight()',
            meta : 'standard',
            returns : [{
                type : 'number',
                desc : '页面视觉区域高度'
            }],
            sees : [{
                desc : 'baidu.page.getViewWidth'
            }]
        },
        'baidu.page.getViewWidth' : {
            name : 'getViewWidth',
            type : 'number',
            desc : '获取页面视觉区域宽度',
            grammar : 'baidu.page.getViewWidth()',
            returns : [{
                type : 'number',
                desc : '页面视觉区域宽度'
            }],
            sees : [{
                desc : 'baidu.page.getViewHeight'
            }]
        },
        'baidu.page.getWidth' : {
            name : 'getWidth',
            type : 'number',
            desc : '获取页面宽度',
            grammar : 'baidu.page.getWidth()',
            meta : 'standard',
            returns : [{
                type : 'number',
                desc : '页面宽度'
            }],
            sees : [{
                desc : 'baidu.page.getHeight'
            }]
        },
        'baidu.page.lazyLoadImage' : {
            name : 'lazyLoadImage',
            desc : '延迟加载图片. 默认只加载可见高度以上的图片, 随着窗口滚动加载剩余图片.注意: 仅支持垂直方向.',
            grammar : 'baidu.page.lazyLoadImage([options])',
            options : [{
                name : 'options',
                type : 'Object'
            }, {
                name : 'options.className',
                type : 'String',
                desc : '延迟加载的IMG的className,如果不传入该值将延迟加载所有IMG.'
            }, {
                name : 'options.preloadHeight',
                type : 'Number',
                desc : '预加载的高度, 可见窗口下该高度内的图片将被加载.'
            }, {
                name : 'options.placeHolder',
                type : 'String',
                desc : '占位图url.'
            }, {
                name : 'options.onlazyload',
                type : 'Function',
                desc : '延迟加载回调函数,在实际加载时触发.'
            }]
        },
        'baidu.page.load' : {
            name : 'load',
            desc : '加载一组资源，支持多种格式资源的串/并行加载，支持每个文件有单独回调函数。',
            grammar : 'baidu.page.load(resources[, options])',
            options : [{
                name : 'resources',
                type : 'Array',
                desc : '资源描述数组，单个resource含如下属性.'
            }, {
                name : 'resources.url',
                type : 'String',
                desc : '链接地址.'
            }, {
                name : 'resources.type',
                type : 'String',
                desc : '取值[\"css\",\"js\",\"html\"]，默认参考文件后缀.'
            }, {
                name : 'resources.requestType',
                type : 'String',
                desc : '取值[\"dom\",\"ajax\"]，默认js和css用dom标签，html用ajax.'
            }, {
                name : 'resources.onload',
                type : 'Function',
                desc : '当前resource加载完成的回调函数，若requestType为ajax，参数为xhr(可能失效)，responseText；若requestType为dom，无参数，执行时this为相应dom标签。.'
            }, {
                name : 'options',
                type : 'Object',
                desc : '可选参数.'
            }, {
                name : 'options.onload',
                type : 'Function',
                desc : '资源全部加载完成的回调函数，无参数。.'
            }, {
                name : 'options.parallel',
                type : 'Boolean',
                desc : '是否并行加载，默认为false，串行。.'
            }, {
                name : 'ignoreAllLoaded',
                type : 'Boolean',
                desc : '全部加载之后不触发回调事件.主要用于内部实现.'
            }]
        },
        'baidu.page.loadCssFile' : {
            name : 'loadCssFile',
            desc : '动态在页面上加载一个外部css文件',
            grammar : 'baidu.page.loadCssFile(path)',
            options : [{
                name : 'path',
                type : 'string',
                desc : 'css文件路径'
            }],
            sees : [{
                desc : 'baidu.page.loadJsFile'
            }]
        },
        'baidu.page.loadJsFile' : {
            name : 'loadJsFile',
            desc : '动态在页面上加载一个外部js文件',
            grammar : 'baidu.page.loadJsFile(path)',
            options : [{
                name : 'path',
                type : 'string',
                desc : 'js文件路径'
            }],
            sees : [{
                desc : 'baidu.page.loadCssFile'
            }]
        },
        'baidu.platform' : {
            name : 'platform',
            desc : '判断平台类型和特性的属性'
        },
        'baidu.platform.isAndroid' : {
            name : 'isAndroid',
            type : 'Boolean',
            desc : '判断是否为android平台',
            grammar : 'baidu.platform.android',
            meta : 'standard',
            returns : [{
                type : 'Boolean',
                desc : '布尔值'
            }],
            sees : [{
                desc : 'baidu.platform.x11,baidu.platform.windows,baidu.platform.macintosh,baidu.platform.iphone,baidu.platform.ipad'
            }]
        },
        'baidu.platform.isIpad' : {
            name : 'isIpad',
            type : 'Boolean',
            desc : '判断是否为ipad平台',
            grammar : 'baidu.platform.ipad',
            meta : 'standard',
            returns : [{
                type : 'Boolean',
                desc : '布尔值'
            }],
            sees : [{
                desc : 'baidu.platform.x11,baidu.platform.windows,baidu.platform.macintosh,baidu.platform.iphone,baidu.platform.android'
            }]
        },
        'baidu.platform.isIphone' : {
            name : 'isIphone',
            type : 'Boolean',
            desc : '判断是否为iphone平台',
            grammar : 'baidu.platform.iphone',
            meta : 'standard',
            returns : [{
                type : 'Boolean',
                desc : '布尔值'
            }],
            sees : [{
                desc : 'baidu.platform.x11,baidu.platform.windows,baidu.platform.macintosh,baidu.platform.ipad,baidu.platform.android'
            }]
        },
        'baidu.platform.isMacintosh' : {
            name : 'isMacintosh',
            type : 'Boolean',
            desc : '判断是否为macintosh平台',
            grammar : 'baidu.platform.macintosh',
            meta : 'standard',
            returns : [{
                type : 'Boolean',
                desc : '布尔值'
            }],
            sees : [{
                desc : 'baidu.platform.x11,baidu.platform.windows,baidu.platform.iphone,baidu.platform.ipad,baidu.platform.android'
            }]
        },
        'baidu.platform.isWindows' : {
            name : 'isWindows',
            type : 'Boolean',
            desc : '判断是否为windows平台',
            grammar : 'baidu.platform.windows',
            meta : 'standard',
            returns : [{
                type : 'Boolean',
                desc : '布尔值'
            }],
            sees : [{
                desc : 'baidu.platform.x11,baidu.platform.macintosh,baidu.platform.iphone,baidu.platform.ipad,baidu.platform.android'
            }]
        },
        'baidu.platform.isX11' : {
            name : 'isX11',
            type : 'Boolean',
            desc : '判断是否为x11平台',
            grammar : 'baidu.platform.x11',
            meta : 'standard',
            returns : [{
                type : 'Boolean',
                desc : '布尔值'
            }],
            sees : [{
                desc : 'baidu.platform.windows,baidu.platform.macintosh,baidu.platform.iphone,baidu.platform.ipad,baidu.platform.android'
            }]
        },
        'baidu.sio' : {
            name : 'sio',
            desc : '使用动态script标签请求服务器资源，包括由服务器端的回调和浏览器端的回调'
        },
        'baidu.sio.callByBrowser' : {
            name : 'callByBrowser',
            desc : '通过script标签加载数据，加载完成由浏览器端触发回调',
            grammar : 'baidu.sio.callByBrowser(url, opt_callback, opt_options)',
            meta : 'standard',
            options : [{
                name : 'url',
                type : 'string',
                desc : '加载数据的url'
            }, {
                name : 'opt_callback',
                type : 'Function|string',
                desc : '数据加载结束时调用的函数或函数名'
            }, {
                name : 'opt_options',
                type : 'Object',
                desc : '其他可选项'
            }, {
                name : 'opt_options.charset',
                type : 'String',
                desc : 'script的字符集'
            }, {
                name : 'opt_options.timeOut',
                type : 'Integer',
                desc : '超时时间，超过这个时间将不再响应本请求，并触发onfailure函数'
            }, {
                name : 'opt_options.onfailure',
                type : 'Function',
                desc : 'timeOut设定后才生效，到达超时时间时触发本函数'
            }],
            sees : [{
                desc : 'baidu.sio.callByServer'
            }]
        },
        'baidu.sio.callByServer' : {
            name : 'callByServer',
            desc : '通过script标签加载数据，加载完成由服务器端触发回调',
            grammar : 'baidu.sio.callByServer(url, callback[, opt_options])',
            meta : 'standard',
            options : [{
                name : 'url',
                type : 'string',
                desc : '加载数据的url.'
            }, {
                name : 'callback',
                type : 'Function|string',
                desc : '服务器端调用的函数或函数名。如果没有指定本参数，将在URL中寻找options[\'queryField\']做为callback的方法名.'
            }, {
                name : 'opt_options',
                type : 'Object',
                desc : '加载数据时的选项.'
            }, {
                name : 'opt_options.charset',
                type : 'string',
                desc : 'script的字符集'
            }, {
                name : 'opt_options.queryField',
                type : 'string',
                desc : '服务器端callback请求字段名，默认为callback'
            }, {
                name : 'opt_options.timeOut',
                type : 'Integer',
                desc : '超时时间(单位：ms)，超过这个时间将不再响应本请求，并触发onfailure函数'
            }, {
                name : 'opt_options.onfailure',
                type : 'Function',
                desc : 'timeOut设定后才生效，到达超时时间时触发本函数'
            }],
            sees : [{
                desc : 'baidu.sio.callByBrowser'
            }]
        },
        'baidu.sio.log' : {
            name : 'log',
            desc : '通过请求一个图片的方式令服务器存储一条日志',
            grammar : 'baidu.sio.log(url)',
            options : [{
                name : 'url',
                type : 'string',
                desc : '要发送的地址.'
            }]
        },
        'baidu.string' : {
            name : 'string',
            desc : '操作字符串的方法'
        },
        'baidu.string.decodeHTML' : {
            name : 'decodeHTML',
            type : 'string',
            desc : '对目标字符串进行html解码',
            grammar : 'baidu.string.decodeHTML(source)',
            meta : 'standard',
            shortcut : 'decodeHTML',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }],
            returns : [{
                type : 'string',
                desc : 'html解码后的字符串'
            }],
            sees : [{
                desc : 'baidu.string.encodeHTML'
            }]
        },
        'baidu.string.encodeHTML' : {
            name : 'encodeHTML',
            type : 'string',
            desc : '对目标字符串进行html编码',
            grammar : 'baidu.string.encodeHTML(source)',
            meta : 'standard',
            shortcut : 'encodeHTML',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }],
            returns : [{
                type : 'string',
                desc : 'html编码后的字符串'
            }],
            sees : [{
                desc : 'baidu.string.decodeHTML'
            }]
        },
        'baidu.string.escapeReg' : {
            name : 'escapeReg',
            type : 'string',
            desc : '将目标字符串中可能会影响正则表达式构造的字符串进行转义。',
            grammar : 'baidu.string.escapeReg(source)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }],
            returns : [{
                type : 'string',
                desc : '转义后的字符串'
            }]
        },
        'baidu.string.filterFormat' : {
            name : 'filterFormat',
            type : 'string',
            desc : '对目标字符串进行格式化,支持过滤',
            version : '1.2',
            grammar : 'baidu.string.filterFormat(source, opts)',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }, {
                name : 'opts',
                type : 'Object|string...',
                desc : '提供相应数据的对象'
            }],
            methods : [{
                name : 'escapeJs',
                type : 'String',
                desc : '对js片段的字符做安全转义,编码低于255的都将转换成\\x加16进制数',
                version : '1.2',
                grammar : 'baidu.string.filterFormat.escapeJs(source)',
                options : [{
                    name : 'source',
                    type : 'String',
                    desc : '待转义字符串'
                }],
                returns : [{
                    type : 'String',
                    desc : '转义之后的字符串'
                }]
            }, {
                name : 'escapeString',
                type : 'String',
                desc : '对字符串做安全转义,转义字符包括: 单引号,双引号,左右小括号,斜杠,反斜杠,上引号.',
                version : '1.2',
                grammar : 'baidu.string.filterFormat.escapeString(source)',
                options : [{
                    name : 'source',
                    type : 'String',
                    desc : '待转义字符串'
                }],
                returns : [{
                    type : 'String',
                    desc : '转义之后的字符串'
                }]
            }, {
                name : 'toInt',
                type : 'Number',
                desc : '对数字做安全转义,确保是十进制数字;否则返回0.',
                version : '1.2',
                grammar : 'baidu.string.filterFormat.toInt(source)',
                options : [{
                    name : 'source',
                    type : 'String',
                    desc : '待转义字符串'
                }],
                returns : [{
                    type : 'Number',
                    desc : '转义之后的数字'
                }]
            }],
            returns : [{
                type : 'string',
                desc : '格式化后的字符串'
            }],
            sees : [{
                desc : 'baidu.string.format,baidu.string.filterFormat.escapeJs,baidu.string.filterFormat.escapeString,baidu.string.filterFormat.toInt'
            }]
        },
        'baidu.string.filterFormat.escapeJs' : {
            name : 'escapeJs',
            type : 'String',
            desc : '对js片段的字符做安全转义,编码低于255的都将转换成\\x加16进制数',
            version : '1.2',
            grammar : 'baidu.string.filterFormat.escapeJs(source)',
            options : [{
                name : 'source',
                type : 'String',
                desc : '待转义字符串'
            }],
            returns : [{
                type : 'String',
                desc : '转义之后的字符串'
            }],
            sees : [{
                desc : 'baidu.string.filterFormat,baidu.string.filterFormat.escapeString,baidu.string.filterFormat.toInt'
            }]
        },
        'baidu.string.filterFormat.escapeString' : {
            name : 'escapeString',
            type : 'String',
            desc : '对字符串做安全转义,转义字符包括: 单引号,双引号,左右小括号,斜杠,反斜杠,上引号.',
            version : '1.2',
            grammar : 'baidu.string.filterFormat.escapeString(source)',
            options : [{
                name : 'source',
                type : 'String',
                desc : '待转义字符串'
            }],
            returns : [{
                type : 'String',
                desc : '转义之后的字符串'
            }],
            sees : [{
                desc : 'baidu.string.filterFormat,baidu.string.filterFormat.escapeJs,baidu.string.filterFormat.toInt'
            }]
        },
        'baidu.string.filterFormat.toInt' : {
            name : 'toInt',
            type : 'Number',
            desc : '对数字做安全转义,确保是十进制数字;否则返回0.',
            version : '1.2',
            grammar : 'baidu.string.filterFormat.toInt(source)',
            options : [{
                name : 'source',
                type : 'String',
                desc : '待转义字符串'
            }],
            returns : [{
                type : 'Number',
                desc : '转义之后的数字'
            }],
            sees : [{
                desc : 'baidu.string.filterFormat,baidu.string.filterFormat.escapeJs,baidu.string.filterFormat.escapeString'
            }]
        },
        'baidu.string.format' : {
            name : 'format',
            type : 'string',
            desc : '对目标字符串进行格式化',
            grammar : 'baidu.string.format(source, opts)',
            meta : 'standard',
            shortcut : 'format',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }, {
                name : 'opts',
                type : 'Object|string...',
                desc : '提供相应数据的对象或多个字符串'
            }],
            returns : [{
                type : 'string',
                desc : '格式化后的字符串'
            }]
        },
        'baidu.string.formatColor' : {
            name : 'formatColor',
            type : 'string',
            desc : '将各种浏览器里的颜色值转换成 #RRGGBB 的格式',
            version : '1.3',
            grammar : 'baidu.string.formatColor(color)',
            options : [{
                name : 'color',
                type : 'string',
                desc : '颜色值字符串'
            }],
            returns : [{
                type : 'string',
                desc : '#RRGGBB格式的字符串或空'
            }]
        },
        'baidu.string.getByteLength' : {
            name : 'getByteLength',
            type : 'number',
            desc : '获取目标字符串在gbk编码下的字节长度',
            grammar : 'baidu.string.getByteLength(source)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }],
            returns : [{
                type : 'number',
                desc : '字节长度'
            }],
            sees : [{
                desc : 'baidu.string.subByte'
            }]
        },
        'baidu.string.stripTags' : {
            name : 'stripTags',
            type : 'String',
            desc : '去掉字符串中的html标签',
            grammar : 'baidu.string.stripTags(source)',
            options : [{
                name : 'source',
                type : 'string',
                desc : '要处理的字符串.'
            }],
            returns : [{
                type : 'String'
            }]
        },
        'baidu.string.subByte' : {
            name : 'subByte',
            type : 'string',
            desc : '对目标字符串按gbk编码截取字节长度',
            grammar : 'baidu.string.subByte(source, length)',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }, {
                name : 'length',
                type : 'number',
                desc : '需要截取的字节长度'
            }, {
                name : 'tail',
                type : 'string',
                desc : '追加字符串,可选.'
            }],
            returns : [{
                type : 'string',
                desc : '字符串截取结果'
            }],
            sees : [{
                desc : 'baidu.string.getByteLength'
            }]
        },
        'baidu.string.toCamelCase' : {
            name : 'toCamelCase',
            type : 'string',
            desc : '将目标字符串进行驼峰化处理',
            grammar : 'baidu.string.toCamelCase(source)',
            meta : 'standard',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }],
            returns : [{
                type : 'string',
                desc : '驼峰化处理后的字符串'
            }]
        },
        'baidu.string.toHalfWidth' : {
            name : 'toHalfWidth',
            type : 'string',
            desc : '将目标字符串中常见全角字符转换成半角字符',
            grammar : 'baidu.string.toHalfWidth(source)',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }],
            returns : [{
                type : 'string',
                desc : '转换后的字符串'
            }]
        },
        'baidu.string.trim' : {
            name : 'trim',
            type : 'string',
            desc : '删除目标字符串两端的空白字符',
            grammar : 'baidu.string.trim(source)',
            meta : 'standard',
            shortcut : 'trim',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }],
            returns : [{
                type : 'string',
                desc : '删除两端空白字符后的字符串'
            }]
        },
        'baidu.string.wbr' : {
            name : 'wbr',
            type : 'string',
            desc : '为目标字符串添加wbr软换行',
            grammar : 'baidu.string.wbr(source)',
            options : [{
                name : 'source',
                type : 'string',
                desc : '目标字符串'
            }],
            returns : [{
                type : 'string',
                desc : '添加软换行后的字符串'
            }]
        },
        'baidu.swf' : {
            name : 'swf',
            desc : '操作flash对象的方法，包括创建flash对象、获取flash对象以及判断flash插件的版本号'
        },
        'baidu.swf.create' : {
            name : 'create',
            desc : '在页面中创建一个flash对象',
            grammar : 'baidu.swf.create(options[, container])',
            meta : 'standard',
            options : [{
                name : 'options',
                type : 'Object',
                desc : '创建flash的选项参数'
            }, {
                name : 'options.id',
                type : 'string',
                desc : '要创建的flash的标识'
            }, {
                name : 'options.url',
                type : 'string',
                desc : 'flash文件的url'
            }, {
                name : 'options.errorMessage',
                type : 'String',
                desc : '未安装flash player或flash player版本号过低时的提示'
            }, {
                name : 'options.ver',
                type : 'string',
                desc : '最低需要的flash player版本号'
            }, {
                name : 'options.width',
                type : 'string',
                desc : 'flash的宽度'
            }, {
                name : 'options.height',
                type : 'string',
                desc : 'flash的高度'
            }, {
                name : 'options.align',
                type : 'string',
                desc : 'flash的对齐方式，允许值：middle/left/right/top/bottom'
            }, {
                name : 'options.base',
                type : 'string',
                desc : '设置用于解析swf文件中的所有相对路径语句的基本目录或URL'
            }, {
                name : 'options.bgcolor',
                type : 'string',
                desc : 'swf文件的背景色'
            }, {
                name : 'options.salign',
                type : 'string',
                desc : '设置缩放的swf文件在由width和height设置定义的区域内的位置。允许值：l/r/t/b/tl/tr/bl/br'
            }, {
                name : 'options.menu',
                type : 'boolean',
                desc : '是否显示右键菜单，允许值：true/false'
            }, {
                name : 'options.loop',
                type : 'boolean',
                desc : '播放到最后一帧时是否重新播放，允许值： true/false'
            }, {
                name : 'options.play',
                type : 'boolean',
                desc : 'flash是否在浏览器加载时就开始播放。允许值：true/false'
            }, {
                name : 'options.quality',
                type : 'string',
                desc : '设置flash播放的画质，允许值：low/medium/high/autolow/autohigh/best'
            }, {
                name : 'options.scale',
                type : 'string',
                desc : '设置flash内容如何缩放来适应设置的宽高。允许值：showall/noborder/exactfit'
            }, {
                name : 'options.wmode',
                type : 'string',
                desc : '设置flash的显示模式。允许值：window/opaque/transparent'
            }, {
                name : 'options.allowscriptaccess',
                type : 'string',
                desc : '设置flash与页面的通信权限。允许值：always/never/sameDomain'
            }, {
                name : 'options.allownetworking',
                type : 'string',
                desc : '设置swf文件中允许使用的网络API。允许值：all/internal/none'
            }, {
                name : 'options.allowfullscreen',
                type : 'boolean',
                desc : '是否允许flash全屏。允许值：true/false'
            }, {
                name : 'options.seamlesstabbing',
                type : 'boolean',
                desc : '允许设置执行无缝跳格，从而使用户能跳出flash应用程序。该参数只能在安装Flash7及更高版本的Windows中使用。允许值：true/false'
            }, {
                name : 'options.devicefont',
                type : 'boolean',
                desc : '设置静态文本对象是否以设备字体呈现。允许值：true/false'
            }, {
                name : 'options.swliveconnect',
                type : 'boolean',
                desc : '第一次加载flash时浏览器是否应启动Java。允许值：true/false'
            }, {
                name : 'options.vars',
                type : 'Object',
                desc : '要传递给flash的参数，支持JSON或string类型。'
            }, {
                name : 'container',
                type : 'HTMLElement|string',
                desc : 'flash对象的父容器元素，不传递该参数时在当前代码位置创建flash对象。'
            }],
            sees : [{
                desc : 'baidu.swf.createHTML,baidu.swf.getMovie'
            }]
        },
        'baidu.swf.createHTML' : {
            name : 'createHTML',
            type : 'string',
            desc : '创建flash对象的html字符串',
            grammar : 'baidu.swf.createHTML(options)',
            meta : 'standard',
            options : [{
                name : 'options',
                type : 'Object',
                desc : '创建flash的选项参数'
            }, {
                name : 'options.id',
                type : 'string',
                desc : '要创建的flash的标识'
            }, {
                name : 'options.url',
                type : 'string',
                desc : 'flash文件的url'
            }, {
                name : 'options.errorMessage',
                type : 'String',
                desc : '未安装flash player或flash player版本号过低时的提示'
            }, {
                name : 'options.ver',
                type : 'string',
                desc : '最低需要的flash player版本号'
            }, {
                name : 'options.width',
                type : 'string',
                desc : 'flash的宽度'
            }, {
                name : 'options.height',
                type : 'string',
                desc : 'flash的高度'
            }, {
                name : 'options.align',
                type : 'string',
                desc : 'flash的对齐方式，允许值：middle/left/right/top/bottom'
            }, {
                name : 'options.base',
                type : 'string',
                desc : '设置用于解析swf文件中的所有相对路径语句的基本目录或URL'
            }, {
                name : 'options.bgcolor',
                type : 'string',
                desc : 'swf文件的背景色'
            }, {
                name : 'options.salign',
                type : 'string',
                desc : '设置缩放的swf文件在由width和height设置定义的区域内的位置。允许值：l/r/t/b/tl/tr/bl/br'
            }, {
                name : 'options.menu',
                type : 'boolean',
                desc : '是否显示右键菜单，允许值：true/false'
            }, {
                name : 'options.loop',
                type : 'boolean',
                desc : '播放到最后一帧时是否重新播放，允许值： true/false'
            }, {
                name : 'options.play',
                type : 'boolean',
                desc : 'flash是否在浏览器加载时就开始播放。允许值：true/false'
            }, {
                name : 'options.quality',
                type : 'string',
                desc : '设置flash播放的画质，允许值：low/medium/high/autolow/autohigh/best'
            }, {
                name : 'options.scale',
                type : 'string',
                desc : '设置flash内容如何缩放来适应设置的宽高。允许值：showall/noborder/exactfit'
            }, {
                name : 'options.wmode',
                type : 'string',
                desc : '设置flash的显示模式。允许值：window/opaque/transparent'
            }, {
                name : 'options.allowscriptaccess',
                type : 'string',
                desc : '设置flash与页面的通信权限。允许值：always/never/sameDomain'
            }, {
                name : 'options.allownetworking',
                type : 'string',
                desc : '设置swf文件中允许使用的网络API。允许值：all/internal/none'
            }, {
                name : 'options.allowfullscreen',
                type : 'boolean',
                desc : '是否允许flash全屏。允许值：true/false'
            }, {
                name : 'options.seamlesstabbing',
                type : 'boolean',
                desc : '允许设置执行无缝跳格，从而使用户能跳出flash应用程序。该参数只能在安装Flash7及更高版本的Windows中使用。允许值：true/false'
            }, {
                name : 'options.devicefont',
                type : 'boolean',
                desc : '设置静态文本对象是否以设备字体呈现。允许值：true/false'
            }, {
                name : 'options.swliveconnect',
                type : 'boolean',
                desc : '第一次加载flash时浏览器是否应启动Java。允许值：true/false'
            }, {
                name : 'options.vars',
                type : 'Object',
                desc : '要传递给flash的参数，支持JSON或string类型。'
            }],
            returns : [{
                type : 'string',
                desc : 'flash对象的html字符串'
            }],
            sees : [{
                desc : 'baidu.swf.create'
            }]
        },
        'baidu.swf.getMovie' : {
            name : 'getMovie',
            type : 'HTMLElement',
            desc : '获得flash对象的实例',
            grammar : 'baidu.swf.getMovie(name)',
            meta : 'standard',
            options : [{
                name : 'name',
                type : 'string',
                desc : 'flash对象的名称'
            }],
            returns : [{
                type : 'HTMLElement',
                desc : 'flash对象的实例'
            }],
            sees : [{
                desc : 'baidu.swf.create'
            }]
        },
        'baidu.swf.Proxy' : {
            name : 'Proxy',
            desc : 'Js 调用 Flash方法的代理类.',
            grammar : 'new baidu.swf.Proxy(id, property, [, loadedHandler])',
            options : [{
                name : 'id',
                type : 'string',
                desc : 'Flash的元素id.object标签id, embed标签name.'
            }, {
                name : 'property',
                type : 'string',
                desc : 'Flash的方法或者属性名称，用来检测Flash是否初始化好了.'
            }, {
                name : 'loadedHandler',
                type : 'Function',
                desc : '初始化之后的回调函数.'
            }],
            methods : [{
                name : 'getFlash',
                type : 'HTMLElement',
                desc : '获取flash对象.',
                returns : [{
                    type : 'HTMLElement',
                    desc : 'Flash对象.'
                }]
            }, {
                name : 'isReady',
                desc : '判断Flash是否初始化完成,可以与js进行交互.'
            }, {
                name : 'call',
                desc : '调用Flash中的某个方法',
                options : [{
                    name : 'methodName',
                    type : 'string',
                    desc : '方法名.'
                }, {
                    name : 'var_args',
                    type : '...*',
                    desc : '方法的参数.'
                }]
            }]
        },
        'baidu.swf.version' : {
            name : 'version',
            type : 'String',
            desc : '浏览器支持的flash插件版本',
            grammar : 'baidu.swf.version',
            meta : 'standard',
            returns : [{
                type : 'String',
                desc : '版本号'
            }]
        },
        'baidu.url' : {
            name : 'url',
            desc : '操作url的方法'
        },
        'baidu.url.escapeSymbol' : {
            name : 'escapeSymbol',
            type : 'string, string',
            desc : '对字符串进行%#&+=以及和\\s匹配的所有字符进行url转义',
            grammar : 'baidu.url.escapeSymbol(source)',
            options : [{
                name : 'source',
                type : 'string',
                desc : '需要转义的字符串.'
            }],
            returns : [{
                type : 'string',
                desc : '转义之后的字符串.'
            }, {
                type : 'string',
                desc : '转义后的字符串'
            }]
        },
        'baidu.url.getQueryValue' : {
            name : 'getQueryValue',
            type : 'string|null',
            desc : '根据参数名从目标URL中获取参数值',
            grammar : 'baidu.url.getQueryValue(url, key)',
            meta : 'standard',
            options : [{
                name : 'url',
                type : 'string',
                desc : '目标URL'
            }, {
                name : 'key',
                type : 'string',
                desc : '要获取的参数名'
            }],
            returns : [{
                type : 'string|null',
                desc : '- 获取的参数值，其中URI编码后的字符不会被解码，获取不到时返回null'
            }],
            sees : [{
                desc : 'baidu.url.jsonToQuery'
            }]
        },
        'baidu.url.jsonToQuery' : {
            name : 'jsonToQuery',
            type : 'string',
            desc : '将json对象解析成query字符串',
            grammar : 'baidu.url.jsonToQuery(json[, replacer])',
            options : [{
                name : 'json',
                type : 'Object',
                desc : '需要解析的json对象'
            }, {
                name : 'replacer_opt',
                type : 'Function=',
                desc : '对值进行特殊处理的函数，function (value, key)'
            }],
            returns : [{
                type : 'string',
                desc : '- 解析结果字符串，其中值将被URI编码，{a:\'&1 \'} ==> \"a=%261%20\"。'
            }],
            sees : [{
                desc : 'baidu.url.queryToJson,baidu.url.getQueryValue'
            }]
        },
        'baidu.url.queryToJson' : {
            name : 'queryToJson',
            type : 'Object',
            desc : '解析目标URL中的参数成json对象',
            grammar : 'baidu.url.queryToJson(url)',
            options : [{
                name : 'url',
                type : 'string',
                desc : '目标URL'
            }],
            returns : [{
                type : 'Object',
                desc : '- 解析为结果对象，其中URI编码后的字符不会被解码，\'a=%20\' ==> {a:\'%20\'}。'
            }],
            sees : [{
                desc : 'baidu.url.jsonToQuery'
            }]
        }
    },
    nameSpace : [{
        n : 'baidu.ajax',
        p : 'baidu'
    }, {
        n : 'baidu.ajax.form',
        p : 'baidu.ajax'
    }, {
        n : 'baidu.ajax.get',
        p : 'baidu.ajax'
    }, {
        n : 'baidu.ajax.post',
        p : 'baidu.ajax'
    }, {
        n : 'baidu.ajax.request',
        p : 'baidu.ajax'
    }, {
        n : 'baidu.array',
        p : 'baidu'
    }, {
        n : 'baidu.array.contains',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.each',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.empty',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.every',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.filter',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.find',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.hash',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.indexOf',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.lastIndexOf',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.map',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.reduce',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.remove',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.removeAt',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.some',
        p : 'baidu.array'
    }, {
        n : 'baidu.array.unique',
        p : 'baidu.array'
    }, {
        n : 'baidu.async',
        p : 'baidu'
    }, {
        n : 'baidu.async.get',
        p : 'baidu.async'
    }, {
        n : 'baidu.async.post',
        p : 'baidu.async'
    }, {
        n : 'baidu.async.when',
        p : 'baidu.async'
    }, {
        n : 'baidu.browser',
        p : 'baidu'
    }, {
        n : 'baidu.browser.chrome',
        p : 'baidu.browser'
    }, {
        n : 'baidu.browser.firefox',
        p : 'baidu.browser'
    }, {
        n : 'baidu.browser.ie',
        p : 'baidu.browser'
    }, {
        n : 'baidu.browser.isGecko',
        p : 'baidu.browser'
    }, {
        n : 'baidu.browser.isStrict',
        p : 'baidu.browser'
    }, {
        n : 'baidu.browser.isWebkit',
        p : 'baidu.browser'
    }, {
        n : 'baidu.browser.maxthon',
        p : 'baidu.browser'
    }, {
        n : 'baidu.browser.opera',
        p : 'baidu.browser'
    }, {
        n : 'baidu.browser.safari',
        p : 'baidu.browser'
    }, {
        n : 'baidu.cookie',
        p : 'baidu'
    }, {
        n : 'baidu.cookie.get',
        p : 'baidu.cookie'
    }, {
        n : 'baidu.cookie.getRaw',
        p : 'baidu.cookie'
    }, {
        n : 'baidu.cookie.remove',
        p : 'baidu.cookie'
    }, {
        n : 'baidu.cookie.set',
        p : 'baidu.cookie'
    }, {
        n : 'baidu.cookie.setRaw',
        p : 'baidu.cookie'
    }, {
        n : 'baidu.date',
        p : 'baidu'
    }, {
        n : 'baidu.date.format',
        p : 'baidu.date'
    }, {
        n : 'baidu.date.parse',
        p : 'baidu.date'
    }, {
        n : 'baidu.dom',
        p : 'baidu'
    }, {
        n : 'baidu.dom.addClass',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.children',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.contains',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.create',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.drag',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.draggable',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.droppable',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.empty',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.first',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.fixable',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.g',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getAncestorBy',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getAncestorByClass',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getAncestorByTag',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getAttr',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getComputedStyle',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getCurrentStyle',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getDocument',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getParent',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getPosition',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getStyle',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getText',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.getWindow',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.hasAttr',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.hasClass',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.hide',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.insertAfter',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.insertBefore',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.insertHTML',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.intersect',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.last',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.next',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.opacity',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.prev',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.q',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.query',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.ready',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.remove',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.removeClass',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.removeStyle',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.resizable',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.setAttr',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.setAttrs',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.setBorderBoxHeight',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.setBorderBoxSize',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.setBorderBoxWidth',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.setPixel',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.setPosition',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.setStyle',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.setStyles',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.show',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.toggle',
        p : 'baidu.dom'
    }, {
        n : 'baidu.dom.toggleClass',
        p : 'baidu.dom'
    }, {
        n : 'baidu.element',
        p : 'baidu'
    }, {
        n : 'baidu.element.each',
        p : 'baidu.element'
    }, {
        n : 'baidu.element.Element',
        p : 'baidu.element'
    }, {
        n : 'baidu.element.events',
        p : 'baidu.element'
    }, {
        n : 'baidu.element.extend',
        p : 'baidu.element'
    }, {
        n : 'baidu.event',
        p : 'baidu'
    }, {
        n : 'baidu.event.EventArg',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.fire',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.get',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.getEvent',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.getKeyCode',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.getPageX',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.getPageY',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.getTarget',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.on',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.once',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.preventDefault',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.stop',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.stopPropagation',
        p : 'baidu.event'
    }, {
        n : 'baidu.event.un',
        p : 'baidu.event'
    }, {
        n : 'baidu.fn',
        p : 'baidu'
    }, {
        n : 'baidu.fn.abstractMethod',
        p : 'baidu.fn'
    }, {
        n : 'baidu.fn.bind',
        p : 'baidu.fn'
    }, {
        n : 'baidu.fn.blank',
        p : 'baidu.fn'
    }, {
        n : 'baidu.fn.methodize',
        p : 'baidu.fn'
    }, {
        n : 'baidu.fn.multize',
        p : 'baidu.fn'
    }, {
        n : 'baidu.fn.wrapReturnValue',
        p : 'baidu.fn'
    }, {
        n : 'baidu.form',
        p : 'baidu'
    }, {
        n : 'baidu.form.json',
        p : 'baidu.form'
    }, {
        n : 'baidu.form.serialize',
        p : 'baidu.form'
    }, {
        n : 'baidu.json',
        p : 'baidu'
    }, {
        n : 'baidu.json.decode',
        p : 'baidu.json'
    }, {
        n : 'baidu.json.encode',
        p : 'baidu.json'
    }, {
        n : 'baidu.json.parse',
        p : 'baidu.json'
    }, {
        n : 'baidu.json.stringify',
        p : 'baidu.json'
    }, {
        n : 'baidu.lang',
        p : 'baidu'
    }, {
        n : 'baidu.lang.Class',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.createClass',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.createSingle',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.decontrol',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.Event',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.eventCenter',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.eventCenter.addEventListener',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.eventCenter.dispatchEvent',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.eventCenter.removeEventListener',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.getModule',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.guid',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.inherits',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.instance',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.isArray',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.isBoolean',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.isDate',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.isElement',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.isFunction',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.isNumber',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.isObject',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.isString',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.module',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.register',
        p : 'baidu.lang'
    }, {
        n : 'baidu.lang.toArray',
        p : 'baidu.lang'
    }, {
        n : 'baidu.number',
        p : 'baidu'
    }, {
        n : 'baidu.number.comma',
        p : 'baidu.number'
    }, {
        n : 'baidu.number.pad',
        p : 'baidu.number'
    }, {
        n : 'baidu.number.randomInt',
        p : 'baidu.number'
    }, {
        n : 'baidu.object',
        p : 'baidu'
    }, {
        n : 'baidu.object.clone',
        p : 'baidu.object'
    }, {
        n : 'baidu.object.each',
        p : 'baidu.object'
    }, {
        n : 'baidu.object.extend',
        p : 'baidu.object'
    }, {
        n : 'baidu.object.isEmpty',
        p : 'baidu.object'
    }, {
        n : 'baidu.object.isPlain',
        p : 'baidu.object'
    }, {
        n : 'baidu.object.keys',
        p : 'baidu.object'
    }, {
        n : 'baidu.object.map',
        p : 'baidu.object'
    }, {
        n : 'baidu.object.merge',
        p : 'baidu.object'
    }, {
        n : 'baidu.object.values',
        p : 'baidu.object'
    }, {
        n : 'baidu.page',
        p : 'baidu'
    }, {
        n : 'baidu.page.createStyleSheet',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.getHeight',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.getMousePosition',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.getScrollLeft',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.getScrollTop',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.getViewHeight',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.getViewWidth',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.getWidth',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.lazyLoadImage',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.load',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.loadCssFile',
        p : 'baidu.page'
    }, {
        n : 'baidu.page.loadJsFile',
        p : 'baidu.page'
    }, {
        n : 'baidu.platform',
        p : 'baidu'
    }, {
        n : 'baidu.platform.isAndroid',
        p : 'baidu.platform'
    }, {
        n : 'baidu.platform.isIpad',
        p : 'baidu.platform'
    }, {
        n : 'baidu.platform.isIphone',
        p : 'baidu.platform'
    }, {
        n : 'baidu.platform.isMacintosh',
        p : 'baidu.platform'
    }, {
        n : 'baidu.platform.isWindows',
        p : 'baidu.platform'
    }, {
        n : 'baidu.platform.isX11',
        p : 'baidu.platform'
    }, {
        n : 'baidu.sio',
        p : 'baidu'
    }, {
        n : 'baidu.sio.callByBrowser',
        p : 'baidu.sio'
    }, {
        n : 'baidu.sio.callByServer',
        p : 'baidu.sio'
    }, {
        n : 'baidu.sio.log',
        p : 'baidu.sio'
    }, {
        n : 'baidu.string',
        p : 'baidu'
    }, {
        n : 'baidu.string.decodeHTML',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.encodeHTML',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.escapeReg',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.filterFormat',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.filterFormat.escapeJs',
        p : 'baidu.string.filterFormat'
    }, {
        n : 'baidu.string.filterFormat.escapeString',
        p : 'baidu.string.filterFormat'
    }, {
        n : 'baidu.string.filterFormat.toInt',
        p : 'baidu.string.filterFormat'
    }, {
        n : 'baidu.string.format',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.formatColor',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.getByteLength',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.stripTags',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.subByte',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.toCamelCase',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.toHalfWidth',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.trim',
        p : 'baidu.string'
    }, {
        n : 'baidu.string.wbr',
        p : 'baidu.string'
    }, {
        n : 'baidu.swf',
        p : 'baidu'
    }, {
        n : 'baidu.swf.create',
        p : 'baidu.swf'
    }, {
        n : 'baidu.swf.createHTML',
        p : 'baidu.swf'
    }, {
        n : 'baidu.swf.getMovie',
        p : 'baidu.swf'
    }, {
        n : 'baidu.swf.Proxy',
        p : 'baidu.swf'
    }, {
        n : 'baidu.swf.version',
        p : 'baidu.swf'
    }, {
        n : 'baidu.url',
        p : 'baidu'
    }, {
        n : 'baidu.url.escapeSymbol',
        p : 'baidu.url'
    }, {
        n : 'baidu.url.getQueryValue',
        p : 'baidu.url'
    }, {
        n : 'baidu.url.jsonToQuery',
        p : 'baidu.url'
    }, {
        n : 'baidu.url.queryToJson',
        p : 'baidu.url'
    }]
}
