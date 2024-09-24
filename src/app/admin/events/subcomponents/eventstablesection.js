"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import Image from "next/image";

export default function EventsableSection() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
      setFilteredEvents(data); // Set filtered members initially
    };
    fetchEvents();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filteredData = events.filter((event) =>
      event.eventtitle.toLowerCase().includes(value)
    );
    setFilteredEvents(filteredData);
  };

  const showModal = (event) => {
    setSelectedEvent(event);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showEditModal = (event) => {
    setSelectedEvent(event);
    form.setFieldsValue(event); // Populate form with selected member data
    setIsEditModalVisible(true);
  };

  const handleEditOk = async () => {
    try {
      const values = await form.validateFields();
      await fetch(`/api/events`, {
        // Updated endpoint
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedProject._id, ...values }), // Include the ID
      });
      setIsEditModalVisible(false);
      // Refresh members
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
      setFilteredEvents(data); // Refresh filtered members too
    } catch (error) {
      console.error("Edit failed:", error);
    }
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/events`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }), // Include the ID
    });
    // Refresh members
    const response = await fetch("/api/events");
    const data = await response.json();
    setEvents(data);
    setFilteredEvents(data); // Refresh filtered members too
  };

  const columns = [
    {
      title: "EventTitle",
      dataIndex: "eventtitle",
      key: "eventtitle",
      width: 350,
    },
    {
      title: "ShortDescription",
      dataIndex: "shortdescription",
      key: "shortdescription",
      width: 650,
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
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 16,
          marginTop: 16,
        }}
      >
        <Input
          placeholder="Search by Event Title"
          value={searchText}
          onChange={handleSearch}
          style={{ width: 200 }}
        />
      </div>

      {filteredEvents.length === 0 ? (
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
          dataSource={filteredEvents}
          columns={columns}
          rowKey="_id"
          pagination={{ pageSize: 8 }} // Limit to 8 rows per page
        />
      )}

      <Modal
        title="Projects Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedEvent && (
          <div>
            {Object.entries(selectedEvent).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        )}
      </Modal>

      <Modal
        title="Edit Project"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <Form form={form} layout="vertical">
          {/* Project Title */}
          <Form.Item
            name="eventtitle"
            label="Event Title"
            rules={[
              {
                required: true,
                message: "Please input the event title",
              },
              {
                validator: (_, value) => {
                  const wordCount = value ? value.split(/\s+/).length : 0;
                  if (wordCount > 15) {
                    return Promise.reject("Title must not exceed 15 words");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="imagelink"
            label="Image Link"
            rules={[
              {
                required: true,
                message: "Please add image link",
              },
              {
                validator: (_, value) => {
                  const wordCount = value ? value.split(/\s+/).length : 0;
                  if (wordCount > 15) {
                    return Promise.reject("Add Link");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Short Description */}
          <Form.Item
            name="shortdescription"
            label="Short Description"
            rules={[
              {
                required: true,
                message: "Please input the short description",
              },
              {
                validator: (_, value) => {
                  const wordCount = value ? value.split(/\s+/).length : 0;
                  if (wordCount > 100) {
                    return Promise.reject(
                      "Short description must not exceed 100 words"
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>

          {/* Details */}
          <Form.Item
            name="details"
            label="Details"
            rules={[
              {
                required: true,
                message: "Please input the project details",
              },
              {
                validator: (_, value) => {
                  const wordCount = value ? value.split(/\s+/).length : 0;
                  if (wordCount > 200) {
                    return Promise.reject("Details must not exceed 200 words");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.TextArea rows={12} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
