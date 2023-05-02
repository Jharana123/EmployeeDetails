import { useState,useEffect } from "react";
import DrawerForm from "../components/Drawer";
import { Table ,Button,Popover,Row,Col, Form,Popconfirm} from "antd";
import { PlusOutlined, EllipsisOutlined } from "@ant-design/icons";
const EmployeeDetails=()=>{
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [index, setIndex] = useState(null);
    const [form] = Form.useForm();
  const getemployees = () => {
    let EmployeeDetails = localStorage.getItem("employees");
    if (EmployeeDetails) {
      return JSON.parse(EmployeeDetails);
    } else {
      return [];
    }
  };
  const [employees, setEmployees] = useState(getemployees());
  const[selectedData,setSelectedData]=useState("");
//  const [showModal, setShowModal] = useState(false);
 
  const showModal = () => {
    setIsModalVisible(true);
    
  };
   useEffect(() => {
     
     let studentDetails = localStorage.getItem("studentData");
     const employees = studentDetails?.length ? JSON.parse(studentDetails) : [];
     setEmployees([...employees]);
   }, []);

   useEffect(() => {
     console.log("studentData", employees);
     employees &&
       localStorage.setItem("studentData", JSON.stringify(employees));
   }, [employees]);
  

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const FormHandler = (e) => {
    const updateData = [...employees];
    if (selectedData !== null && Object.keys(selectedData).length) {
      //update on dataset
      //  console.log("index is",index);
      updateData[index] = { ...selectedData, ...e };
      console.log("updateData", updateData, { ...selectedData, ...e });
      setEmployees(updateData);
      setSelectedData(null);
      
    } else {
      //Here is adding
      console.log("In Adding new data", e, index);
      e.id = Date.now();
      updateData.push(e);
      setEmployees(updateData);
    }
  };
  const handleDelete = (id) => {
    const newData = employees.filter((item) => item.id !== id);
    setEmployees(newData);
  };

  const handleEdit = (record) => {
    console.log("onUpdate", record);
    form.setFieldsValue(record);
    let data = [...employees];
    setSelectedData((prev) => (prev = record));
    let objIndex = data.findIndex((obj) => obj.id === record.id);
    data[objIndex] = { ...record };
    setIndex(objIndex);
    console.log(objIndex);
    setEmployees(data);
    showModal(true);
    console.log("gtyuj", employees);
  };
  const columns = [
    {
      key: "id",
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "PhoneNumber",
      dataIndex: "phoneNo",
      key: "phone",
    },
    {
      title: "Action",
      width: "15%",
      render: (record) => (
        <Popover
          placement="left"
          content={
            <>
              <Button type="link">
                <div
                  onClick={() => {
                    // showDrawer(true);
                    handleEdit(record);
                  }}
                >
                  Edit
                </div>
              </Button>
              <Button type="link">
                <Popconfirm
                  title="Sure to delete?"
                  onConfirm={() => handleDelete(record.id)}
                >
                  <div>
                    <a>Delete</a>
                  </div>
                </Popconfirm>
              </Button>
            </>
          }
          trigger="hover"
        >
          <EllipsisOutlined rotate={90} />
        </Popover>
      ),
      fixed: "right",
    },
  ];
  return (
    <div>
      <Row justify="space-between">
        <Col span={18}></Col>
        <Col>
          <Button
            shape="round"
            type="primary"
            icon={<PlusOutlined />}
            // onClick={onAddButtonClick}
            onClick={showModal}
          >
            Add
          </Button>
        </Col>
      </Row>
      <Table dataSource={employees} columns={columns} />;
      <DrawerForm
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        visible={isModalVisible}
        FormHandler={FormHandler}
        
      />
    </div>
  );
}
export default EmployeeDetails;