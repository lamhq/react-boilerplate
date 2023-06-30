// fake a cache so we don't slow down stuff we've already seen
let fakeCache: Record<string, boolean> = {};

export interface Contact {
  id?: string;
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: boolean;
  createdAt?: number;
}

const contacts: Contact[] = [
  {
    id: '123',
    first: 'Abe',
    last: 'Fort',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
  },
];

async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
  } else {
    if (fakeCache[key]) {
      return;
    }
    fakeCache[key] = true;
  }

  const p = new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 2000);
  });
  await p;
}

export async function getContacts(): Promise<Contact[]> {
  await fakeNetwork(`getContacts`);
  return contacts;
}

export async function createContact() {
  await fakeNetwork();
  const id = Math.random().toString(36).substring(2, 9);
  const contact: Contact = { id, createdAt: Date.now() };
  contacts.unshift(contact);
  return contact;
}

export async function getContact(id: string) {
  await fakeNetwork(`contact:${id}`);
  const contact = contacts.find((cnt) => cnt.id === id);
  return contact ?? null;
}

export async function updateContact(id: string, updates: Contact) {
  await fakeNetwork();
  const contact = contacts.find((cnt) => cnt.id === id);
  if (!contact) throw new Error(`No contact found for ${id}`);
  Object.assign(contact, updates);
  return contact;
}

export async function deleteContact(id: string) {
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    return true;
  }
  return false;
}
