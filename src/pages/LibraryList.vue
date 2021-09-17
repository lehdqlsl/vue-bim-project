<template>
    <div class="container2">
        <div class="inner">
            <h2>게시글 목록 (자유게시판)</h2><!-- 게시글 목록 -->
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

            <div class="list_total">
                <span>전체 <em>7</em>건 1/1</span>

                <a class="btn_m apply"
                   href="http://192.168.50.68:9080/cop/bbs/insertArticleView.do?bbsId=BBSMSTR_000000000051"
                   title="등록 버튼">등록</a>

            </div>

            <div class="tableBox">
                <table class="list" summary="게시글의 내역에 대한 목록을 출력합니다.">
                    <caption>게시글 목록</caption>
                    <colgroup>
                        <col style="width:10%">
                        <col style="width:44%">
                        <col style="width:10%">
                        <col style="width:12%">
                        <col style="width:12%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">등록자</th>
                        <th scope="col">등록일</th>
                        <th scope="col">조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td class="left">


                            <form name="subForm" method="post"
                                  action="http://192.168.50.68:9080/cop/bbs/selectArticleDetail.do">
                                <input name="nttId" type="hidden" value="261">
                                <input name="bbsId" type="hidden" value="BBSMSTR_000000000051">
                                <input name="pageIndex" type="hidden" value="1">
                                <input name="searchWrd" type="hidden" value="">
                                <span class="link">

												<a href="http://192.168.50.68:9080/cop/bbs/selectArticleList.do?bbsId=BBSMSTR_000000000051#none"
                                                   onclick="fn_egov_inquire_Articledetail(this);">
													게시글 제목

												</a>
											</span>
                            </form>


                        </td>


                        <td>psy</td>
                        <td>2020-11-09</td>
                        <td>46</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td class="left">

                            <img src="../assets/img/icon_reply.png" alt="secret">&nbsp;자유게시판1

                        </td>


                        <td>이름</td>
                        <td>2020-11-05</td>
                        <td>18</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td class="left">


                            <form name="subForm" method="post"
                                  action="http://192.168.50.68:9080/cop/bbs/selectArticleDetail.do">
                                <input name="nttId" type="hidden" value="274">
                                <input name="bbsId" type="hidden" value="BBSMSTR_000000000051">
                                <input name="pageIndex" type="hidden" value="1">
                                <input name="searchWrd" type="hidden" value="">
                                <span class="link">


														&nbsp;

														&nbsp;

													<img src="../assets/img/icon_reply.png" alt="secret">

												<a href="http://192.168.50.68:9080/cop/bbs/selectArticleList.do?bbsId=BBSMSTR_000000000051#none"
                                                   onclick="fn_egov_inquire_Articledetail(this);">
													RE: 자유게시판2

												</a>
											</span>
                            </form>


                        </td>


                        <td>이름</td>
                        <td>2020-11-12</td>
                        <td>30</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td class="left">

                            <img src="../assets/img/icon_reply.png" alt="secret">&nbsp;testsetset12321321

                        </td>


                        <td>전진형</td>
                        <td>2020-11-05</td>
                        <td>3</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td class="left">

                            <img src="../assets/img/icon_reply.png" alt="secret">&nbsp;tsetest

                        </td>


                        <td>전진형</td>
                        <td>2020-11-05</td>
                        <td>0</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td class="left">

                            <img src="../assets/img/icon_reply.png" alt="secret">&nbsp;비밀 게시판

                        </td>


                        <td>웹마스터</td>
                        <td>2020-09-04</td>
                        <td>16</td>
                    </tr>

                    <tr>
                        <td>7</td>

                        <td class="left">

                            <img src="../assets/img/icon_reply.png" alt="secret">&nbsp;게시판

                        </td>


                        <td>웹마스터</td>
                        <td>2020-09-04</td>
                        <td>4</td>
                    </tr>


                    </tbody>
                </table>
            </div>

            <div class="paging">
                <ul>
                    <li class="current"><a onclick="return false;">1</a></li>

                </ul>
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
