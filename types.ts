
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  service: string;
  message: string;
}
