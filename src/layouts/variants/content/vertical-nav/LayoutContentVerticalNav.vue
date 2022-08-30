<template>
  <layout-content-vertical-nav :nav-menu-items="navMenuItems">
    <slot></slot>

    <!-- Slot: Navbar { isVerticalNavMenuActive, toggleVerticalNavMenuActive }-->
    <template #navbar="">
      <div
        class="navbar-content-container"
        :class="{'expanded-search': shallShowFullSearch}"
      >
        <!-- Left Content: Search -->
        <div class="d-flex align-center">
          <router-link
            to="/"
            class="d-flex align-center text-decoration-none"
          >
            <v-img
              :src="appLogo"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              eager
              class="app-logo me-3"
            ></v-img>
            <h2
              class="app-title text--primary"
            >
              {{ appName }}
            </h2>
          </router-link>
          <!-- <v-icon
            v-if="$vuetify.breakpoint.mdAndDown"
            class="me-3"
            @click="toggleVerticalNavMenuActive"
          >
            {{ icons.mdiMenu }}
          </v-icon>
          <app-bar-search
            :shall-show-full-search.sync="shallShowFullSearch"
            :data="appBarSearchData"
            :filter="searchFilterFunc"
            :search-query.sync="appBarSearchQuery"
            @update:shallShowFullSearch="handleShallShowFullSearchUpdate(isVerticalNavMenuActive, toggleVerticalNavMenuActive)"
          ></app-bar-search> -->
        </div>

        <!-- Right Content: I18n, Light/Dark, Notification & User Dropdown -->
        <div class="d-flex align-center right-row">
          <app-bar-i18n></app-bar-i18n>
          <app-bar-theme-switcher class="mx-4"></app-bar-theme-switcher>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </template>

    <!-- Slot: Footer -->
    <template #footer>
      <div class="d-flex justify-space-between">
        <span>COPYRIGHT &copy; {{ new Date().getFullYear() }} <a
          :href="footerLink"
          target="_blank"
          class="text-decoration-none"
        >{{ footerTitle }}</a><span class="d-none d-md-inline">, All rights Reserved</span></span>
      </div>
    </template>

    <template #v-app-content>
    </template>
  </layout-content-vertical-nav>
</template>

<script>
// App Bar Components
import AppBarI18n from '@core/layouts/components/app-bar/AppBarI18n.vue'
import AppBarSearch from '@core/layouts/components/app-bar/AppBarSearch.vue'
import AppBarThemeSwitcher from '@core/layouts/components/app-bar/AppBarThemeSwitcher.vue'
import AppBarUserMenu from '@core/layouts/components/app-bar/AppBarUserMenu.vue'
import { mdiHeartOutline, mdiMenu } from '@mdi/js'

import { getVuetify } from '@core/utils'

// Search Data
import appBarSearchData from '@/assets/app-bar-search-data'
import themeConfig from '@themeConfig'
import { ref, watch } from '@vue/composition-api'

import LayoutContentVerticalNav from '@/@core/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue'
import navMenuItems from '@/navigation/vertical'

export default {
  components: {
    LayoutContentVerticalNav,

    // App Bar Components
    AppBarSearch,
    AppBarI18n,
    AppBarThemeSwitcher,
    AppBarUserMenu,
  },
  setup() {
    const $vuetify = getVuetify()

    // Search
    const appBarSearchQuery = ref('')
    const shallShowFullSearch = ref(false)
    const maxItemsInGroup = 5
    const totalItemsInGroup = ref({
      pages: 0,
      files: 0,
      contacts: 0,
    })
    watch(appBarSearchQuery, () => {
      totalItemsInGroup.value = {
        pages: 0,
        files: 0,
        contacts: 0,
      }
    })
    const searchFilterFunc = (item, queryText, itemText) => {
      if (item.header || item.divider) return true

      const itemGroup = (() => {
        if (item.to !== undefined) return 'pages'
        if (item.size !== undefined) return 'files'
        if (item.email !== undefined) return 'contacts'

        return null
      })()

      const isMatched = itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1

      if (isMatched) {
        if (itemGroup === 'pages') totalItemsInGroup.value.pages += 1
        else if (itemGroup === 'files') totalItemsInGroup.value.files += 1
        else if (itemGroup === 'contacts') totalItemsInGroup.value.contacts += 1
      }

      return appBarSearchQuery.value && isMatched && totalItemsInGroup.value[itemGroup] <= maxItemsInGroup
    }

    // ? Handles case where in <lg vertical nav menu is open and search is triggered using hotkey then searchbox is hidden behind vertical nav menu overlaty
    const handleShallShowFullSearchUpdate = (isVerticalNavMenuActive, toggleVerticalNavMenuActive) => {
      if ($vuetify.breakpoint.mdAndDown && isVerticalNavMenuActive) {
        toggleVerticalNavMenuActive()
      }
    }

    return {
      navMenuItems,
      handleShallShowFullSearchUpdate,

      // Search
      appBarSearchQuery,
      shallShowFullSearch,
      appBarSearchData,
      searchFilterFunc,

      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,
      footerTitle: themeConfig.footer.title,
      footerLink: themeConfig.footer.link,
      icons: {
        mdiMenu,
        mdiHeartOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar-content-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
}

// ? Handle bg of autocomplete for blured appBar
.v-app-bar.bg-blur {
  .expanded-search {
    ::v-deep .app-bar-autocomplete-box div[role='combobox'] {
      background-color: transparent;
    }

    > .d-flex > button.v-icon {
      display: none;
    }

    // ===

    & > .right-row {
      visibility: hidden;
      opacity: 0;
    }

    ::v-deep .app-bar-search-toggler {
      visibility: hidden;
    }
  }
}
</style>
