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
    @import "./assets/css/style.css";
    @import '~element-ui/lib/theme-chalk/index.css';

    .router-link-active{
        background: #444444 !important;
        color: white !important;
    }
    .el-select>.el-input {

    }
    .el-input__icon {
        line-height: 0px;
    }

    li.el-select-dropdown__item span{
        font-weight: bold;
    }

    .el-input input::placeholder{
        color: #727070;
    }

    .el-form-item__label{
        font-size: 16px;
    }

    .el-form-item__error{
        font-size: 14px;
    }

    .el-form-item {
        margin-bottom: 20px;
    }

    .el-checkbox__label{
        font-size: 16px;
    }
</style>
