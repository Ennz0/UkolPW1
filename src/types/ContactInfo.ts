export interface ContactInfo {
  address: {
    street: string;
    city: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  businessHours: {
    days: string;
    time: string;
  }[];
  mapEmbedUrl: string;
}