import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: 'Dashboard', icon: 'dashboard' }
  //   }]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },


  {
    path: '/',
    component: Layout,
    redirect: '/homepage',
    children: [{
      path: 'homepage',
      name: 'homepage',
      component: () => import('@/views/homepage/index'),
      meta: { title: '主页', icon: 'dashboard' }
    }]
  },

  {
    path: '/broadcast',
    component: Layout,
    name: 'broadcast',
    meta: { title: '广播报道', icon: 'el-icon-position' },
    children: [
      {
        path: 'campus',
        name: 'campus',
        component: () => import('@/views/broadcast/campus'),
        meta: { title: '校内热点', icon: 'el-icon-thumb' }
      },
      {
        path: 'epidemic',
        name: 'epidemic',
        component: () => import('@/views/broadcast/epidemic'),
        meta: { title: '疫情防控', icon: 'tree' }
      }
    ]
  },


  {
    path: '/activity',
    component: Layout,
    // redirect: '/activity/competition',
    name: 'activity',
    meta: { title: '活动竞赛', icon: 'el-icon-coordinate' },
    children: [
      {
        path: 'competition',
        name: 'competition',
        component: () => import('@/views/activity/comprehensiveTest'),
        meta: { title: '综测活动', icon: 'el-icon-truck' }
      },
      {
        path: 'comprehensiveTest',
        name: 'comprehensiveTest',
        component: () => import('@/views/activity/competition'),
        meta: { title: '竞赛专区', icon: 'el-icon-medal-1' }
      }
    ]
  },

  {
    path: '/examination',
    component: Layout,
    // redirect: '/activity/competition',
    name: 'examination',
    meta: { title: '考试考证', icon: 'el-icon-trophy-1' },
    children: [
      {
        path: 'theEndOfTermRaiders',
        name: 'theEndOfTermRaiders',
        component: () => import('@/views/examination/theEndOfTermRaiders'),
        meta: { title: '期末攻略', icon: 'el-icon-document-checked' }
      },
      {
        path: 'nationalCertificate',
        name: 'nationalCertificate',
        component: () => import('@/views/examination/nationalCertificate'),
        meta: { title: '国家证书', icon: 'el-icon-reading' }
      },
      // {
      //   path: 'nationalExamPreparation',
      //   name: 'nationalExamPreparation',
      //   component: () => import('@/views/examination/nationalExamPreparation'),
      //   meta: { title: '国考备战', icon: 'el-icon-data-analysis' }
      // }
    ]
  },

  {
    path: '/resell',
    component: Layout,
    // redirect: '/activity/competition',
    name: 'resell',
    alwaysShow: true,
    meta: { title: '二手买卖', icon: 'el-icon-s-goods' },
    children: [
      {
        path: 'faceToFaceTransaction',
        name: 'faceToFaceTransaction',
        component: () => import('@/views/resell/faceToFaceTransaction'),
        meta: { title: '当面交易', icon: 'el-icon-shopping-cart-full' }
      }
    ]
  },

  {
    path: '/qAndAForum',
    component: Layout,
    // redirect: '/activity/competition',
    // alwaysShow: true,
    name: 'qAndAForum',
    meta: { title: '答疑论坛', icon: 'el-icon-connection' },
    children: [
      {
        path: 'talkOfExperience',
        name: 'talkOfExperience',
        component: () => import('@/views/qAndAForum/talkOfExperience'),
        meta: { title: '经验之谈', icon: 'el-icon-eleme' }
      },
      {
        path: 'youAskIAnswer',
        name: 'youAskIAnswer',
        component: () => import('@/views/qAndAForum/youAskIAnswer'),
        meta: { title: '你问我答', icon: 'el-icon-chat-dot-round' }
      }
    ]
  },
  {
    path: '/systemSetting',
    component: Layout,
    // redirect: '/activity/competition',
    // alwaysShow: true,
    name: 'systemSetting',
    meta: { title: '系统设置', icon: 'el-icon-setting' },
    alwaysShow: true,
    children: [
      {
        path: 'personalCenter',
        name: 'personalCenter',
        component: () => import('@/views/systemSetting/personalCenter'),
        meta: { title: '个人中心', icon: 'el-icon-user' }

      },
      // {
      //   path: 'quantitativeSubscription',
      //   name: 'quantitativeSubscription',
      //   component: () => import('@/views/systemSetting/quantitativeSubscription'),
      //   meta: { title: '量化订阅', icon: 'el-icon-s-order' }
      // }
    ]
  },


  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
