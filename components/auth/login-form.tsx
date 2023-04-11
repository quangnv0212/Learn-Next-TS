import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { LoginPayload } from "@/models";
interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void;
}
export default function LoginForm({ onSubmit }: LoginFormProps) {
  const onFinish = (values: LoginPayload) => {
    onSubmit?.(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        // initialValues={}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Identifier"
          name="identifier"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="default" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
