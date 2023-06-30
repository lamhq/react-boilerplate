/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { Form, useLoaderData } from 'react-router-dom';
import { getContact, Contact } from 'src/contacts';

function Favorite({ contact }: { contact: Contact }) {
  // yes, this is a `let` for later
  const { favorite } = contact;
  return (
    <Form method="post">
      <button
        type="button"
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}

// { params }: { params: { contactId: string } }
export async function loader({ params }: { params: { contactId?: string } }) {
  if (!params.contactId) {
    throw new Error('Missing contact id in url');
  }
  const contact = await getContact(params.contactId);
  return { contact };
}

export function ContactPage() {
  const contact = useLoaderData() as Contact;
  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || undefined} alt="" />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`} rel="noreferrer">
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
