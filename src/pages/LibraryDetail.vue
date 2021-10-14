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

                <!-- 엑셀 뷰 -->
                <!--                <el-table-->
                <!--                    :data="tableData"-->
                <!--                    :span-method="objectSpanMethod"-->
                <!--                    border-->
                <!--                    style="width: 100%; margin-top: 20px">-->
                <!--                    <el-table-column-->
                <!--                        align="center"-->
                <!--                        label="구분"-->
                <!--                        width="180">-->
                <!--                        <el-table-column-->
                <!--                            align="center"-->
                <!--                            prop="id"-->
                <!--                            label="부문"-->
                <!--                            width="180">-->
                <!--                        </el-table-column>-->
                <!--                        <el-table-column-->
                <!--                            align="center"-->
                <!--                            prop="name"-->
                <!--                            label="속성"-->
                <!--                            width="180">-->
                <!--                        </el-table-column>-->
                <!--                    </el-table-column>-->

                <!--                    <el-table-column-->
                <!--                        align="center"-->
                <!--                        prop="row"-->
                <!--                        label="항목">-->
                <!--                    </el-table-column>-->

                <!--                    <el-table-column-->
                <!--                        align="center"-->
                <!--                        label="Level 1">-->
                <!--                        <el-table-column label="구분"-->
                <!--                                         prop="amount1"-->
                <!--                                         align="center">-->
                <!--                        </el-table-column>-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column-->
                <!--                        align="center"-->
                <!--                        label="Level 2">-->
                <!--                        <el-table-column-->
                <!--                            label="분류"-->
                <!--                            prop="amount2"-->
                <!--                            align="center">-->
                <!--                        </el-table-column>-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column-->
                <!--                        align="center"-->
                <!--                        label="Level 3">-->
                <!--                        <el-table-column-->
                <!--                            label="속성항목(KOR)"-->
                <!--                            prop="amount3"-->
                <!--                            align="center">-->
                <!--                        </el-table-column>-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column-->
                <!--                        align="center"-->
                <!--                        prop="value"-->
                <!--                        label="값">-->
                <!--                    </el-table-column>-->
                <!--                </el-table>-->
                <table width="1100px"
                       style="vertical-align:middle; text-align:center; font-size:large; border-collapse:collapse; border:2px solid #444444; word-wrap:break-word">
                    <colgroup>
                        <col style="width:15%">
                        <col style="width:15%">
                        <col style="width:14%">
                        <col style="width:14%">
                        <col style="width:14%">
                        <col style="width:14%">
                        <col style="width:14%">
                    </colgroup>
                    <tbody>
                    <tr style="border-bottom: 2px solid #444444;">
                        <td colspan="7" style="font-weight:900; font-size:x-large; padding:8px;">항만 BIM 라이브러리 명세서
                            양식(안)
                        </td>
                    </tr>
                    <tr style="border-bottom: 2px solid #444444;">
                        <td colspan="3"
                            style="border-right: 1px solid #444444; font-weight:bold; background-color: #5B9BD5; color:white;">
                            라이브러리 종류
                        </td>
                        <td colspan="4" style="background-color: #F2F2F2;">(DB에서 직접 가져와야 함) BIM 라이브러리, 단순 객체</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444444; ">
                        <td colspan="4" style="font-weight:bold; border-right: 1px solid #444444;">3D 이미지</td>
                        <td colspan="3" style="font-weight:bold;">2D 이미지</td>
                    </tr>


                    <tr style="border-bottom: 2px solid #444444;">
                        <td height="200" colspan="4" style="border-right: 1px solid #444444;"><img src=""></td>
                        <td height="200" colspan="3">이미지2</td>
                    </tr>
                    <tr>
                        <td rowspan="2" colspan="2"
                            style="border-right: 1px solid #444444; border-bottom: 2px solid #444444; font-weight:bold; background-color: #C6EFCE; color:#006100;">
                            <b>구분</b></td>
                        <td rowspan="2"
                            style="border-right: 1px solid #444444; border-bottom: 2px solid #444444; font-weight:bold; background-color: #C6EFCE; color:#006100;">
                            <b>항목</b></td>
                        <td rowspan="1"
                            style="border-right: 1px solid #444444; border-bottom: 1px solid #444444; font-weight:bold; background-color: #C6EFCE; color:#006100;">
                            <b>Level 1.</b></td>
                        <td
                            style="border-right: 1px solid #444444; border-bottom: 1px solid #444444; font-weight:bold; background-color: #C6EFCE; color:#006100;">
                            <b>Level 2.</b></td>
                        <td
                            style="border-right: 1px solid #444444; border-bottom: 1px solid #444444; font-weight:bold; background-color: #C6EFCE; color:#006100;">
                            <b>Level 3.</b></td>
                        <td rowspan="2"
                            style="border-bottom: 2px solid #444444; font-weight:bold; background-color: #FFFFCC; color:#006100;">
                            <b>값(Value)</b></td>
                    </tr>
                    <tr style="border-bottom: 2px solid #444444;">
                        <th scope="col"
                            style="border-right: 1px solid #444444; font-weight:bold; background-color: #FFFFCC; color:#006100;">
                            구분
                        </th>
                        <th scope="col"
                            style="border-right: 1px solid #444444; font-weight:bold; background-color: #FFFFCC; color:#006100;">
                            분류
                        </th>
                        <th scope="col"
                            style="border-right: 1px solid #444444; font-weight:bold; background-color: #FFFFCC; color:#006100;">
                            속성항목(KOR)
                        </th>
                    </tr>
                    <tr>
                        <td rowspan="38"
                            style="border-right: 2px solid #444444; font-weight:bold; border-bottom: 2px solid #444444;">
                            BIM<br>
                            라이브러리<br>
                            부문
                        </td>
                        <td rowspan="21" style="border-right: 2px solid #444444; border-bottom: 2px solid #444444;">
                            <b>A.</b><br>
                            항만 BIM 라이브러리 속성<br>
                            정보체계 범위<br>
                            (필수 항목)
                        </td>
                    </tr>

                    <tr v-for="item in items" :key="item.id" style="border-bottom: 1px solid #444444;">
                        <td scope="row" style="border-right: 1px solid #444444; ">{{ item.id }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level1 }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level2 }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level3 }}</td>
                        <td></td>
                    </tr>

                    <tr style="border-bottom: 2px solid #444444;">
                        <td rowspan="11" style="border-right: 2px solid #444444; border-bottom: 2px solid #444444;">
                            <b>B.</b><br>
                            항만 BIM 라이브러리 속성<br>
                            정보체계 범위<br>
                            (추가 항목)
                        </td>
                    </tr>


                    <tr v-for="item in items2" :key="item.id" style="border-bottom: 1px solid #444444;">
                        <td scope="row" style="border-right: 1px solid #444444; ">{{ item.id }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level1 }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level2 }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level3 }}</td>
                        <td></td>
                    </tr>

                    <tr style="border-bottom: 2px solid #444444;">
                        <td rowspan="6" style="border-right: 2px solid #444444; border-bottom: 2px solid #444444;">
                            <b>C.</b><br>
                            사용자 정의<br>
                            속성 항목
                        </td>
                    </tr>
                    <tr v-for="item in items3" :key="item.id" style="border-bottom: 1px solid #444444;">
                        <td scope="row" style="border-right: 1px solid #444444; ">{{ item.id }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level1 }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level2 }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level3 }}</td>
                        <td></td>
                    </tr>
                    <tr style="background-color: #D9D9D9; border-bottom: 2px solid #444444;">
                        <td rowspan="10" style="border-right: 2px solid #444444; font-weight:bold;">
                            기술콘텐츠<br>
                            부문
                        </td>
                        <td rowspan="10" style="border-right: 2px solid #444444;">
                            <b>D.</b><br>
                            기술콘텐츠<br>
                            속성항목
                        </td>
                    </tr>
                    <tr v-for="item in items4" :key="item.id" style="border-bottom: 1px solid #444444;">
                        <td scope="row" style="border-right: 1px solid #444444; ">{{ item.id }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level1 }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level2 }}</td>
                        <td style="border-right: 1px solid #444444; ">{{ item.level3 }}</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                <!-- 엑셀 뷰 -->

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
        name: "libraryList",
        data() {
            return {
                items: [{
                    id: 1,
                    level1: '라이브러리 공통',
                    level2: '라이브러리 정보',
                    level3: '라이브러리 규격',
                    value: '50 Ton'
                }, {
                    id: 2,
                    level1: '라이브러리 공통',
                    level2: '라이브러리 정보',
                    level3: '라이브러리 규격',
                    value: '50 Ton'
                },
                    {
                        id: 3,
                        level1: '라이브러리 공통',
                        level2: '라이브러리 정보',
                        level3: '라이브러리 규격',
                        value: '50 Ton'
                    }, {
                        id: 4,
                        level1: '라이브러리 공통',
                        level2: '라이브러리 정보',
                        level3: '라이브러리 규격',
                        value: '50 Ton'
                    },
                    {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10},
                    {id: 11}, {id: 12}, {id: 13}, {id: 14}, {id: 15}, {id: 16}, {id: 17}, {id: 18}, {id: 19}, {id: 20},
                ],
                items2: [{
                    id: 1,
                    level1: '라이브러리 공통',
                    level2: '라이브러리 정보',
                    level3: '라이브러리 규격',
                    value: '50 Ton'
                }, {
                    id: 2,
                    level1: '라이브러리 공통',
                    level2: '라이브러리 정보',
                    level3: '라이브러리 규격',
                    value: '50 Ton'
                },
                    {
                        id: 3,
                        level1: '라이브러리 공통',
                        level2: '라이브러리 정보',
                        level3: '라이브러리 규격',
                        value: '50 Ton'
                    }, {
                        id: 4,
                        level1: '라이브러리 공통',
                        level2: '라이브러리 정보',
                        level3: '라이브러리 규격',
                        value: '50 Ton'
                    },
                    {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}
                ],
                items3: [{
                    id: 1,
                    level1: '라이브러리 공통',
                    level2: '라이브러리 정보',
                    level3: '라이브러리 규격',
                    value: '50 Ton'
                }, {
                    id: 2,
                    level1: '라이브러리 공통',
                    level2: '라이브러리 정보',
                    level3: '라이브러리 규격',
                    value: '50 Ton'
                },
                    {
                        id: 3,
                        level1: '라이브러리 공통',
                        level2: '라이브러리 정보',
                        level3: '라이브러리 규격',
                        value: '50 Ton'
                    }, {
                        id: 4,
                        level1: '라이브러리 공통',
                        level2: '라이브러리 정보',
                        level3: '라이브러리 규격',
                        value: '50 Ton'
                    },
                    {id: 5}
                ],
                items4: [{
                    id: 1,
                    level1: '라이브러리 공통',
                    level2: '라이브러리 정보',
                    level3: '라이브러리 규격',
                    value: '50 Ton'
                }, {
                    id: 2,
                    level1: '라이브러리 공통',
                    level2: '라이브러리 정보',
                    level3: '라이브러리 규격',
                    value: '50 Ton'
                },
                    {
                        id: 3,
                        level1: '라이브러리 공통',
                        level2: '라이브러리 정보',
                        level3: '라이브러리 규격',
                        value: '50 Ton'
                    }, {
                        id: 4,
                        level1: '라이브러리 공통',
                        level2: '라이브러리 정보',
                        level3: '라이브러리 규격',
                        value: '50 Ton'
                    },
                    {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}
                ]
            };
        },
        methods: {
            arraySpanMethod({row, column, rowIndex, columnIndex}) {
                if (rowIndex % 2 === 0) {
                    if (columnIndex === 0) {
                        return [1, 2];
                    } else if (columnIndex === 1) {
                        return [0, 0];
                    }
                }
            },
            objectSpanMethod({row, column, rowIndex, columnIndex}) {
                console.log("columnIndex:" + columnIndex)
                console.log("rowIndex:" + rowIndex)
                console.log(row)
                console.log(column)
                if (columnIndex === 0) {
                    if (rowIndex === 0) {
                        return {
                            rowspan: 30,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                } else if (columnIndex === 1) {
                    if (rowIndex === 0) {
                        return {
                            rowspan: 21,
                            colspan: 1
                        };
                    } else if (rowIndex === 21) {
                        return {
                            rowspan: 10,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }


                }
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
    td {
        font-size: 15px;
    }
</style>
