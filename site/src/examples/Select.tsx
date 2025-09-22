import React, { useState } from "react";
import { Select } from "@quen-ui/components";

export const BaseSelect = ({ multi }: { multi?: boolean }) => {
  const countries = [
    { label: "France", value: "fr" },
    { label: "Germany", value: "de" }
  ];

  return (
    <Select
      multi={multi}
      label="Country"
      items={countries}
      onChange={(selected) => console.log(selected)}
      placeholder="Choose country"
    />
  );
};

export const CustomDataStructure = () => {
  const users = [
    { id: 1, name: "Alex", department: "Engineering" },
    { id: 2, name: "Taylor", department: "Design" }
  ];

  return (
    <Select
      items={users}
      getItemValue={(item) => item?.id}
      getItemLabel={(item) => item?.name}
      getItemDisabled={(item) => item.department === "Design"}
      onChangeReturnValue="item"
      notFoundContent={<div>No users</div>}
    />
  );
};

export const AsyncLoading = () => {
  const [options] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOptions = () => {
    setLoading(false);
  }


  return (
    <Select
      items={options}
      loading={loading}
      messageNoData="Loading options..."
      onFocus={fetchOptions}
    />
  );
};
