export interface ContactItem {
  id: number;
  type: "whatsapp" | "instagram" | "email";
  label: string;
  href: string;
}

export interface Footer {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  contactTitle: string;
  contactDescription: string;
  contacts: ContactItem[];
}