const MOBILE_UA = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i

function isMobile() {
  return MOBILE_UA.test(navigator.userAgent)
}

export function downloadResume() {
  const a = document.createElement('a')
  a.href = '/Vishal_resume.pdf'
  a.download = 'VishalSingh_resume.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export function openGmail() {
  const recipient = process.env.NEXT_PUBLIC_CONTACT_GMAIL || ''
  if (isMobile()) {
    window.location.href = `mailto:${recipient}`
  } else {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`, '_blank')
  }
}

export function mobileNo() {
  const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_PHONE || ''
  if (isMobile()) {
    window.location.href = `tel:${phoneNumber}`
  } else {
    alert(`Call me at: ${phoneNumber}`)
  }
}
