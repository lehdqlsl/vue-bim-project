<template>
    <div class="container2" style="min-height: 672px;">
        <div class="inner">
            <img src="../assets/img/harbour_bim.png"
                 style="max-width:30%; display:block; margin:0px auto; margin-top:100px; margin-bottom:50px;">
            <div class="list_search">
                <form name="articleForm" action="search_result_main" method="post">
                    <fieldset>
                        <legend>목록검색</legend>
                        <select name="searchCnd" title="검색조건 선택">
                            <option value="0">제목</option>
                            <option value="1">작성자</option>
                            <option value="2">제목+작성자</option>
                        </select>

                        <input class="s_input" name="searchWrd" type="text" size="35" title="검색어 입력" value=""
                               maxlength="155">
                        <input type="submit" class="s_btn" value="조회" title="조회 버튼">
                    </fieldset>

                    <input name="bbsId" type="hidden" value="BBSMSTR_000000000051">
                    <input name="pageIndex" type="hidden" value="">

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "libraryList"
    }
</script>

<style scoped>
    .container2 {
        padding: 30px 15px;
        min-height: calc(100% - 123px);
        position: relative;
    }
</style>
