import React from "react";
import { Label, Input, SectionTitle } from "./FormStyledComponents";

// Handles all personal inhtmlFormation at checkout name, address, email, etc
const BillingPersonalInfo = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  zipCode,
  setZipCode,
  country,
  setCountry,
}) => {
  return (
    <div>
      <SectionTitle>Billing Address</SectionTitle>

      <Label htmlFor="first-name">First Name</Label>
      <Input
        id="first-name"
        name="first-name"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <Label htmlFor="last-name">Last Name</Label>
      <Input
        id="last-name"
        type="text"
        name="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Label htmlFor="phone">Telephone number</Label>
      <Input
        id="phone"
        name="phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Label htmlFor="address">Address</Label>
      <Input
        id="address"
        name="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <Label htmlFor="zip-code">Zip code</Label>
      <Input
        id="zip-code"
        name="zip-code"
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        required
      />
      <Label htmlFor="country-code">Country</Label>
      <Input
        id="country-code"
        name="country-code"
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      />
    </div>
  );
};



export default BillingPersonalInfo;
