import React from "react";

// Handles all personal information at checkout name, address, email, etc

const BillingPersonalInfo = () => {
  return (
    <BillingPersonalInfo>
      <BillingTitle>Billing Address</BillingTitle>
      <NameContainer>
        <span>First Name</span>
        <span>Last Name</span>
        <FirstNameInput>
          <input type="text" />
        </FirstNameInput>
        <LastNameInput>
          <input type="text" />
        </LastNameInput>
      </NameContainer>

      <EmailTelephone>
        <span>Email</span>
        <span>Telephone</span>
        <EmailInput>
          <input type="text" />
        </EmailInput>
        <TelephoneInput>
          <input type="text" />
        </TelephoneInput>
      </EmailTelephone>

      <Origin>
        <span>Address</span>
        <span>Country</span>
        <AddressInput>
          <input type="text" />
        </AddressInput>
        <CountryInput>
          <input type="text" />
        </CountryInput>
      </Origin>
    </BillingPersonalInfo>
  );
};

const BillingPersonalInfo = styled.div``;

const BillingTitle = styled.div``;

const NameContainer = styled.div``;

const FirstNameInput = styled.div``;

const LastNameInput = styled.div``;

const EmailTelephone = styled.div``;

const EmailInput = styled.div``;

const TelephoneInput = styled.div``;

const Origin = styled.div``;

const AddressInput = styled.div``;

const CountryInput = styled.div``;

export default BillingPersonalInfo;
