import { FormEvent } from 'react';

import { useForm, FieldError } from 'react-hook-form';
import { ValidationError } from './ValidationError';

export function ContactPage() {
  const fieldStyle = 'flex flex-col mb-2';

  type Contact = {
    name: string;
    email: string;
    reason: string;
    notes: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({ mode: 'onBlur', reValidateMode: 'onBlur' });

  function callback1(contact: Contact) {
    /*  e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const contact = {
      name: formdata.get('name'),
      email: formdata.get('email'),
      reason: formdata.get('reason'),
      notes: formdata.get('notes'),
    }; */

    console.log('submitted details ', contact);
  }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>
      <form noValidate onSubmit={handleSubmit(callback1)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'you must enter a name' })}
          />
          <ValidationError fieldError={errors.name} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'you must enter an email' })}
          />
          <ValidationError fieldError={errors.email} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select id="reason" {...register('reason', { required: 'you must enter a reason' })}>
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <ValidationError fieldError={errors.reason} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" {...register('notes')} />
          <ValidationError fieldError={errors.notes} />
        </div>
        <div>
          <button type="submit" className="mt-2 h-10 px-6 font-semibold bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
