<template>
    <div class="container2">
        <div class="inner">
            <h1 style="text-align: center">나의 요청 목록</h1>
            <table id="hor-minimalist-a" summary="Employee Pay Sheet" style="text-align:center;width: 100%;">
                <thead>
                <tr>
                    <th scope="col" style="text-align:center;">요청유형</th>
                    <th scope="col" style="text-align:center;">라이브러리명</th>
                    <th scope="col" style="text-align:center;">작성일</th>
                    <th scope="col" style="text-align:center;">검토 결과</th>
                </tr>
                </thead>

                <tbody>
                <!-- 행 -->
                <tr v-for="item in items" :key="item.id">
                    <td style="text-align:center;">{{ item.type }}</td>
                    <td style="text-align:center;">{{ item.library }}</td>
                    <td style="text-align:center;">{{ item.date }}</td>
                    <td style="text-align:center;">{{ item.result }}</td>
                </tr>

                </tbody>
            </table>
        </div>
        <div class="list_search">
            <form name="articleForm" action="http://192.168.50.68:9080/cop/bbs/selectArticleList.do" method="post"
                  onsubmit="fn_egov_search_article(); return false;">
                <fieldset>
                    <legend>목록검색</legend>
                    <select name="searchCnd" title="검색조건 선택">
                        <option value="0">제목</option><!-- 글 제목  -->
                        <option value="1">내용</option><!-- 글 내용 -->
                        <option value="2">등록자</option><!-- 작성자 -->
                    </select>
                    <input class="s_input" name="searchWrd" type="text" size="35" title="검색어 입력" value=""
                           maxlength="155">
                    <input type="submit" class="s_btn" value="조회" title="조회 버튼"><!-- 조회 -->
                </fieldset>
                <input name="bbsId" type="hidden" value="BBSMSTR_000000000051">
                <input name="pageIndex" type="hidden" value="">
            </form>
        </div>
    </div>


</template>

<script>
    export default {
        name: "libraryList",
        data() {
            return {
                items: [{
                    id: 1,
                    library: "Caisson_Type01_SIPA",
                    type: "신규",
                    result: "승인",
                    date: "2021-10-13"
                },
                {
                    id: 2,
                    library: "Caisson_Type01_SIPA",
                    type: "수정",
                    result: "거절",
                    date: "2021-10-14"
                }]
            }
        }
    }
</script>

<style scoped>
    .container2 {
        padding: 30px 15px;
        min-height: calc(100% - 123px);
        position: relative;
    }
</style>
