"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Select } from "antd";
import Image from "next/image";

const { Option } = Select;

export default function MembersTableSection() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchColumn, setSearchColumn] = useState("lastname"); // Default search column
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch("/api/members");
      const data = await response.json();
      setMembers(data);
      setFilteredMembers(data); // Set filtered members initially
    };
    fetchMembers();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filteredData = members.filter(
      (member) => member[searchColumn]?.toLowerCase().includes(value) // Search based on the selected column
    );
    setFilteredMembers(filteredData);
  };

  const handleColumnChange = (value) => {
    setSearchColumn(value); // Update the column to search by
  };

  const showModal = (member) => {
    setSelectedMember(member);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showEditModal = (member) => {
    setSelectedMember(member);
    form.setFieldsValue(member); // Populate form with selected member data
    setIsEditModalVisible(true);
  };

  const handleEditOk = async () => {
    try {
      const values = await form.validateFields();
      await fetch(`/api/members`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedMember._id, ...values }), // Include the ID
      });
      setIsEditModalVisible(false);
      // Refresh members
      const response = await fetch("/api/members");
      const data = await response.json();
      setMembers(data);
      setFilteredMembers(data); // Refresh filtered members too
    } catch (error) {
      console.error("Edit failed:", error);
    }
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/members`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }), // Include the ID
    });
    // Refresh members
    const response = await fetch("/api/members");
    const data = await response.json();
    setMembers(data);
    setFilteredMembers(data); // Refresh filtered members too
  };

  // const columns = [
  //   {
  //     title: "Firstname",
  //     dataIndex: "firstname",
  //     key: "firstname",
  //   },
  //   {
  //     title: "Lastname",
  //     dataIndex: "lastname",
  //     key: "lastname",
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //     key: "email",
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "address",
  //   },
  //   {
  //     title: "City",
  //     dataIndex: "city",
  //     key: "city",
  //   },
  //   {
  //     title: "Country",
  //     dataIndex: "country",
  //     key: "country",
  //   },
  //   {
  //     title: "CellPhone",
  //     dataIndex: "cellPhone",
  //     key: "cellPhone",
  //   },
  //   {
  //     title: "Actions",
  //     key: "actions",
  //     render: (text, record) => (
  //       <span>
  //         <Button
  //           style={{
  //             backgroundColor: "#F3EEED",
  //             color: "black",
  //             marginLeft: 8,
  //           }}
  //           onClick={() => showModal(record)}
  //         >
  //           View
  //         </Button>
  //         <Button
  //           onClick={() => showEditModal(record)}
  //           style={{
  //             backgroundColor: "#F3EEED",
  //             color: "black",
  //             marginLeft: 8,
  //           }}
  //         >
  //           Edit
  //         </Button>
  //         <Button
  //           onClick={() => handleDelete(record._id)}
  //           type="danger"
  //           style={{
  //             backgroundColor: "#FF2400",
  //             color: "white",
  //             marginLeft: 8,
  //           }}
  //         >
  //           Delete
  //         </Button>
  //       </span>
  //     ),
  //   },
  // ];
  const columns = [
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    //   key: "address",
    // },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    // {
    //   title: "Country",
    //   dataIndex: "country",
    //   key: "country",
    // },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "Profession",
      dataIndex: "profession",
      key: "profession",
    },
    // {
    //   title: "Date of Birth",
    //   dataIndex: "dateofbirth",
    //   key: "dateofbirth",
    //   render: (text) => new Date(text).toLocaleDateString(), // Format date
    // },
    {
      title: "Hobbies",
      dataIndex: "hobbies",
      key: "hobbies",
    },
    {
      title: "Cell Phone",
      dataIndex: "cellPhone",
      key: "cellPhone",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <span>
          <Button
            style={{
              backgroundColor: "#F3EEED",
              color: "black",
              marginLeft: 8,
            }}
            onClick={() => showModal(record)}
          >
            View
          </Button>
          <Button
            onClick={() => showEditModal(record)}
            style={{
              backgroundColor: "#F3EEED",
              color: "black",
              marginLeft: 8,
            }}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(record._id)}
            type="danger"
            style={{
              backgroundColor: "#FF2400",
              color: "white",
              marginLeft: 8,
            }}
          >
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <>
      {/* Search Bar and Column Selector */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 16,
          marginTop: 16,
        }}
      >
        <Select
          defaultValue={searchColumn}
          onChange={handleColumnChange}
          style={{ marginRight: 10 }}
        >
          {/* <Option value="firstname">Firstname</Option> */}
          <Option value="lastname">Lastname</Option>
          <Option value="city">City</Option>
          <Option value="nationality">Nationality</Option>
          <Option value="profession">Profession</Option>
          {/* <Option value="email">Email</Option> */}
          <Option value="cellPhone">Cell Phone</Option>
          <Option value="hobbies">Hobbies</Option>

          {/* <Option value="country">Country</Option> */}
        </Select>
        <Input
          placeholder={`Search by ${searchColumn}`}
          value={searchText}
          onChange={handleSearch}
          style={{ width: 200 }}
        />
      </div>

      {filteredMembers.length === 0 ? (
        <div className="section-not-found">
          <Image
            src="/nodataicon.png"
            alt="No Data Found"
            width={110}
            height={80}
            className="dash-icons"
          />
        </div>
      ) : (
        <Table
          dataSource={filteredMembers}
          columns={columns}
          rowKey="_id"
          pagination={{ pageSize: 8 }} // Limit to 8 rows per page
        />
      )}

      <Modal
        title="Member Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedMember && (
          <div>
            <p>
              <strong>Firstname:</strong> {selectedMember.firstname}
            </p>
            <p>
              <strong>Lastname:</strong> {selectedMember.lastname}
            </p>
            <p>
              <strong>Email:</strong> {selectedMember.email}
            </p>
            <p>
              <strong>Address:</strong> {selectedMember.address}
            </p>
            <p>
              <strong>City:</strong> {selectedMember.city}
            </p>
            <p>
              <strong>Country:</strong> {selectedMember.country}
            </p>
            <p>
              <strong>Nationality:</strong> {selectedMember.nationality}
            </p>
            <p>
              <strong>Profession:</strong> {selectedMember.profession}
            </p>
            <p>
              <strong>Date of Birth:</strong>{" "}
              {new Date(selectedMember.dateofbirth).toLocaleDateString()}
            </p>
            <p>
              <strong>Hobbies:</strong> {selectedMember.hobbies}
            </p>
            <p>
              <strong>Cell Phone:</strong> {selectedMember.cellPhone}
            </p>
          </div>
        )}
      </Modal>

      <Modal
        title="Edit Member"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="firstname"
            label="Firstname"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="Lastname"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="profession"
            label="Profession"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dateofbirth"
            label="Date of Birth"
            rules={[{ required: true }]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item
            name="hobbies"
            label="Hobbies"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="cellPhone"
            label="Cell Phone"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
