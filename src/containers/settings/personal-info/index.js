import React, { Component } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker,
    Radio,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class PersonalInfo extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        // const formItemLayout = {
        //     labelCol: { span: 6 },
        //     wrapperCol: { span: 14 },
        // };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        // const tailFormItemLayout = {
        //     wrapperCol: {
        //         xs: {
        //             span: 24,
        //             offset: 0,
        //         },
        //         sm: {
        //             span: 16,
        //             offset: 8,
        //         },
        //     },
        // };
        return (
            <PerfectScrollbar className="content-body">
                <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                    <div class="personalinfo-header">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item"><a href="#">Settings</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Personal Info</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Personal Info</h4>
                    </div>


                    <Form onSubmit={this.handleSubmit}>
                        <div className="form-personalinfo round-border">
                            <div class="mg-b-20">
                                <h4 class="mg-b-10 tx-spacing--1">Profile</h4>
                                <p class="mg-b-10 tx-spacing--1" >Here You can View and Edit Yout Personal Information</p>
                            </div>

                            <Row className="ant-form-item">
                                <Col span={4}>

                                    <label for="username" title="User Name : ">User Name </label>
                                </Col>
                                <Col span={20}>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="User Name"
                                    />
                                </Col>
                            </Row>

                            <Row className="ant-form-item">
                                <Col span={4}>
                                    <label for="firstname" title="First Name : ">First Name </label>
                                </Col>
                                <Col span={20}>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="First Name"
                                    />
                                </Col>
                            </Row>

                            <Row className="ant-form-item">
                                <Col span={4}>
                                    <label for="lastname" title="Last Name : ">Last Name </label>
                                </Col>
                                <Col span={20}>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Last Name"
                                    />
                                </Col>
                            </Row>

                            <Row className="ant-form-item">
                                <Col span={4}>
                                    <label for="birthday" title="Birthday : ">Birthday </label>
                                </Col>
                                <Col span={20}>
                                    <DatePicker />
                                </Col>
                            </Row>

                            <Row className="ant-form-item">
                                <Col span={4}>
                                    <label for="gender" title="Gender : ">Gender </label>
                                </Col>
                                <Col span={20}>
                                    <Radio.Group>
                                        <Radio value="male">Male</Radio>
                                        <Radio value="female">Female</Radio>
                                        <Radio value="gay">Rather Not say</Radio>
                                    </Radio.Group>
                                </Col>
                            </Row>

                            <Row className="ant-form-item">
                                <Col span={4}>
                                    <label for="password" title="Password : ">Password </label>
                                </Col>
                                <Col span={20}>
                                    <Input.Password
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Password"
                                    />
                                </Col>
                            </Row>

                            <div className="ant-form-item buttons">
                                <Button type="primary" >
                                    Save
                                </Button>
                            </div >
                        </div>

                        <div className="form-contact round-border">
                            <div class="mg-b-20">
                                <h4 class="mg-b-10 tx-spacing--1">Contact Info</h4>
                                <p class="mg-b-10 tx-spacing--1" >Here You can View and Edit Yout Contact Information</p>
                            </div>
                            <Row className="ant-form-item">
                                <Col span={4}>
                                    <label for="email" title="Email : ">Email </label>
                                </Col>
                                <Col span={20}>
                                    <Input
                                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Email"
                                    />
                                </Col>
                            </Row>

                            <Row className="ant-form-item">
                                <Col span={4}>
                                    <label for="phone" title="Phone : ">Phone </label>
                                </Col>
                                <Col span={20}>
                                    <Input
                                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Phone Number"
                                    />
                                </Col>
                            </Row>
                            <div className="ant-form-item buttons">
                                <Button type="primary" >
                                    Save
                                </Button>
                            </div >
                        </div>
                    </Form>
                </div>
            </PerfectScrollbar >
        )
    }
}

export default Form.create()(PersonalInfo)