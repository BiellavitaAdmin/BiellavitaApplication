"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Select } from "antd";
import Image from "next/image";

// List of countries
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

export default function ProjectsTableSection() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchColumn, setSearchColumn] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data); // Set filtered projects initially
    };
    fetchProjects();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const filteredData = projects.filter((project) => {
      const field = project[searchColumn]
        ? project[searchColumn].toLowerCase()
        : "";
      return field.includes(value);
    });

    setFilteredProjects(filteredData);
  };

  const handleFilterChange = (value) => {
    setSearchColumn(value);
    setSearchText("");
    setFilteredProjects(projects); // Reset filtered data when column changes
  };

  const showModal = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showEditModal = (project) => {
    setSelectedProject(project);
    form.setFieldsValue(project); // Populate form with selected project data
    setIsEditModalVisible(true);
  };

  const handleEditOk = async () => {
    try {
      const values = await form.validateFields();
      await fetch(`/api/projects`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedProject._id, ...values }), // Include the ID
      });
      setIsEditModalVisible(false);
      // Refresh projects
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data); // Refresh filtered projects too
    } catch (error) {
      console.error("Edit failed:", error);
    }
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/projects`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }), // Include the ID
    });
    // Refresh projects
    const response = await fetch("/api/projects");
    const data = await response.json();
    setProjects(data);
    setFilteredProjects(data); // Refresh filtered projects too
  };

  const columns = [
    {
      title: "Project Title",
      dataIndex: "projecttitle",
      key: "projecttitle",
      width: 200,
    },
    {
      title: "Short Description",
      dataIndex: "shortdescription",
      key: "shortdescription",
      width: 700,
    },
    // {
    //   title: "Details",
    //   dataIndex: "details",
    //   key: "details",
    //   width: 250,
    // },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      width: 100,
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      width: 120,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 120,
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
      {/* Search Bar and Filter Dropdown */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 16,
          marginTop: 16,
        }}
      >
        <Select
          defaultValue="Select Column"
          style={{ width: 200 }}
          onChange={handleFilterChange}
        >
          <Select.Option value="projecttitle">Project Name</Select.Option>
          <Select.Option value="shortdescription">
            Short Description
          </Select.Option>
          <Select.Option value="details">Details</Select.Option>
          <Select.Option value="city">City</Select.Option>
          <Select.Option value="country">Country</Select.Option>
          <Select.Option value="category">Category</Select.Option>
        </Select>
        <Input
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
          style={{ width: 200 }}
        />
      </div>

      {filteredProjects.length === 0 ? (
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
          dataSource={filteredProjects}
          columns={columns}
          rowKey="_id"
          pagination={{ pageSize: 8 }} // Limit to 8 rows per page
        />
      )}

      <Modal
        title="Project Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="80%"
      >
        {selectedProject && (
          <div>
            {Object.entries(selectedProject)
              .filter(([key]) => key !== "_id" && !key.includes("imagelink")) // Exclude ID and image links
              .map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}
          </div>
        )}
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Project"
        visible={isEditModalVisible}
        onOk={handleEditOk} // Call the handleEditOk function directly
        onCancel={handleEditCancel} // You can use your existing handleCancel logic
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="projecttitle"
            label="Project Title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="imagelink"
            label="Image Link"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="detailsimageone"
            label="Details Image One"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="detailsimagetwo"
            label="Details Image Two"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="shortdescription"
            label="Short Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true, message: "Please select a country!" }]}
          >
            <Select
              showSearch
              placeholder="Select a country"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option?.children.toLowerCase().includes(input.toLowerCase())
              }
              style={{ width: "100%" }}
            >
              {countries.map((country) => (
                <Select.Option key={country} value={country}>
                  {country}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select a category" style={{ width: "100%" }}>
              <Select.Option value="art">Art</Select.Option>
              <Select.Option value="charity">Charity</Select.Option>
              <Select.Option value="fashion">Fashion</Select.Option>
              <Select.Option value="sports">Sports</Select.Option>
              <Select.Option value="culinary">Culinary</Select.Option>
              <Select.Option value="culture">Culture</Select.Option>
              <Select.Option value="health">Health</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

{
  /* <Form.Item name="imagelink" label="Image Link">
<Input />
</Form.Item>
<Form.Item name="detailsimageone" label="Details Image One">
<Input />
</Form.Item>
<Form.Item name="detailsimagetwo" label="Details Image Two">
<Input />
</Form.Item> */
}
