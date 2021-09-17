<template>
    <div class="container2">
        <div class="inner">
            <div class="project_area">
                <h3>게시글 상세조회</h3>

                <div class="tableBox">

                    <table class="form" summary="게시글의 내역에 대한 상세조회 내역을 출력합니다.">
                        <caption>게시글 상세조회</caption>
                        <colgroup>
                            <col style="width:15%">
                            <col style="width:35%">
                            <col style="width:15%">
                            <col style="width:35%">
                        </colgroup>
                        <tbody>
                        <tr>
                            <th scope="row">제목</th>
                            <td colspan="3">
                                게시글 제목
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">등록자</th>
                            <td>
                                psy
                            </td>
                            <th scope="row">조회수</th>
                            <td>
                                47
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">등록일</th>
                            <td colspan="3">
                                2020-11-09
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">내용</th>
                            <td colspan="3" class="h300">
                                <p>ㅁㅁㅁㅁㅁㅁㅁ</p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">첨부파일</th>
                            <td colspan="3">

                            </td>
                        </tr>
                        </tbody>
                    </table>


                </div>

                <div class="btnArea">

                    <form name="articleForm" action="http://192.168.50.68:9080/cop/bbs/updateArticleView.do"
                          method="post" style="float:right;">
                        <input type="submit" class="btn_l on" value="수정" title="수정 버튼"><!-- 수정 -->
                        <input type="hidden" name="parnts" value="0">
                        <input type="hidden" name="sortOrdr" value="261">
                        <input type="hidden" name="replyLc" value="0">
                        <input type="hidden" name="nttSj" value="게시글 제목">
                        <input type="hidden" name="nttId" value="261">
                        <input type="hidden" name="bbsId" value="BBSMSTR_000000000051">
                    </form>
                    <form name="formDelete" action="http://192.168.50.68:9080/cop/bbs/deleteArticle.do" method="post"
                          style="float:right;">
                        <input type="submit" class="btn_l cancel" value="삭제" title="삭제 버튼"
                               onclick="fn_egov_delete_article(this.form); return false;"><!-- 삭제 -->
                        <input type="hidden" name="nttId" value="261">
                        <input type="hidden" name="bbsId" value="BBSMSTR_000000000051">
                    </form>


                    <form name="formReply" action="http://192.168.50.68:9080/cop/bbs/replyArticleView.do" method="post"
                          style="float:right;">
                        <input type="submit" class="btn_l on" value="답글"><!-- 답글 -->
                        <input type="hidden" name="nttId" value="261">
                        <input type="hidden" name="bbsId" value="BBSMSTR_000000000051">
                    </form>

                    <form name="formList" action="http://192.168.50.68:9080/cop/bbs/selectArticleList.do" method="post"
                          style="float:right;">
                        <input type="submit" class="btn_l on" value="목록"><!-- 목록 -->
                        <input type="hidden" name="searchWrd" value="">
                        <input type="hidden" name="bbsId" value="BBSMSTR_000000000051">
                    </form>

                </div>

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
