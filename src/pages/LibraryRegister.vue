<template>
    <div class="container2" style="min-height: 672px;">
        <img src="../assets/img/harbour_bim.png"
             style="max-width:30%; display:block; margin:0px auto; margin-top:50px; margin-bottom:50px;">
        <div class="inner">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="라이브러리 이름" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="라이브러리 유형" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="BIM Library" name="type"></el-checkbox>
                        <el-checkbox label="기술콘텐츠" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="제작업체" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="제작자" prop="">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="해시태그" prop="">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Activity zone" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="Activity zone">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Activity time" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1"
                                            style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="Pick a time" v-model="ruleForm.date2"
                                            style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="Instant delivery" prop="delivery">
                    <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>

                <el-form-item label="Resources" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="Sponsorship"></el-radio>
                        <el-radio label="Venue"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="Activity form" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
                    <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
            </el-form>

            <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width: auto;">
                <el-form-item label="Approved by">
                    <el-input v-model="formInline.user" placeholder="Approved by"></el-input>
                </el-form-item>
                <el-form-item label="Activity zone">
                    <el-select v-model="formInline.region" placeholder="Activity zone">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Query</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "libraryList",
        data() {
            return {
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formInline: {
                    user: '',
                    region: ''
                },
                rules: {
                    name: [
                        {required: true, message: '라이브러리 이름을 입력해주세요.', trigger: 'blur'},
                        {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'}
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
                            message: 'Please select at least one activity type',
                            trigger: 'change'
                        }
                    ],
                    resource: [
                        {required: true, message: 'Please select activity resource', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: 'Please input activity form', trigger: 'blur'}
                    ]
                }
            };
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
                this.$refs[formName].resetFields();
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
</style>
