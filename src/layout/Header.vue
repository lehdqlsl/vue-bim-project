<template>
    <div class="header">
        <div class="header_box">
            <h1>
                <a href="http://192.168.50.68:9080/mgrMain.do" target="_content">
                    <img src="../assets/img/h1_logo.png" alt="eGovframe">
                </a>
            </h1>
            <div style="margin-top:4px;"><strong class="top_title_strong">항만 BIM 생애주기 정보통합 플랫폼 및 BIM Browser 개발</strong>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .top_title_strong {
        color: #000000;
        font-size: 18px;
        font-weight: bold;
    }
    .header {
        z-index: 9999;
        position: fixed;
        width: 100%;
        height: 75px;
        border-top: 4px solid #0c4ca4;
        border-bottom: 1px solid #d7d7d7;
        background-color: white;
    }
</style>
