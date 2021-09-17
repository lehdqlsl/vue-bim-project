<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
    @import "./assets/css/main.css";
    @import "./assets/css/filter.css";
    @import "./assets/css/default.css";
    @import "./assets/css/combo.css";
    @import "./assets/css/form.css";
    @import "./assets/css/toggle.css";
    @import '~element-ui/lib/theme-chalk/index.css';
    .router-link-active{
        background: #444444 !important;
        color: white !important;
    }
    .el-select>.el-input {
        margin-top:10px;
        display: block;
        padding-left: 8px;
        padding-right: 8px;
    }
    .el-input__icon {
        line-height: 0px;
    }

    li.el-select-dropdown__item span{
        font-weight: bold;
    }

    .el-input input::placeholder{
        color: #444444;
    }
</style>
