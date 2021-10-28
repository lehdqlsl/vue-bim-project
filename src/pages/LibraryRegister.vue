<template>
    <div class="container2" style="min-height: 672px;">
        <img src="../assets/img/harbour_bim.png"
             style="width:400px; display:block; margin:0px auto; margin-top:50px; margin-bottom:50px;">
        <div class="inner">
            <div class="contents">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
                    <el-form-item label="라이브러리 이름" prop="library">
                        <el-input v-model="ruleForm.library"></el-input>
                    </el-form-item>
                    <el-form-item label="라이브러리 유형" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="BIM Library" name="type">BIM Library</el-checkbox>
                            <el-checkbox label="기술콘텐츠" name="type">기술콘텐츠</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="제작업체" prop="maker">
                        <el-input v-model="ruleForm.maker" placeholder="상호 입력(개인일 경우 개인 입력)"></el-input>
                    </el-form-item>
                    <el-form-item label="제작자">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="해시태그">
                        <div style="display: inline">
                            <el-tag type="success" style="margin-right: 0.5rem" v-for="hashtag in hashtags">{{ hashtag
                                }}
                            </el-tag>
                        </div>
                        <el-tooltip class="item" effect="dark" content="쉼표 혹은 엔터를 입력하여 태그를 등록 할 수 있습니다."
                                    placement="bottom-start">
                            <el-input style="width: 8rem" v-model="ruleForm.hashtag"
                                      @keyup.native.enter="addHashTagEnter" @keyup.native.188="addHashTagComma"
                                      placeholder="#태그명"></el-input>
                        </el-tooltip>
                    </el-form-item>
                    <el-form-item label="모델링 수준" prop="modeling_level">
                        <el-select v-model="ruleForm.modeling_level" placeholder="선택">
                            <el-option label="LOD100" value="LOD100"></el-option>
                            <el-option label="LOD200" value="LOD200"></el-option>
                            <el-option label="LOD300" value="LOD300"></el-option>
                            <el-option label="LOD350" value="LOD350"></el-option>
                            <el-option label="LOD400" value="LOD400"></el-option>
                            <el-option label="LOD500" value="LOD500"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="철근 포함" prop="isRebar">
                        <el-checkbox-group v-model="ruleForm.isRebar">
                            <el-checkbox name="rebar"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>

                    <el-form-item label="객체분류코드" required>
                        <el-select v-model="ruleForm.first_level" placeholder="건설시설"
                                   style="width: 160px;margin-right: 15px;">
                            <el-option label="A0" value="A0"></el-option>
                            <el-option label="A1" value="A1"></el-option>
                            <el-option label="A2" value="A2"></el-option>
                            <el-option label="A3" value="A3"></el-option>
                            <el-option label="A4" value="A4"></el-option>
                        </el-select>
                        <el-select v-model="ruleForm.second_level" placeholder="시설요소"
                                   style="width: 160px;margin-right: 15px;">
                            <el-option label="BB" value="BB"></el-option>
                            <el-option label="CC" value="CC"></el-option>
                            <el-option label="DD" value="DD"></el-option>
                            <el-option label="EE" value="EE"></el-option>
                            <el-option label="FF" value="FF"></el-option>
                        </el-select>
                        <el-select v-model="ruleForm.third_level" placeholder="단위시설"
                                   style="width: 160px;margin-right: 15px;">
                            <el-option label="GH" value="GH"></el-option>
                            <el-option label="IJ" value="IJ"></el-option>
                            <el-option label="KL" value="KL"></el-option>
                            <el-option label="MN" value="MN"></el-option>
                            <el-option label="OP" value="OP"></el-option>
                        </el-select>
                        <el-select v-model="ruleForm.fourth_level" placeholder="시설유형"
                                   style="width: 160px;margin-right: 15px;">
                            <el-option label="QR" value="QR"></el-option>
                            <el-option label="ST" value="ST"></el-option>
                            <el-option label="UV" value="UV"></el-option>
                            <el-option label="WX" value="WX"></el-option>
                            <el-option label="YZ" value="YZ"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="소프트웨어 종류" prop="software_type">
                        <el-checkbox-group v-model="ruleForm.software_type">
                            <el-checkbox label="Revit" name="type"></el-checkbox>
                            <el-checkbox label="Allplan" name="type"></el-checkbox>
                            <el-checkbox label="AutoCAD" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>

                    <el-form-item label="파일 업로드" prop="file_upload">
                        <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :limit="1"
                            :before-upload="beforeUpload"
                            :file-list="fileList"
                            :auto-upload="true">
                            <el-button slot="trigger" type="primary">.zip 확장자 업로드</el-button>
                            <a :href="'/files/항만%20BIM%20라이브러리%20명세서%20양식(안).xlsx'" download>
                                <el-button style="margin-left: 10px;" type="success">양식 다운로드</el-button>
                            </a>
                        </el-upload>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')"
                                   style="background-color: #122253;border-color: #122253">등록요청
                        </el-button>
                        <el-button @click="resetForm('ruleForm')"
                                   style="background-color: #444444;border-color: #444444; color: white">취소
                        </el-button>
                    </el-form-item>
                </el-form>

            </div>

        </div>
    </div>
</template>

<script>
    import JsZip from 'jszip'


    // 동빈,
    // 추후 파일첨부에 커스텀 룰 적용필요

    export default {
        name: "libraryList",
        data() {
            return {
                fileList: [],
                hashtags: [],
                ruleForm: {
                    library: '',
                    isRebar: '',
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    first_level: '',
                    second_level: '',
                    third_level: '',
                    fourth_level: '',
                    software_type: [],
                    maker: '',
                    hashtag: ''
                },
                formInline: {
                    user: '',
                    region: ''
                },
                rules: {
                    isRebar: [],
                    maker: [
                        {
                            required: true, message: '제작업체를 입력해주세요.', trigger: 'blur'
                        }
                    ],
                    library: [
                        {required: true, message: '라이브러리 이름을 입력해주세요.', trigger: 'blur'},
                    ],
                    modeling_level: [
                        {required: true, message: '설계 모델링 수준 선택을 선택해주세요.', trigger: 'change'}
                    ],
                    software_type: [
                        {
                            type: 'array',
                            required: true,
                            message: '소프트웨어 종류를 선택해주세요.',
                            trigger: 'change'
                        }
                    ],
                    region: [
                        {required: true, message: 'Please select Activity zone', trigger: 'change'}
                    ],
                    date1: [
                        {type: 'date', required: true, message: 'Please pick a date', trigger: 'change'}
                    ],
                    date2: [
                        {type: 'date', required: true, message: 'Please pick a time', trigger: 'change'}
                    ],
                    type: [
                        {
                            type: 'array',
                            required: true,
                            message: '라이브러리 유형을 선택해주세요.',
                            trigger: 'change'
                        }
                    ],
                    resource: [
                        {required: true, message: 'Please select activity resource', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: 'Please input activity form', trigger: 'blur'}
                    ],
                    file_upload: [
                        {required: true, message: 'zip 파일을 첨부해주세요.', trigger: 'blur'}
                    ]
                }
            };
        },
        mounted() {

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                console.log(this.fileList)
                this.$refs[formName].resetFields();
            },
            addHashTagEnter() {
                this.addHashTag(this.ruleForm.hashtag)
            },
            addHashTagComma() {
                this.addHashTag(this.ruleForm.hashtag.replace(",", ""))
            },
            addHashTag(hashtag) {
                if (hashtag.charAt(0) != '#') {
                    alert('해시태그는 #으로 시작해야합니다.')
                } else if (hashtag === '' || hashtag === '#') {
                    alert('해시태그를 입력해주세요.')
                } else {
                    this.hashtags.push(hashtag)
                }
                this.ruleForm.hashtag = ''
            },
            beforeUpload(files) {
                let isBIM = false;
                let isContents = false;

                if (this.ruleForm.type.length == 0) {
                    alert('라이브러리 유형을 선택해주세요.')
                    return false
                } else {
                    if (this.ruleForm.type.length == 2) {
                        isBIM = true;
                        isContents = true;
                    } else {
                        if (this.ruleForm.type[0] == 'BIM Library') {
                            isBIM = true;
                        }
                        if (this.ruleForm.type[0] == '기술콘텐츠') {
                            isContents = true;
                        }
                    }
                }

                if (this.parseExt(files.name) != 'zip') {
                    alert('zip 형식의 압축파일만 업로드할 수 있습니다.')
                    return false
                }

                let new_zip = new JsZip();

                // .xlsx 필수
                let xlsxFlag = false

                // .rfa .smt(중 하나 필수)
                let bimFlag = false

                // .rfa .dyn 필수
                let contentFlag1 = false
                let contentFlag2 = false

                new_zip.loadAsync(files).then(function (zip) {
                    zip.forEach((relativePath, file) => {
                        let fileExt = file.name.split('.')[1]
                        if (isBIM) {
                            if (fileExt === 'xlsx') {
                                xlsxFlag = true
                            }
                            if (fileExt == 'rfa' || fileExt == 'smt') {
                                bimFlag = true
                            }
                        }

                        if (isContents) {
                            if (fileExt === 'xlsx') {
                                xlsxFlag = true
                            }
                            if (fileExt == 'dyn') {
                                contentFlag1 = true
                            }
                            if (fileExt == 'rfa') {
                                contentFlag2 = true
                            }
                        }
                    })
                    if (!xlsxFlag) {
                        alert("엑셀 파일은 필수로 포함되어야 합니다.")
                        return false
                    }

                    if (isBIM && !bimFlag) {
                        alert(".rfa 또는 .smt 파일은 필수입니다.")
                        return false
                    }

                    if (isContents(!contentFlag1 || !contentFlag2)) {
                        alert(".dyn과 .rfa 파일은 필수입니다.")
                        return false
                    }
                })
            },
            parseExt(fileName) {
                return fileName.split('.')[1];
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

    .demo-ruleForm {
        width: 500px;
    }

    .contents {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
