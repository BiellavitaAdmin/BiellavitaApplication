"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Select, Row, Col } from "antd";
import Image from "next/image";

export default function PartnersTableSection() {
  const [partners, setPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchField, setSearchField] = useState("firstname");
  const [filterOptions, setFilterOptions] = useState({
    country: "",
    industry: "",
  });
  const [cityOptions, setCityOptions] = useState([]); // State for city options
  const [companyNameOptions, setCompanyNameOptions] = useState([]); // State for company name options
  const [form] = Form.useForm();

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

  const industries = [
    "Agriculture",
    "Automotive",
    "Banking",
    "Construction",
    "Education",
    "Energy",
    "Entertainment",
    "Healthcare",
    "Hospitality",
    "Information Technology",
    "Manufacturing",
    "Real Estate",
    "Retail",
    "Telecommunications",
    "Transportation",
    // Add more industries as needed
  ];

  useEffect(() => {
    const fetchPartners = async () => {
      const response = await fetch("/api/partners");
      const data = await response.json();
      setPartners(data);
      setFilteredPartners(data);

      // Set city and company name options after fetching partners
      setCityOptions([...new Set(data.map((partner) => partner.city))]);
      setCompanyNameOptions([
        ...new Set(data.map((partner) => partner.companyName)),
      ]);
    };
    fetchPartners();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filteredData = partners.filter((partner) =>
      partner[searchField].toLowerCase().includes(value)
    );
    setFilteredPartners(filteredData);
  };

  const handleFilterChange = (value, type) => {
    setFilterOptions((prev) => ({ ...prev, [type]: value }));
    filterPartners(searchText, { ...filterOptions, [type]: value });
  };

  const filterPartners = (searchText, filters) => {
    const filteredData = partners.filter((partner) => {
      const matchesSearchField =
        !searchText ||
        partner[searchField]?.toLowerCase().includes(searchText.toLowerCase());

      const matchesCountry =
        !filters.country || partner.country === filters.country;

      const matchesIndustry =
        !filters.industry || partner.industry === filters.industry;

      const matchesCity =
        !filters.city ||
        partner.city?.toLowerCase() === filters.city.toLowerCase();

      const matchesCompanyName =
        !filters.companyName ||
        partner.companyName?.toLowerCase() ===
          filters.companyName.toLowerCase();

      return (
        matchesSearchField &&
        matchesCountry &&
        matchesIndustry &&
        matchesCity &&
        matchesCompanyName
      );
    });

    setFilteredPartners(filteredData);
  };

  const showModal = (partner) => {
    setSelectedPartner(partner);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showEditModal = (partner) => {
    setSelectedPartner(partner);
    form.setFieldsValue(partner);
    setIsEditModalVisible(true);
  };

  const handleEditOk = async () => {
    try {
      const values = await form.validateFields();
      await fetch(`/api/partners`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedPartner._id, ...values }),
      });
      setIsEditModalVisible(false);
      const response = await fetch("/api/partners");
      const data = await response.json();
      setPartners(data);
      setFilteredPartners(data);
    } catch (error) {
      console.error("Edit failed:", error);
    }
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/partners`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const response = await fetch("/api/partners");
    const data = await response.json();
    setPartners(data);
    setFilteredPartners(data);
  };

  const columns = [
    // {
    //   title: "Firstname",
    //   dataIndex: "firstname",
    //   key: "firstname",
    // },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
      width: 150,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
    },
    {
      title: "Partnership Scope",
      dataIndex: "partnershipScope",
      key: "partnershipScope",
    },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    //   key: "address",
    // },
    // {
    //   title: "Cell Phone",
    //   dataIndex: "cellPhone",
    //   key: "cellPhone",
    // },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      width: 250,
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

  const countryOptions = [
    ...new Set(partners.map((partner) => partner.country)),
  ];
  const industryOptions = [
    ...new Set(partners.map((partner) => partner.industry)),
  ];

  const searchFieldsOptions = [
    { label: "Firstname", value: "firstname" },
    { label: "Lastname", value: "lastname" },
    // { label: "Company Name", value: "companyName" },
    // { label: "City", value: "city" },
    { label: "Email", value: "email" },
  ];

  return (
    <>
      {/* Search and Filter Section */}
      <Row
        gutter={16}
        justify="end"
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        <Col>
          <Select
            placeholder="Select field"
            style={{ width: 200 }}
            value={searchField}
            onChange={(value) => setSearchField(value)}
          >
            {searchFieldsOptions.map((field) => (
              <Select.Option key={field.value} value={field.value}>
                {field.label}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Input
            placeholder={`Search by ${searchField}`}
            value={searchText}
            onChange={handleSearch}
            style={{ width: 200 }}
          />
        </Col>
        <Col>
          <Select
            placeholder="Filter by Country"
            style={{ width: 200 }}
            onChange={(value) => handleFilterChange(value, "country")}
            allowClear
          >
            {countryOptions.map((country) => (
              <Select.Option key={country} value={country}>
                {country}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Select
            placeholder="Filter by Industry"
            style={{ width: 200 }}
            onChange={(value) => handleFilterChange(value, "industry")}
            allowClear
          >
            {industryOptions.map((industry) => (
              <Select.Option key={industry} value={industry}>
                {industry}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Select
            placeholder="Filter by City"
            style={{ width: 200 }}
            onChange={(value) => handleFilterChange(value, "city")}
            allowClear
          >
            {cityOptions.map((city) => (
              <Select.Option key={city} value={city}>
                {city}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Select
            placeholder="Filter by Company Name"
            style={{ width: 200 }}
            onChange={(value) => handleFilterChange(value, "companyName")}
            allowClear
          >
            {companyNameOptions.map((company) => (
              <Select.Option key={company} value={company}>
                {company}
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>

      {/* Table Section */}
      <Table
        dataSource={filteredPartners}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
      />

      {/* View Modal */}
      <Modal
        title="Partner Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="80%"
      >
        {selectedPartner && (
          <div>
            <p>Firstname: {selectedPartner.firstname}</p>
            <p>Lastname: {selectedPartner.lastname}</p>
            <p>Company Name: {selectedPartner.companyName}</p>
            <p>City: {selectedPartner.city}</p>
            <p>Country: {selectedPartner.country}</p>
            <p>Industry: {selectedPartner.industry}</p>
            <p>Partnership Scope: {selectedPartner.partnershipScope}</p>
            <p>Address: {selectedPartner.address}</p>
            <p>Cell Phone: {selectedPartner.cellPhone}</p>
            <p>Email: {selectedPartner.email}</p>
          </div>
        )}
      </Modal>

      {/* Edit Partner Modal */}
      <Modal
        title="Edit Partner"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="firstname"
            label="Firstname"
            rules={[
              { required: true, message: "Please enter the first name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="Lastname"
            rules={[{ required: true, message: "Please enter the last name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="companyName"
            label="Company Name"
            rules={[
              { required: true, message: "Please enter the company name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: "Please enter the city!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true, message: "Please select a country!" }]}
          >
            <Select placeholder="Select a country">
              {countries.map((country) => (
                <Select.Option key={country} value={country}>
                  {country}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="industry"
            label="Industry"
            rules={[{ required: true, message: "Please select an industry!" }]}
          >
            <Select placeholder="Select an industry">
              {industries.map((industry) => (
                <Select.Option key={industry} value={industry}>
                  {industry}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="partnershipScope" label="Partnership Scope">
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter the email!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
