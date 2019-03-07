# iview-admin-plus
[![npm](https://img.shields.io/npm/v/iview-admin-plus.svg)]()

> iview-admin-plus是一款基于iview-admin打造的, 更好看的后台主题布局.

# install 安装
> 依赖iview-admin,首先安装[iview-admin](https://github.com/iview/iview-admin)
完成后再执行

```
    npm install iview-admin-plus
```

# use 使用
1. 在main.js中将 `import './index.less'` 替换为 `import 'iview-admin-plus/src/index.less'`
2. 在router.js中将 `import Main from '@/components/main'` 替换为 `import Main from 'iview-admin-plus/src/components/main'`
3. 在store/index.js 引入theme, 最终如下

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import theme from 'iview-admin-plus/src/store/theme'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    theme
  }
})

```
# 安装完成

> 运行

```
    npm run dev
```


![image](https://s2.ax1x.com/2019/03/07/kxpf2V.gif)

