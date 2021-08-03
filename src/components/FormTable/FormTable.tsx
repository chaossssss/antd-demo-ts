import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Pagination} from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

export default class FormTable extends Component {
  constructor(props: any){
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(pageNumber: Number){
    console.log(pageNumber)
  }
  render() {
    return (
      <React.Fragment>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={ onFinish }
          onFinishFailed={ onFinishFailed }
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{
              required: true,
              message: 'Please input your username!'
            }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{
              required: true,
              message: 'Please input your password!'
            }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Pagination defaultCurrent={1} total={50} onChange={this.onChange}></Pagination>
      </React.Fragment>
    )
  }
}