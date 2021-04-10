function contactUs() {
  const contactdiv = document.createElement('div');
  contactdiv.setAttribute('class', 'flex-display');

  contactdiv.innerHTML = `<span>To discuss your recent order:</span>
<span class="pb-10">deliveryenquiries@paul-uk.com</span>
<span>For general enquiries:</span>
<span class="pb-10">customerservices@paul-uk.com</span>`;

  return contactdiv;
}

export default contactUs;