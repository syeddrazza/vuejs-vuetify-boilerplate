import { mdiAccountOutline, mdiEmailOutline, mdiFileDocumentOutline, mdiFileMusicOutline } from '@mdi/js'

/* eslint-disable */
// prettier-ignore
export default [
  { header: 'Pages' },

  { title: 'Invoice List', to: { name: 'invoice-list' }, icon: mdiFileDocumentOutline },
  {
    title: 'Invoice Preview',
    to: { name: 'invoice-preview', params: { id: 4987 } },
    icon: mdiFileDocumentOutline,
  },
  { title: 'Invoice Edit', to: { name: 'invoice-edit', params: { id: 4987 } }, icon: mdiFileDocumentOutline },
  { title: 'Invoice Add', to: { name: 'invoice-add' }, icon: mdiFileDocumentOutline },

  { title: 'User List', to: { name: 'user-list' }, icon: mdiAccountOutline },
  { title: 'User View', to: { name: 'user-view', params: { id: 21 } }, icon: mdiAccountOutline },
  { title: 'Email', to: { name: 'email' }, icon: mdiEmailOutline },


  // Files
  { header: 'Files' },
  { title: "Joe's CV", by: 'Stacy Watson', icon: mdiFileMusicOutline, size: '1.7 mb' },
  { title: 'Passport Image', by: 'Ben Sinitiere', icon: mdiFileMusicOutline, size: '52 kb' },
  { title: 'Questions', by: 'Charleen Patti', icon: mdiFileMusicOutline, size: '1.5 gb' },
  { title: 'Parenting Guide', by: 'Doyle Blatteau', icon: mdiFileMusicOutline, size: '2.3 mb' },
  { title: 'Class Notes', by: 'Gwen Greenlow', icon: mdiFileMusicOutline, size: ' 30 kb' },
  { title: 'Class Attendance', by: 'Tom Alred', icon: mdiFileMusicOutline, size: '52 mb' },
  { title: 'Company Salary', by: 'Nellie Dezan', icon: mdiFileMusicOutline, size: '29 mb' },
  { title: 'Company Logo', by: 'Steve Sheldon', icon: mdiFileMusicOutline, size: '1.3 mb' },
  { title: 'Crime Rates', by: 'Sherlock Holmes', icon: mdiFileMusicOutline, size: '37 kb' },
  { title: 'Ulysses', by: 'Theresia Wrenne', icon: mdiFileMusicOutline, size: '7.2 mb' },
  { title: 'War and Peace', by: 'Goldie Highnote', icon: mdiFileMusicOutline, size: '10.5 mb' },
  { title: 'Vedas', by: 'Ajay Patel', icon: mdiFileMusicOutline, size: '8.3 mb' },
  { title: 'The Trial', by: 'Sirena Linkert', icon: mdiFileMusicOutline, size: '1.5 mb' },

  // Contacts
  { header: 'Contacts' },
  { avatar: require('@/assets/images/avatars/6.png'), title: 'Rena Brant', email: 'nephrod@preany.co.uk', time: '21/05/2019' },
  { avatar: require('@/assets/images/avatars/4.png'), title: 'Mariano Packard', email: 'seek@sparaxis.org', time: '14/01/2018' },
  { avatar: require('@/assets/images/avatars/3.png'), title: 'Risa Montufar', email: 'vagary@unblist.org', time: '10/08/2019' },
  { avatar: require('@/assets/images/avatars/7.png'), title: 'Maragaret Cimo', email: 'designed@insanely.net', time: '01/12/2019' },
  { avatar: require('@/assets/images/avatars/8.png'), title: 'Jona Prattis', email: 'unwieldable@unblist.org', time: '21/05/2019' },
  { avatar: require('@/assets/images/avatars/5.png'), title: 'Edmond Chicon', email: 'museist@anaphyte.co.uk', time: '15/11/2019' },
  { avatar: require('@/assets/images/avatars/6.png'), title: 'Abbey Darden', email: 'astema@defectively.co.uk', time: '07/05/2019' },
  { avatar: require('@/assets/images/avatars/1.png'), title: 'Seema Moallankamp', email: 'fernando@storkish.co.uk', time: '13/08/2017' },
  { avatar: require('@/assets/images/avatars/3.png'), title: 'Charleen Warmington', email: 'furphy@cannibal.net', time: '11/08/1891' },
  { avatar: require('@/assets/images/avatars/5.png'), title: 'Geri Linch', email: 'insignia@markab.org', time: '18/01/2015' },
  { avatar: require('@/assets/images/avatars/2.png'), title: 'Shellie Muster', email: 'maxillary@equalize.co.uk', time: '26/07/2019' },
  { avatar: require('@/assets/images/avatars/7.png'), title: 'Jesenia Vanbramer', email: 'hypotony@phonetist.net', time: '12/09/2017' },
  { avatar: require('@/assets/images/avatars/1.png'), title: 'Mardell Channey', email: 'peseta@myrica.com', time: '11/11/2019' },
]
