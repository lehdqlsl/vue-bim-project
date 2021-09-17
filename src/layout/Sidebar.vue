<template>
    <div style="position:fixed;top:75px;width:100%;">
        <div id="lnb">
            <div class="lnbTop"><span>HARBOUR<b>BIM</b></span></div>
            <ul class="2depth">
                <!-- <li><a href="/boffice/cde/cdeProjectList.do" target="_content" class="link"> 1. CDE 등록</a></li> -->
                <li><router-link :to="{path:'/main/list'}">목록</router-link></li>
                <li><router-link :to="{path:'/main/modify'}">수정</router-link></li>
                <li><router-link :to="{path:'/main/detail'}">상세</router-link></li>
                <li class="solid-navy">로그아웃</li>
                <li class="solid-navy">신규등록</li>
                <li class="solid-navy">나의 요청 목록</li>
                <li class="solid-navy">나의 메시지함</li>

                <h1 style="font-family:Arial; margin-left: 15px; font-size:20px; color:#000000; margin-top: 40px; margin-bottom: 40px;">| 검색 필터</h1>

                <div id="container1">
                    <div class="solid-navy">제작정보</div>

                    <!-- 제작 정보 EditBox 코드 시작 .20210526 (form.css)-->
                    <section class="container">
                        <div class="content">
                            <input type="email" name="email" id="email" class="inpt" required="required" placeholder="제작업체">
                            <label for="email">Manufacturer</label>
                        </div>
                    </section>


                    <section class="container">
                        <div class="content">
                            <input type="email" name="email" id="email" class="inpt" required="required" placeholder="제작자">
                            <label for="email">Producer</label>
                        </div>
                    </section>
                    <!-- 제작 정보 EditBox 코드 끝 .20210526 -->

                    <div class="solid-navy" style="margin-bottom: 0px;">객체분류코드</div>

                    <!-- 객체분류코드 Radio Button 코드 시작 .20210524 (combo.css)-->
                    <div style="color: #444444">
                    <tr>
                        <td>
                            <el-select v-model="value1" placeholder="건설시설">
                                <el-option
                                    style="margin: 10px"
                                    v-for="item in options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                        <td>
                            <el-select v-model="value2" placeholder="시설요소">
                                <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <el-select v-model="value3" placeholder="단위시설">
                                <el-option
                                    style="margin: 10px"
                                    v-for="item in options3"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                        <td>
                            <el-select v-model="value4" placeholder="시설유형">
                                <el-option
                                    v-for="item in options4"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>
                    </div>

<!--                    <tr>-->
<!--                        <td><span class="dropdown-el" @click="">-->
<!--								<input type="radio" name="buildType" value="buildTag" checked="checked" id="buildTag"><label for="buildTag">건설시설</label>-->
<!--								<input type="radio" name="buildType" value="A0" id="A0"><label for="A0">A0</label>-->
<!--								<input type="radio" name="buildType" value="A1" id="A1"><label for="A1">A1</label>-->
<!--								<input type="radio" name="buildType" value="A2" id="A2"><label for="A2">A2</label>-->
<!--								<input type="radio" name="buildType" value="A3" id="A3"><label for="A3">A3</label>-->
<!--								<input type="radio" name="buildType" value="A4" id="A4"><label for="A4">A4</label>-->
<!--							</span></td>-->
<!--                        <td><span class="dropdown-el">-->
<!--								<input type="radio" name="facilityType" value="facilityTag" checked="checked" id="facilityTag"><label for="facilityTag">시설요소</label>-->
<!--								<input type="radio" name="facilityType" value="BB" id="BB"><label for="BB">BB</label>-->
<!--								<input type="radio" name="facilityType" value="CC" id="CC"><label for="CC">CC</label>-->
<!--								<input type="radio" name="facilityType" value="DD" id="DD"><label for="DD">DD</label>-->
<!--								<input type="radio" name="facilityType" value="EE" id="EE"><label for="EE">EE</label>-->
<!--								<input type="radio" name="facilityType" value="FF" id="FF"><label for="FF">FF</label>-->
<!--							</span></td>-->
<!--                    </tr>-->
<!--                    <tr>-->
<!--                        <td><span class="dropdown-el">-->
<!--								<input type="radio" name="unitType" value="unitTag" checked="checked" id="unitTag"><label for="unitTag">단위시설</label>-->
<!--								<input type="radio" name="unitType" value="GH" id="GH"><label for="GH">GH</label>-->
<!--								<input type="radio" name="unitType" value="IJ" id="IJ"><label for="IJ">IJ</label>-->
<!--								<input type="radio" name="unitType" value="KL" id="KL"><label for="KL">KL</label>-->
<!--								<input type="radio" name="unitType" value="MN" id="MN"><label for="MN">MN</label>-->
<!--								<input type="radio" name="unitType" value="OP" id="OP"><label for="OP">OP</label>-->
<!--							</span></td>-->
<!--                        <td><span class="dropdown-el">-->
<!--								<input type="radio" name="typeType" value="typeTag" checked="checked" id="typeTag"><label for="typeTag">시설유형</label>-->
<!--								<input type="radio" name="typeType" value="QR" id="QR"><label for="QR">QR</label>-->
<!--								<input type="radio" name="typeType" value="ST" id="ST"><label for="ST">ST</label>-->
<!--								<input type="radio" name="typeType" value="UV" id="UV"><label for="UV">UV</label>-->
<!--								<input type="radio" name="typeType" value="WX" id="WX"><label for="WX">WX</label>-->
<!--								<input type="radio" name="typeType" value="YZ" id="YZ"><label for="YZ">YZ</label>-->
<!--							</span></td>-->
<!--                    </tr>-->
                    <!-- 객체분류코드 Radio Button 코드 끝 .20210524 -->


                    <div class="solid-navy">라이브러리 유형</div>

                    <!-- 라이브러리 유형 CheckBox 코드 시작 .20210526 (toggle.css)-->
                    <div style="padding: 0 10px 10px 10px;">
                        <tr>
                            <td><input type="checkbox" id="c1" name="bim_lib" /><label for="c1" style="margin-right:10px;"><span></span>Bim Library</label></td>
                            <td><input type="checkbox" id="c2" name="tech_cont"/><label for="c2"><span></span>기술콘텐츠</label></td>
                        </tr>
                    </div>

                    <div class="solid-navy">사용 소프트웨어</div>
                    <div style="padding: 0 10px 10px 10px;">
                        <tr>
                            <td><input type="checkbox" id="c3" name="revit" /><label for="c3" style="margin-right:48px;"><span></span>Revit</label></td>
                            <td><input type="checkbox" id="c4" name="allplan"/><label for="c4"><span></span>AllPlan</label></td>
                        </tr>
                    </div>

                    <!-- 라이브러리 유형 CheckBox 코드 끝 .20210526 -->


                    <div class="solid-navy" style="margin-bottom: 0px;">모델링 수준</div>
                    <div style="padding: 0 10px 10px 10px;">
                        <tr style="">
                            <td><span class="dropdown-el" style="min-width:5em;">
								<input type="radio" name="model_level" value="levelTag" checked="checked" id="levelTag"><label for="levelTag">일반도</label>
								<input type="radio" name="model_level" value="LOD200" id="LOD200"><label for="LOD200">LOD200</label>
								<input type="radio" name="model_level" value="LOD300" id="LOD300"><label for="LOD300">LOD300</label>
							</span></td>
                            <td><input type="checkbox" id="c6" name="rebar"/><label for="c6"><span></span>이상</label></td>
                        </tr>
                        <div style="margin-top: 10px;">
                            <input type="checkbox" id="c5" name="rebar"/><label for="c5"><span></span>철근 포함</label>
                        </div>
                    </div>
                    <!-- 모델링 수준 Radio & CheckBox 코드 시작 .20210526 (combo.css & toggle.css)-->
                    <!-- 모델링 수준 Radio & CheckBox 코드 끝 .20210526 -->
                </div>
            </ul>
        </div>



    </div>
</template>

<script>
    export default {
        data() {
            return {
                options1: [{
                    value: 'A0',
                    label: 'A0'
                }, {
                    value: 'A1',
                    label: 'A1'
                }, {
                    value: 'A2',
                    label: 'A2'
                }, {
                    value: 'A3',
                    label: 'A4'
                }, {
                    value: 'A4',
                    label: 'A4'
                }],
                options2: [{
                    value: 'BB',
                    label: 'BB'
                }, {
                    value: 'CC',
                    label: 'CC'
                }, {
                    value: 'DD',
                    label: 'DD'
                }, {
                    value: 'EE',
                    label: 'EE'
                }, {
                    value: 'FF',
                    label: 'FF'
                }],
                options3: [{
                    value: 'GH',
                    label: 'GH'
                }, {
                    value: 'IJ',
                    label: 'IJ'
                }, {
                    value: 'KL',
                    label: 'KL'
                }, {
                    value: 'MN',
                    label: 'MN'
                }, {
                    value: 'OP',
                    label: 'OP'
                }],
                options4: [{
                    value: 'QR',
                    label: 'QR'
                }, {
                    value: 'ST',
                    label: 'ST'
                }, {
                    value: 'UV',
                    label: 'UV'
                }, {
                    value: 'WX',
                    label: 'WX'
                }, {
                    value: 'YZ',
                    label: 'YZ'
                }],
                value1: '',
                value2: '',
                value3: '',
                value4: ''
            }
        }
    }
</script>

<style scoped>
    .solid-navy{
        margin:  15px 10px 15px 10px
    }
</style>
