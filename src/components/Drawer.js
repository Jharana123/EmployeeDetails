import { Button, Modal,Row,Col,Form,Input,Space } from "antd";
import { useState } from "react";
import { PlusOutlined, EllipsisOutlined } from "@ant-design/icons";
const DrawerForm = ({ showModal,FormHandler, visible, handleOk, handleCancel }) => {
  return (
    <>
     

      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        
      >
        <Form
          onFinish={FormHandler}
        // form={form}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
            ]}
          >
            <Input placeholder="Student Name" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: "Please enter your Address",
              },
            ]}
          >
            <Input placeholder="Student Address" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email ID"
            rules={[
              {
                required: true,
                message: "Please enter your email Id",
              },
            ]}
          >
            <Input type="email" placeholder="Student Email ID" />
          </Form.Item>
          <Form.Item
            name="phoneNo"
            label="Phone No"
            rules={[
              {
                required: true,
                message: "Please enter your phone number",
              },
            ]}
          >
            <Input type="number" placeholder="Student Phone Number" />
          </Form.Item>
          {/* <Form.Item name="gender" label="Gender">
            <Checkbox onChange={onChange}>Male</Checkbox>
            <Checkbox onChange={onChange}>FeMale</Checkbox>
            <Checkbox onChange={onChange}>Others</Checkbox>
          </Form.Item> */}
          <Form.Item>
            <Space>
              {/* <Button onClick={onClose} shape="round">
                Cancel
              </Button> */}
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
               
              >
                Submit
              </Button>
              
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default DrawerForm;
