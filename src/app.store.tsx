import React, { createContext, useCallback, useMemo, useState } from "react";
import data from "db/data";

import { noop } from "common/utils";

import type { OrganizationType } from "./common/models";

interface AppStoreStateType {
  organizationNo: number;
  setOrganizationNo:
    | React.Dispatch<React.SetStateAction<number>>
    | (() => void);
  organizations: OrganizationType[];
  setOrganizations:
    | React.Dispatch<React.SetStateAction<OrganizationType[]>>
    | (() => void);
  setSearchText: React.Dispatch<React.SetStateAction<string>> | (() => void);
  handleAddOrganization: () => void;
  searchText: string;
}

export const defaultOrganization: OrganizationType = {
  title: "Organization Name",
  protection: {
    assigned: 0,
    used: 0,
  },
  tracking: {
    assigned: 0,
    used: 0,
  },
  logoSrc: "",
  id: "",
};

export const initialState: AppStoreStateType = {
  organizationNo: 0,
  setOrganizationNo: noop,
  organizations: [],
  setOrganizations: noop,
  handleAddOrganization: noop,
  setSearchText: noop,
  searchText: "",
};

const AppStore = createContext<AppStoreStateType>({ ...initialState });

export interface AppStoreProviderType {
  children: JSX.Element;
}

export const AppStoreProvider = ({ children }: AppStoreProviderType) => {
  const [organizationNo, setOrganizationNo] = useState<number>(0);
  const [organizations, setOrganizations] = useState<OrganizationType[]>([
    ...data,
  ]);
  const [searchText, setSearchText] = useState<string>("");
  const handleAddOrganization = useCallback(() => {
    setOrganizations((localOrganizations) => [
      ...localOrganizations,
      {
        ...defaultOrganization,
        title: `Organization name ${localOrganizations.length + 1}`,
        id: `${localOrganizations.length + 1}`,
      },
    ]);
  }, []);

  const searchedOrganization = useMemo(() => {
    if (!searchText) {
      return organizations;
    }

    const formattedSearchText = searchText.toLowerCase().trim();
    return organizations.filter((organization) => {
      const title = organization.title.toLowerCase().trim();
      return title.indexOf(formattedSearchText) !== -1;
    });
  }, [searchText, organizations]);

  const providerValue = useMemo(
    () => ({
      organizationNo,
      setOrganizationNo,
      organizations: searchedOrganization,
      setOrganizations,
      handleAddOrganization,
      setSearchText,
      searchText,
    }),
    [
      organizationNo,
      setOrganizationNo,
      searchedOrganization,
      setOrganizations,
      handleAddOrganization,
      setSearchText,
      searchText,
    ]
  );

  return (
    <AppStore.Provider value={providerValue}>{children}</AppStore.Provider>
  );
};

export default AppStore;
