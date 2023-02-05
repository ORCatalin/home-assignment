export interface OrganizationType {
  id: string;
  title: string;
  logoSrc: string;
  tracking: {
    used: number;
    assigned: number;
  };
  protection: {
    used: number;
    assigned: number;
  };
}
