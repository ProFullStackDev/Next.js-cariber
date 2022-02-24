export interface AccountContent {
  id: number;
  email: string;
  bio: string;
  contact: Contact;
  createDate: string;
  updateDate: string;
  deletedAt: string;
}

export interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  current_position: string;
}