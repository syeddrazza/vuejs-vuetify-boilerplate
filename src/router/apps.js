const apps = [
  //
  //* ——— Invoice ——————————————————
  //

  {
    path: '/invoice/list',
    name: 'invoice-list',
    component: () => import('@/views/invoice/invoice-list/InvoiceList.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/invoice/preview/:id',
    name: 'invoice-preview',
    component: () => import('@/views/invoice/invoice-preview/InvoicePreview.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/invoice/add/',
    name: 'invoice-add',
    component: () => import('@/views/invoice/invoice-add/InvoiceAdd.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/invoice/edit/:id',
    name: 'invoice-edit',
    component: () => import('@/views/invoice/invoice-edit/InvoiceEdit.vue'),
    meta: {
      layout: 'content',
    },
  },

  //
  //* ——— User ——————————————————
  //

  {
    path: '/user/list',
    name: 'user-list',
    component: () => import('@/views/user/user-list/UserList.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/user/view/:id',
    name: 'user-view',
    component: () => import('@/views/user/user-view/UserView.vue'),
    meta: {
      layout: 'content',
    },
  },

  //
  //* ——— E-Apply ——————————————————
  //
  {
    path: '/eapply/online',
    name: 'application-add',
    component: () => import('@/views/eapply/application-add/ApplicationAdd.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default apps
