export function downloadResume() {
  // Assumes 'resume.pdf' is placed in the public folder of your Next.js app
  const pdfUrl = '/Vishal_resume.pdf';
  const a = document.createElement('a');
  a.href = pdfUrl;
  a.download = 'VishalSingh_resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function openGmail() {
  // This function should only be called from client-side event handlers (e.g., onClick in a Client Component)
  if (typeof window === 'undefined') {
    // Optionally, warn if called on the server
    console.warn('openGmail() called on the server. This should only run on the client.');
    return;
  }
  const recipient = process.env.NEXT_PUBLIC_CONTACT_GMAIL || ''; // email from .env, fallback to empty string
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(window.navigator.userAgent);
  if (isMobile) {
    // Open default mail app
    window.location.href = `mailto:${recipient}`;
  } else {
    // Open Gmail web compose
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`, '_blank');
  }
}

export function mobileNo() {
  // This function should only be called from client-side event handlers (e.g., onClick in a Client Component)
  if (typeof window === 'undefined') {
    // Optionally, warn if called on the server
    console.warn('mobileNo() called on the server. This should only run on the client.');
    return;
  }
  const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_PHONE || '';
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(window.navigator.userAgent);
  if (isMobile) {
    // Open dialer app with number
    window.location.href = `tel:${phoneNumber}`;
  } else {
    // Show phone number in alert box
    alert(`Call me at: ${phoneNumber}`);
  }
}
