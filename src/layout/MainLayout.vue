<template>
    <div>
        <layout-header/>
        <layout-sidebar/>
        <div class="main-panel">
            <top-navbar/>
            <dashboard-content/>
            <content-footer/>
        </div>
    </div>
</template>

<script>
    import TopNavbar from "./TopNavbar";
    import LayoutHeader from "./Header.vue";
    import LayoutSidebar from "./Sidebar.vue"
    import DashboardContent from "./Content";
    import ContentFooter from "./ContentFooter";
    export default {
        name: "MainLayout",
        components: {
            LayoutHeader,
            LayoutSidebar,
            DashboardContent,
            TopNavbar,
            ContentFooter
        }
    }
</script>
<style scoped>
    .main-panel {
        position: relative;
        float: right;
        width: calc(100% - 240px);
        min-height: 100%;
        padding-top: 75px;
        padding-bottom: 50px;
    }
    .solid-navy{
        margin:  15px 10px 15px 10px
    }

</style>
