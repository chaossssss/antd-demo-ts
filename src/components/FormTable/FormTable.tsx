import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Pagination, Collapse, DatePicker, Space } from 'antd';
const { Panel } = Collapse
const { RangePicker } = DatePicker

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

function DateTimePickeMethod(dates: any, dateString: Array<string>){
  console.log(dates,dateString)
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

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
        <Space direction="vertical" size={12}>
          <RangePicker showTime onChange={DateTimePickeMethod} />
        </Space>
        <Collapse accordion>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
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