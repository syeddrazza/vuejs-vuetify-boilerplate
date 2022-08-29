import { mdiAccountOutline, mdiFileDocumentOutline } from '@mdi/js'

export default [
  {
    subheader: 'MENU',
  },

  {
    title: 'Invoice',
    icon: mdiFileDocumentOutline,
    children: [
      {
        title: 'List',
        to: 'invoice-list',
      },
      {
        title: 'Preview',
        to: { name: 'invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Edit',
        to: { name: 'invoice-edit', params: { id: 4987 } },
      },
      {
        title: 'Add',
        to: { name: 'invoice-add' },
      },
    ],
  },
  {
    title: 'User',
    icon: mdiAccountOutline,
    children: [
      {
        title: 'User List',
        to: 'user-list',
      },
      {
        title: 'User View',
        to: { name: 'user-view', params: { id: 21 } },
      },
    ],
  },
]
