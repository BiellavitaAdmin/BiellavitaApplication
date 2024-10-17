"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, DatePicker, Select } from "antd";
import Image from "next/image";
import dayjs from "dayjs";

export default function EventsTableSection() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [form] = Form.useForm();
  const [members, setMembers] = useState([]);

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  // Fetch events and members
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
      setFilteredEvents(data);
    };

    const fetchMembers = async () => {
      const response = await fetch("/api/members");
      const data = await response.json();
      setMembers(
        data.map((member) => ({
          value: member.lastname,
          label: member.lastname,
        }))
      );
    };

    fetchEvents();
    fetchMembers();
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

  // Edit modal functionality
  const showEditModal = (event) => {
    setSelectedEvent(event);
    form.setFieldsValue({
      ...event,
      date: event.eventdate ? dayjs(event.eventdate, "DD-MM-YYYY") : null,
      attendees: event.attendees || [], // Pre-fill attendees in the tags field
      country: event.country || "", // Pre-fill country
      city: event.city || "", // Pre-fill city
    });
    setIsEditModalVisible(true);
  };

  const handleEditOk = async () => {
    try {
      const values = await form.validateFields();

      // Check if date is valid before formatting
      const formattedDate = values.date
        ? dayjs(values.date).isValid()
          ? dayjs(values.date).format("DD-MM-YYYY")
          : null
        : null;

      await fetch(`/api/events`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: selectedEvent._id,
          ...values,
          eventdate: formattedDate,
        }),
      });

      setIsEditModalVisible(false);

      // Refresh events data
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
      setFilteredEvents(data);
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
      body: JSON.stringify({ id }),
    });
    // Refresh events
    const response = await fetch("/api/events");
    const data = await response.json();
    setEvents(data);
    setFilteredEvents(data);
  };

  const columns = [
    {
      title: "Event Title",
      dataIndex: "eventtitle",
      key: "eventtitle",
      width: 350,
    },
    {
      title: "Short Description",
      dataIndex: "shortdescription",
      key: "shortdescription",
      width: 650,
    },
    {
      title: "Event Date",
      dataIndex: "eventdate",
      key: "eventdate",
      width: 250,
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
          pagination={{ pageSize: 8 }}
        />
      )}

      {/* View Modal */}
      <Modal
        title="Event Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="60%"
      >
        {selectedEvent && (
          <div>
            <p>
              <strong>Event Title:</strong> {selectedEvent.eventtitle}
            </p>
            <p>
              <strong>Short Description:</strong>{" "}
              {selectedEvent.shortdescription}
            </p>
            <p>
              <strong>Event Date:</strong> {selectedEvent.eventdate}
            </p>
            <p>
              <strong>Country:</strong> {selectedEvent.country}
            </p>
            <p>
              <strong>City:</strong> {selectedEvent.city}
            </p>
            <p>
              <strong>Details:</strong> {selectedEvent.details}
            </p>
            <p>
              <strong>Attendees:</strong>{" "}
              {selectedEvent.attendees
                ? selectedEvent.attendees.join(", ")
                : "None"}
            </p>
          </div>
        )}
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Event"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        width="60%"
      >
        <Form form={form} layout="vertical">
          {/* Event Title */}
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

          {/* Image Link */}
          <Form.Item
            name="imagelink"
            label="Image Link"
            rules={[
              {
                required: true,
                message: "Please add image link",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Date Picker (Save in day/month/year format) */}
          <Form.Item
            name="date"
            label="Event Date"
            rules={[
              {
                required: true,
                message: "Please select the event date",
              },
            ]}
          >
            <DatePicker
              format="DD/MM/YYYY" // Specify the date format
              style={{ width: "100%" }}
            />
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

          {/* Country */}
          <Form.Item name="country" label="Country">
            <Select
              showSearch
              placeholder="Select a country"
              options={countries.map((country) => ({
                value: country,
                label: country,
              }))}
              defaultValue={selectedEvent?.country || ""}
            />
          </Form.Item>

          {/* City */}
          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                required: true,
                message: "Please input the city",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Attendees */}
          <Form.Item name="attendees" label="Attendees">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Select or add attendees"
              defaultValue={selectedEvent?.attendees || []} // Show existing attendees
              options={members} // Members fetched from /api/members
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
